import { Backdrop } from "@/components/ui/backdrop";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { Process } from "@/components/process";
import { Work } from "@/components/work";
import { Expectations } from "@/components/expectations";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { faqs } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Web Development Studio for Startups & Agencies",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Conscious Rise — Web Development Studio", description: siteConfig.description, url: "/", images: ["/og-image.jpg"] },
  twitter: { title: "Conscious Rise — Web Development Studio", description: siteConfig.description, images: ["/og-image.jpg"] },
};

export default function Home() {
  return (
    <>
      <Backdrop />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }} />
      <Interactions />
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Stack />
        <Process />
        <Work />
        <Testimonials />
        <Expectations />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
import type { Metadata } from "next";
