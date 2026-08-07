"use client";

import { useEffect } from "react";

/**
 * A single delegated client script for the whole page, so every section can
 * stay a server component. Handles three things:
 *   1. scroll-reveal via IntersectionObserver
 *   2. mouse-follow spotlight on cards (CSS custom properties)
 *   3. the scroll progress bar in the header
 */
export function Interactions() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── 1. Scroll reveal ────────────────────────────────────────
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let cleanupReveal: (() => void) | undefined;

    if (reduceMotion) {
      targets.forEach((el) => el.classList.add("is-revealed"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
      );
      targets.forEach((el) => io.observe(el));
      cleanupReveal = () => io.disconnect();
    }

    // ── 2. Spotlight ────────────────────────────────────────────
    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = (event.target as HTMLElement | null)?.closest<HTMLElement>(".spotlight");
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        el.style.setProperty("--my", `${event.clientY - rect.top}px`);
      });
    };

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer && !reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    // ── 3. Scroll progress ──────────────────────────────────────
    const bar = document.getElementById("scroll-progress");
    let progressFrame = 0;
    const onScroll = () => {
      if (progressFrame) return;
      progressFrame = requestAnimationFrame(() => {
        progressFrame = 0;
        if (!bar) return;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? window.scrollY / max : 0;
        bar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cleanupReveal?.();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      if (progressFrame) cancelAnimationFrame(progressFrame);
    };
  }, []);

  return null;
}
