import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Pricing from "@/components/Pricing";
import { PRICING_TIERS } from "@/lib/constants";

describe("Pricing Component", () => {
  it("renders section header and badge", () => {
    render(<Pricing />);
    expect(screen.getByText(/transparent pricing/i)).toBeInTheDocument();
    expect(screen.getByText(/Honest, Founder-Friendly Pricing. No Surprises./i)).toBeInTheDocument();
  });

  it("renders all pricing tier names and price points", () => {
    render(<Pricing />);
    PRICING_TIERS.forEach((tier) => {
      expect(screen.getByText(tier.name)).toBeInTheDocument();
      expect(screen.getByText(tier.price)).toBeInTheDocument();
    });
  });

  it("renders scope checklist items for each tier", () => {
    render(<Pricing />);
    PRICING_TIERS.forEach((tier) => {
      tier.features.forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });
  });

  it("renders a Book Call CTA link for each tier pointing to Calendly", () => {
    render(<Pricing />);
    const ctaLinks = screen.getAllByRole("link", { name: /book a free call/i });
    expect(ctaLinks.length).toBe(PRICING_TIERS.length);
  });
});
