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
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

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
        <Expectations />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
