# HEGXCORP PROJECT CONTEXT (CURRENT STATE)

## Project

Hegxcorp is a premium growth consultancy / digital marketing agency website.

Brand positioning:

* Premium
* Consulting-first
* Results-driven
* Editorial
* Enterprise-friendly

Not:

* Startup landing page
* SaaS template
* Generic marketing agency

Design language inspired by:

* Linear
* Stripe
* Vercel
* Modern consulting firms

Core stack:

* React
* TanStack Router
* TypeScript
* Tailwind
* Antigravity/Lovable used heavily for implementation

---

# Major Design Decisions

## Design Philosophy

Avoid:

* Heavy gradients
* Glassmorphism
* Neon effects
* Over-animation
* Random React Bits usage
* Startup-style aesthetics

Prefer:

* Strong typography
* Editorial layouts
* Browser mockups
* White / Navy / Orange palette
* Premium whitespace
* Subtle interactions

---

# Homepage

Status: Complete

Major changes:

* Hero refined
* Services section redesigned
* ShapeGrid / Hexagon background added
* Services transformed from generic cards into connected growth-engine concept
* Browser mockups integrated into service visuals
* Consistent visual language established

Key realization:

The site felt too "safe" and repetitive because of card-heavy layouts.

Goal became:

Create rhythm instead of uniformity.

---

# Case Studies

Status: Mostly Complete

Design direction:

Editorial archive instead of agency portfolio.

Not:

* Grid of generic cards

Instead:

* Featured case study
* Metrics-first presentation
* Browser mockups
* Editorial collection layout

Important design decisions:

* Results before client names
* Large outcome metrics
* Browser previews
* Case-study-first storytelling

Current structure:

Hero
↓
Credibility Bar
↓
Featured Case Study
↓
Case Study Collection
↓
CTA

---

# Case Study Improvements Implemented

* Featured study hierarchy
* Editorial layout
* Browser preview hover states
* Animated browser dots
* Better metric hierarchy
* Growth-oriented storytelling

Remaining work:

Dynamic case-study detail pages.

Route:

/case-studies/$slug

---

# Blog / Insights

Status: Redesigned

Original issue:

The "Coming Soon" page looked empty.

Current direction:

Not a generic blog.

Positioned as:

Insights
Research
Growth Systems
Knowledge Hub

Old blog was analyzed.

Key realization:

Old blog had useful architecture but outdated design.

New plan:

Keep old content architecture.

Modernize visual design.

---

# Blog Architecture

Main route:

/blog

Future dynamic route:

/blog/$slug

Structure:

Hero
↓
Featured Article
↓
Main Editorial Feed
↓
Sticky Discovery Panel
↓
Newsletter
↓
CTA

---

# Blog Feed Design

Left:

Articles

Right:

Discovery Panel

Contains:

* Search
* Categories
* Popular Topics
* Newsletter

Avoid:

* WordPress sidebars
* Huge tag clouds
* Category counts

Use:

* Pills
* Sticky panel
* Browser mockup article cards

---

# Contact Page

Status: Complete

Decisions:

Avoid:

* Browser mockups
* Fancy animations
* React Bits

Added:

* Trust signals
* Better hierarchy
* Better CTA structure
* Premium hover interactions

Contact page should feel:

Professional
Trustworthy
Fast
Clear

---

# Browser Mockup System

One of the strongest visual motifs.

Used heavily in:

* Services
* Case Studies
* Blog

Hover behavior:

* Browser lifts slightly
* Screenshot scales slightly
* Browser dots activate
* Premium, restrained motion

No flashy effects.

---

# React Bits Usage Rules

Only used where necessary.

Approved uses:

* Hero headline reveal
* Occasional subtle interactions

Avoid:

* Rotating text
* Constant motion
* Character-by-character gimmicks

Site should feel like a consultancy.

Not an animation showcase.

---

# Content Strategy

Current decision:

DO NOT build database first.

DO NOT build admin panel first.

Build content architecture first.

---

# Current Content Architecture Plan

Phase 1:

Local Content Layer

Structure:

src/data/
├── blogs.ts
├── caseStudies.ts

These act as a temporary local CMS.

---

# Service Layer

Structure:

src/lib/content/
├── blogs.ts
├── caseStudies.ts

Functions:

getBlogs()

getBlogBySlug()

getCaseStudies()

getCaseStudyBySlug()

Important:

Pages should consume service functions.

Never directly import content arrays.

Reason:

Future database migration becomes easy.

---

# Dynamic Routes Planned

Blog:

/blog
/blog/$slug

Case Studies:

/case-studies
/case-studies/$slug

---

# Future CMS Strategy

Current:

Local content files

Future:

SQL Database

Then:

Authentication

Then:

Admin Dashboard

Then:

Media Library

Then:

Role Management

---

# Important Decision

Company reportedly already uses SQL.

BUT:

Database integration is intentionally postponed.

Reason:

Need company requirements first.

Current goal:

Build architecture that can swap:

Local Data
↓
SQL
↓
CMS

without changing UI.

---

# Questions For Company

Need answers to:

1. Which SQL database is being used?
2. Is there an existing backend/API?
3. Who will publish blogs and case studies?
4. Is an admin dashboard required?
5. Is authentication already available?

These answers determine Phase 3.

---

# Current Recommended Roadmap

1. Push stable version to GitHub
2. Clean repository
3. Create README.md
4. Create CMS_ROADMAP.md
5. Build content service layer
6. Build dynamic blog pages
7. Build dynamic case-study pages
8. Ask company backend questions
9. Plan CMS
10. Integrate SQL later

---

# Current Project Status

Frontend Design:
95% Complete

Content Architecture:
70% Planned

CMS:
Not Started

Authentication:
Not Started

Database Integration:
Not Started

Admin Dashboard:
Not Started

Current focus:

Move from "beautiful website" to "content platform architecture".

Forwarding to the backend team to work on it further 
Backend architecture and fraemwrok layout has been made
letter we will introduced SQL Database integration, Authentication roles Admin/Editor and a Browser based Admin Dashboard Allowing complete access to create/edit/publish and manage blogs and case studiesto 

Temporary Building On Wordpress Using Rest API for Authentication and fetch data from wordporess api for blogs and case studies