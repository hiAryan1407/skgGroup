import nodemailer from "nodemailer";
import { EmailPayload } from "./types";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Missing SMTP configuration. Please set environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS"
    );
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT),
    secure: SMTP_PORT === "465",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return transporter;
}

export async function sendEmail(payload: EmailPayload): Promise<void> {
  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email");
  }
}

export function generateContactEmailHTML(
  name: string,
  email: string,
  phone: string,
  message: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            color: #333;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #c5a02c;
            color: #fff;
            padding: 20px;
            text-align: center;
            border-radius: 4px;
            margin-bottom: 20px;
          }
          .header h2 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            margin-bottom: 20px;
          }
          .field {
            margin-bottom: 15px;
          }
          .field-label {
            font-weight: bold;
            color: #c5a02c;
            margin-bottom: 5px;
          }
          .field-value {
            background-color: #f5f5f5;
            padding: 10px;
            border-left: 3px solid #c5a02c;
            border-radius: 3px;
          }
          .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${escapeHtml(name)}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${escapeHtml(email)}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value">${escapeHtml(phone)}</div>
            </div>
            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated email from SKG Group website contact form.</p>
            <p>&copy; 2026 SKG Group of Companies. All Rights Reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateConfirmationEmailHTML(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            color: #333;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #c5a02c;
            color: #fff;
            padding: 20px;
            text-align: center;
            border-radius: 4px;
            margin-bottom: 20px;
          }
          .header h2 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            margin-bottom: 20px;
            text-align: center;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #ddd;
            padding-top: 20px;
          }
          .contact-info {
            margin: 20px 0;
            padding: 15px;
            background-color: #f5f5f5;
            border-radius: 4px;
          }
          .contact-info p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You, ${escapeHtml(name)}!</h2>
          </div>
          <div class="content">
            <p>We've received your inquiry and will get back to you shortly.</p>
            <p>Our team at SKG Group is committed to providing premium contractual solutions in infrastructure.</p>

            <div class="contact-info">
              <h3>Contact Details</h3>
              <p><strong>Email:</strong> skggroup.8006@gmail.com</p>
              <p><strong>Phone:</strong> +91 7992305348 | +91 8085818006</p>
              <p><strong>WhatsApp:</strong> +91 7992305348</p>
            </div>
          </div>
          <div class="footer">
            <p>&copy; 2026 SKG Group of Companies. All Rights Reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}