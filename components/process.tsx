import { process } from "@/lib/content";
import { Reveal, SectionHeading } from "@/components/ui/primitives";

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Four steps. No <span className="text-gradient">surprises.</span>
            </>
          }
          lead="You always know where the project stands, what happens next and when it lands."
        />

        <ol className="relative mt-16 space-y-px">
          {/* connecting spine */}
          <div
            aria-hidden
            className="absolute left-[1.6875rem] top-4 bottom-4 hidden w-px bg-gradient-to-b from-neon-cyan/45 via-neon-violet/25 to-transparent sm:block"
          />

          {process.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 90}>
              <div className="group relative grid gap-5 rounded-2xl px-0 py-8 transition-colors duration-500 sm:grid-cols-[3.5rem_1fr] sm:gap-8 sm:px-4 sm:hover:bg-white/[0.02]">
                <div className="relative">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-abyss font-mono text-sm text-white/60 transition-all duration-500 group-hover:border-neon-cyan/50 group-hover:text-neon-cyan group-hover:shadow-[0_0_30px_-6px_rgba(210,4,45,0.4)]">
                    {step.step}
                  </span>
                </div>

                <div className="sm:pt-2.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-white">
                      {step.title}
                    </h3>
                    <span className="rounded-full border border-white/[0.08] px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/35">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-white/50">
                    {step.body}
                  </p>
                </div>
              </div>

              {i < process.length - 1 ? (
                <div
                  aria-hidden
                  className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
                />
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
