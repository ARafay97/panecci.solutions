"use client";

import { useEffect, useState } from "react";
import { useLenis } from "./SmoothScroll";

const links = [
  { href: "#home", label: "Home" },
  { href: "#models", label: "Models" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    if (lenis) lenis.scrollTo(target as HTMLElement, { offset: 0 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav>
        <a href="#home" className="brand" onClick={(e) => go(e, "#home")}>
          <span className="dot" />
          PANECCI
        </a>

        <div
          className="nav-links"
          style={
            open
              ? {
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "rgba(255,255,255,.97)",
                  backdropFilter: "blur(16px)",
                  padding: "22px 28px",
                  gap: "18px",
                  borderBottom: "1px solid var(--line)",
                }
              : undefined
          }
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="#models" className="nav-cta" onClick={(e) => go(e, "#models")}>
          Start from £15
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ≡
        </button>
      </nav>
    </header>
  );
}
