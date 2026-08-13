import { faqs } from "@/lib/content";
import { Reveal, SectionHeading } from "@/components/ui/primitives";
import { hasBookingUrl, siteConfig } from "@/config/site";

/** Native <details>, zero JavaScript and keyboard accessible for free. */
export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 pt-24 sm:pt-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Questions"
          title={
            <>
              Answered before you <span className="text-gradient">ask.</span>
            </>
          }
          align="center"
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-[1.0625rem] font-medium tracking-[-0.01em] text-white/85 transition-colors group-hover:text-white">
                    {faq.q}
                  </span>
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-neon-cyan/40 group-hover:text-neon-cyan group-open:rotate-45">
                    <svg viewBox="0 0 12 12" fill="none" aria-hidden className="h-3 w-3">
                      <path
                        d="M6 2v8M2 6h8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-14 text-[0.9375rem] leading-relaxed text-white/50">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
        {hasBookingUrl ? <Reveal className="mt-10 text-center">
          <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-neon-cyan/20 bg-[#ffffff] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-neon-cyan/40">Book a 20 minute call</a>
        </Reveal> : null}
      </div>
    </section>
  );
}
