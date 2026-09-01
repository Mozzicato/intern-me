import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const queriesPath = resolve(root, 'queries.json');
const outputDir = resolve(root, 'output');
const maxResults = Math.min(Math.max(Number(process.env.MAX_RESULTS || 150), 1), 500);

const configuredQueries = JSON.parse(await readFile(queriesPath, 'utf8'));
const requestedStates = (process.env.SCRAPE_STATES || '').split(',').map(state => state.trim()).filter(Boolean);
const queries = requestedStates.length ? configuredQueries.filter(query => requestedStates.includes(query.state)) : configuredQueries;
const browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, locale: 'en-NG' });
const results = [];

try {
  await mkdir(outputDir, { recursive: true });
  for (const query of queries) {
    console.log(`Searching: ${query.query} / ${query.region}`);
    const places = await searchPlaces(page, query);
    results.push(...places);
    await writeOutputs(results);
    console.log(`  Found ${places.length} visible result(s)`);
  }
  const unique = await writeOutputs(results);
  console.log(`Saved ${unique.length} unique lead(s) to scraper/output/`);
} finally {
  await browser.close();
}

async function writeOutputs(items) {
  const unique = deduplicate(items).slice(0, maxResults);
  await writeFile(resolve(outputDir, 'leads.json'), JSON.stringify(unique, null, 2));
  await writeFile(resolve(outputDir, 'leads.csv'), toCsv(unique));
  return unique;
}

async function searchPlaces(page, query) {
  const url = `https://www.google.com/maps/search/${encodeURIComponent(`${query.query}, ${query.region}`)}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  if (page.url().startsWith('https://consent.google.com/')) {
    const consentButton = page.getByRole('button', { name: /I agree|Accept all/i }).first();
    if (await consentButton.count()) {
      await consentButton.click();
      await page.waitForLoadState('domcontentloaded');
    }
  }
  await page.waitForTimeout(3000);
  const feed = page.locator('div[role="feed"]');
  if (await feed.count()) {
    await feed.evaluate(element => element.scrollTo(0, element.scrollHeight));
    await page.waitForTimeout(1500);
  }
  return page.locator('a[href*="/maps/place/"]').evaluateAll((links, metadata) => {
    const seen = new Set();
    return links.map(link => {
      const card = link.closest('[role="article"]') || link.parentElement?.parentElement;
      const name = link.getAttribute('aria-label') || card?.querySelector('[class*="fontHeadlineSmall"]')?.textContent?.trim() || '';
      const mapsUrl = link.href;
      const key = `${name}|${mapsUrl}`;
      if (!name || seen.has(key)) return null;
      seen.add(key);
      return { name, mapsUrl, cardText: card?.innerText?.slice(0, 1000) || '', ...metadata };
    }).filter(Boolean);
  }, { industry: query.industry, state: query.state, city: query.region.split(',')[0].trim() }).then(items => items.map(normalize));
}

function normalize(place) {
  return {
    externalId: place.mapsUrl,
    name: place.name,
    industry: place.industry,
    state: place.state,
    city: place.city,
    address: place.cardText,
    phone: '',
    website: '',
    mapsUrl: place.mapsUrl,
    businessStatus: 'NEEDS_RESEARCH',
    source: 'Google Maps public search',
    status: 'raw',
    priority: 'Medium',
    collectedAt: new Date().toISOString(),
    notes: 'Raw discovery lead. Open the Maps link and research the official website, relevance, and SIWES route before publishing.'
  };
}

function deduplicate(items) {
  const seen = new Map();
  for (const item of items) {
    const key = item.externalId || `${item.name.toLowerCase()}|${item.address.toLowerCase()}`;
    if (!seen.has(key)) seen.set(key, item);
  }
  return [...seen.values()];
}

function toCsv(items) {
  const fields = ['externalId', 'name', 'industry', 'state', 'city', 'address', 'phone', 'website', 'mapsUrl', 'businessStatus', 'source', 'status', 'priority', 'collectedAt', 'notes'];
  return [fields.join(','), ...items.map(item => fields.map(field => csvValue(item[field])).join(','))].join('\n');
}

function csvValue(value = '') {
  return `"${String(value).replaceAll('"', '""')}"`;
}
