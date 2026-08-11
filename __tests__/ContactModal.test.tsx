import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ContactModal from "@/components/ContactModal";
import { BRAND_CONFIG } from "@/lib/constants";

describe("ContactModal Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the modal when isOpen is true", () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/send us a message/i)).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    render(<ContactModal isOpen={false} onClose={vi.fn()} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", async () => {
    const handleClose = vi.fn();
    render(<ContactModal isOpen={true} onClose={handleClose} />);
    const closeBtn = screen.getByRole("button", { name: /close/i });
    await userEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("renders name, email, and message input fields", () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />);
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders fallback email and phone contact details", () => {
    render(<ContactModal isOpen={true} onClose={vi.fn()} />);
    expect(screen.getByText(BRAND_CONFIG.email)).toBeInTheDocument();
    expect(screen.getByText(BRAND_CONFIG.phone)).toBeInTheDocument();
  });

  it("submits the form to /api/contact and displays success screen", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as Response);

    render(<ContactModal isOpen={true} onClose={vi.fn()} />);

    await userEvent.type(screen.getByLabelText(/your name/i), "Jane Doe");
    await userEvent.type(screen.getByLabelText(/email address/i), "jane@startup.com");
    await userEvent.type(screen.getByLabelText(/message/i), "Hello, we need a SaaS MVP.");

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
    });
  });
});
