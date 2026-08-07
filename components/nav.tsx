"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { cx } from "@/components/ui/primitives";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cx(
          "transition-all duration-500 ease-out",
          scrolled
            ? "border-b border-white/[0.07] bg-void/85 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-x">
          <div className="flex h-[4.5rem] items-center justify-between gap-6">
            <a href="#top" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
              <Logo />
              <span className="font-display text-[0.95rem] font-semibold tracking-[-0.01em] text-white">
                {site.name}
              </span>
            </a>

            <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-[0.875rem] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 scale-90 rounded-full bg-white/[0.06] opacity-0 transition-all duration-300 hover:scale-100 hover:opacity-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="group relative hidden overflow-hidden rounded-full bg-white px-5 py-2.5 text-[0.8125rem] font-semibold text-void transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-neon-cyan to-neon-violet transition-transform duration-500 ease-out group-hover:translate-x-0"
                />
                <span className="relative z-10">Start a project</span>
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-white/25 md:hidden"
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={cx(
                      "absolute left-0 block h-px w-4 bg-current transition-all duration-300",
                      open ? "top-1.5 rotate-45" : "top-0",
                    )}
                  />
                  <span
                    className={cx(
                      "absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-300",
                      open && "opacity-0",
                    )}
                  />
                  <span
                    className={cx(
                      "absolute left-0 block h-px w-4 bg-current transition-all duration-300",
                      open ? "top-1.5 -rotate-45" : "top-3",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* scroll progress */}
        <div className="relative h-px w-full overflow-hidden">
          <div
            id="scroll-progress"
            className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-fuchsia"
          />
        </div>
      </div>

      {/* mobile sheet */}
      <div
        id="mobile-menu"
        className={cx(
          "md:hidden overflow-hidden border-b border-white/[0.07] bg-void/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-5">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
              className={cx(
                "flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-white/75 transition-all duration-300 hover:bg-white/[0.05] hover:text-white",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
            >
              {item.label}
              <span className="font-mono text-xs text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-white px-4 py-3.5 text-center text-base font-semibold text-void"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-gradient-to-br from-white/[0.12] to-transparent">
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden>
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="24" x2="24" y2="0">
            <stop offset="0%" stopColor="#d2042d" />
            <stop offset="100%" stopColor="#a8102e" />
          </linearGradient>
        </defs>
        <path
          d="M4 17.5 10.2 6.2a2 2 0 0 1 3.5 0L20 17.5"
          stroke="url(#logo-grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M8 17.5h8" stroke="url(#logo-grad)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="absolute inset-0 rounded-xl bg-neon-cyan/20 blur-md" />
    </span>
  );
}
