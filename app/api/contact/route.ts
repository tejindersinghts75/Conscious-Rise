import { NextResponse } from "next/server";

export const runtime = "nodejs";

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const endpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  if (!endpoint) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 503 });
  }

  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots commonly fill this hidden field. Return success without storing spam.
  if (text(raw.website, 200)) return NextResponse.json({ ok: true });

  const payload = {
    name: text(raw.name, 120),
    email: text(raw.email, 180),
    company: text(raw.company, 180),
    service: text(raw.service, 180),
    budget: text(raw.budget, 80),
    timeline: text(raw.timeline, 80),
    message: text(raw.message, 5000),
    source: "consciousrise.in contact form",
    submittedAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Google Apps Script returned ${response.status}`);

    const result = (await response.json()) as { ok?: boolean };
    if (!result.ok) throw new Error("Google Apps Script rejected the submission");

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form forwarding failed", error);
    return NextResponse.json({ error: "The enquiry could not be sent." }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
