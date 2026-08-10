import type { Metadata } from "next";
import { Backdrop } from "@/components/ui/backdrop";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Conscious Rise about your website or digital product project.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Conscious Rise", description: "Discuss a Next.js, Webflow, Framer or WordPress project with Conscious Rise.", url: "/contact", images: ["/og-image.jpg"] },
  twitter: { title: "Contact Conscious Rise", description: "Discuss your website or web application project.", images: ["/og-image.jpg"] },
};

export default function ContactPage() {
  return (
    <>
      <Backdrop />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Conscious Rise",
        url: `${siteConfig.url}/contact`,
        mainEntity: { "@id": `${siteConfig.url}/#organization` },
      }} />
      <Interactions />
      <Nav />
      <main id="main" className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
