import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import FAQ from "@/components/FAQ";
import { FAQS } from "@/lib/constants";

describe("FAQ Component", () => {
  it("renders section header and badge", () => {
    render(<FAQ />);
    expect(screen.getByText(/common questions/i)).toBeInTheDocument();
    expect(screen.getByText(/Answers to What Founders Ask Before Signing/i)).toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<FAQ />);
    FAQS.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    });
  });

  it("expands an FAQ answer when the question is clicked", async () => {
    render(<FAQ />);
    const firstQuestion = screen.getByText(FAQS[0].question);
    await userEvent.click(firstQuestion);
    expect(screen.getByText(FAQS[0].answer)).toBeInTheDocument();
  });
});
