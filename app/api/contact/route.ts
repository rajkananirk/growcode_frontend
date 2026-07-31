import { automateContactResponse } from "@/lib/automation";
import { sendContactNotification } from "@/lib/email";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = (await request.json()) as Record<string, unknown>; }
  catch { return NextResponse.json({ error: "Invalid request body." }, { status: 400 }); }
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const brief = typeof body.brief === "string" ? body.brief.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const requiredSelections = ["service", "projectType", "budget", "timeline"] as const;
  const isDetailedInquiry = body.formType === "project-inquiry";
  if (name.length < 2 || name.length > 100) return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
  if (!emailPattern.test(email) || email.length > 254) return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
  if (isDetailedInquiry && (phone.length < 7 || phone.length > 30)) return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  if (isDetailedInquiry && requiredSelections.some(field => typeof body[field] !== "string" || !(body[field] as string).trim())) return NextResponse.json({ error: "Please complete all project requirement fields." }, { status: 400 });
  if (brief.length < 20 || brief.length > 6_000) return NextResponse.json({ error: "Please provide a project brief between 20 and 6,000 characters." }, { status: 400 });
  const submission = { ...body, name, email, brief };
  try {
    await sendContactNotification(submission);
  } catch (error) {
    console.error("Contact email delivery failed", error);
    return NextResponse.json({ error: "Your inquiry could not be delivered. Please email us directly or try again shortly." }, { status: 502 });
  }
  try {
    const automation = await automateContactResponse(submission);
    return NextResponse.json({ success: true, delivered: true, draft: automation.draft });
  } catch (error) {
    console.error("Contact automation failed after email delivery", error);
    return NextResponse.json({ success: true, delivered: true, draft: "Thank you—your project inquiry has been delivered to our team. A senior partner will review it and reply by email within one business day." });
  }
}
