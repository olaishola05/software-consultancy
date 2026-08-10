# Phase 5 Plan: Process, Pricing, FAQ, Contact Modal & Footer

## Objective
Build the 4-step work process, transparent pricing packages ($5k MVP, $8k SaaS, Custom Enterprise), founder FAQ accordion, interactive secondary contact modal, and brand footer.

## Tasks & Deliverables
1. **Process Component (`components/Process.tsx`)**: 4-step timeline (Discovery → Proposal → Build → Launch).
2. **Pricing Component (`components/Pricing.tsx`)**: Transparent package cards with scope checklists and Calendly links.
3. **FAQ Component (`components/FAQ.tsx`)**: Expandable accordion answering common founder questions.
4. **Contact Modal Component (`components/ContactModal.tsx`)**: Secondary contact popup dialog with validation + fallback email & phone details.
5. **Footer Component (`components/Footer.tsx`)**: Final CTA box, quick links, direct contact info, and copyright.
6. **Main App Assembly (`app/page.tsx`)**: Integrate all sections & modal state.

## TDD Verification
- Write failing unit tests `__tests__/Pricing.test.tsx`, `__tests__/FAQ.test.tsx`, `__tests__/ContactModal.test.tsx`.
- Implement component code to make tests pass.
- Run `npx vitest run __tests__/Pricing.test.tsx` and `npx vitest run __tests__/ContactModal.test.tsx`.
