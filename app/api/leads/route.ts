import { NextResponse } from "next/server";
import { insertLead } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const business = String(data.business ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please add your name and email." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const lead = await insertLead({
      name: name.slice(0, 200),
      email: email.slice(0, 200),
      business: business ? business.slice(0, 200) : undefined,
      message: message ? message.slice(0, 4000) : undefined,
    });
    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (err) {
    console.error("Failed to store lead:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
