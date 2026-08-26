<<<<<<< HEAD
**I actually want to make one more improvement to the roadmap before you start.**

**You're no longer just "learning backend."**

**You're building \*\*HEGXCORP CMS v1\*\*.**

**So instead of learning random things, every phase should produce something usable.**

**---**

**# 🚀 HEGXCORP 2.0 DEVELOPMENT ROADMAP (FINAL)**

**Current Architecture Summary (updated):**

**\* \*\*Frontend:\*\* React + TanStack Router + TypeScript + Tailwind**

**\* \*\*Backend:\*\* Node.js + Express**

**\* \*\*Database:\*\* PostgreSQL**

**\* \*\*ORM:\*\* Prisma**

**\* \*\*Storage:\*\* Cloudinary**

**\* \*\*Authentication:\*\* JWT + Refresh Tokens + HTTP-only Cookies**

**\* \*\*CMS:\*\* `/admin`**

**\* \*\*Content Models:\*\* User, Role, Blog, Category, Tag, Author, CaseStudy, Media, Lead, SeoMetadata**

**\* \*\*SEO:\*\* Managed entirely through CMS**

**\* \*\*Leads:\*\* Stored in database and managed from CMS**

**This reflects the updated direction from our discussion, replacing the earlier `admin.hegxcorp.com` approach with an integrated `/admin` CMS.**

**---**

**# 🟢 Phase 0 — Project Planning**

**## Goal**

**Freeze the architecture before writing backend code.**

**Deliverables**

**\* Final architecture**

**\* Folder structure**

**\* Database planning**

**\* Feature roadmap**

**\* CMS planning**

**Output**

**```text**

**Architecture Document**

**Roadmap**

**ER Diagram**

**API Planning**

**```**

**---**

**# 🟢 Phase 1 — Complete Frontend**

**Status**

**```text**

**95%**

**```**

**Remaining**

**### Blog Detail**

**```**

**/blog/:slug**

**```**

**### Case Study Detail**

**```**

**/case-studies/:slug**

**```**

**### Production Pages**

**\* 404**

**\* Robots**

**\* Sitemap**

**### SEO Meta**

**All pages.**

**\*\*Milestone\*\***

**✅ Frontend Complete**

**---**

**# 🟢 Phase 2 — Backend Fundamentals**

**This is NOT building.**

**This is learning.**

**Learn**

**## PostgreSQL**

**\* Tables**

**\* Relations**

**\* Foreign Keys**

**\* Indexes**

**---**

**## Prisma**

**Learn**

**```**

**init**

**migrate**

**studio**

**seed**

**```**

**Operations**

**```**

**findMany**

**findUnique**

**create**

**update**

**delete**

**```**

**---**

**## JWT**

**Understand**

**```**

**Access Token**

**Refresh Token**

**Cookies**

**```**

**---**

**## Cloudinary**

**Learn**

**```**

**Upload**

**Delete**

**Folders**

**```**

**---**

**\*\*Milestone\*\***

**You understand every technology.**

**---**

**# 🟢 Phase 3 — Database Design**

**This is the most important phase.**

**Design every model before writing APIs.**

**Models**

**```**

# **User**

I actually want to make one more improvement to the roadmap before you start.

You're no longer just "learning backend."

You're building **HEGXCORP CMS v1**.

So instead of learning random things, every phase should produce something usable.

---

# 🚀 HEGXCORP 2.0 DEVELOPMENT ROADMAP (FINAL)

Current Architecture Summary (updated):

- **Frontend:** React + TanStack Router + TypeScript + Tailwind
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Storage:** Cloudinary
- **Authentication:** JWT + Refresh Tokens + HTTP-only Cookies
- **CMS:** `/admin`
- **Content Models:** User, Role, Blog, Category, Tag, Author, CaseStudy, Media, Lead, SeoMetadata
- **SEO:** Managed entirely through CMS
- **Leads:** Stored in database and managed from CMS

This reflects the updated direction from our discussion, replacing the earlier `admin.hegxcorp.com` approach with an integrated `/admin` CMS.

---

# 🟢 Phase 0 — Project Planning

## Goal

Freeze the architecture before writing backend code.

Deliverables

- Final architecture
- Folder structure
- Database planning
- Feature roadmap
- CMS planning

Output

```text
Architecture Document

Roadmap

ER Diagram

API Planning
```

---

# 🟢 Phase 1 — Complete Frontend

Status

```text
95%
```

Remaining

### Blog Detail

```
/blog/:slug
```

### Case Study Detail

```
/case-studies/:slug
```

### Production Pages

- 404
- Robots
- Sitemap

### SEO Meta

All pages.

**Milestone**

✅ Frontend Complete

---

# 🟢 Phase 2 — Backend Fundamentals

This is NOT building.

This is learning.

Learn

## PostgreSQL

- Tables
- Relations
- Foreign Keys
- Indexes

---

## Prisma

Learn

```
init

migrate

studio

seed
```

Operations

```
findMany

findUnique

create

update

delete
```

---

## JWT

Understand

```
Access Token

Refresh Token

Cookies
```

---

## Cloudinary

Learn

```
Upload

Delete

Folders
```

---

**Milestone**

You understand every technology.

---

# 🟢 Phase 3 — Database Design

This is the most important phase.

Design every model before writing APIs.

Models

````
User
>>>>>>> 9740366999cc9309a0e43a1f04cac0d5be4913df

**Role**

**Blog**

**Category**

**Tag**

**Author**

**CaseStudy**

**Media**

**Lead**

<<<<<<< HEAD
**SeoMetadata**

**```**

**Relationships**

**```**

**Blog**

**↓**

**Category**

**↓**

**Tags**

**↓**

**Author**

**↓**

**SEO**

**```**

**Case Study**

**↓**

**SEO**

**Lead**

**↓**

**Status**

**↓**

**Assigned To**

**Output**

**```**

**schema.prisma**

**```**

**---**

**\*\*Milestone\*\***

**Complete database architecture.**

**---**

**# 🟢 Phase 4 — Backend Setup**

**Create backend.**

**Stack**

**```**

**Node**

**Express**

**Prisma**

**PostgreSQL**

**```**

**Folder structure**

**```**

**src/**

**controllers/**

**routes/**

**middleware/**

**services/**

**prisma/**

**utils/**

**config/**

**```**

**Connect**

**```**

**Express**

**↓**

**Prisma**

**↓**

**PostgreSQL**

**```**

**\*\*Milestone\*\***

**Backend successfully connected to DB.**

**---**

**# 🟢 Phase 5 — Authentication**

**Scope**

**ONLY**

**```**

**/admin**

**```**

**Authentication.**

**No customer login.**

**No signup.**

**No OAuth.**

**Flow**

**```**

**Admin**

**↓**

**Login**

**↓**

**JWT**

**↓**

**Dashboard**

**```**

**Features**

**\* Login**

**\* Logout**

**\* Protected Routes**

**\* Password Hashing**

**\* Refresh Token**

**Output**

**```**

**Admin Authentication**

**```**

**---**

**# 🟢 Phase 6 — Admin Dashboard**

**Dashboard**

**Cards**

**```**

**Blogs**

**Case Studies**

**Leads**

**Users**

**```**

**Sidebar**

**```**

**Dashboard**

**Blogs**

**Case Studies**

**Media**

**SEO**

**Users**

**Settings**

**```**

**---**

**\*\*Milestone\*\***

**Working CMS shell.**

**---**

**# 🟢 Phase 7 — Blog CMS**

**Features**

**```**

**Create**

**Edit**

**Delete**

**Draft**

**Publish**

**```**

**Fields**

**```**

**Title**

**Slug**

**Content**

**Excerpt**

**Category**

**Tags**

**Author**

**Featured Image**

**SEO**

**```**

**---**

**\*\*Milestone\*\***

**Marketing team can publish blogs.**

**---**

**# 🟢 Phase 8 — Case Study CMS**

**Features**

**```**

**Create**

**Edit**

**Delete**

**Publish**

**```**

**Fields**

**```**

**Client**

**Industry**

**Challenge**

**Approach**

**Results**

**Gallery**

**SEO**

**```**

**---**

**\*\*Milestone\*\***

**Marketing team can publish case studies.**

**---**

**# 🟢 Phase 9 — Cloudinary**

**Integrate**

**```**

**Cloudinary**

**```**

**Folders**

**```**

**blogs/**

**case-studies/**

**authors/**

**general/**

**```**

**Database stores**

**```**

**Image URL**

**Public ID**

**Folder**

**```**

**NOT**

**Binary images.**

**---**

**\*\*Milestone\*\***

**Media Library working.**

**---**

**# 🟢 Phase 10 — Lead Management**

**Website**

**↓**

**Contact Form**

**↓**

**Database**

**↓**

**CMS**

**↓**

**Lead Dashboard**

**Lead fields**

**```**

**Name**

**Email**

**Phone**

**Company**

**Message**

**Status**

**```**

**Status**

**```**

**New**

**Contacted**

**Qualified**

**Closed**

**```**

**---**

**\*\*Milestone\*\***

**No lead is lost.**

**---**

**# 🟢 Phase 11 — Connect Frontend**

**Replace**

**```**

**blogs.ts**

**```**

**↓**

**```**

**API**

**```**

**Replace**

**```**

**caseStudies.ts**

**```**

**↓**

**```**

**API**

**```**

**Everything becomes dynamic.**

**---**

**\*\*Milestone\*\***

**Website fully powered by CMS.**

**---**

**# 🟢 Phase 12 — SEO System**

**CMS controls**

**```**

**SEO Title**

**Description**

**OG Image**

**Canonical URL**

**NoIndex**

**Index**

**```**

**Structured Data**

**```**

**Organization**

**Website**

**Article**

**Breadcrumb**

**```**

**---**

**\*\*Milestone\*\***

**Marketing controls SEO.**

**---**

**# 🟢 Phase 13 — Production Ready**

**Analytics**

**```**

**GA4**

**GTM**

**```**

**Performance**

**```**

**Caching**

**Compression**

**Image Optimization**

**```**

**Security**

**```**

**Helmet**

**Rate Limiting**

**Validation**

**Sanitization**

**```**

**Deployment**

**```**

**Hostinger**

**Environment Variables**

**SSL**

**Backups**

**```**

**---**

**# 🎯 Final Architecture**

**```**

&#x20; **Visitors**

&#x20; **│**

&#x20; **▼**

&#x20; **hegxcorp.com**

&#x20; **┌─────────────────────┐**

&#x20; **│ │**

&#x20; **│ Public Website │**

&#x20; **│ │**

&#x20; **│ Home │**

&#x20; **│ Services │**

&#x20; **│ Blog │**

&#x20; **│ Case Studies │**

&#x20; **│ Contact │**

&#x20; **│ │**

&#x20; **│ /admin 🔒 │**

&#x20; **└──────────┬──────────┘**

&#x20; **│**

&#x20; **JWT Authentication**

&#x20; **│**

&#x20; **▼**

&#x20; **Express Backend**

&#x20; **│**

&#x20; **Prisma ORM**

&#x20; **│**

&#x20; **PostgreSQL**

&#x20; **┌─────────┴─────────┐**

&#x20; **│ │**

&#x20; **Cloudinary Database**

&#x20; **Images Blogs, Cases, Leads,**

&#x20; **Users, SEO, Media**

**```**

**---**

**# 📅 What You Should Do Tomorrow**

**Don't start by building login.**

**Follow this exact sequence:**

**### Day 1**

**\* Install PostgreSQL**

**\* Install Prisma**

**\* Learn Prisma Studio**

**\* Create a practice database**

**### Day 2**

**\* Design all Prisma models**

**\* Understand relationships**

**\* Create `schema.prisma`**

**### Day 3**

**\* Learn Prisma CRUD (`create`, `findMany`, `update`, `delete`)**

**\* Seed the database with sample data**

**### Day 4**

**\* Set up Express**

**\* Connect Express ↔ Prisma ↔ PostgreSQL**

**\* Create your first `GET /blogs` API**

**### Day 5**

**\* Build admin authentication (`/admin/login`)**

**\* Protect `/admin` routes**

**Only after these foundations are solid should you start building the Blog CMS, Case Study CMS, Media Library, and Lead Manager.**

**This roadmap is sequential on purpose—each phase builds on the previous one, so you avoid rework and end up with a maintainable CMS rather than a collection of disconnected features.**
=======
SeoMetadata
````

Relationships

```
Blog

↓

Category

↓

Tags

↓

Author

↓

SEO
```

Case Study

↓

SEO

Lead

↓

Status

↓

Assigned To

Output

```
schema.prisma
```

---

**Milestone**

Complete database architecture.

---

# 🟢 Phase 4 — Backend Setup

Create backend.

Stack

```
Node

Express

Prisma

PostgreSQL
```

Folder structure

```
src/

controllers/

routes/

middleware/

services/

prisma/

utils/

config/
```

Connect

```
Express

↓

Prisma

↓

PostgreSQL
```

**Milestone**

Backend successfully connected to DB.

---

# 🟢 Phase 5 — Authentication

Scope

ONLY

```
/admin
```

Authentication.

No customer login.

No signup.

No OAuth.

Flow

```
Admin

↓

Login

↓

JWT

↓

Dashboard
```

Features

- Login
- Logout
- Protected Routes
- Password Hashing
- Refresh Token

Output

```
Admin Authentication
```

---

# 🟢 Phase 6 — Admin Dashboard

Dashboard

Cards

```
Blogs

Case Studies

Leads

Users
```

Sidebar

```
Dashboard

Blogs

Case Studies

Media

SEO

Users

Settings
```

---

**Milestone**

Working CMS shell.

---

# 🟢 Phase 7 — Blog CMS

Features

```
Create

Edit

Delete

Draft

Publish
```

Fields

```
Title

Slug

Content

Excerpt

Category

Tags

Author

Featured Image

SEO
```

---

**Milestone**

Marketing team can publish blogs.

---

# 🟢 Phase 8 — Case Study CMS

Features

```
Create

Edit

Delete

Publish
```

Fields

```
Client

Industry

Challenge

Approach

Results

Gallery

SEO
```

---

**Milestone**

Marketing team can publish case studies.

---

# 🟢 Phase 9 — Cloudinary

Integrate

```
Cloudinary
```

Folders

```
blogs/

case-studies/

authors/

general/
```

Database stores

```
Image URL

Public ID

Folder
```

NOT

Binary images.

---

**Milestone**

Media Library working.

---

# 🟢 Phase 10 — Lead Management

Website

↓

Contact Form

↓

Database

↓

CMS

↓

Lead Dashboard

Lead fields

```
Name

Email

Phone

Company

Message

Status
```

Status

```
New

Contacted

Qualified

Closed
```

---

**Milestone**

No lead is lost.

---

# 🟢 Phase 11 — Connect Frontend

Replace

```
blogs.ts
```

↓

```
API
```

Replace

```
caseStudies.ts
```

↓

```
API
```

Everything becomes dynamic.

---

**Milestone**

Website fully powered by CMS.

---

# 🟢 Phase 12 — SEO System

CMS controls

```
SEO Title

Description

OG Image

Canonical URL

NoIndex

Index
```

Structured Data

```
Organization

Website

Article

Breadcrumb
```

---

**Milestone**

Marketing controls SEO.

---

# 🟢 Phase 13 — Production Ready

Analytics

```
GA4

GTM
```

Performance

```
Caching

Compression

Image Optimization
```

Security

```
Helmet

Rate Limiting

Validation

Sanitization
```

Deployment

```
Hostinger

Environment Variables

SSL

Backups
```

---

# 🎯 Final Architecture

```
                 Visitors
                     │
                     ▼

             hegxcorp.com
        ┌─────────────────────┐
        │                     │
        │ Public Website      │
        │                     │
        │ Home                │
        │ Services            │
        │ Blog                │
        │ Case Studies        │
        │ Contact             │
        │                     │
        │ /admin 🔒           │
        └──────────┬──────────┘
                   │
         JWT Authentication
                   │
                   ▼
             Express Backend
                   │
               Prisma ORM
                   │
             PostgreSQL
         ┌─────────┴─────────┐
         │                   │
    Cloudinary          Database
      Images       Blogs, Cases, Leads,
                   Users, SEO, Media
```

---

# 📅 What You Should Do Tomorrow

Don't start by building login.

Follow this exact sequence:

### Day 1

- Install PostgreSQL
- Install Prisma
- Learn Prisma Studio
- Create a practice database

### Day 2

- Design all Prisma models
- Understand relationships
- Create `schema.prisma`

### Day 3

- Learn Prisma CRUD (`create`, `findMany`, `update`, `delete`)
- Seed the database with sample data

### Day 4

- Set up Express
- Connect Express ↔ Prisma ↔ PostgreSQL
- Create your first `GET /blogs` API

### Day 5

- Build admin authentication (`/admin/login`)
- Protect `/admin` routes

Only after these foundations are solid should you start building the Blog CMS, Case Study CMS, Media Library, and Lead Manager.

This roadmap is sequential on purpose—each phase builds on the previous one, so you avoid rework and end up with a maintainable CMS rather than a collection of disconnected features.

> > > > > > > 9740366999cc9309a0e43a1f04cac0d5be4913df
