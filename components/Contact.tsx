"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", biz: "", msg: "" });
  const [status, setStatus] = useState<{ text: string; err: boolean }>({
    text: "",
    err: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setStatus({ text: "Please add your name and email.", err: true });
      return;
    }

    setSubmitting(true);
    setStatus({ text: "", err: false });
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.biz,
          message: form.msg,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({
          text: data.error ?? "Something went wrong. Please try again.",
          err: true,
        });
        return;
      }
      setStatus({
        text: `Thanks ${form.name.trim()} — your enquiry is in. We'll be in touch shortly.`,
        err: false,
      });
      setForm({ name: "", email: "", biz: "", msg: "" });
    } catch {
      setStatus({ text: "Network error — please try again.", err: true });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <span className="eyebrow reveal">Contact</span>
            <h2 className="sec-title reveal">Tell us about your business.</h2>
            <p
              className="reveal"
              style={{ color: "var(--muted)", fontSize: "1.05rem" }}
            >
              Send a quick message and we&apos;ll put together a free preview of
              what your site could look like — no commitment. Most replies go
              out the same day.
            </p>
          </div>

          <form className="form reveal" onSubmit={submit}>
            <div className="row">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={update("name")}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@business.co.uk"
                  value={form.email}
                  onChange={update("email")}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="biz">Business name</label>
              <input
                id="biz"
                type="text"
                placeholder="Smith & Co."
                value={form.biz}
                onChange={update("biz")}
              />
            </div>
            <div className="field">
              <label htmlFor="msg">What do you need?</label>
              <textarea
                id="msg"
                placeholder="We're a barber shop with no website…"
                value={form.msg}
                onChange={update("msg")}
              />
            </div>
            <button
              type="submit"
              className="btn-primary submit"
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Send enquiry"}
            </button>
            {status.text && (
              <p className={`form-msg${status.err ? " err" : ""}`}>
                {status.text}
              </p>
            )}
            <p className="form-note">
              By sending, you agree we may contact you about your enquiry. We
              never share your details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
