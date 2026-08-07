"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { cx } from "@/components/ui/primitives";

export function Nav() {
  const [open, setOpen] = useState(false);

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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-x relative z-20">
        <div className="flex h-24 items-center justify-between gap-4">
            <a href="#top" className="pointer-events-auto block" aria-label={`${site.name} home`}>
              <Image
                src="/assets/conscious-rise-logo.webp"
                alt={`${site.name} logo`}
                width={72}
                height={72}
                priority
                className="h-16 w-16 object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] sm:h-[4.5rem] sm:w-[4.5rem]"
              />
            </a>

            <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Upwork"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#ffffff] shadow-lg transition-transform hover:scale-105 sm:h-12 sm:w-12"
              >
                <Image
                  src="/assets/upwork-logo.svg"
                  alt="Upwork"
                  width={25}
                  height={25}
                  className="h-6 w-6 object-contain"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-full bg-[#991b3b] px-4 text-[0.72rem] font-semibold text-[#ffffff] shadow-lg transition-all hover:scale-[1.03] hover:bg-[#bc244a] sm:h-12 sm:px-6 sm:text-[0.82rem]"
              >
                Start a project
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffffff] text-[#11131c] shadow-lg transition-transform hover:scale-105 sm:h-12 sm:w-12"
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={cx(
                      "absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300",
                      open ? "top-[7px] rotate-45" : "top-0.5",
                    )}
                  />
                  <span
                    className={cx(
                      "absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity duration-300",
                      open && "opacity-0",
                    )}
                  />
                  <span
                    className={cx(
                      "absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300",
                      open ? "top-[7px] -rotate-45" : "top-[13px]",
                    )}
                  />
                </span>
              </button>
            </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cx(
          "pointer-events-auto fixed inset-0 z-10 bg-[#070912]/94 backdrop-blur-2xl transition-all duration-500 ease-out",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Primary" className="container-x flex h-full items-center py-28">
          <div className="mx-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-6 shadow-[0_30px_100px_-45px_rgba(0,0,0,0.9)] sm:px-10 sm:py-8">
            <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[#ff8ca5]">
              Navigation
            </p>
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={cx(
                  "group flex items-center justify-between border-b border-white/10 py-3.5 font-display text-[clamp(1.55rem,3vw,2.75rem)] font-medium tracking-[-0.035em] text-[rgba(255,255,255,0.76)] transition-all duration-500 last:border-b-0 hover:pl-2 hover:text-[#ffffff] sm:py-4",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
              >
                <span>{item.label}</span>
                <span className="flex items-center gap-4 font-mono text-[0.65rem] font-normal tracking-normal text-[#ff8ca5]">
                  {String(i + 1).padStart(2, "0")}
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="fixed inset-x-0 top-0 h-px overflow-hidden">
        <div id="scroll-progress" className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-fuchsia" />
      </div>
    </header>
  );
}
