import { cookies } from "next/headers";
import crypto from "node:crypto";

const COOKIE = "panecci_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function sessionSecret(): string {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) {
    throw new Error("Missing ADMIN_SESSION_SECRET — add it to .env.local.");
  }
  return s;
}

/** Deterministic, signed session token. Knowing it requires the secret. */
function sessionToken(): string {
  return crypto
    .createHmac("sha256", sessionSecret())
    .update("admin:v1")
    .digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

export function verifyPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    throw new Error("Missing ADMIN_PASSWORD — add it to .env.local.");
  }
  return safeEqual(input, expected);
}

export async function createSession(): Promise<void> {
  const store = await cookies();
  store.set(COOKIE, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const value = store.get(COOKIE)?.value;
  if (!value) return false;
  return safeEqual(value, sessionToken());
}
