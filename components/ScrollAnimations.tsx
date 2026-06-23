"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Drives the `.reveal` entrance animations.
 *
 * This component owns NO requestAnimationFrame loop. SmoothScroll holds the
 * single Lenis rAF (via gsap.ticker) and forwards scroll events to
 * ScrollTrigger.update — we only register triggers here and let that shared
 * loop drive them. Adding another Lenis raf here would double-drive scroll.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const root = document.documentElement;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Reduced motion: reveal everything immediately, no triggers.
    if (reduce) {
      root.classList.add("no-anim");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Signals the CSS that GSAP is now in charge of `.reveal` elements.
    root.classList.add("ready");

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".reveal");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    });

    // Layout settles after fonts/media — make sure positions are correct.
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      root.classList.remove("ready");
    };
  }, []);

  return null;
}
