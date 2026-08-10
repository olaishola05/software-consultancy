import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Hero from "@/components/Hero";
import { HERO_CONTENT, BRAND_CONFIG } from "@/lib/constants";

describe("Hero Component", () => {
  it("renders the primary headline", () => {
    render(<Hero onOpenContactModal={vi.fn()} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/production-grade/i);
  });

  it("renders the subheadline", () => {
    render(<Hero onOpenContactModal={vi.fn()} />);
    expect(screen.getByText(HERO_CONTENT.subtitle)).toBeInTheDocument();
  });

  it("renders primary CTA link pointing to Calendly URL", () => {
    render(<Hero onOpenContactModal={vi.fn()} />);
    const ctaLink = screen.getByRole("link", { name: /book free consultation/i });
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute("href", BRAND_CONFIG.calendlyUrl);
  });

  it("renders the low-friction trust subtext", () => {
    render(<Hero onOpenContactModal={vi.fn()} />);
    expect(screen.getByText(HERO_CONTENT.trustSubtext)).toBeInTheDocument();
  });

  it("renders all 4 metric values", () => {
    render(<Hero onOpenContactModal={vi.fn()} />);
    HERO_CONTENT.metrics.forEach((metric) => {
      expect(screen.getByText(metric.value)).toBeInTheDocument();
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
  });

  it("calls onOpenContactModal when secondary contact button is clicked", async () => {
    const { default: userEvent } = await import("@testing-library/user-event");
    const handleOpenContactModal = vi.fn();
    render(<Hero onOpenContactModal={handleOpenContactModal} />);
    const secondaryBtn = screen.getByRole("button", { name: /prefer to message us/i });
    await userEvent.click(secondaryBtn);
    expect(handleOpenContactModal).toHaveBeenCalledTimes(1);
  });
});
