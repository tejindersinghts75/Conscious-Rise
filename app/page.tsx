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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/", images: ["/og-image.jpg"] },
};

export default function Home() {
  return (
    <>
      <Backdrop />
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
