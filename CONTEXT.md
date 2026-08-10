# Project Context: consultancy

## 🚀 Tech Stack
- **Backend**: Next.js App Router
- **Frontend**: Next.js 16 (React 19), Tailwind CSS v4, Lucide React, Glassmorphic Design System
- **Database**: N/A (Static & Dynamic Client/Server Components for landing page)
- **Infrastructure**: Vercel

## 🛠 Conventions
- **Language**: TypeScript
- **Style Guide**: Tailwind CSS v4, Poppins typography, Deep Navy (`#0A1128`) & Light Blue (`#3B82F6`) theme
- **Testing**: Vitest / React Testing Library (Strict TDD)
- **Git**: Conventional Commits

## 🏛 Architecture
- **Pattern**: Component-driven architecture (`app/`, `components/`, `lib/constants.ts`, `./plans/`)
- **Key Modules**:
  - `components/Navbar.tsx`: Sticky navigation with responsive menu & booking CTA.
  - `components/Hero.tsx`: Headline, subheadline, Calendly primary CTA & conversion visual.
  - `components/Positioning.tsx`: Founder pain points vs senior tech partner positioning.
  - `components/Services.tsx`: 4 core services (MVP, SaaS, FinTech, Cloud/DevOps).
  - `components/CaseStudies.tsx`: 4 featured case studies (Problem → Solution → Outcome).
  - `components/SocialProof.tsx`: Client testimonials & tech stack trust icons.
  - `components/Process.tsx`: 4-step work process (Discovery, Proposal, Build, Launch).
  - `components/Pricing.tsx`: Transparent packages ($5k MVP, $8k SaaS, Custom Enterprise).
  - `components/FAQ.tsx`: Interactive question accordion.
  - `components/ContactModal.tsx`: Secondary contact form modal + direct contact details.
  - `components/Footer.tsx`: Brand & legal navigation footer.
  - `lib/constants.ts`: Centralized text, pricing, case study data, and Calendly link.

## 📝 Key Decisions
- 2026-08-10: **Secondary Contact Modal**: Selected interactive modal form with instant validation + fallback email/phone details over raw `mailto:` links to minimize user drop-off.
- 2026-08-10: **Configurable Booking URL**: Centralized dummy Calendly link in `lib/constants.ts` to allow zero-code replacement when the official booking link is ready.

## 🔗 Resources
- **Docs**: [PRD.md](file:///Users/olaish/Documents/Microverse/olaishola/consultancy/consultancy/PRD.md), [WORKFLOW.md](file:///Users/olaish/Documents/Microverse/olaishola/consultancy/consultancy/WORKFLOW.md)
- **Design**: [docs/design.md](file:///Users/olaish/Documents/Microverse/olaishola/consultancy/consultancy/docs/design.md) (Deep Navy / Indigo Glassmorphism, Poppins Typography)
