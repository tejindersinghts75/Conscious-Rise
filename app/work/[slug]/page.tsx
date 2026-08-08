import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Backdrop } from "@/components/ui/backdrop";
import { Footer } from "@/components/footer";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { Eyebrow, Reveal } from "@/components/ui/primitives";
import { caseStudies } from "@/data/case-studies";
import { absoluteUrl } from "@/config/site";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: absoluteUrl(`/work/${project.slug}`) },
    openGraph: { title: `${project.title} — Conscious Rise`, description: project.description, url: absoluteUrl(`/work/${project.slug}`), images: [{ url: project.image }] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = caseStudies[index];
  const previous = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return <><Backdrop /><Interactions /><Nav /><main id="main" className="overflow-hidden pt-24">
    <section className="pb-16 pt-16 sm:pb-24 sm:pt-24"><div className="container-x">
      <Reveal><Eyebrow>{project.platform} · {project.year}</Eyebrow></Reveal>
      <Reveal delay={70}><h1 className="mt-6 max-w-5xl font-display text-[clamp(3.2rem,7vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">{project.title}</h1></Reveal>
      <Reveal delay={130}><div className="mt-7 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"><p className="max-w-2xl text-[clamp(1.08rem,2vw,1.35rem)] leading-relaxed text-white/60">{project.description}</p><a href={project.url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#991b3b] px-6 py-3.5 text-sm font-semibold text-[#ffffff]">View live site ↗</a></div></Reveal>
      <Reveal delay={180} className="mt-12"><div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-neon-cyan/15 bg-[#f7f2f3] shadow-[0_24px_70px_-40px_rgba(119,12,38,0.45)]"><Image src={project.image} alt={`${project.title} website homepage`} fill priority sizes="100vw" className="object-cover object-top" /></div></Reveal>
    </div></section>

    <CaseSection eyebrow="The brief" title="What the client needed."><div className="space-y-5">{project.brief.map((text) => <p key={text}>{text}</p>)}</div></CaseSection>
    <CaseSection eyebrow="What I built" title="From direction to production."><ul className="space-y-3">{project.built.map((text) => <li key={text} className="rounded-xl border border-neon-cyan/10 bg-[#ffffff] px-5 py-4">{text}</li>)}</ul><div className="mt-8 grid gap-4 sm:grid-cols-2">{project.supportingScreenshots.map((item) => <div key={item} className="grid aspect-video place-items-center rounded-2xl border border-dashed border-neon-cyan/25 bg-[#fff8f9] p-5 text-center font-mono text-xs text-white/45">{item}</div>)}</div></CaseSection>
    <CaseSection eyebrow="Decisions" title="Choices made with intent."><div className="grid gap-4 sm:grid-cols-2">{project.decisions.map((decision) => <article key={decision.title} className="rounded-2xl border border-neon-cyan/15 bg-[#ffffff] p-6"><h3 className="font-display text-xl font-semibold text-white">{decision.title}</h3><p className="mt-3">{decision.body}</p></article>)}</div></CaseSection>
    <CaseSection eyebrow="Result" title="The outcome."><div className="rounded-2xl border-l-4 border-neon-cyan bg-[#fff7f8] p-7 font-display text-xl font-medium text-white">[NEEDS INPUT] {project.result}</div></CaseSection>

    <section className="pb-24 pt-12 sm:pb-32"><div className="container-x"><div className="flex items-center justify-between gap-5 border-y border-neon-cyan/10 py-8"><a href={`/work/${previous.slug}`} className="text-sm font-semibold text-white">← {previous.title}</a><a href={`/work/${next.slug}`} className="text-right text-sm font-semibold text-white">{next.title} →</a></div><div className="mt-14 rounded-3xl bg-[#4a0d1d] p-8 text-[#ffffff] sm:flex sm:items-center sm:justify-between sm:p-12"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#ffb0c0]">Your project could be next</p><h2 className="mt-3 font-display text-3xl font-semibold">Let&apos;s build something useful.</h2></div><a href="/contact" className="mt-6 inline-flex rounded-full bg-[#ffffff] px-6 py-3 text-sm font-semibold text-[#4a0d1d] sm:mt-0">Start a project</a></div></div></section>
  </main><Footer /></>;
}

function CaseSection({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="py-16 sm:py-24"><div className="container-x grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"><Reveal><div className="lg:sticky lg:top-32"><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white">{title}</h2></div></Reveal><Reveal delay={80} className="text-[1rem] leading-8 text-white/55">{children}</Reveal></div></section>;
}
