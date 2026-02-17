import { NextRequest, NextResponse } from "next/server";
import { ContactFormData, ContactFormResponse } from "@/lib/types";
import { sendEmail, generateContactEmailHTML, generateConfirmationEmailHTML } from "@/lib/email";
import { CONTACT } from "@/lib/constants";

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone format (basic validation)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-\s()]{7,}$/;
  return phoneRegex.test(phone);
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactFormResponse>> {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(body.phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid phone format",
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Message must be at least 10 characters long",
        },
        { status: 400 }
      );
    }

    // Check environment variables
    const contactEmailTo = process.env.CONTACT_EMAIL_TO || CONTACT.email;


    // Send confirmation email to user
    try {
      await sendEmail({
        to: body.email,
        subject: "We received your inquiry - SKG Group",
        html: generateConfirmationEmailHTML(body.name),
        from: process.env.SMTP_FROM_EMAIL || CONTACT.email,
      });
    } catch (error) {
      console.error("Failed to send confirmation email:", error);
      // Don't fail the entire request if confirmation email fails
    }

    // Send notification email to company
    try {
      await sendEmail({
        to: contactEmailTo,
        subject: `New Contact Form Submission from ${body.name}`,
        html: generateContactEmailHTML(body.name, body.email, body.phone, body.message),
        from: process.env.SMTP_FROM_EMAIL || CONTACT.email,
      });
    } catch (error) {
      console.error("Failed to send notification email:", error);
      // Fail if we can't send notification to company
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send your message. Please try again or contact us directly.",
          error: String(error),
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry! We'll get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request",
        error: String(error),
      },
      { status: 500 }
    );
  }
}