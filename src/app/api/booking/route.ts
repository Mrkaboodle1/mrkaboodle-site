import { NextResponse } from "next/server";
import { Resend } from "resend";

// Booking enquiry endpoint.
// Sends an email to Rhett via Resend when RESEND_API_KEY is configured.
// Falls back to console-logging the enquiry if the env var is missing,
// so the form keeps working in dev and pre-Resend-setup states.

interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  date: string;
  venue: string;
  type: string;
  services: string;
  message: string;
}

const TO_ADDRESS = process.env.BOOKING_TO_EMAIL || "rhett@mrkaboodle.com.au";
const FROM_ADDRESS =
  process.env.BOOKING_FROM_EMAIL || "Mr Kaboodle Site <bookings@mrkaboodle.com.au>";
const RESEND_KEY = process.env.RESEND_API_KEY;

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildHtml(p: BookingPayload): string {
  const rows: [string, string][] = [
    ["Name", p.name],
    ["Email", p.email],
    ["Phone", p.phone || "(not given)"],
    ["Event date", p.date || "(not given)"],
    ["Venue", p.venue || "(not given)"],
    ["Event type", p.type || "(not given)"],
    ["Services", p.services || "(not given)"],
  ];
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fff;">
      <h1 style="color: #3950a1; font-size: 24px; margin: 0 0 16px;">New booking enquiry</h1>
      <p style="color: #343434; margin: 0 0 24px;">Someone just filled in the booking form on mrkaboodle.com.au.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding: 8px 12px; background: #fff8b8; color: #3950a1; font-weight: bold; width: 130px;">${escapeHtml(k)}</td><td style="padding: 8px 12px; background: #f8f8f8; color: #343434;">${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
      ${
        p.message
          ? `<div style="padding: 16px; background: #f8f8f8; border-left: 4px solid #3950a1; margin-bottom: 24px;"><strong style="color: #3950a1;">Message:</strong><br/><br/>${escapeHtml(p.message).replaceAll("\n", "<br/>")}</div>`
          : ""
      }
      <p style="color: #999; font-size: 12px; margin-top: 24px;">
        Reply directly to this email to get back to ${escapeHtml(p.name)} at ${escapeHtml(p.email)}.
      </p>
    </div>
  `;
}

function buildText(p: BookingPayload): string {
  return [
    `New booking enquiry from ${p.name}`,
    "",
    `Name:        ${p.name}`,
    `Email:       ${p.email}`,
    `Phone:       ${p.phone || "(not given)"}`,
    `Event date:  ${p.date || "(not given)"}`,
    `Venue:       ${p.venue || "(not given)"}`,
    `Event type:  ${p.type || "(not given)"}`,
    `Services:    ${p.services || "(not given)"}`,
    "",
    p.message ? `Message:\n${p.message}` : "(No message)",
    "",
    "—",
    `Reply directly to this email to get back to ${p.name} at ${p.email}.`,
  ].join("\n");
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload: BookingPayload = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    date: String(formData.get("date") ?? "").trim(),
    venue: String(formData.get("venue") ?? "").trim(),
    type: String(formData.get("type") ?? "").trim(),
    services: String(formData.get("services") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (!payload.name || !payload.email) {
    return NextResponse.redirect(new URL("/book?error=missing", request.url), 303);
  }

  if (RESEND_KEY) {
    try {
      const resend = new Resend(RESEND_KEY);
      await resend.emails.send({
        from: FROM_ADDRESS,
        to: TO_ADDRESS,
        replyTo: payload.email,
        subject: `New booking: ${payload.type || "enquiry"} from ${payload.name}`,
        html: buildHtml(payload),
        text: buildText(payload),
      });
    } catch (err) {
      console.error("[booking-enquiry] Resend send failed:", err);
      // Still capture the lead in logs so it isn't lost.
      console.log("[booking-enquiry-fallback]", JSON.stringify(payload));
    }
  } else {
    // No API key configured yet — log to Vercel function logs.
    console.log("[booking-enquiry]", JSON.stringify(payload));
  }

  return NextResponse.redirect(new URL("/book/thanks", request.url), 303);
}
