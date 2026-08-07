import Image from "next/image";
import { Reveal } from "@/components/ui/primitives";

export function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] flex-col overflow-hidden bg-[#090b16]">
      <Image
        src="/assets/conscious-rise-hero.png"
        alt="A futuristic landscape with a glowing cherry portal and the Conscious Rise identity"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center [image-rendering:auto]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,16,0.82)_0%,rgba(5,7,16,0.48)_34%,rgba(5,7,16,0.04)_68%),linear-gradient(180deg,rgba(5,7,16,0.28)_0%,transparent_42%,rgba(5,7,16,0.58)_100%)]" />

      <div className="container-x relative z-10 flex flex-1 items-end pb-12 pt-28 sm:pb-16 lg:pb-20">
        <div className="w-full max-w-[80rem]">
            <Reveal>
              <p className="max-w-4xl text-lg leading-relaxed text-[rgba(255,255,255,0.82)] drop-shadow-md sm:text-xl lg:text-2xl">
                I build modern websites and scalable digital products with{" "}
                <Highlight>Next.js</Highlight>, <Highlight>React</Highlight>,{" "}
                <Highlight>Webflow</Highlight>, <Highlight>Framer</Highlight> and{" "}
                <Highlight>WordPress</Highlight> — for startups, agencies and
                businesses that need the thing to actually work.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1
                className="mt-7 max-w-[78rem] font-display font-semibold tracking-[-0.06em] text-[#ffffff] drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                style={{ fontSize: "85px", lineHeight: "100%" }}
              >
                Websites that <span className="text-[#ff5b7f] text-glow">look great,</span>
                <br />
                load fast, and scale.
              </h1>
            </Reveal>
        </div>
      </div>
    </section>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-[rgba(255,255,255,0.95)]">{children}</span>;
}
