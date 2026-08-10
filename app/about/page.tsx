import type { Metadata } from "next";
import Image from "next/image";
import { Backdrop } from "@/components/ui/backdrop";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Card, Eyebrow, Reveal } from "@/components/ui/primitives";
import { stats } from "@/data/stats";
import { siteConfig } from "@/config/site";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "About Tejinder Singh",
  description:
    "Meet Tejinder Singh, the web developer behind Conscious Rise—building thoughtful, fast and maintainable websites since 2019.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Tejinder Singh — Conscious Rise", description: "Meet Tejinder Singh, the developer behind Conscious Rise, building fast and maintainable websites since 2019.", url: "/about", images: ["/og-image.jpg"] },
  twitter: { title: "About Tejinder Singh — Conscious Rise", description: "Meet Tejinder Singh, the developer behind Conscious Rise.", images: ["/og-image.jpg"] },
};

const facts = stats.slice(0, 3).map((stat) => [
  `${stat.value.toLocaleString("en-US")}${stat.suffix}`,
  stat.label,
]);

const principles = [
  {
    number: "01",
    title: "Clarity before code",
    body: "I start by understanding the goal, the audience and the constraints. The right solution is not always the most complicated one—and I will say so when a simpler build serves you better.",
  },
  {
    number: "02",
    title: "Care in the details",
    body: "Responsive states, loading speed, accessibility and the small interactions between screens all matter. They are part of the work, not optional polish added at the end.",
  },
  {
    number: "03",
    title: "Communication you can rely on",
    body: "You should never need to chase an update. I share progress clearly, raise questions early and keep timelines grounded in what can actually be delivered well.",
  },
];

const capabilities = [
  "Next.js & React applications",
  "Webflow development",
  "Framer websites",
  "WordPress & WooCommerce",
  "Figma-to-production builds",
  "API integrations",
  "Performance optimisation",
];

export default function AboutPage() {
  return (
    <>
      <Backdrop />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: `${siteConfig.url}/about`,
        mainEntity: { "@id": `${siteConfig.url}/#founder` },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
          ],
        },
      }} />
      <Nav />

      <main id="main" className="overflow-hidden pt-24">
        <section className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div aria-hidden className="absolute -left-44 top-8 h-96 w-96 rounded-full bg-neon-fuchsia/[0.08] blur-3xl" />
          <div aria-hidden className="absolute -right-40 top-56 h-96 w-96 rounded-full bg-neon-cyan/[0.07] blur-3xl" />

          <div className="container-x relative">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div>
                <Reveal>
                  <Eyebrow>About Conscious Rise</Eyebrow>
                </Reveal>
                <Reveal delay={70}>
                  <h1 className="mt-6 max-w-3xl font-display text-[clamp(3.25rem,7vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
                    Hi, I&apos;m <span className="text-gradient">{siteConfig.ownerName}.</span>
                  </h1>
                </Reveal>
                <Reveal delay={130}>
                  <p className="mt-7 max-w-2xl text-[clamp(1.15rem,2vw,1.45rem)] leading-relaxed text-white/70">
                    I&apos;m the web developer behind Conscious Rise. Since 2019,
                    I&apos;ve helped startups, agencies and businesses turn ideas and
                    designs into fast, dependable digital products.
                  </p>
                </Reveal>
                <Reveal delay={190}>
                  <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-white/50">
                    My work sits between design and engineering: understanding what a
                    business needs, choosing the right platform, and building an
                    experience that is polished for visitors and practical for the
                    people who maintain it.
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a href="/contact" className="rounded-full bg-[#991b3b] px-6 py-3.5 text-sm font-semibold text-[#ffffff] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#bc244a]">
                      Work with me
                    </a>
                    <a href="/work" className="group inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-[#ffffff] px-6 py-3.5 text-sm font-semibold text-[#4a0d1d] shadow-[0_10px_30px_-20px_rgba(119,12,38,0.5)] transition-all hover:-translate-y-0.5 hover:border-neon-cyan/40">
                      See my work
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={120} className="mx-auto w-full max-w-[34rem]">
                <div className="about-photo-float relative">
                  <div aria-hidden className="absolute -inset-4 -rotate-3 rounded-[2.2rem] border border-neon-cyan/10 bg-[#fff6f7]" />
                  <div aria-hidden className="about-orbit absolute -right-8 -top-8 h-20 w-20 rounded-full border border-dashed border-neon-cyan/30" />
                  <div aria-hidden className="absolute -bottom-7 -left-7 grid h-16 w-16 place-items-center rounded-full border border-neon-cyan/15 bg-[#ffffff] shadow-lg">
                    <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/50">Since<br />2019</span>
                  </div>
                  <div className="relative overflow-hidden rounded-[2rem] border border-neon-cyan/20 bg-[#ffffff] p-2 shadow-[0_30px_90px_-40px_rgba(119,12,38,0.45)]">
                    <div className="relative aspect-[5/6.4] overflow-hidden rounded-[1.55rem] bg-[#f5efeb]">
                      <Image
                        src={siteConfig.ownerPhoto}
                        alt={`${siteConfig.ownerName}, web developer and owner of Conscious Rise`}
                        fill
                        sizes="(max-width: 1024px) 90vw, 42vw"
                        className="object-cover object-top"
                      />
                      <div aria-hidden className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#3f0c19]/45 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 rounded-2xl border border-[#ffffff]/20 bg-[#4a0d1d]/90 p-4 shadow-xl backdrop-blur-md">
                        <div>
                          <p className="font-display text-lg font-semibold text-[#ffffff]">{siteConfig.ownerName}</p>
                          <p className="mt-0.5 text-xs text-[#ffffff]/60">Web developer · Conscious Rise</p>
                        </div>
                        <span className="flex shrink-0 items-center gap-2 rounded-full bg-[#fff5f6] px-3 py-2 font-mono text-[0.62rem] uppercase tracking-wider text-white/65">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" /> Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-20 grid overflow-hidden rounded-3xl border border-neon-cyan/15 bg-[#ffffff] shadow-[0_18px_50px_-34px_rgba(119,12,38,0.32)] sm:grid-cols-3">
              {facts.map(([value, label], index) => (
                <Reveal key={label} delay={index * 70} className="group relative overflow-hidden border-b border-neon-cyan/10 p-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-9">
                  <span aria-hidden className="absolute -right-2 -top-7 font-display text-[7rem] font-bold leading-none text-[#4a0d1d]/[0.025] transition-transform duration-500 group-hover:-translate-x-2">0{index + 1}</span>
                  <p className="relative font-display text-4xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                  <p className="relative mt-2 text-sm leading-relaxed text-white/50">{label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <Eyebrow>The story</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
                  One person, fully accountable.
                </h2>
              </div>
            </Reveal>
            <div className="space-y-7 text-[1.06rem] leading-8 text-white/58">
              <Reveal>
                <p>
                  Conscious Rise is the name I work under, but the relationship is
                  personal. When we start a project, you work directly with me—from
                  the first conversation and technical decisions through development,
                  testing and launch.
                </p>
              </Reveal>
              <Reveal delay={70}>
                <p>
                  Over the past five-plus years, I have worked across custom React and
                  Next.js products, no-code and low-code platforms, and established
                  content and commerce systems. That range helps me choose a tool for
                  the job instead of forcing every project into the same stack.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  What matters most to me is making the finished work useful: quick to
                  load, easy to understand, straightforward to update and solid enough
                  to grow with the business behind it. Good design earns attention;
                  thoughtful engineering keeps earning trust after launch.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <blockquote className="relative overflow-hidden rounded-2xl border border-neon-cyan/15 bg-[#fff7f8] px-7 py-7 font-display text-[1.35rem] font-medium leading-relaxed text-white shadow-[0_18px_50px_-38px_rgba(119,12,38,0.45)] sm:px-9">
                  <span aria-hidden className="absolute -right-1 -top-8 font-serif text-[9rem] leading-none text-neon-cyan/[0.07]">“</span>
                  <span className="relative">“I want clients to understand what is being built, why it is being built that way, and what they will own when the work is done.”</span>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <Eyebrow>How I work</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
                A straightforward way of working.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {principles.map((item, index) => (
                <Reveal key={item.number} delay={index * 80} className="h-full">
                  <Card className="h-full p-7 sm:p-9">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs tracking-[0.2em] text-neon-cyan">{item.number}</span>
                        <span className="grid h-9 w-9 place-items-center rounded-full border border-neon-cyan/10 text-neon-cyan/50 transition-all duration-500 group-hover:rotate-45 group-hover:border-neon-cyan/30 group-hover:text-neon-cyan">↗</span>
                      </div>
                      <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.025em] text-white">{item.title}</h3>
                      <p className="mt-4 text-[0.95rem] leading-7 text-white/52">{item.body}</p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 pt-16 sm:pb-32 sm:pt-24">
          <div className="container-x">
            <div className="overflow-hidden rounded-[2rem] bg-[#4a0d1d] px-7 py-12 text-[#ffffff] shadow-[0_28px_90px_-40px_rgba(74,13,29,0.7)] sm:px-12 sm:py-16 lg:px-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
                <Reveal>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#ffb0c0]">What I build</p>
                  <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.03] tracking-[-0.045em]">
                    The right platform, built with care.
                  </h2>
                  <p className="mt-5 max-w-xl leading-7 text-[#ffffff]/60">
                    From a focused marketing website to a custom application, I can
                    take an existing design into production or help shape the solution
                    from the beginning.
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {capabilities.map((item) => (
                      <li key={item} className="group flex items-center gap-3 rounded-xl border border-[#ffffff]/10 bg-[#ffffff]/[0.045] px-4 py-3 text-sm text-[#ffffff]/75 transition-all duration-300 hover:translate-x-1 hover:border-[#ff8ca5]/35 hover:bg-[#ffffff]/[0.08]">
                        <span className="text-[#ff8ca5] transition-transform duration-300 group-hover:rotate-45">↗</span>{item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <Reveal delay={160}>
                <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[#ffffff]/10 pt-8 sm:flex-row sm:items-center">
                  <p className="max-w-xl text-sm leading-6 text-[#ffffff]/55">Have a project in mind? Tell me what you are trying to achieve. I&apos;ll reply with honest questions and a practical next step.</p>
                  <a href="/contact" className="shrink-0 rounded-full bg-[#ffffff] px-6 py-3.5 text-sm font-semibold text-[#4a0d1d] transition-transform hover:-translate-y-0.5">Start a conversation</a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
