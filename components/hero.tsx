"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

const RotatingGlobe = dynamic(
  () => import("@/components/rotating-globe").then((module) => module.RotatingGlobe),
  { ssr: false },
);

const leftServices = [
  ["develop", "Develop", "Scalable web solutions built for performance and growth."],
  ["design", "Design", "Clean, modern and conversion-focused digital experiences."],
  ["automate", "Automate", "Intelligent workflows that save time and increase efficiency."],
  ["optimize", "Optimize", "Data-driven strategies for visibility, performance and long-term results."],
] as const;

const rightServices = [
  ["integrate", "Integrate", "Connect your tools, systems and data seamlessly."],
  ["scale", "Scale", "Future-ready systems that grow with your business."],
  ["innovate", "Innovate", "AI-powered solutions that unlock new possibilities."],
  ["secure", "Secure", "Reliable architecture and protection built into every layer."],
] as const;

export function Hero() {
  const [activeService, setActiveService] = useState<{ icon: string; title: string } | null>(null);

  return (
    <section id="top" className="relative flex h-[100svh] flex-col overflow-hidden bg-[#090b16]">
      <Image
        src="/assets/conscious-rise-background.png"
        alt="A futuristic cosmic landscape with a glowing rose-coloured galaxy and digital horizon"
        fill
        priority
        sizes="100vw"
        quality={82}
        className="z-[1] object-cover object-center [image-rendering:auto]"
      />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[72%] z-[2] h-[12%] w-[min(48vw,31rem)] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(185,139,255,0.28)_0%,rgba(105,70,175,0.22)_42%,rgba(0,0,0,0.1)_58%,transparent_76%)] blur-xl" />
      <div className="hero-globe-shell pointer-events-none absolute left-1/2 top-[47%] z-[2] aspect-square w-[min(80vw,33rem)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(59vw,37rem)] lg:w-[min(40vw,39rem)]">
        <RotatingGlobe />
      </div>
      <Image
        src="/assets/conscious-rise-foreground.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        quality={88}
        className="pointer-events-none z-[3] object-cover object-center"
      />
      <div className="absolute inset-0 z-[4] bg-[linear-gradient(90deg,rgba(4,6,14,0.5),transparent_28%,transparent_72%,rgba(4,6,14,0.5)),linear-gradient(180deg,rgba(4,6,14,0.18),transparent_55%,rgba(4,6,14,0.66))]" />
      <div className="absolute inset-y-0 left-0 z-[4] w-[27%] bg-gradient-to-r from-[#050711]/55 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_right,#000_0%,rgba(0,0,0,0.88)_58%,transparent_100%)]" />
      <div className="absolute inset-y-0 right-0 z-[4] w-[27%] bg-gradient-to-l from-[#050711]/55 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_left,#000_0%,rgba(0,0,0,0.88)_58%,transparent_100%)]" />

      <div className="container-x relative z-10 hidden flex-1 justify-between pt-32 pb-12 lg:flex">
        <div className="grid w-60 grid-rows-4 content-center gap-5">
          {leftServices.map(([icon, title, description]) => (
            <ServiceItem key={title} icon={icon} title={title} description={description} onActivate={setActiveService} />
          ))}
        </div>
        <div className="grid w-60 grid-rows-4 content-center gap-5 text-right">
          {rightServices.map(([icon, title, description]) => (
            <ServiceItem key={title} icon={icon} title={title} description={description} align="right" onActivate={setActiveService} />
          ))}
        </div>
      </div>

      <div className="container-x pointer-events-none absolute inset-0 z-20 flex items-end justify-start pb-20 pt-24 lg:items-center lg:justify-center lg:pb-0">
        <div className="relative w-full max-w-[46rem] text-left lg:mx-auto lg:w-[75%] lg:-translate-y-[50px] lg:text-center">
          <div aria-hidden className="absolute -inset-x-28 -inset-y-20 scale-110 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.4)_34%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.06)_72%,transparent_86%)] blur-xl" />
          <h1 className={`relative z-10 grid w-full gap-2 font-display text-[clamp(1.45rem,7vw,2.1rem)] font-semibold uppercase leading-[0.98] tracking-[-0.045em] text-[#ffffff] [text-shadow:0_3px_8px_rgba(0,0,0,0.9),0_10px_32px_rgba(0,0,0,0.72)] transition-[opacity,transform,filter] duration-500 ease-out sm:gap-3 lg:text-[clamp(1.05rem,3.8vw,3.6rem)] ${activeService ? "scale-[0.72] opacity-0 blur-md" : "scale-100 opacity-100 blur-0"}`}>
            <span className="hero-title-line-top block whitespace-nowrap">
              <span className="hero-title-text-top inline-block">Built in the right stack</span>
            </span>
            <span className="hero-title-line-bottom block whitespace-nowrap">
              <span className="hero-title-text-bottom inline-block">Shipped when promised</span>
            </span>
          </h1>
          <div
            aria-hidden
            className={`absolute inset-0 z-20 hidden items-center justify-center transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:flex ${activeService ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-24 scale-75 opacity-0 blur-md"}`}
          >
            {activeService ? (
              <div key={activeService.title} className="hero-icon-float flex flex-col items-center gap-5 drop-shadow-[0_12px_14px_rgba(0,0,0,0.9)]">
                <ServiceIcon name={activeService.icon} large />
                <span className="font-mono text-[15px] font-semibold uppercase tracking-[0.2em] text-[#ffffff] [text-shadow:0_3px_7px_rgba(0,0,0,0.95)]">
                  {activeService.title}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

    </section>
  );
}

function ServiceItem({
  icon,
  title,
  description,
  align = "left",
  onActivate,
}: {
  icon: string;
  title: string;
  description: string;
  align?: "left" | "right";
  onActivate: (service: { icon: string; title: string } | null) => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => onActivate({ icon, title })}
      onMouseLeave={() => onActivate(null)}
      onFocus={() => onActivate({ icon, title })}
      onBlur={() => onActivate(null)}
      aria-label={`Preview ${title}`}
      className={`flex min-h-[6.5rem] w-full cursor-pointer flex-col justify-center drop-shadow-[0_4px_7px_rgba(0,0,0,0.92)] transition-[transform,filter] duration-300 hover:scale-[1.04] hover:drop-shadow-[0_7px_10px_rgba(0,0,0,0.98)] focus-visible:rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff8ca5] ${align === "right" ? "hero-service-right items-end text-right" : "hero-service-left items-start text-left"}`}
    >
      <ServiceIcon name={icon} className={align === "right" ? "ml-auto" : "mr-auto"} />
      <p className="mt-2 font-mono text-[15px] font-semibold uppercase leading-[1.3] tracking-[0.14em] text-[#ffffff] [text-shadow:0_2px_6px_rgba(0,0,0,0.95)]">
        {title}
      </p>
      <p className="mt-1.5 text-[15px] leading-[1.3] text-[rgba(255,255,255,0.82)] [text-shadow:0_2px_6px_rgba(0,0,0,0.95)]">
        {description}
      </p>
    </button>
  );
}

function ServiceIcon({ name, className = "", large = false }: { name: string; className?: string; large?: boolean }) {
  const paths: Record<string, React.ReactNode> = {
    develop: <><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.3 2.2 3.5 4.9 3.5 8S14.3 17.8 12 20c-2.3-2.2-3.5-4.9-3.5-8S9.7 6.2 12 4Z" /></>,
    design: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-5 3 2-16" />,
    automate: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2.1 2.1M16.9 16.9 19 19M19 5l-2.1 2.1M7.1 16.9 5 19" /></>,
    optimize: <path d="M4 20V11m5 9V7m5 13v-5m5 5V3M2 20h20" />,
    integrate: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="17" r="2" /><circle cx="19" cy="17" r="2" /><path d="M12 7v4m0 0-5.5 4M12 11l5.5 4" /></>,
    scale: <><path d="M5 18h13a4 4 0 0 0 .7-7.9A7 7 0 0 0 5.6 9 4.5 4.5 0 0 0 5 18Z" /><path d="M9 14h6" /></>,
    innovate: <><path d="M9 18h6M10 21h4" /><path d="M8.5 15.5A7 7 0 1 1 15.5 15.5c-1 .7-1.5 1.4-1.5 2.5h-4c0-1.1-.5-1.8-1.5-2.5Z" /></>,
    secure: <><path d="M12 3 5 6v5c0 4.8 2.9 8.1 7 10 4.1-1.9 7-5.2 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    applications: <><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={large ? "1.15" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`${large ? "h-36 w-36 text-[#ff9bb0]" : "h-7 w-7 text-[#ff8ca5]"} ${className}`} aria-hidden>
      {paths[name]}
    </svg>
  );
}
