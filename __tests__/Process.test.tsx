import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Process from "@/components/Process";
import { PROCESS_STEPS } from "@/lib/constants";

describe("Process Component", () => {
  it("renders section header and badge", () => {
    render(<Process />);
    expect(screen.getByText(/how we work/i)).toBeInTheDocument();
    expect(screen.getByText(/From First Call to Production Launch in 4 Steps/i)).toBeInTheDocument();
  });

  it("renders all 4 process step titles", () => {
    render(<Process />);
    PROCESS_STEPS.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
    });
  });

  it("renders all step numbers", () => {
    render(<Process />);
    PROCESS_STEPS.forEach((step) => {
      expect(screen.getByText(step.step)).toBeInTheDocument();
    });
  });

  it("renders all step descriptions", () => {
    render(<Process />);
    PROCESS_STEPS.forEach((step) => {
      expect(screen.getByText(step.description)).toBeInTheDocument();
    });
  });
});
