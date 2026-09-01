# SIWES / Internship Tool Plan

## Product Direction

Build a trusted Nigerian SIWES and internship search and application tracker for students preparing for placements starting in 2027.

The product should support the student's journey from discovering a suitable opportunity to applying, preparing, completing SIWES, and turning the experience into career value. The first release should focus on the most urgent and testable part of that journey.

## Initial Problem Hypothesis

Students struggle most with finding legitimate, discipline-relevant opportunities and keeping track of multiple applications.

Validate this hypothesis before building a large feature set.

## Phase 1: Validate the Problem

1. Interview 10-15 students from different schools and disciplines.
2. Ask how they currently find placements, track applications, prepare documents, and verify companies.
3. Collect real internship posts and note what information is usually missing.
4. Speak with 2-3 SIWES coordinators or students who recently completed SIWES.
5. Identify the most painful repeated problem.

Use a simple spreadsheet or form before investing heavily in development.

## Phase 2: Define the MVP

The first usable version should contain only:

- Student profile:
  - School
  - Course or discipline
  - Level
  - Preferred locations
  - Internship duration
  - Interests and skills
- Opportunity directory:
  - Company
  - Role
  - Discipline
  - Location
  - SIWES eligibility
  - Deadline
  - Stipend
  - Accommodation
  - Transport support
  - Application method
  - Verification status
- Search and filters
- Save opportunity
- Application tracker with these statuses:
  - Saved
  - Preparing
  - Applied
  - Interview
  - Accepted
  - Rejected
  - Withdrawn
- Deadline and follow-up reminders
- Basic document checklist

Do not begin with CV generation, mock interviews, transport maps, reports, or a large AI assistant. Add those after the core use case has been proven.

## Phase 3: Build the Opportunity Data System

Trust and data quality are core product features.

Create a process for:

- Adding opportunities manually
- Recording the original source
- Checking whether the company exists
- Recording when a listing was last verified
- Marking expired opportunities
- Allowing students to report suspicious or outdated listings
- Separating verified, community-submitted, and unverified listings

Thirty trustworthy opportunities are more useful than 5,000 copied listings.

## Phase 4: Build the First Version

Implement in this order:

1. Authentication and student profiles
2. Database schema
3. Admin dashboard for adding and verifying opportunities
4. Opportunity browsing and filtering
5. Save or bookmark functionality
6. Application tracker
7. Email or in-app deadline reminders
8. Feedback and reporting mechanism

Build the admin dashboard early so opportunity data can be maintained properly.

## Phase 5: Run a Small Pilot

Recruit 20-50 students from one or two schools.

Give them this task:

> Find three suitable opportunities, save them, apply to at least one, and track the result.

Measure:

- How many complete their profile
- How many opportunities they view
- How many save
- How many applications they track
- Whether they return
- Whether listings are relevant
- Whether any listing is outdated or suspicious
- How much time the tool saves them

Watch users use the product. Their confusion will be more valuable than more feature ideas.

## Phase 6: Add Application Support

After students are genuinely using the directory and tracker, add:

- CV builder
- CV review checklist
- SIWES request letter templates
- Cover-letter generation from saved opportunity details
- Document storage and checklist
- Cold-email templates
- Follow-up message templates
- Contact-person tracking

These features should connect directly to an opportunity. Students should be able to select an internship and generate a tailored application package instead of using a generic document generator.

## Phase 7: Add Preparation and Decision Support

Once applications and placements are working, add:

- Interview question practice
- Discipline-specific preparation roadmaps
- Offer comparison
- Estimated monthly cost calculator
- Transport and accommodation planning
- Mentor or alumni connections
- Pre-resumption checklist

The offer comparison should consider total cost, not only stipend:

```text
net monthly value = stipend - transport - accommodation - feeding - data
```

## Phase 8: Support the Full SIWES Lifecycle

Only after the placement workflow is proven, add:

- Weekly logbook entries
- Activity-writing assistance
- Goal tracking
- Evidence and project documentation
- SIWES report structure
- Presentation and defense preparation
- LinkedIn and CV updates
- Recommendation and return-offer follow-up

This can turn the product from an internship finder into a complete SIWES career companion.

## Product Structure

Use four main areas:

1. **Discover**: find relevant opportunities
2. **Applications**: manage the application pipeline
3. **Prepare**: documents, interviews, and skills
4. **My SIWES**: placement goals, logbook, report, and career outcomes

## Immediate Milestone

A student can create a profile, find relevant verified opportunities, save them, and track applications from one dashboard.

This is the smallest version that solves a complete problem and can be tested with real students.

## First Six-Week Build Cycle

- **Week 1:** Student interviews, requirements, and data model
- **Week 2:** Collect and verify the first 30-50 opportunities
- **Week 3:** Build authentication, profiles, and opportunity browsing
- **Week 4:** Add saves, applications, statuses, and deadlines
- **Week 5:** Pilot with students
- **Week 6:** Fix the biggest usability and data-quality problems

## Product Principle

The advantage should be trust, Nigerian SIWES relevance, and a useful workflow, not the number of flashy features.
