import Image from "next/image";
import { hasBookingUrl, siteConfig } from "@/config/site";

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
  return (
    <section id="top" className="relative flex h-[100svh] flex-col overflow-hidden bg-[#090b16]">
      <Image
        src="/assets/conscious-rise-hero.png"
        alt="A futuristic landscape with a glowing cherry portal and the Conscious Rise identity"
        fill
        priority
        sizes="100vw"
        quality={82}
        className="object-cover object-center [image-rendering:auto]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,6,14,0.5),transparent_28%,transparent_72%,rgba(4,6,14,0.5)),linear-gradient(180deg,rgba(4,6,14,0.18),transparent_55%,rgba(4,6,14,0.66))]" />
      <div className="absolute inset-y-0 left-0 w-[27%] bg-gradient-to-r from-[#050711]/55 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_right,#000_0%,rgba(0,0,0,0.88)_58%,transparent_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[27%] bg-gradient-to-l from-[#050711]/55 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_left,#000_0%,rgba(0,0,0,0.88)_58%,transparent_100%)]" />

      <div className="container-x relative z-10 hidden flex-1 justify-between pt-32 pb-12 lg:flex">
        <div className="grid w-60 grid-rows-4 content-center gap-5">
          {leftServices.map(([icon, title, description]) => (
            <ServiceItem key={title} icon={icon} title={title} description={description} />
          ))}
        </div>
        <div className="grid w-60 grid-rows-4 content-center gap-5 text-right">
          {rightServices.map(([icon, title, description]) => (
            <ServiceItem key={title} icon={icon} title={title} description={description} align="right" />
          ))}
        </div>
      </div>

      <div className="container-x pointer-events-none absolute inset-0 z-20 flex items-center justify-center pt-24">
        <div className="pointer-events-auto mx-auto max-w-3xl text-center">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#ffb0c0]">Conscious Rise · Web development studio</p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,5.3vw,5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#ffffff] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
            Figma files turned into fast, maintainable websites.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[clamp(0.95rem,1.5vw,1.12rem)] leading-relaxed text-[rgba(255,255,255,0.76)]">
            Next.js, Webflow, Framer and WordPress builds for startups and agencies in the UK and US. Nine live projects, fixed scope, shipped on time.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-[#991b3b] px-6 py-3 text-sm font-semibold text-[#ffffff] shadow-xl transition-all hover:-translate-y-0.5 hover:bg-[#bc244a]">Start a project</a>
            {hasBookingUrl ? <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-[#ffffff]/30 bg-[#070912]/35 px-6 py-3 text-sm font-semibold text-[#ffffff] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[#ffffff]/60">Book a 20 minute call</a> : null}
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
}: {
  icon: string;
  title: string;
  description: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`flex min-h-[6.5rem] w-full flex-col justify-center transition-transform duration-300 hover:scale-[1.03] ${align === "right" ? "hero-service-right items-end" : "hero-service-left items-start"}`}>
      <ServiceIcon name={icon} className={align === "right" ? "ml-auto" : "mr-auto"} />
      <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#ffffff]">
        {title}
      </p>
      <p className="mt-1.5 text-[0.68rem] leading-relaxed text-[rgba(255,255,255,0.72)]">
        {description}
      </p>
    </div>
  );
}

function ServiceIcon({ name, className = "" }: { name: string; className?: string }) {
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-7 w-7 text-[#ff8ca5] ${className}`} aria-hidden>
      {paths[name]}
    </svg>
  );
}
