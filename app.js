const STORAGE_KEY = 'intern-me-company-leads';

const namedLagosCompanies = [
  ['Africa Finance Corporation', 'Infrastructure & Development'], ['Nomba (Kudi)', 'Fintech & Banking'], ['MAX', 'Mobility Technology'], ['Metro Africa Xpress', 'Logistics & Transport'],
  ['Dangote Petroleum Refinery & Petrochemicals', 'Energy & Power'], ['Helium Health', 'Health Technology'], ['Wema Bank Plc - ALAT.NG', 'Fintech & Banking'], ['Bank Of Industry, Nigeria', 'Government & Development Finance'],
  ['BFREE', 'Fintech & Banking'], ['Moove', 'Mobility Technology'], ['Swoop', 'Software & Product'], ['Heirs Energies', 'Energy & Power'], ['Unilever Nigeria', 'Manufacturing'],
  ['Reliance HMO', 'Health Technology'], ['Kuda', 'Fintech & Banking'], ['Daya', 'Fintech & Banking'], ['Nigerian Exchange Group', 'Financial Infrastructure'], ['Chowdeck', 'Logistics & Transport'],
  ['Autochek Africa', 'Automotive Technology'], ['Releaf Africa', 'AgriTech & Hardware'], ['CredPal', 'Fintech & Banking'], ['Tuteria', 'Education Technology'], ['Fidelity Bank Plc', 'Fintech & Banking'],
  ['Decentralised Energy', 'Energy & Power'], ['CarrotCredit', 'Fintech & Banking'], ['OmniRetail', 'Retail Technology'], ['BetaLife Health Service', 'Health Technology'], ['Creditchek', 'Fintech & Banking'],
  ['Duplo', 'Fintech & Banking'], ['PalmPay', 'Fintech & Banking'], ['Vesicash', 'Fintech & Banking'], ['Stears Business', 'Data & AI'], ['Zenith Bank', 'Fintech & Banking'],
  ['Shekel Mobility', 'Mobility Technology'], ['Winich Farms', 'AgriTech & Hardware'], ['Shuttlers', 'Mobility Technology'], ['Guaranty Trust Bank', 'Fintech & Banking'], ['Anchor', 'Fintech & Banking'],
  ['Regxta', 'Fintech & Banking'], ['Sendbox', 'Logistics & Transport'], ['Maplerad', 'Fintech & Banking'], ['Nestcoin', 'Fintech & Blockchain'], ['Paga', 'Fintech & Banking'],
  ['Curacel', 'InsurTech & AI'], ['Indigenius AI', 'Data & AI'], ['AfyA Care', 'Health Technology'], ['Bujeti', 'Fintech & Banking'], ['Moni Africa', 'Fintech & Banking'],
  ['ivorypay', 'Fintech & Blockchain'], ['TradeDepot', 'Retail Technology'], ['Green Africa', 'Mobility Technology'], ['Fixr Technologies', 'Engineering Technology'], ['Intron Innovation', 'Data & AI'],
  ['Bridgecard', 'Fintech & Banking'], ['Healthtracka', 'Health Technology'], ['Scrapays', 'Clean Technology'], ['Omnibiz', 'Retail Technology'], ['Topship', 'Logistics & Transport'],
  ['Haul247', 'Logistics & Transport'], ['uLesson', 'Education Technology'], ['Prospa', 'Fintech & Banking'], ['Lendsqr', 'Fintech & Banking'], ['Gokada', 'Mobility Technology'],
  ['DrugStoc', 'Health Technology'], ['Wallet.ng', 'Fintech & Banking'], ['Sabi', 'Retail Technology'], ['BioVana Research', 'Health Technology'], ['ProDevs', 'Software & Product'],
  ['Lenco', 'Fintech & Banking'], ['Thepeer', 'Fintech & Banking'], ['Earthbond', 'Clean Technology'], ['GetEquity', 'Fintech & Banking'], ['Estate Intel', 'Data & AI'],
  ['Foodcourt', 'Food Technology'], ['Interactif AI', 'Data & AI'], ['Suplias', 'Retail Technology'], ['Matta Trade', 'Fintech & Banking'], ['Klump', 'Fintech & Banking'],
  ['Flex Finance', 'Fintech & Banking'], ['Decagon', 'Software & Product'], ['OnePipe', 'Fintech & Banking'], ['Indicina', 'Data & AI'], ['Spleet', 'Property Technology'],
  ['Epic Payment Technologies', 'Fintech & Banking'], ['Pastel', 'Fintech & Banking'], ['African Export-Import Bank', 'Government & Development Finance'], ['Nigerian Ports Authority', 'Government Corporation'],
  ['Nigerian Communications Commission', 'Government Corporation'], ['Nigerian National Petroleum Company Limited', 'Government Corporation'], ['Lagos State Government', 'Government Corporation'], ['Lagos State Science Research and Innovation Council', 'Government Corporation'],
  ['Lagos State Employment Trust Fund', 'Government & Development Finance'], ['Nigerian Railway Corporation', 'Government Corporation'], ['Nigerian Airspace Management Agency', 'Government Corporation'], ['NITDA', 'Government Corporation'],
  ['Industrial Training Fund', 'Government Corporation'], ['Nigerian Electricity Regulatory Commission', 'Government Corporation'], ['Eko Electricity Distribution Company', 'Energy & Power'], ['Lagos Water Corporation', 'Government Corporation']
];

const namedNationalCompanies = [
  ['Paystack', 'Fintech & Banking'], ['Cavista', 'Software & Product'], ['Flutterwave', 'Fintech & Banking'], ['Interswitch', 'Fintech & Banking'], ['SystemSpecs', 'Software & Product'],
  ['Andela', 'Software & Product'], ['MainOne', 'Telecommunications'], ['Rack Centre', 'IT & Cloud'], ['Microsoft Nigeria', 'Software & Product'], ['IBM Nigeria', 'Software & Product'],
  ['Oracle Nigeria', 'Software & Product'], ['MTN Nigeria', 'Telecommunications'], ['Airtel Nigeria', 'Telecommunications'], ['Globacom', 'Telecommunications'], ['9mobile', 'Telecommunications'],
  ['Dangote Industries', 'Manufacturing'], ['Dangote Cement', 'Manufacturing'], ['BUA Group', 'Manufacturing'], ['BUA Cement', 'Manufacturing'], ['Lafarge Africa', 'Manufacturing'],
  ['Flour Mills of Nigeria', 'Manufacturing'], ['Nigerian Breweries', 'Manufacturing'], ['Nestle Nigeria', 'FMCG & Consumer Goods'], ['Procter & Gamble Nigeria', 'FMCG & Consumer Goods'],
  ['Cadbury Nigeria', 'FMCG & Consumer Goods'], ['Guinness Nigeria', 'FMCG & Consumer Goods'], ['Honeywell Flour Mills', 'Manufacturing'], ['FrieslandCampina WAMCO Nigeria', 'FMCG & Consumer Goods'],
  ['Indorama Eleme Petrochemicals', 'Manufacturing'], ['Seven-Up Bottling Company', 'FMCG & Consumer Goods'], ['PZ Cussons Nigeria', 'FMCG & Consumer Goods'], ['PZ Cussons Nigeria', 'FMCG & Consumer Goods'],
  ['Nigerian Liquefied Natural Gas', 'Energy & Power'], ['Shell Nigeria', 'Energy & Power'], ['Chevron Nigeria', 'Energy & Power'], ['TotalEnergies Nigeria', 'Energy & Power'],
  ['ExxonMobil Nigeria', 'Energy & Power'], ['Schlumberger Nigeria', 'Energy & Power'], ['Halliburton Nigeria', 'Energy & Power'], ['Siemens Nigeria', 'Engineering & Technology'],
  ['Julius Berger Nigeria', 'Engineering & Construction'], ['PwC Nigeria', 'Corporate & Professional Services'], ['Deloitte Nigeria', 'Corporate & Professional Services'], ['KPMG Nigeria', 'Corporate & Professional Services']
];

const namedAbujaCompanies = [
  ['Development Bank of Nigeria', 'Government & Development Finance'], ['Levene Energy', 'Energy & Power'], ['Terra Industries', 'Engineering & Infrastructure'], ['Agriarche', 'AgriTech'], ['Reliance Health', 'Health Technology'],
  ['Myka Insurance', 'InsurTech'], ['MARMAR Health', 'Health Technology'], ['Nearpays Technologies', 'Fintech & Banking'], ['KeyCall Automations Enterprise', 'Data & AI'], ['Zella Host', 'IT & Cloud'],
  ['SentryAfrica', 'Cybersecurity'], ['Mobile Forms', 'Data & AI'], ['TOG Africa', 'Software & Product'], ['Connectly', 'Software & Product'], ['Rural Farmers Hub', 'AgriTech'],
  ['Mapph', 'Logistics & Transport'], ['Profitaa', 'Software & Product'], ['Propzora', 'Property Technology'], ['Nairaxi', 'Mobility Technology'], ['Carryday Technologies', 'Logistics & Transport'],
  ['Doctorchek', 'Health Technology'], ['Sentry Silicon', 'Data & AI'], ['Boldswitch', 'Fintech & Banking'], ['Data Planet', 'Data & AI'], ['Tensflare', 'Cybersecurity'],
  ['Inveo Labs', 'Software & Product'], ['Millihub', 'Software & Product'], ['Digital Management Nest', 'Software & Product'], ['Green-WATT Technologies', 'Energy & Power'], ['Runteller', 'Fintech & Banking'],
  ['Zedbinary', 'Fintech & Banking'], ['MataConnect', 'Software & Product'], ['Propabridge', 'Property Technology'], ['Surjen', 'Health Technology'], ['Xcrowpay', 'Fintech & Banking'],
  ['Treinig', 'Data & AI'], ['Mavitech Solutions', 'Software & Product'], ['Antimatter Technologies', 'Data & AI'], ['Vision Ultra Tech', 'Fintech & Banking'], ['Indices Technology', 'Software & Product'],
  ['Interface Africa', 'Clean Technology'], ['KudiTrack AI', 'Fintech & Banking'], ['BioNeuraX', 'Health Technology'], ['KONECT INNOVATIONS', 'Software & Product'], ['Worldest Intellisoft', 'Software & Product'],
  ['Nextwear Technologies', 'Electronics & Hardware']
];

const sampleLeads = [
  {
    id: crypto.randomUUID(), name: 'Sample Automation Company', state: 'Lagos', city: 'Ikeja', industry: 'Automation & Control',
    relevance: 'Industrial automation, control panels, instrumentation, and field engineering.', sourceUrl: '', phone: '', email: '', priority: 'High', status: 'researching', notes: 'Check whether they accept SIWES students for 2027.', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(), name: 'Sample Embedded Systems Lab', state: 'Ogun', city: 'Abeokuta', industry: 'Embedded & IoT',
    relevance: 'Embedded development, sensors, microcontrollers, and IoT prototypes.', sourceUrl: '', phone: '', email: '', priority: 'Medium', status: 'raw', notes: '', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(), name: 'Sample Software Studio', state: 'Osun', city: 'Ile-Ife', industry: 'Software & Product',
    relevance: 'Software products, APIs, data workflows, and technical project delivery.', sourceUrl: '', phone: '', email: '', priority: 'High', status: 'contacted', notes: 'Ask for the correct HR or technical contact.', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  }
];

let records = loadRecords();
const form = document.querySelector('#companyForm');
const recordList = document.querySelector('#recordList');
const toast = document.querySelector('#toast');

function loadRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function addNamedCompanies(companies, state, city, sourceUrl = '') {
  const existingKeys = new Set(records.map(record => record.name.toLowerCase()));
  const imported = companies.filter(([name]) => !existingKeys.has(name.toLowerCase())).map(([name, industry]) => {
    const now = new Date().toISOString();
    return {
      id: `directory-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      name,
      state,
      city,
      industry,
      relevance: `Named ${city} organization from the company directory. Research technical teams, internship contacts, and SIWES eligibility.`,
      sourceUrl,
      phone: '',
      email: '',
      priority: 'High',
      status: 'raw',
      notes: 'Directory discovery lead. Confirm the official website and SIWES or internship route before publishing.',
      createdAt: now,
      updatedAt: now
    };
  });
  if (imported.length) {
    records = [...imported, ...records];
    saveRecords();
  }
}

function loadNamedCompanies() {
  addNamedCompanies(namedLagosCompanies, 'Lagos', 'Lagos');
  addNamedCompanies(namedNationalCompanies, 'Nigeria', 'Multiple locations');
  addNamedCompanies(namedAbujaCompanies, 'FCT Abuja', 'Abuja', 'https://www.f6s.com/companies/nigeria/abuja');
}

function isClearlyLowValueLead(record) {
  const text = `${record.name} ${record.industry} ${record.address || ''}`.toLowerCase();
  return /academy|training school|church|mosque|restaurant|hotel|salon|fashion|tailor|foundation|local government|government house|secretariat|shopping complex|generator engineer|aluminium|plumbing|welding|barbing|catering/.test(text);
}

function removeClearlyLowValueScrapedLeads() {
  const filtered = records.filter(record => !record.externalId || !isClearlyLowValueLead(record));
  if (filtered.length !== records.length) {
    records = filtered;
    saveRecords();
  }
}

async function loadScrapedLeads() {
  try {
    const response = await fetch('scraper/output/leads.json', { cache: 'no-store' });
    if (!response.ok) return;
    const scrapedLeads = await response.json();
    if (!Array.isArray(scrapedLeads)) return;

    const existingKeys = new Set(records.map(record => record.externalId || record.name.toLowerCase()));
    const importedLeads = scrapedLeads.filter(lead => {
      const key = lead.externalId || lead.name?.toLowerCase();
      return lead.name && !existingKeys.has(key) && !isClearlyLowValueLead(lead);
    }).map(lead => ({
      id: lead.externalId || crypto.randomUUID(),
      externalId: lead.externalId || '',
      name: lead.name,
      state: lead.state || 'Other',
      city: lead.city || '',
      industry: lead.industry || 'Other',
      relevance: lead.address || 'Relevance still needs to be researched.',
      sourceUrl: lead.mapsUrl || '',
      phone: lead.phone || '',
      email: '',
      priority: lead.priority || 'Medium',
      status: lead.status || 'raw',
      notes: lead.notes || '',
      createdAt: lead.collectedAt || new Date().toISOString(),
      updatedAt: lead.collectedAt || new Date().toISOString()
    }));

    if (importedLeads.length) {
      records = [...importedLeads, ...records];
      saveRecords();
    }
  } catch {
    // Direct file opening does not support fetching the scraper output.
  }
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character]);
}

function safeUrl(value = '') {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

function statusLabel(status) {
  return ({ raw: 'Raw lead', researching: 'Researching', contacted: 'Contacted', verified: 'Verified', rejected: 'Rejected', expired: 'Expired' })[status] || status;
}

function render() {
  const search = document.querySelector('#searchInput').value.trim().toLowerCase();
  const state = document.querySelector('#stateFilter').value;
  const status = document.querySelector('#statusFilter').value;
  const filtered = records.filter(record => {
    const searchable = `${record.name} ${record.city} ${record.state} ${record.industry} ${record.relevance}`.toLowerCase();
    return (!search || searchable.includes(search)) && (!state || record.state === state) && (!status || record.status === status);
  }).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  document.querySelector('#totalCount').textContent = records.length;
  document.querySelector('#verifiedCount').textContent = records.filter(record => record.status === 'verified').length;
  document.querySelector('#priorityCount').textContent = records.filter(record => record.priority === 'High' && !['verified', 'rejected', 'expired'].includes(record.status)).length;
  document.querySelector('#southwestCount').textContent = records.filter(record => ['Lagos', 'Ogun', 'Osun', 'Oyo', 'Ondo', 'Ekiti'].includes(record.state)).length;

  if (!filtered.length) {
    recordList.innerHTML = `<div class="empty-state"><strong>No leads match this view.</strong><span>Add a company or adjust the filters.</span></div>`;
    return;
  }

  recordList.innerHTML = filtered.map(record => `
    <article class="record" data-id="${record.id}">
      <div class="record-main">
        <div class="record-title-row"><h3>${escapeHtml(record.name)}</h3><span class="priority priority-${record.priority.toLowerCase()}">${escapeHtml(record.priority)} priority</span></div>
        <p class="record-meta">${escapeHtml(record.industry)} <span>/</span> ${escapeHtml(record.city || 'City unknown')}, ${escapeHtml(record.state)}</p>
        <p class="record-relevance">${escapeHtml(record.relevance || 'Relevance still needs to be researched.')}</p>
        <div class="record-footer"><span class="status status-${record.status}">${statusLabel(record.status)}</span>${safeUrl(record.sourceUrl) ? `<a href="${escapeHtml(safeUrl(record.sourceUrl))}" target="_blank" rel="noreferrer">Open source ↗</a>` : '<span class="muted">No source link yet</span>'}</div>
      </div>
      <div class="record-controls">
        <label>Status<select class="status-editor"><option value="raw">Raw lead</option><option value="researching">Researching</option><option value="contacted">Contacted</option><option value="verified">Verified</option><option value="rejected">Rejected</option><option value="expired">Expired</option></select></label>
        <label>Notes<textarea class="notes-editor" rows="2" placeholder="Call notes, HR contact, next check...">${escapeHtml(record.notes)}</textarea></label>
        <div class="record-actions"><button class="text-button save-record" type="button">Save notes</button><button class="text-button danger delete-record" type="button">Delete</button></div>
      </div>
    </article>
  `).join('');

  filtered.forEach(record => {
    const article = recordList.querySelector(`[data-id="${record.id}"]`);
    article.querySelector('.status-editor').value = record.status;
    article.querySelector('.status-editor').addEventListener('change', event => updateRecord(record.id, { status: event.target.value }));
    article.querySelector('.save-record').addEventListener('click', () => updateRecord(record.id, { notes: article.querySelector('.notes-editor').value }));
    article.querySelector('.delete-record').addEventListener('click', () => deleteRecord(record.id));
  });
}

function updateRecord(id, changes) {
  records = records.map(record => record.id === id ? { ...record, ...changes, updatedAt: new Date().toISOString() } : record);
  saveRecords();
  render();
  showToast('Lead updated');
}

function deleteRecord(id) {
  if (!window.confirm('Delete this company lead?')) return;
  records = records.filter(record => record.id !== id);
  saveRecords();
  render();
  showToast('Lead deleted');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.setTimeout(() => toast.classList.remove('visible'), 2200);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const now = new Date().toISOString();
  records.unshift({ id: crypto.randomUUID(), name: data.get('name').trim(), state: data.get('state'), city: data.get('city').trim(), industry: data.get('industry'), relevance: data.get('relevance').trim(), sourceUrl: data.get('sourceUrl').trim(), phone: data.get('phone').trim(), email: data.get('email').trim(), priority: data.get('priority'), status: 'raw', notes: '', createdAt: now, updatedAt: now });
  saveRecords();
  form.reset();
  render();
  showToast('Lead added to research queue');
});

['searchInput', 'stateFilter', 'statusFilter'].forEach(id => document.querySelector(`#${id}`).addEventListener('input', render));

document.querySelector('#seedButton').addEventListener('click', () => {
  if (records.length && !window.confirm('Add sample leads to your existing records?')) return;
  records = [...sampleLeads, ...records];
  saveRecords();
  render();
  showToast('Sample leads added');
});

document.querySelector('#exportButton').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `intern-me-leads-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast('Backup exported');
});

document.querySelector('#importButton').addEventListener('click', () => document.querySelector('#importInput').click());
document.querySelector('#importInput').addEventListener('change', event => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported) || imported.some(record => !record.name || !record.state)) throw new Error('Invalid format');
      records = imported;
      saveRecords();
      render();
      showToast('Backup imported');
    } catch {
      showToast('Import failed: use an Intern-me JSON backup');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
});

loadNamedCompanies();
removeClearlyLowValueScrapedLeads();
loadScrapedLeads().then(render);
window.setInterval(() => loadScrapedLeads().then(render), 5000);
