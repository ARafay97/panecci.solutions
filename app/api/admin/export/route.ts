import { isAuthenticated } from "@/lib/auth";
import { getLeads, type Lead } from "@/lib/db";

function cell(value: string | number | null): string {
  const s = String(value ?? "").replace(/"/g, '""');
  return `"${s}"`;
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return new Response("Unauthorized", { status: 401 });
  }

  const leads = await getLeads();
  const header = ["id", "created_at", "name", "email", "business", "message"];
  const rows = leads.map((l: Lead) =>
    [l.id, l.created_at, l.name, l.email, l.business, l.message]
      .map(cell)
      .join(","),
  );
  const csv = [header.join(","), ...rows].join("\r\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="leads.csv"',
    },
  });
}
