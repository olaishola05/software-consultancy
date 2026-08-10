# Phase 1 Plan: Project Setup & Design System Tokens

## Objective
Establish the project foundation, centralized data constants (`lib/constants.ts`), Google `Poppins` font integration, and custom Tailwind CSS v4 design tokens & glassmorphism utilities (`app/globals.css`).

## Tasks & Deliverables
1. **Testing Setup**: Configure Vitest and React Testing Library setup files (`vitest.config.mts`, `vitest.setup.ts`).
2. **Centralized Data (`lib/constants.ts`)**: Define brand configuration, copy, service specs, case studies, pricing tiers, process steps, FAQs, and Calendly booking URL.
3. **Design System & Global CSS (`app/globals.css`)**: Configure Navy background (`#0B0F19`), Poppins font family, glassmorphic cards/panels, blue gradient text, and micro-animations.
4. **Layout Setup (`app/layout.tsx`)**: Import Google `Poppins` font, set up metadata and HTML structure.

## Verification
- Unit test `__tests__/constants.test.ts` via `npx vitest run __tests__/constants.test.ts`.
