import { NextResponse } from "next/server";

// Simple booking-enquiry endpoint.
// Phase 1: returns a success page after capturing submission server-side.
// Phase 2 (post-Vercel deploy): wire up Resend or SMTP to email Rhett directly.

interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  date: string;
  type: string;
  message: string;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload: BookingPayload = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    date: String(formData.get("date") ?? "").trim(),
    type: String(formData.get("type") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (!payload.name || !payload.email) {
    return NextResponse.redirect(new URL("/book?error=missing", request.url), 303);
  }

  // Server-side log — visible in Vercel dashboard until we wire real email.
  console.log("[booking-enquiry]", JSON.stringify(payload));

  // TODO: send via Resend / SMTP once API key is set.
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "bookings@mrkaboodle.com.au",
  //     to: "rhett@mrkaboodle.com.au",
  //     subject: `New booking enquiry from ${payload.name}`,
  //     text: JSON.stringify(payload, null, 2),
  //   });

  return NextResponse.redirect(new URL("/book/thanks", request.url), 303);
}
