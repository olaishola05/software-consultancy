import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SocialProof from "@/components/SocialProof";
import { TESTIMONIALS, TRUST_BADGES } from "@/lib/constants";

describe("SocialProof Component", () => {
  it("renders section header", () => {
    render(<SocialProof />);
    expect(screen.getByText(/client endorsements/i)).toBeInTheDocument();
    expect(screen.getByText(/Trusted by Ambitious Founders & Product Leaders/i)).toBeInTheDocument();
  });

  it("renders testimonial quotes and author details", () => {
    render(<SocialProof />);
    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(new RegExp(testimonial.author, "i"))).toBeInTheDocument();
    });
  });

  it("renders tech stack trust badges", () => {
    render(<SocialProof />);
    TRUST_BADGES.forEach((badge) => {
      expect(screen.getByText(badge)).toBeInTheDocument();
    });
  });
});
