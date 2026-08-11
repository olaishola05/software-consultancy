import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Strict Zod schema validation
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const issue = result.error.issues[0];
      return NextResponse.json(
        { error: issue ? issue.message : "Invalid input data." },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // Production log (integrate Resend / SendGrid here in production)
    console.log("Verified Contact Form Submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Thank you for reaching out. We will get back to you within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
