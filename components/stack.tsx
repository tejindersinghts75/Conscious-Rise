import { stackGroups } from "@/lib/content";
import { Card, Pill, Reveal, SectionHeading } from "@/components/ui/primitives";

const icons: Record<string, React.ReactNode> = {
  bolt: <path d="M9 2 3.5 10h4l-.5 6L14 8h-4.5L10 2z" />,
  palette: (
    <>
      <circle cx="9" cy="9" r="7" />
      <circle cx="6" cy="7" r="1.1" />
      <circle cx="11" cy="6" r="1.1" />
      <circle cx="12.5" cy="10.5" r="1.1" />
    </>
  ),
  layers: <path d="M9 2 2 6l7 4 7-4-7-4zM2 11l7 4 7-4" />,
  puzzle: (
    <path d="M7 2h4v2.2a1.6 1.6 0 1 0 3 1.5V9h2v4h-2.2a1.6 1.6 0 1 0-1.5 3H9v-2.2a1.6 1.6 0 1 0-3-1.5V10H4V6h2.2A1.6 1.6 0 1 0 7 3z" />
  ),
  wrench: <path d="M12.5 2a4 4 0 0 0-4.9 5.1L2 12.7 5.3 16l5.6-5.6A4 4 0 0 0 16 5.5L13.6 8 10 4.4 12.5 2z" />,
};

export function Stack() {
  return (
    <section id="stack" className="relative scroll-mt-24 pt-24 sm:pt-28">
      {/* section band */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.09] to-transparent"
      />

      <div className="container-x">
        <SectionHeading
          eyebrow="Tech stack"
          title={
            <>
              The tools behind the <span className="text-gradient">builds.</span>
            </>
          }
          lead="Deliberately chosen and genuinely known — not a logo wall. Each of these has shipped real production work."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={(i % 3) * 90}
              className={i === 0 ? "lg:col-span-2" : undefined}
            >
              <Card className="h-full p-7">
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-neon-cyan">
                      <svg
                        viewBox="0 0 18 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                        className="h-4 w-4"
                      >
                        {icons[group.icon]}
                      </svg>
                    </span>
                    <h3 className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-white">
                      {group.label}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}

          <Reveal delay={180}>
            <Card className="h-full p-7">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="eyebrow">Figma to production</p>
                  <p className="mt-4 font-display text-[1.0625rem] font-semibold leading-snug text-white">
                    Send the file — get the live site.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[0.6875rem] text-white/40">
                  <span className="rounded-md bg-white/[0.06] px-2 py-1 text-white/70">Figma</span>
                  <Arrow />
                  <span>Next.js</span>
                  <Arrow />
                  <span>Webflow</span>
                  <Arrow />
                  <span>Framer</span>
                  <Arrow />
                  <span>WordPress</span>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden className="h-3 w-3 text-neon-cyan/50">
      <path
        d="M2 6h8M7 3l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
