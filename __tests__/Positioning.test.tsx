import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Positioning from "@/components/Positioning";
import { PROBLEM_POSITIONING } from "@/lib/constants";

describe("Positioning Component", () => {
  it("renders section badge, headline, and subheadline", () => {
    render(<Positioning />);
    expect(screen.getByText(PROBLEM_POSITIONING.badge)).toBeInTheDocument();
    expect(screen.getByText(PROBLEM_POSITIONING.headline)).toBeInTheDocument();
    expect(screen.getByText(PROBLEM_POSITIONING.subheadline)).toBeInTheDocument();
  });

  it("renders 3-way comparison grid items", () => {
    render(<Positioning />);
    PROBLEM_POSITIONING.comparison.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.drawback)).toBeInTheDocument();
    });
  });

  it("highlights the recommended tech partner option", () => {
    render(<Positioning />);
    expect(screen.getByText(/recommended partner/i)).toBeInTheDocument();
  });
});
