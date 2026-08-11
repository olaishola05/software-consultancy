import { describe, it, expect } from "vitest";
import { POST } from "@/app/api/contact/route";

describe("Contact API Route with Zod Validation", () => {
  it("returns 400 when name is missing or too short", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "A", email: "jane@startup.com", message: "We need an MVP built." }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Name must be at least 2 characters long");
  });

  it("returns 400 when email format is invalid", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Jane Doe", email: "not-an-email", message: "We need an MVP built." }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Please provide a valid email address (e.g. name@company.com)");
  });

  it("returns 400 when message is less than 10 characters", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Jane Doe", email: "jane@startup.com", message: "Hi" }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Message must be at least 10 characters long to provide sufficient context");
  });

  it("returns 200 on valid data matching Zod schema", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Jane Founder",
        email: "jane@startup.com",
        message: "We need a production-grade SaaS MVP built in 6 weeks.",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });
});
