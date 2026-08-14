# Copilot instructions

Use this repository’s conventions when making changes:

- Prefer the premium, editorial tone described in [README.md](../README.md) and keep visuals restrained rather than startup-like.
- Follow TanStack Start file-based routing in [src/routes](../src/routes). Add or edit routes there, and avoid creating Next.js/Remix-style folders.
- Preserve the existing app shell in [src/routes/\_\_root.tsx](../src/routes/__root.tsx) and avoid editing generated route tree files manually.
- Keep shared UI in [src/components](../src/components) and domain logic in [src/lib](../src/lib).
- Use the `@/` path alias for internal imports.
- Verify changes with the relevant build or lint command when possible.
