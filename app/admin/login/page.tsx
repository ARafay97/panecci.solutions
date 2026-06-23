"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace("/admin");
        router.refresh();
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Login failed. Please try again.");
    } catch {
      setError("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-auth">
      <form className="form admin-card" onSubmit={submit}>
        <div>
          <span className="eyebrow">Admin</span>
          <h1 className="sec-title" style={{ margin: "10px 0 4px" }}>
            Sign in
          </h1>
          <p style={{ color: "var(--muted)", fontSize: ".95rem" }}>
            Enter the admin password to view your leads.
          </p>
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn-primary submit"
          disabled={loading}
          style={{ justifySelf: "stretch", textAlign: "center" }}
        >
          {loading ? "Checking…" : "Sign in"}
        </button>
        {error && <p className="form-msg err">{error}</p>}
      </form>
    </main>
  );
}
