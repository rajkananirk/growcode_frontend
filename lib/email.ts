import "server-only";
import nodemailer from "nodemailer";

type ContactSubmission = Record<string, unknown> & { name: string; email: string; brief: string };
const text = (value: unknown, max = 6_000) => typeof value === "string" ? value.trim().slice(0, max) : "";
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);

function row(label: string, value: unknown) {
  const cleanValue = text(value, 500);
  if (!cleanValue) return "";
  return `<tr><td style="padding:10px 14px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;border-bottom:1px solid #e2e8f0">${escapeHtml(label)}</td><td style="padding:10px 14px;color:#0f172a;font-size:14px;border-bottom:1px solid #e2e8f0">${escapeHtml(cleanValue)}</td></tr>`;
}

export async function sendContactNotification(submission: ContactSubmission) {
  const user = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.CONTACT_TO_EMAIL || user;
  if (!user || !appPassword || !recipient) throw new Error("Contact email delivery is not configured.");

  const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass: appPassword.replace(/\s/g, "") } });
  const name = text(submission.name, 100);
  const email = text(submission.email, 254);
  const brief = text(submission.brief);
  const subjectService = text(submission.service, 100) || "General project inquiry";

  await transporter.sendMail({
    from: `Northstar Website <${user}>`, to: recipient, replyTo: email,
    subject: `New inquiry: ${subjectService} — ${name}`,
    text: [`New project inquiry from ${name}`, `Email: ${email}`, `Phone: ${text(submission.phone, 30) || "Not provided"}`, `Company: ${text(submission.company, 120) || "Not provided"}`, `Service: ${text(submission.service, 100) || "Not provided"}`, `Project type: ${text(submission.projectType, 100) || "Not provided"}`, `Budget: ${text(submission.budget, 80) || "Not provided"}`, `Timeline: ${text(submission.timeline, 80) || "Not provided"}`, "", "Project brief:", brief].join("\n"),
    html: `<div style="background:#f1f5f9;padding:32px;font-family:Arial,sans-serif"><div style="max-width:680px;margin:auto;background:white;border-radius:18px;overflow:hidden;border:1px solid #e2e8f0"><div style="padding:28px;background:#071f3d;color:white"><div style="font-size:12px;color:#7dd3fc;text-transform:uppercase;letter-spacing:.14em">Growcode Solution</div><h1 style="font-size:24px;margin:10px 0 0">New project inquiry</h1></div><table style="width:100%;border-collapse:collapse">${row("Name", name)}${row("Email", email)}${row("Phone", submission.phone)}${row("Company", submission.company)}${row("Service", submission.service)}${row("Project type", submission.projectType)}${row("Budget", submission.budget)}${row("Timeline", submission.timeline)}</table><div style="padding:24px 28px"><div style="font-size:12px;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:.08em">Project brief</div><p style="color:#334155;font-size:15px;line-height:1.7;white-space:pre-wrap">${escapeHtml(brief)}</p><a href="mailto:${escapeHtml(email)}" style="display:inline-block;margin-top:10px;padding:12px 18px;background:#3b82f6;color:white;text-decoration:none;border-radius:999px;font-size:14px;font-weight:700">Reply to ${escapeHtml(name)}</a></div></div></div>`,
  });
}
