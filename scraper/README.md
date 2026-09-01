# Intern-me lead scraper

This tool discovers candidate companies through the official Google Places API (New). It creates a raw lead list for human research; it does not claim that a business accepts SIWES students.

## Setup

1. Install Node.js 18 or newer.
2. Copy `.env.example` to `.env`.
3. Put a restricted Google Maps API key in `.env`.
4. Enable Places API (New) in Google Cloud and review Google's current API terms, quotas, and storage rules.
5. Edit `queries.json` to add cities and Systems Engineering-related searches.

Run from this folder:

```powershell
npm run search
```

Optional environment variable:

```powershell
$env:MAX_PAGES = '1'
npm run search
```

Results are written to `output/leads.json` and `output/leads.csv`. The output directory is ignored by git because collected data may contain third-party business information and should be reviewed before sharing.

## Curation workflow

`Raw lead -> Deduplicated -> Researching -> Contacted -> Verified or Rejected`

A lead needs manual research before it becomes a published opportunity. Confirm the company, relevant technical work, SIWES route, contact person, and last verified date.

## Why this uses the API

It does not automate browsing or copying the Google Maps website. The official API gives structured place data and makes usage, quotas, and data handling easier to audit. Use the returned data only in ways permitted by Google's current terms.
