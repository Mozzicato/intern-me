# Intern-me prototype

This is the first curation-desk prototype for building the company database.

## Run it

Open `index.html` in a browser. No installation or server is required.

The prototype stores leads in the browser's `localStorage`, so records remain available on that browser and computer. Use **Export JSON** regularly for backups. **Import JSON** restores a backup.

## Workflow

1. Add a company lead.
2. Search and filter the research queue.
3. Research the company using its source link.
4. Update the status as you investigate or call the company.
5. Save call notes and HR details.
6. Export the dataset before changing devices or browsers.

Use **Load sample leads** once to see the workflow with example records.

## Data model

`schema.sql` contains the SQLite schema for the next version. The browser prototype intentionally uses the same company fields before a backend is introduced.

A record is a company lead, not automatically an internship opportunity. Only mark it **Verified** after confirming its relevance and internship route through an official source or direct contact.
