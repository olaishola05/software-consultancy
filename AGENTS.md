<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Agent Guidelines & Conventions

## 🎯 Target & Focus
- **Single Audience**: Startup founders and SME owners.
- **Single Primary Action**: Book a free consultation call via Calendly.
- **Tone**: Confident, direct, technically credible senior engineering partner.

## 🎨 Design System & Aesthetics
- **Primary Color**: Deep Blue / Navy (`#0A1128` / `#0F172A`).
- **Accent Color**: Indigo / Light Blue (`#3B82F6` / `#60A5FA`) for buttons, highlights, and hover states.
- **Neutrals**: Dark Charcoal (`#1E293B`) and Crisp White (`#FAFAFA`).
- **Font**: Poppins (configured via Google Fonts).
- **Style**: Modern, premium, glassmorphism, dynamic micro-interactions, responsive across all mobile & desktop viewports.

## 🏗 Coding Guidelines
- **Modularity**: All sections must be decoupled components inside `components/`.
- **Centralized Data**: Keep all configurable strings, pricing tiers, services, case studies, and contact URLs inside `lib/constants.ts`.
- **Type Safety**: Strictly typed TypeScript with zero `any` types.
- **Clean Code & TDD**: Implement failing unit tests before implementing components when working via `agent-code`.
