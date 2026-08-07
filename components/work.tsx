import { work } from "@/lib/content";
import { Card, Reveal, SectionHeading } from "@/components/ui/primitives";

// NOTE: These are placeholder case studies. Swap the entries in `lib/content.ts`
// for real projects (and real numbers) before this site goes live.

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Built, launched, <span className="text-gradient">measured.</span>
            </>
          }
          lead="A sample of recent projects across the stack — and what actually changed for the business afterwards."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {work.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 100}>
              <Card className="h-full p-0">
                {/* preview plate */}
                <div className="relative h-44 overflow-hidden border-b border-white/[0.06]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[4.5rem] font-bold leading-none tracking-tight text-white/[0.06] transition-transform duration-700 group-hover:scale-110">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4">
                    <span className="font-mono text-[0.6875rem] tracking-wide text-white/45">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 font-mono text-[0.6875rem] font-medium text-neon-cyan">
                      {item.result}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 p-7">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/50">
                    {item.body}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-white/40">
            Want the full case studies, with metrics and references?{" "}
            <a
              href="/contact"
              className="font-medium text-white underline decoration-neon-cyan/40 underline-offset-4 transition-colors hover:text-neon-cyan"
            >
              Ask and I&apos;ll send them over.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
