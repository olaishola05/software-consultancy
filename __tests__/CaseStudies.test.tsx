import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "@/components/CaseStudies";
import { CASE_STUDIES } from "@/lib/constants";

describe("CaseStudies Component", () => {
  it("renders section header and badge", () => {
    render(<CaseStudies />);
    expect(screen.getByText(/proven impact/i)).toBeInTheDocument();
    expect(screen.getByText(/Case Studies: Problem → Solution → Outcome/i)).toBeInTheDocument();
  });

  it("renders 4 case studies with problem, solution, and outcome sections", () => {
    render(<CaseStudies />);

    CASE_STUDIES.forEach((study) => {
      expect(screen.getByText(study.title)).toBeInTheDocument();
      expect(screen.getByText(study.outcome)).toBeInTheDocument();
    });

    expect(screen.getAllByText("Problem").length).toBe(4);
    expect(screen.getAllByText("Solution").length).toBe(4);
    expect(screen.getAllByText("Outcome").length).toBe(4);
  });
});
