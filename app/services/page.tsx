import type { Metadata } from "next";
import { Backdrop } from "@/components/ui/backdrop";
import { Footer } from "@/components/footer";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { StructuredData } from "@/components/structured-data";
import { Card, Eyebrow, Reveal } from "@/components/ui/primitives";
import { siteConfig } from "@/config/site";
import { servicePages } from "@/data/service-pages";

export const metadata: Metadata = {
  title: "Web Development & Automation Services",
  description:
    "Explore Conscious Rise services for websites, web applications, AI automation, integrations, e-commerce and technical SEO.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Web Development & Automation Services | Conscious Rise",
    description:
      "Websites, applications and connected digital systems built around clear business outcomes.",
    url: "/services",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    title: "Web Development & Automation Services | Conscious Rise",
    description:
      "Websites, applications and connected digital systems built around clear business outcomes.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  const pageUrl = `${siteConfig.url}/services`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#page`,
        name: "Conscious Rise Services",
        description: metadata.description,
        url: pageUrl,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: servicePages.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: `${pageUrl}/${service.slug}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Backdrop />
      <StructuredData data={structuredData} />
      <Interactions />
      <Nav />
      <main id="main" className="internal-page overflow-hidden pt-24">
        <section className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div aria-hidden className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-neon-fuchsia/[0.07] blur-3xl" />
          <div aria-hidden className="absolute -right-40 top-48 h-96 w-96 rounded-full bg-neon-cyan/[0.06] blur-3xl" />
          <div className="container-x relative">
            <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/40">
              <a href="/" className="transition-colors hover:text-white">Home</a>
              <span aria-hidden className="mx-2">/</span>
              <span>Services</span>
            </nav>
            <Reveal><Eyebrow>How Conscious Rise can help</Eyebrow></Reveal>
            <Reveal delay={70}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
                Digital solutions built to <span className="text-gradient">perform.</span>
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-7 max-w-3xl text-lg font-medium leading-8 tracking-[-0.015em] text-white/65">
                From focused websites to custom applications and connected workflows, every engagement starts with the outcome and uses the right tools for the job.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {servicePages.map((service, index) => (
                <Reveal key={service.slug} delay={(index % 3) * 80} className="h-full">
                  <a href={`/services/${service.slug}`} className="block h-full" aria-label={`Learn about ${service.title}`}>
                    <Card className="flex h-full flex-col p-7 sm:p-8">
                      <div className="relative z-10 flex h-full flex-col">
                        <span className="font-mono text-[0.68rem] tracking-[0.2em] text-neon-cyan">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="mt-7 font-display text-2xl font-semibold tracking-[-0.025em] text-white">
                          {service.shortTitle}
                        </h2>
                        <p className="mt-4 flex-1 leading-7 text-white/55">{service.description}</p>
                        <span className="mt-8 inline-flex items-center gap-2 font-semibold text-neon-cyan">
                          Explore service <span aria-hidden>→</span>
                        </span>
                      </div>
                    </Card>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 pt-8 sm:pb-32 sm:pt-12">
          <div className="container-x">
            <Reveal>
              <div className="rounded-[2rem] bg-[#4a0d1d] px-7 py-12 text-[#ffffff] sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#ffb0c0]">Not sure where to start?</p>
                  <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.03] tracking-[-0.045em]">
                    Tell me what the business needs to achieve.
                  </h2>
                </div>
                <a href="/contact" className="mt-8 inline-flex shrink-0 rounded-full bg-[#ffffff] px-6 py-3.5 text-sm font-semibold text-[#4a0d1d] transition-transform hover:-translate-y-0.5 lg:mt-0">
                  Start a project
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
