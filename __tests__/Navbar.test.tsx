import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Navbar from "@/components/Navbar";
import { BRAND_CONFIG } from "@/lib/constants";

describe("Navbar Component", () => {
  it("renders the brand name", () => {
    render(<Navbar onOpenContactModal={vi.fn()} />);
    expect(screen.getByText(BRAND_CONFIG.name)).toBeInTheDocument();
  });

  it("renders all navigation anchor links", () => {
    render(<Navbar onOpenContactModal={vi.fn()} />);
    expect(screen.getByRole("link", { name: /why us/i })).toHaveAttribute("href", "#why-us");
    expect(screen.getByRole("link", { name: /services/i })).toHaveAttribute("href", "#services");
    expect(screen.getByRole("link", { name: /case studies/i })).toHaveAttribute("href", "#case-studies");
    expect(screen.getByRole("link", { name: /pricing/i })).toHaveAttribute("href", "#pricing");
    expect(screen.getByRole("link", { name: /faq/i })).toHaveAttribute("href", "#faq");
  });

  it("renders a Book Call CTA link pointing to Calendly URL", () => {
    render(<Navbar onOpenContactModal={vi.fn()} />);
    const bookCallLinks = screen.getAllByRole("link", { name: /book call/i });
    expect(bookCallLinks.length).toBeGreaterThan(0);
    expect(bookCallLinks[0]).toHaveAttribute("href", BRAND_CONFIG.calendlyUrl);
  });

  it("calls onOpenContactModal when Direct Contact button is clicked", async () => {
    const handleOpenContactModal = vi.fn();
    render(<Navbar onOpenContactModal={handleOpenContactModal} />);
    const contactButton = screen.getByRole("button", { name: /direct contact/i });
    await userEvent.click(contactButton);
    expect(handleOpenContactModal).toHaveBeenCalledTimes(1);
  });

  it("renders a mobile menu toggle button", () => {
    render(<Navbar onOpenContactModal={vi.fn()} />);
    expect(screen.getByRole("button", { name: /toggle navigation/i })).toBeInTheDocument();
  });
});
