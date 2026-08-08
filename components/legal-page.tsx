import { Backdrop } from "@/components/ui/backdrop";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Interactions } from "@/components/interactions";
import { Reveal } from "@/components/ui/primitives";

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: string[][] }) {
  return <><Backdrop /><Interactions /><Nav /><main id="main" className="pt-24"><section className="pb-24 pt-20 sm:pb-32 sm:pt-28"><div className="container-x"><Reveal><p className="eyebrow">Legal · Last updated {updated}</p><h1 className="mt-5 font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold tracking-[-0.05em] text-white">{title}</h1></Reveal><div className="mt-14 max-w-3xl space-y-10">{sections.map(([heading, body], index) => <Reveal key={heading} delay={(index % 3) * 60}><section><h2 className="font-display text-2xl font-semibold text-white">{heading}</h2><p className="mt-3 leading-8 text-white/55">{body}</p></section></Reveal>)}</div></div></section></main><Footer /></>;
}
