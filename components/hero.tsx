import Image from "next/image";
import { Eyebrow, Reveal } from "@/components/ui/primitives";
import { marquee } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] flex-col overflow-hidden bg-[#090b16]">
      <Image
        src="/assets/conscious-rise-hero.png"
        alt="A futuristic landscape with a glowing cherry portal and the Conscious Rise identity"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center [image-rendering:auto]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,16,0.82)_0%,rgba(5,7,16,0.48)_34%,rgba(5,7,16,0.04)_68%),linear-gradient(180deg,rgba(5,7,16,0.28)_0%,transparent_42%,rgba(5,7,16,0.58)_100%)]" />

      <div className="container-x relative z-10 flex flex-1 items-center pt-20 pb-6 sm:pt-24 lg:pt-28">
        <div className="max-w-2xl">
            <Reveal>
              <div className="[&_.eyebrow]:!text-[rgba(255,255,255,0.7)]">
                <Eyebrow>Available for new projects — 2026</Eyebrow>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[clamp(2.65rem,5.3vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[#ffffff] drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)]">
                Websites that
                <br />
                <span className="text-[#ff5b7f] text-glow">look great,</span>
                <br />
                load fast, and scale.
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[rgba(255,255,255,0.78)] drop-shadow-md sm:text-[1.0625rem]">
                I build modern websites and scalable digital products with{" "}
                <Highlight>Next.js</Highlight>, <Highlight>React</Highlight>,{" "}
                <Highlight>Webflow</Highlight>, <Highlight>Framer</Highlight> and{" "}
                <Highlight>WordPress</Highlight> — for startups, agencies and
                businesses that need the thing to actually work.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#ffffff] px-7 py-4 text-[0.9375rem] font-semibold text-[#4a0d1d] transition-transform duration-300 hover:scale-[1.02]"
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
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-black/20 px-7 py-4 text-[0.9375rem] font-medium text-[rgba(255,255,255,0.92)] backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:text-[#ffffff]"
                >
                  See the work
                </a>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <dl className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/20 pt-5">
                {[
                  ["5+", "years experience"],
                  ["38", "projects delivered"],
                  ["2,170+", "hours worked"],
                ].map(([value, label]) => (
                  <div key={label} className="flex items-baseline gap-2.5">
                    <dt className="font-display text-2xl font-semibold tracking-tight text-[#ffffff]">
                      {value}
                    </dt>
                    <dd className="text-sm text-[rgba(255,255,255,0.65)]">{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
        </div>
      </div>

      {/* ── Tech marquee ───────────────────────────────────── */}
      <div className="relative z-10 mt-auto border-y border-white/15 bg-black/25 py-4 backdrop-blur-sm">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_9%,#000_91%,transparent)]">
          <ul className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
            {[...marquee, ...marquee].map((tech, i) => (
              <li
                key={`${tech}-${i}`}
                className="flex shrink-0 items-center gap-3 font-mono text-[0.8125rem] tracking-wide text-[rgba(255,255,255,0.65)]"
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
  return <span className="font-medium text-[rgba(255,255,255,0.95)]">{children}</span>;
}
