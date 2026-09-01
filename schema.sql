-- Intern-me curation database
-- The prototype currently stores the same shape in localStorage.
-- This schema is ready for SQLite when a server is introduced.

PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS companies (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  industry TEXT NOT NULL,
  relevance TEXT,
  website TEXT,
  phone TEXT,
  email TEXT,
  address TEXT,
  city TEXT,
  state TEXT NOT NULL,
  maps_url TEXT,
  linkedin_url TEXT,
  source_url TEXT,
  priority TEXT NOT NULL DEFAULT 'Medium' CHECK (priority IN ('High', 'Medium', 'Low')),
  status TEXT NOT NULL DEFAULT 'raw' CHECK (status IN ('raw', 'researching', 'contacted', 'verified', 'rejected', 'expired')),
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS opportunities (
  id INTEGER PRIMARY KEY,
  company_id INTEGER NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  accepted_disciplines TEXT,
  systems_area TEXT,
  siwes_accepted INTEGER NOT NULL DEFAULT 0,
  work_mode TEXT,
  start_period TEXT,
  duration TEXT,
  deadline TEXT,
  stipend TEXT,
  accommodation TEXT,
  transport_support TEXT,
  application_url TEXT,
  application_email TEXT,
  verification_status TEXT NOT NULL DEFAULT 'unverified',
  last_verified_at TEXT
);

CREATE TABLE IF NOT EXISTS verification_records (
  id INTEGER PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id) ON DELETE CASCADE,
  opportunity_id INTEGER REFERENCES opportunities(id) ON DELETE CASCADE,
  method TEXT NOT NULL,
  notes TEXT,
  confirmed_by TEXT,
  verified_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  next_review_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_companies_state ON companies(state);
CREATE INDEX IF NOT EXISTS idx_companies_industry ON companies(industry);
CREATE INDEX IF NOT EXISTS idx_companies_status ON companies(status);
CREATE INDEX IF NOT EXISTS idx_opportunities_company ON opportunities(company_id);
