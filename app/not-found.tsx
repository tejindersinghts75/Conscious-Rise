import type { Metadata } from "next";
import { Backdrop } from "@/components/ui/backdrop";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Backdrop />
      <Nav />
      <main id="main" className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="mt-5 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-semibold tracking-[-0.05em] text-white">
          This page has moved.
        </h1>
        <p className="mt-5 max-w-lg leading-7 text-white/55">
          The address may be outdated. Return home or browse the latest work.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/" className="rounded-full bg-[#991b3b] px-6 py-3 text-sm font-semibold text-[#ffffff]">Go home</a>
          <a href="/work" className="rounded-full border border-neon-cyan/20 bg-[#ffffff] px-6 py-3 text-sm font-semibold text-white">View work</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
