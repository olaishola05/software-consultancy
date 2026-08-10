import { describe, it, expect } from "vitest";
import {
  BRAND_CONFIG,
  HERO_CONTENT,
  SERVICES,
  CASE_STUDIES,
  PRICING_TIERS,
  FAQ_ITEMS,
  PROCESS_STEPS,
} from "@/lib/constants";

describe("Centralized Constants Data Validation", () => {
  it("contains complete brand configuration", () => {
    expect(BRAND_CONFIG.name).toBe("Apex Tech Partners");
    expect(BRAND_CONFIG.calendlyUrl).toContain("calendly.com");
    expect(BRAND_CONFIG.contactEmail).toBeTruthy();
    expect(BRAND_CONFIG.contactPhone).toBeTruthy();
  });

  it("contains hero content with metrics", () => {
    expect(HERO_CONTENT.title).toBeTruthy();
    expect(HERO_CONTENT.subtitle).toBeTruthy();
    expect(HERO_CONTENT.metrics.length).toBeGreaterThanOrEqual(4);
  });

  it("defines exactly 4 outcome-focused services", () => {
    expect(SERVICES).toHaveLength(4);
    SERVICES.forEach((service) => {
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(service.outcomes.length).toBeGreaterThan(0);
    });
  });

  it("defines 4 featured case studies with Problem, Solution, Outcome", () => {
    expect(CASE_STUDIES).toHaveLength(4);
    CASE_STUDIES.forEach((study) => {
      expect(study.problem).toBeTruthy();
      expect(study.solution).toBeTruthy();
      expect(study.outcome).toBeTruthy();
      expect(study.metrics).toBeTruthy();
    });
  });

  it("defines pricing tiers including MVP, SaaS, and Enterprise", () => {
    expect(PRICING_TIERS.length).toBeGreaterThanOrEqual(3);
    const tierNames = PRICING_TIERS.map((t) => t.name);
    expect(tierNames).toContain("MVP Starter Package");
    expect(tierNames).toContain("Startup SaaS Package");
    expect(tierNames).toContain("Custom Enterprise");
  });

  it("defines 4 work process steps", () => {
    expect(PROCESS_STEPS).toHaveLength(4);
  });

  it("defines FAQ items with non-empty answers", () => {
    expect(FAQ_ITEMS.length).toBeGreaterThanOrEqual(4);
    FAQ_ITEMS.forEach((faq) => {
      expect(faq.question).toBeTruthy();
      expect(faq.answer).toBeTruthy();
    });
  });
});
