**Database**: PostgreSQL



**Prisma** : Blog , case study , Category , Tag ,lead



**Cloudinary**: Dont store image in Database instead we will use CLoudinary (store : Image URL , public id , folder ) also and Industry standard



**SEO as CMS Data** : we will do SEO Title , SEO Description ,OG Image Inside CMS ..Marketing team can change it



**CMS** : I will make another admin.hegxcorp.com for management instead of /admin



**ØRM**: Prisma Dtabases Access



**Storage** : Cloudinary Media Assests



**Auth**: JWT + Refresh Tokens + HTTP-only Cookies





Important SEO Features Planned

Organization JSON-LD

Website JSON-LD



✅ Lead Model



Instead:



Lead

├── Name

├── Email

├── Phone

├── Company

├── Message

├── CreatedAt

└── Status



Then:



Contact Form

↓

Database

↓

Admin Dashboard



And optionally email notifications too.



This is a big upgrade.











Frontend

========

React

TanStack Router

TypeScript

Tailwind



Backend

========

Node.js

Express

Prisma



Database

========

PostgreSQL



Storage

========

Cloudinary



Authentication

========

JWT

Refresh Tokens

HTTP-only Cookies



CMS

========

/admin



Leads Models

========

User

Role

Blog

Category

Tag

Author

CaseStudy

Media

Lead

SeoMetadata

