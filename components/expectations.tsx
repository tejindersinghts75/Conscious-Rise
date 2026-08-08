import { expectations } from "@/lib/content";
import { Reveal, SectionHeading } from "@/components/ui/primitives";

export function Expectations() {
  return (
    <section className="relative pt-24 sm:pt-28">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Working together"
              title={
                <>
                  What you can <span className="text-gradient">expect.</span>
                </>
              }
              lead="The technical work is the easy part. These are the things that decide whether a project is a pleasure or a problem."
            />

          </div>

          <ul className="space-y-4">
            {expectations.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
                <div className="group relative overflow-hidden rounded-2xl border border-neon-cyan/15 bg-[#ffffff] p-7 shadow-[0_18px_50px_-34px_rgba(119,12,38,0.32)] transition-all duration-500 hover:border-neon-cyan/30">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-neon-cyan to-neon-violet opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10">
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                        className="h-3 w-3 text-neon-cyan"
                      >
                        <path
                          d="M2.5 6.2 4.8 8.5 9.5 3.8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/50">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
