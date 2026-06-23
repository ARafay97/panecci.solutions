import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

/**
 * Lazy Neon client. We don't connect at import time so `next build` (which
 * imports route modules to collect them) doesn't fail when DATABASE_URL is
 * absent — it's only needed at request time.
 */
let _sql: NeonQueryFunction<false, false> | null = null;

function db(): NeonQueryFunction<false, false> {
  if (!_sql) {
    const connectionString =
      process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
    if (!connectionString) {
      throw new Error(
        "Missing DATABASE_URL / POSTGRES_URL — add your Vercel Postgres (Neon) connection string to .env.local.",
      );
    }
    _sql = neon(connectionString);
  }
  return _sql;
}

let schemaReady: Promise<void> | null = null;

/** Creates the leads table once per runtime if it doesn't exist yet. */
function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      await db()`
        CREATE TABLE IF NOT EXISTS leads (
          id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          name        text NOT NULL,
          email       text NOT NULL,
          business    text,
          message     text,
          created_at  timestamptz NOT NULL DEFAULT now()
        )
      `;
    })().catch((err) => {
      // Reset so the next request can retry schema creation.
      schemaReady = null;
      throw err;
    });
  }
  return schemaReady;
}

export type Lead = {
  id: number;
  name: string;
  email: string;
  business: string | null;
  message: string | null;
  created_at: string;
};

export async function insertLead(input: {
  name: string;
  email: string;
  business?: string;
  message?: string;
}): Promise<{ id: number; created_at: string }> {
  await ensureSchema();
  const rows = await db()`
    INSERT INTO leads (name, email, business, message)
    VALUES (
      ${input.name},
      ${input.email},
      ${input.business ?? null},
      ${input.message ?? null}
    )
    RETURNING id, created_at
  `;
  return rows[0] as { id: number; created_at: string };
}

export async function getLeads(): Promise<Lead[]> {
  await ensureSchema();
  const rows = await db()`
    SELECT id, name, email, business, message, created_at
    FROM leads
    ORDER BY created_at DESC
  `;
  return rows as Lead[];
}
