import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Backdrop } from "@/components/ui/backdrop";
import { Footer } from "@/components/footer";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { Eyebrow, Reveal } from "@/components/ui/primitives";
import { caseStudies } from "@/data/case-studies";
import { absoluteUrl, siteConfig } from "@/config/site";
import { StructuredData } from "@/components/structured-data";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) return {};
  const description = `${project.name} case study: ${project.role}, the work delivered, technology stack and responsive implementation.`;
  return { title: `${project.name} case study`, description, alternates: { canonical: absoluteUrl(`/work/${project.slug}`) }, openGraph: { title: `${project.name} case study | Conscious Rise`, description, url: absoluteUrl(`/work/${project.slug}`), images: [{ url: project.image, alt: `${project.name} website interface` }] }, twitter: { title: `${project.name} case study | Conscious Rise`, description, images: [project.image] } };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = caseStudies[index];
  const previous = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];
  return <><Backdrop /><StructuredData data={{ "@context": "https://schema.org", "@type": "CreativeWork", name: project.name, description: project.description, url: absoluteUrl(`/work/${project.slug}`), image: absoluteUrl(project.image), genre: project.sector, creator: { "@id": `${siteConfig.url}/#organization` } }} /><Interactions /><Nav />
    <main id="main" className="overflow-hidden pt-24">
      <section className="pb-16 pt-16 sm:pb-24 sm:pt-24"><div className="container-x">
        <Reveal><Eyebrow>{project.sector} · {project.platform}</Eyebrow></Reveal>
        <Reveal delay={70}><h1 className="mt-6 max-w-5xl font-display text-[clamp(3.2rem,7vw,6.6rem)] font-semibold leading-[.94] tracking-[-.055em] text-white">{project.name}</h1></Reveal>
        <Reveal delay={130}><div className="mt-7 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"><p className="max-w-2xl text-[clamp(1.08rem,2vw,1.35rem)] leading-relaxed text-white/60">{project.description}</p><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#991b3b] px-6 py-3.5 text-sm font-semibold text-[#ffffff] transition-transform hover:-translate-y-0.5">View live site ↗</a></div></Reveal>
        <Reveal delay={180} className="mt-12"><div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-[#f7f2f3] shadow-[0_24px_70px_-40px_rgba(119,12,38,.45)]"><Image src={project.image} alt={`${project.name} website shown on desktop`} fill priority sizes="100vw" className="object-cover object-top" /></div></Reveal>
      </div></section>
      <CaseSection eyebrow="Project overview" title="What the project is."><div className="space-y-5">{project.overview.map((text) => <p key={text}>{text}</p>)}</div><div className="mt-8 rounded-2xl border border-white/10 bg-white/[.04] p-6"><p className="font-mono text-[.65rem] uppercase tracking-[.18em] text-[#ff9bb4]">My role</p><p className="mt-3 font-display text-2xl font-semibold text-white">{project.role}</p></div></CaseSection>
      <CaseSection eyebrow="Technology stack" title="Tools used on this project."><div className="grid gap-4 sm:grid-cols-2">{project.stack.map((group) => <div key={group.group} className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><h3 className="font-mono text-[.65rem] uppercase tracking-[.18em] text-[#ff9bb4]">{group.group}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.05] px-4 py-2 text-sm text-white/80">{item}</span>)}</div></div>)}</div></CaseSection>
      <CaseSection eyebrow="What I built" title="The real work behind it."><ul className="grid gap-3">{project.built.map((text) => <li key={text} className="rounded-xl border border-white/10 bg-white/[.04] px-5 py-4 text-white/65">{text}</li>)}</ul></CaseSection>
      {project.flow ? <CaseSection eyebrow="How it works" title="A simple view of the journey."><ol className="relative grid gap-3">{project.flow.map((step, i) => <li key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#991b3b] font-mono text-xs font-semibold text-[#ffffff]">{i + 1}</span><span className="text-white/75">{step}</span>{i < project.flow!.length - 1 ? <span aria-hidden className="ml-auto text-[#991b3b]">↓</span> : null}</li>)}</ol></CaseSection> : null}
      <CaseSection eyebrow="Frontend & UX" title="Designed to work, not just look good."><ul className="space-y-4">{project.frontend.map((text) => <li key={text}>{text}</li>)}</ul></CaseSection>
      {project.integrations?.length ? <CaseSection eyebrow="Integrations" title="How the systems connect."><div className="grid gap-4">{project.integrations.map((integration) => <article key={integration.name} className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><h3 className="font-display text-xl font-semibold text-white">{integration.name}</h3><p className="mt-3">{integration.body}</p></article>)}</div></CaseSection> : null}
      <CaseSection eyebrow="Responsive development" title="Built for every screen."><p>{project.responsive}</p><div className="mt-6 grid grid-cols-3 gap-3">{["Desktop", "Tablet", "Mobile"].map((device) => <div key={device} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-5 text-center font-mono text-xs uppercase tracking-[.12em] text-white/70">{device}</div>)}</div></CaseSection>
      <CaseSection eyebrow="Performance & quality" title="The details that support the experience."><div className="flex flex-wrap gap-3">{project.quality.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5 text-sm text-white/70">{item}</span>)}</div></CaseSection>
      <section className="pb-24 pt-12 sm:pb-32"><div className="container-x"><div className="flex items-center justify-between gap-5 border-y border-white/10 py-8"><a href={`/work/${previous.slug}`} className="text-sm font-semibold text-white">← {previous.name}</a><a href={`/work/${next.slug}`} className="text-right text-sm font-semibold text-white">{next.name} →</a></div><div className="mt-14 rounded-3xl bg-[#4a0d1d] p-8 text-[#ffffff] sm:flex sm:items-center sm:justify-between sm:p-12"><div><p className="font-mono text-xs uppercase tracking-[.18em] text-[#ffb0c0]">Your project could be next</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#ffffff]">Let&apos;s build something useful.</h2></div><a href="/contact" className="mt-6 inline-flex rounded-full bg-[#ffffff] px-6 py-3 text-sm font-semibold text-[#4a0d1d] sm:mt-0">Start a project</a></div></div></section>
    </main><Footer /></>;
}

function CaseSection({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <section className="py-16 sm:py-24"><div className="container-x grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20"><Reveal><div className="lg:sticky lg:top-32"><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-.035em] text-white">{title}</h2></div></Reveal><Reveal delay={80} className="text-[1rem] leading-8 text-white/55">{children}</Reveal></div></section>; }
