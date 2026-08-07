import type { Metadata } from "next";
import { Backdrop } from "@/components/ui/backdrop";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Conscious Rise about your website or digital product project.",
};

export default function ContactPage() {
  return (
    <>
      <Backdrop />
      <Interactions />
      <Nav />
      <main id="main" className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
