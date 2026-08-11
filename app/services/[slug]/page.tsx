import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Backdrop } from "@/components/ui/backdrop";
import { Footer } from "@/components/footer";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { StructuredData } from "@/components/structured-data";
import { ServiceStory } from "@/components/service-story";
import { Card, Eyebrow, Reveal } from "@/components/ui/primitives";
import { servicePageBySlug, servicePages } from "@/data/service-pages";
import { siteConfig } from "@/config/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePageBySlug.get(slug);
  if (!service) return {};

  const url = `/services/${service.slug}`;
  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.seoTitle} — Conscious Rise`,
      description: service.description,
      url,
      images: ["/og-image.jpg"],
      type: "website",
    },
    twitter: {
      title: `${service.seoTitle} — Conscious Rise`,
      description: service.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicePageBySlug.get(slug);
  if (!service) notFound();

  const pageUrl = `${siteConfig.url}/services/${service.slug}`;
  const related = service.related
    .map((relatedSlug) => servicePageBySlug.get(relatedSlug))
    .filter((item) => item !== undefined);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: service.title,
        description: service.description,
        url: pageUrl,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: ["India", "United Kingdom", "United States", "Worldwide"],
        serviceType: service.title,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
          { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <Backdrop />
      <StructuredData data={structuredData} />
      <Interactions />
      <Nav />
      <main id="main" className="overflow-hidden pt-24">
        <section className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div aria-hidden className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-neon-fuchsia/[0.07] blur-3xl" />
          <div aria-hidden className="absolute -right-40 top-48 h-96 w-96 rounded-full bg-neon-cyan/[0.06] blur-3xl" />
          <div className="container-x relative">
            <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/40">
              <a href="/" className="transition-colors hover:text-white">Home</a>
              <span aria-hidden className="mx-2">/</span>
              <a href="/#services" className="transition-colors hover:text-white">Services</a>
              <span aria-hidden className="mx-2">/</span>
              <span>{service.shortTitle}</span>
            </nav>
            <Reveal><Eyebrow>{service.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={70}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.65rem,5.5vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-7 max-w-3xl text-[clamp(1.08rem,1.8vw,1.45rem)] font-medium leading-[1.5] tracking-[-0.015em] text-white/75">
                {service.hero}
              </p>
            </Reveal>
            <Reveal delay={190}>
              <p className="mt-6 max-w-3xl text-[1.05rem] leading-8 text-white/55">{service.audience}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="/contact" className="rounded-full bg-[#991b3b] px-6 py-3.5 text-sm font-semibold text-[#ffffff] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#bc244a]">
                  Discuss your project
                </a>
                <a href="/work" className="rounded-full border border-neon-cyan/20 bg-[#ffffff] px-6 py-3.5 text-sm font-semibold text-[#4a0d1d] shadow-sm transition-all hover:-translate-y-0.5 hover:border-neon-cyan/40">
                  View relevant work
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <ServiceStory
          image={service.visual}
          imageAlt={service.visualAlt}
          chapters={service.overview.map((body, index) => ({
            body,
            label: service.storyLabels[index],
            title: service.storyTitles[index],
            highlight: service.storyHighlights[index],
          }))}
        />

        <section className="py-20 sm:py-28">
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <Eyebrow>Business outcomes</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
                What a successful engagement should improve.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {service.outcomes.map((outcome, index) => (
                <Reveal key={outcome.title} delay={index * 80} className="h-full">
                  <Card className="h-full p-7 sm:p-9">
                    <span className="font-mono text-[0.68rem] tracking-[0.18em] text-neon-cyan">0{index + 1}</span>
                    <h3 className="mt-7 font-display text-2xl font-semibold tracking-[-0.025em] text-white">{outcome.title}</h3>
                    <p className="mt-4 leading-7 text-white/55">{outcome.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <Eyebrow>Typical deliverables</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
                  A complete, usable handover.
                </h2>
                <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl border border-neon-cyan/10 bg-[#ffffff] p-4 text-sm leading-6 text-white/60 shadow-sm">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Card className="p-7 sm:p-9">
                <Eyebrow>Tools selected for the job</Eyebrow>
                <p className="mt-6 text-lg leading-8 text-white/65">
                  Technology is chosen around ownership, maintainability and the required workflow. These are common tools, not a compulsory stack.
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {service.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-neon-cyan/15 bg-[#fff7f8] px-4 py-2 font-mono text-[0.7rem] tracking-wide text-white/60">{technology}</span>
                  ))}
                </div>
                <div className="mt-10 border-t border-neon-cyan/10 pt-8">
                  <p className="font-display text-2xl font-semibold text-white">Direct senior involvement</p>
                  <p className="mt-3 leading-7 text-white/55">You work directly with Tejinder Singh from discovery through implementation, testing and handover.</p>
                  <a href="/about" className="mt-5 inline-flex font-semibold text-neon-cyan hover:underline">About Conscious Rise →</a>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <Eyebrow>How the project runs</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
                Clear stages and visible progress.
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <Reveal key={step.title} delay={index * 70} as="li" className="h-full">
                  <Card className="h-full p-7">
                    <span className="font-mono text-[0.68rem] tracking-[0.18em] text-neon-cyan">0{index + 1}</span>
                    <h3 className="mt-6 font-display text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/55">{step.body}</p>
                  </Card>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <Eyebrow>Frequently asked questions</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
                  Useful answers before we talk.
                </h2>
              </div>
            </Reveal>
            <div className="divide-y divide-neon-cyan/10 border-y border-neon-cyan/10">
              {service.faqs.map((faq, index) => (
                <Reveal key={faq.q} delay={index * 55} className="py-7">
                  <h3 className="font-display text-xl font-semibold leading-snug text-white">{faq.q}</h3>
                  <p className="mt-3 leading-7 text-white/55">{faq.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-10 pt-20 sm:pt-28">
          <div className="container-x">
            <Reveal>
              <Eyebrow>Related services</Eyebrow>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <a key={item.slug} href={`/services/${item.slug}`} className="group rounded-2xl border border-neon-cyan/12 bg-[#ffffff] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-neon-cyan/35 hover:shadow-lg">
                    <span className="font-display text-xl font-semibold text-white">{item.shortTitle}</span>
                    <span aria-hidden className="mt-5 block text-neon-cyan transition-transform group-hover:translate-x-1">→</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-24 pt-20 sm:pb-32">
          <div className="container-x">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-[#4a0d1d] px-7 py-12 text-[#ffffff] shadow-[0_28px_90px_-42px_rgba(74,13,29,0.7)] sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#ffb0c0]">Start with a practical conversation</p>
                  <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em]">Tell me what needs to work better.</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#ffffff]/65">You will get a clear recommendation on scope, platform and the most useful next step—even when that means starting smaller.</p>
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
