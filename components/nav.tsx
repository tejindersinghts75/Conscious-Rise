"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { cx } from "@/components/ui/primitives";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [overDarkBackground, setOverDarkBackground] = useState(pathname === "/");

  useEffect(() => {
    const updateLogoContrast = () => {
      setOverDarkBackground(pathname === "/" && window.scrollY < window.innerHeight - 112);
    };
    updateLogoContrast();
    window.addEventListener("scroll", updateLogoContrast, { passive: true });
    window.addEventListener("resize", updateLogoContrast);
    return () => {
      window.removeEventListener("scroll", updateLogoContrast);
      window.removeEventListener("resize", updateLogoContrast);
    };
  }, [pathname]);

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
            <a
              href="/"
              className={cx(
                "pointer-events-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full transition-all duration-300",
                open
                  ? "pointer-events-none -translate-y-3 opacity-0"
                  : overDarkBackground
                  ? "bg-transparent"
                  : "border border-[rgba(255,255,255,0.82)] bg-[rgba(255,255,255,0.7)] shadow-[0_10px_30px_-16px_rgba(74,13,29,0.45)] backdrop-blur-xl",
              )}
              aria-label={`${site.name} home`}
            >
              <Image
                src={open || overDarkBackground ? "/assets/conscious-rise-logo-white.svg" : "/assets/conscious-rise-logo-black.svg"}
                alt={`${site.name} logo`}
                width={72}
                height={72}
                priority
                fetchPriority="high"
                className={cx(
                  "h-16 w-16 object-contain transition-[filter,opacity] duration-300 sm:h-[4.5rem] sm:w-[4.5rem]",
                  overDarkBackground
                    ? "drop-shadow-[0_6px_10px_rgba(0,0,0,0.95)]"
                    : "drop-shadow-[0_6px_18px_rgba(0,0,0,0.4)]",
                )}
              />
            </a>

            <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
              <a
                href={site.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Upwork profile"
                className={cx(
                  "flex h-11 items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.72)] bg-[rgba(255,255,255,0.82)] px-3 backdrop-blur-xl transition-all duration-300 hover:scale-105 sm:h-12",
                  overDarkBackground ? "shadow-[0_7px_16px_rgba(0,0,0,0.78)]" : "shadow-lg",
                  open && "pointer-events-none -translate-y-3 opacity-0",
                )}
              >
                <Image
                  src="/assets/upwork-logo.svg"
                  alt="Upwork"
                  width={25}
                  height={25}
                  className="h-6 w-6 object-contain"
                />
                <span className="hidden text-xs font-semibold text-[#4a0d1d] lg:inline">Upwork profile</span>
              </a>
              <a
                href="/contact"
                className={cx(
                  "inline-flex h-11 items-center rounded-full border border-white/10 bg-[#991b3b]/90 px-4 text-[0.72rem] font-semibold text-[#ffffff] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-[#bc244a]/95 sm:h-12 sm:px-6 sm:text-[0.82rem]",
                  overDarkBackground ? "shadow-[0_7px_16px_rgba(0,0,0,0.78)]" : "shadow-lg",
                  open && "pointer-events-none -translate-y-3 opacity-0",
                )}
              >
                Start a project
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className={cx(
                  "flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:scale-105 sm:h-12 sm:w-12",
                  overDarkBackground ? "shadow-[0_7px_16px_rgba(0,0,0,0.78)]" : "shadow-lg",
                  open
                    ? "border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] text-[#ffffff]"
                    : "border-[rgba(255,255,255,0.72)] bg-[rgba(255,255,255,0.82)] text-[#11131c]",
                )}
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
          "pointer-events-auto fixed inset-0 z-10 overflow-y-auto bg-[#050505] text-[#ffffff] transition-all duration-700 ease-out",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Primary" className="grid min-h-full lg:grid-cols-2">
          <div className="relative flex min-h-[42svh] items-center justify-center overflow-hidden border-b border-[rgba(255,255,255,0.12)] px-6 py-28 lg:min-h-screen lg:border-b-0 lg:border-r lg:px-12">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(210,4,45,0.15),transparent_38%)]" />
            <div className="relative flex flex-col items-center text-center">
              <Image
                src="/assets/conscious-rise-logo-white.svg"
                alt=""
                width={150}
                height={150}
                className={cx(
                  "h-24 w-24 object-contain transition-all duration-1000 ease-out sm:h-32 sm:w-32",
                  open ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-90 opacity-0",
                )}
              />
              <h2 aria-label="Conscious Rise" className="mt-5 flex flex-wrap justify-center gap-x-[0.28em] overflow-hidden font-display text-[clamp(2rem,3.5vw,3.65rem)] font-semibold uppercase leading-none tracking-[-0.055em]">
                {["Conscious", "Rise"].map((word, wordIndex) => (
                  <span key={word} className="whitespace-nowrap">
                    {word.split("").map((letter, letterIndex) => (
                      <span
                        key={`${word}-${letterIndex}`}
                        aria-hidden
                        style={{ transitionDelay: open ? `${240 + wordIndex * 330 + letterIndex * 45}ms` : "0ms" }}
                        className={cx(
                          "inline-block transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                          open ? "translate-y-0 rotate-0 opacity-100" : "translate-y-[115%] rotate-3 opacity-0",
                        )}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                ))}
              </h2>
              <p
                style={{ transitionDelay: open ? "900ms" : "0ms" }}
                className={cx(
                  "mt-5 max-w-sm text-sm leading-6 text-[rgba(255,255,255,0.58)] transition-all duration-700",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                Websites, web applications and automation—built clearly, shipped reliably.
              </p>
            </div>
          </div>

          <div className="flex min-h-[58svh] flex-col pt-24 lg:min-h-screen">
            <div className="flex flex-[1.05] flex-col justify-center border-b border-[rgba(255,255,255,0.12)] px-7 py-10 sm:px-10 lg:px-[clamp(2.5rem,5vw,5.5rem)] lg:py-8">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.45)]">Menu</p>
                <div className="mt-3 max-w-md">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Work", href: "/work" },
                    { label: "Contact", href: "/contact" },
                    { label: "Services", href: "/#services" },
                  ].map((item, i) => (
                    <a
                      key={`${item.href}-${item.label}`}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      style={{ transitionDelay: open ? `${180 + i * 55}ms` : "0ms" }}
                      className={cx(
                        "group flex items-center justify-between py-0.5 font-display text-[clamp(1.2rem,1.65vw,1.65rem)] font-medium leading-[1.25] tracking-[-0.035em] text-[rgba(255,255,255,0.86)] transition-all duration-700 hover:pl-1.5 hover:text-[#ffffff]",
                        open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="translate-x-2 text-xs text-[#ff8ca5] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">{item.label === "Services" ? "⌄" : "↗"}</span>
                    </a>
                  ))}
                </div>
            </div>

            <div className="flex flex-1 flex-col justify-center border-b border-[rgba(255,255,255,0.12)] px-7 py-10 sm:px-10 lg:px-[clamp(2.5rem,5vw,5.5rem)] lg:py-8">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.45)]">Let&apos;s talk</p>
                <a href={`mailto:${site.email}`} className="mt-3 flex max-w-xl items-end justify-between gap-4 border-b border-[rgba(255,255,255,0.38)] pb-2 font-display text-[clamp(1.05rem,1.6vw,1.45rem)] font-medium tracking-[-0.025em] text-[#ffffff] transition-colors hover:border-[#ff8ca5] hover:text-[#ffb0c1]">
                  <span className="break-all">{site.email}</span><span aria-hidden>+</span>
                </a>
                <p className="mt-5 max-w-lg text-xs leading-5 text-[rgba(255,255,255,0.48)]">Welcoming clients worldwide · UK and US projects are a priority</p>
                <div className="mt-8">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.45)]">Socials</p>
                  <a href={site.upworkUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-3 text-xs text-[rgba(255,255,255,0.72)] transition-colors hover:text-[#ffffff]">
                    <Image src="/assets/upwork-logo.svg" alt="" width={24} height={24} className="h-6 w-6 rounded-full bg-[#ffffff] p-0.5" />
                    Upwork profile <span aria-hidden>↗</span>
                  </a>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-7 py-6 text-[0.68rem] text-[rgba(255,255,255,0.48)] sm:px-10 lg:px-[clamp(2.5rem,5vw,5.5rem)]">
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <a href="/privacy" onClick={() => setOpen(false)} className="hover:text-[#ffffff]">Privacy Policy ↗</a>
                  <a href="/terms" onClick={() => setOpen(false)} className="hover:text-[#ffffff]">Terms of Use ↗</a>
                </div>
                <span>© {new Date().getFullYear()} Conscious Rise. All rights reserved.</span>
            </div>
          </div>
        </nav>
      </div>

      <div className="fixed inset-x-0 top-0 h-px overflow-hidden">
        <div id="scroll-progress" className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-fuchsia" />
      </div>
    </header>
  );
}
