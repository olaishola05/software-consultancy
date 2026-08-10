# Phase 2 Plan: Navigation & Hero Section

## Objective
Build the top sticky navigation header and high-converting Hero section targeting startup founders and SME owners.

## Tasks & Deliverables
1. **Navbar Component (`components/Navbar.tsx`)**:
   - Brand logo mark & title.
   - Smooth scroll anchor links (`#why-us`, `#services`, `#case-studies`, `#pricing`, `#faq`).
   - "Book Call" primary CTA button linking to Calendly.
   - Mobile responsive drawer toggle.
2. **Hero Component (`components/Hero.tsx`)**:
   - Primary headline: "We Build Production-Grade Software That Scales Your Business".
   - Subheadline positioning full-stack team capabilities.
   - Primary Calendly CTA button + low-friction trust note ("15-min call • No sales pitch").
   - Secondary button to trigger direct contact modal.
   - Metrics row ($45M+ raised, 99.9% uptime, 4-8 wks delivery).
   - Interactive Next.js API code graphic mockup.

## TDD Verification
- Write failing unit tests `__tests__/Navbar.test.tsx` and `__tests__/Hero.test.tsx`.
- Implement component code to make tests pass.
- Run `npx vitest run __tests__/Navbar.test.tsx` and `npx vitest run __tests__/Hero.test.tsx`.
