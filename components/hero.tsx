import { Eyebrow, Reveal } from "@/components/ui/primitives";
import { marquee } from "@/lib/content";

export function Hero() {
  return (
    // Column layout: the copy block flexes to fill, the marquee sits on the
    // bottom edge as a real child so nothing is ever hidden underneath it.
    <section id="top" className="relative flex min-h-[100svh] flex-col pt-28">
      <div className="container-x relative flex flex-1 items-center pb-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ── Copy ─────────────────────────────────────────── */}
          <div>
            <Reveal>
              <Eyebrow>Available for new projects — 2026</Eyebrow>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 font-display text-[clamp(2.6rem,6.6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
                Websites that
                <br />
                <span className="text-gradient text-glow">look great,</span>
                <br />
                load fast, and
                <br />
                <span className="relative inline-block">
                  scale with you.
                  <svg
                    aria-hidden
                    viewBox="0 0 340 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-2.5 w-full text-neon-cyan/50"
                  >
                    <path
                      d="M2 8.5C64 3.5 138 2 338 4.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-white/55 sm:text-lg">
                I build modern websites and scalable digital products with{" "}
                <Highlight>Next.js</Highlight>, <Highlight>React</Highlight>,{" "}
                <Highlight>Webflow</Highlight>, <Highlight>Framer</Highlight> and{" "}
                <Highlight>WordPress</Highlight> — for startups, agencies and
                businesses that need the thing to actually work.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white px-7 py-4 text-[0.9375rem] font-semibold text-void transition-transform duration-300 hover:scale-[1.02]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-neon-cyan to-neon-violet transition-transform duration-500 ease-out group-hover:translate-x-0"
                  />
                  <span className="relative z-10">Start a project</span>
                  <svg
                    aria-hidden
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-[0.9375rem] font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                >
                  See the work
                </a>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <dl className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/[0.07] pt-7">
                {[
                  ["5+", "years experience"],
                  ["38", "projects delivered"],
                  ["2,170+", "hours worked"],
                ].map(([value, label]) => (
                  <div key={label} className="flex items-baseline gap-2.5">
                    <dt className="font-display text-2xl font-semibold tracking-tight text-white">
                      {value}
                    </dt>
                    <dd className="text-sm text-white/45">{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* ── Terminal panel ───────────────────────────────── */}
          <Reveal delay={280} className="hidden lg:block">
            <TerminalPanel />
          </Reveal>
        </div>
      </div>

      {/* ── Tech marquee ───────────────────────────────────── */}
      <div className="mt-auto border-y border-white/[0.06] bg-white/[0.015] py-4 backdrop-blur-sm">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_9%,#000_91%,transparent)]">
          <ul className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
            {[...marquee, ...marquee].map((tech, i) => (
              <li
                key={`${tech}-${i}`}
                className="flex shrink-0 items-center gap-3 font-mono text-[0.8125rem] tracking-wide text-white/35"
                aria-hidden={i >= marquee.length}
              >
                <span className="h-1 w-1 rounded-full bg-neon-cyan/50" />
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-white/90">{children}</span>;
}

function TerminalPanel() {
  const lines: Array<[string, string]> = [
    ["$", "npx create-next-app@latest"],
    ["›", "TypeScript ......... yes"],
    ["›", "Tailwind CSS ....... yes"],
    ["›", "App Router ......... yes"],
    ["✓", "Ready in 412ms"],
  ];

  const vitals = [
    { label: "LCP", value: "0.9s", pct: 94 },
    { label: "CLS", value: "0.00", pct: 100 },
    { label: "INP", value: "42ms", pct: 97 },
  ];

  return (
    <div className="card-hover relative rounded-2xl glass ring-gradient spotlight p-1.5 shadow-[0_40px_120px_-40px_rgba(210,4,45,0.25)]">
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[0.6875rem] tracking-wide text-white/30">
          ~/projects/client-site
        </span>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-void/60 p-5">
        <pre className="font-mono text-[0.8125rem] leading-[1.9]">
          {lines.map(([prefix, text]) => (
            <div key={text} className="flex gap-2.5">
              <span
                className={
                  prefix === "✓"
                    ? "text-[#28c840]"
                    : prefix === "$"
                      ? "text-neon-cyan"
                      : "text-white/25"
                }
              >
                {prefix}
              </span>
              <span className={prefix === "✓" ? "text-white/80" : "text-white/45"}>
                {text}
              </span>
            </div>
          ))}
          <div className="flex gap-2.5">
            <span className="text-neon-cyan">$</span>
            <span className="inline-block h-4 w-2 translate-y-0.5 bg-neon-cyan/80 animate-pulse" />
          </div>
        </pre>

        {/* core web vitals */}
        <div className="mt-6 space-y-3 border-t border-white/[0.06] pt-5">
          <p className="eyebrow">Core Web Vitals</p>
          {vitals.map((v) => (
            <div key={v.label} className="flex items-center gap-3">
              <span className="w-9 font-mono text-[0.6875rem] text-white/40">{v.label}</span>
              <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                  style={{ width: `${v.pct}%` }}
                />
              </span>
              <span className="w-12 text-right font-mono text-[0.6875rem] text-white/70">
                {v.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
