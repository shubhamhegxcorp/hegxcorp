# AGENTS.md

This repository is a premium growth consultancy website built with React, TanStack Start, TypeScript, Tailwind, Prisma, and Vite. Keep the experience premium, editorial, and results-focused rather than startup-like or template-driven.

## Working conventions

- Follow the existing design language described in [README.md](README.md): strong typography, generous whitespace, editorial layouts, and restrained motion.
- Keep route changes in [src/routes](src/routes). This app uses file-based routing with TanStack Start. Do not create Next.js/Remix-style directories such as src/pages or app/layout.tsx.
- Preserve [src/routes/\_\_root.tsx](src/routes/__root.tsx) as the single app-shell wrapper for all pages.
- Do not edit [src/routeTree.gen.ts](src/routeTree.gen.ts) manually; it is generated.
- Use the @ alias for internal imports (for example, `@/components/...`). Shared UI should live under [src/components](src/components).

## Development commands

- Start the app: `npm run dev`
- Build the app: `npm run build`
- Lint the codebase: `npm run lint`
- Format the codebase: `npm run format`

## Backend and data

- The Prisma schema lives in [prisma/schema.prisma](prisma/schema.prisma). If you change it, update migrations and run `npx prisma generate`.
- Server-side logic for admin auth, inquiries, analytics, and related flows should stay under [src/lib](src/lib) rather than inside route components.

## When making changes

- Prefer reusing existing components and patterns over introducing new abstractions.
- Keep changes scoped and aligned with the current brand and route structure.
- If a change touches routing, data models, or admin flows, inspect the relevant route and schema files before editing.
