import { services } from "@/lib/content";
import { Card, Reveal, SectionHeading } from "@/components/ui/primitives";

export function Services() {
  const count = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][services.length] ?? String(services.length);
  return (
    <section id="services" className="relative scroll-mt-24 pt-24 sm:pt-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I can help you with"
          title={
            <>
              {count} ways to get your
              <br className="hidden sm:block" /> project{" "}
              <span className="text-gradient">shipped.</span>
            </>
          }
          lead="From a focused website to connected systems and AI-assisted workflows, each solution is shaped around the business outcome, then built with the right tools."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 90}>
              <a href={service.href} className="block h-full" aria-label={`Learn about ${service.title}`}>
              <Card className="flex h-full flex-col p-7">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-[#8f1731]">
                      {service.glyph}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/25 transition-all duration-500 group-hover:border-neon-cyan/40 group-hover:text-neon-cyan">
                      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                        <path
                          d="M5 11 11 5M6 5h5v5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-white/50">
                    {service.blurb}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-[0.8125rem] text-white/45"
                      >
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden
                          className="h-3 w-3 shrink-0 text-neon-cyan/70"
                        >
                          <path
                            d="M2.5 6.2 4.8 8.5 9.5 3.8"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
              </a>
            </Reveal>
          ))}

          {/* CTA tile completes the 8-cell grid */}
          <Reveal delay={180}>
            <Card className="flex h-full flex-col justify-between overflow-hidden p-7">
              <div className="relative z-10">
                <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-neon-violet/80">
                  08
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-white">
                  Something else in mind?
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/50">
                  Migrations, audits, rescue projects and white-label work for
                  agencies. If it runs in a browser, let&apos;s talk about it.
                </p>
              </div>
              <a
                href="/contact"
                className="relative z-10 mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-white transition-colors hover:text-neon-cyan"
              >
                Tell me about it
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
