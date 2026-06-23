import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getLeads } from "@/lib/db";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  const leads = await getLeads();

  return (
    <main className="admin">
      <div className="wrap">
        <div className="admin-head">
          <div>
            <span className="eyebrow">Admin</span>
            <h1 className="sec-title" style={{ margin: "10px 0 4px" }}>
              Leads
            </h1>
            <p style={{ color: "var(--muted)" }}>
              {leads.length} {leads.length === 1 ? "enquiry" : "enquiries"} total
            </p>
          </div>
          <div className="admin-actions">
            <a className="tier-pick" href="/api/admin/export">
              Export CSV
            </a>
            <LogoutButton />
          </div>
        </div>

        {leads.length === 0 ? (
          <p style={{ color: "var(--muted)" }}>
            No leads yet — submissions from the contact form will show up here.
          </p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>When</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Business</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id}>
                    <td className="nowrap">
                      {new Date(l.created_at).toLocaleString("en-GB", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                    <td>{l.name}</td>
                    <td>
                      <a href={`mailto:${l.email}`}>{l.email}</a>
                    </td>
                    <td>{l.business || "—"}</td>
                    <td className="msg">{l.message || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
