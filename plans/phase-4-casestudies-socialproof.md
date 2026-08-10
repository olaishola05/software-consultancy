# Phase 4 Plan: Case Studies & Social Proof

## Objective
Build the 4 featured case studies formatted as Problem → Solution → Outcome and the client testimonials & tech stack trust row.

## Tasks & Deliverables
1. **Case Studies Component (`components/CaseStudies.tsx`)**:
   - 4 projects: FinTech, EdTech, E-Commerce, Internal Tooling.
   - Structured **Problem → Solution → Outcome** format with metric badges ($12M processed, 50k users, 42% conversion boost, 150+ hours saved).
2. **Social Proof Component (`components/SocialProof.tsx`)**:
   - Testimonial cards grid with founder quotes, roles, companies, avatars.
   - Tech stack trust badges (Stripe, Paystack, Vercel, AWS, PostgreSQL, Docker).

## TDD Verification
- Write failing unit tests `__tests__/CaseStudies.test.tsx` and `__tests__/SocialProof.test.tsx`.
- Implement component code to make tests pass.
- Run `npx vitest run __tests__/CaseStudies.test.tsx`.
