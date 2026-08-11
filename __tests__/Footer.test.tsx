import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Footer from "@/components/Footer";
import { BRAND_CONFIG } from "@/lib/constants";

describe("Footer Component", () => {
  it("renders brand name and tagline", () => {
    render(<Footer onOpenContactModal={vi.fn()} />);
    expect(screen.getByText(BRAND_CONFIG.name)).toBeInTheDocument();
    expect(screen.getByText(BRAND_CONFIG.tagline)).toBeInTheDocument();
  });

  it("renders a final Book Call CTA link pointing to Calendly", () => {
    render(<Footer onOpenContactModal={vi.fn()} />);
    const ctaLinks = screen.getAllByRole("link", { name: /book your free call/i });
    expect(ctaLinks.length).toBeGreaterThan(0);
    expect(ctaLinks[0]).toHaveAttribute("href", BRAND_CONFIG.calendlyUrl);
  });

  it("renders quick navigation links", () => {
    render(<Footer onOpenContactModal={vi.fn()} />);
    expect(screen.getByRole("link", { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /pricing/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /faq/i })).toBeInTheDocument();
  });

  it("renders contact email and phone", () => {
    render(<Footer onOpenContactModal={vi.fn()} />);
    expect(screen.getByText(BRAND_CONFIG.email)).toBeInTheDocument();
    expect(screen.getByText(BRAND_CONFIG.phone)).toBeInTheDocument();
  });

  it("renders copyright notice", () => {
    render(<Footer onOpenContactModal={vi.fn()} />);
    const brandOccurrences = screen.getAllByText(/apex tech partners/i);
    expect(brandOccurrences.length).toBeGreaterThan(0);
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });
});
