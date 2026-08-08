import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Reveal, SectionHeading } from "@/components/ui/primitives";

const isPlaceholder = (value?: string) => !value || value.startsWith("{{");

export function Testimonials() {
  return (
    <section className="relative pt-24 sm:pt-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client feedback"
          title={<>What clients say after we <span className="text-gradient">ship.</span></>}
          lead="Verified feedback from clients who hired me through Upwork."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-neon-cyan/15 bg-[#ffffff] p-7 shadow-[0_18px_50px_-34px_rgba(119,12,38,0.32)]">
                <span aria-hidden className="font-serif text-5xl leading-none text-neon-cyan/20">“</span>
                <blockquote className="mt-3 flex-1 text-[1rem] leading-7 text-white/60">{item.quote}</blockquote>
                <div className="mt-7 flex items-center gap-3 border-t border-neon-cyan/10 pt-5">
                  {!isPlaceholder(item.photo) ? (
                    <Image src={item.photo!} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                  ) : (
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fff1f4] font-display text-sm font-semibold text-white">T{index + 1}</span>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                    <p className="mt-0.5 text-xs text-white/40">{item.role}{item.company ? ` · ${item.company}` : ""}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
