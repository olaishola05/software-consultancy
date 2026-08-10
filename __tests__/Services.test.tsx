import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Services from "@/components/Services";
import { SERVICES } from "@/lib/constants";

describe("Services Component", () => {
  it("renders section title and subheadline", () => {
    render(<Services />);
    expect(screen.getByText(/specialized capabilities/i)).toBeInTheDocument();
    expect(screen.getByText(/Engineering Solutions Focused Strictly on Business Outcomes/i)).toBeInTheDocument();
  });

  it("renders all 4 service titles and outcome-focused descriptions", () => {
    render(<Services />);
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });

  it("renders key outcome bullet points for each service", () => {
    render(<Services />);
    SERVICES.forEach((service) => {
      service.outcomes.forEach((outcome) => {
        expect(screen.getByText(outcome)).toBeInTheDocument();
      });
    });
  });
});
