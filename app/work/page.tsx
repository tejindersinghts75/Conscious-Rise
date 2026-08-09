import type { Metadata } from "next";
import { Backdrop } from "@/components/ui/backdrop";
import { Footer } from "@/components/footer";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/work";
import { Eyebrow, Reveal } from "@/components/ui/primitives";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore live websites built by Conscious Rise across Framer, Next.js and Webflow.",
  alternates: { canonical: "/work" },
  openGraph: { url: "/work", images: ["/og-image.jpg"] },
};

export default function WorkPage() {
  return (
    <>
      <Backdrop />
      <Interactions />
      <Nav />
      <main id="main" className="overflow-hidden pt-24">
        <section className="relative pb-14 pt-16 sm:pb-20 sm:pt-24">
          <div aria-hidden className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-neon-fuchsia/[0.07] blur-3xl" />
          <div aria-hidden className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-neon-cyan/[0.06] blur-3xl" />
          <div className="container-x relative">
            <Reveal><Eyebrow>Portfolio</Eyebrow></Reveal>
            <Reveal delay={70}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
                Work that lives in the <span className="text-gradient">real world.</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <p className="max-w-2xl text-[clamp(1.05rem,1.8vw,1.3rem)] leading-relaxed text-white/60">
                  {projects.length} live digital experiences across wellness, finance, food, hospitality, mobility and personal brands—designed and developed in the platform that best fit each project.
                </p>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {["Framer", "Next.js", "Webflow"].map((platform) => (
                    <span key={platform} className="rounded-full border border-neon-cyan/15 bg-[#ffffff] px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/55">{platform}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-24 pt-8 sm:pb-32 sm:pt-12">
          <div className="container-x">
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 2) * 90} className="h-full">
                  <ProjectCard project={project} priority={index < 2} headingLevel={2} />
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-20">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#4a0d1d] px-7 py-12 text-[#ffffff] shadow-[0_28px_90px_-42px_rgba(74,13,29,0.7)] sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
                <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#ffffff]/10" />
                <div className="relative">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#ffb0c0]">Have something in mind?</p>
                  <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em]">Let&apos;s make the next one yours.</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#ffffff]/60">Tell me what you are building and I&apos;ll recommend a practical platform, scope and next step.</p>
                </div>
                <a href="/contact" className="relative mt-8 inline-flex shrink-0 items-center gap-3 rounded-full bg-[#ffffff] px-6 py-3.5 text-sm font-semibold text-[#4a0d1d] transition-transform hover:-translate-y-0.5 lg:mt-0">Start a project <span aria-hidden>→</span></a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
