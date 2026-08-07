import Image from "next/image";

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
] as const;

const capabilities = [
  ["develop", "Web Development"],
  ["applications", "Web Applications"],
  ["integrate", "Integrations"],
  ["automate", "Automation"],
  ["innovate", "AI Solutions"],
  ["optimize", "SEO & Performance"],
] as const;

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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,6,14,0.5),transparent_28%,transparent_72%,rgba(4,6,14,0.5)),linear-gradient(180deg,rgba(4,6,14,0.18),transparent_55%,rgba(4,6,14,0.66))]" />

      <div className="container-x relative z-10 hidden flex-1 justify-between pt-32 pb-36 lg:flex">
        <div className="flex w-52 flex-col justify-center gap-8">
          {leftServices.map(([icon, title, description]) => (
            <ServiceItem key={title} icon={icon} title={title} description={description} />
          ))}
        </div>
        <div className="flex w-52 flex-col justify-center gap-12 text-right">
          {rightServices.map(([icon, title, description]) => (
            <ServiceItem key={title} icon={icon} title={title} description={description} align="right" />
          ))}
        </div>
      </div>

      <div className="container-x relative z-10 mt-auto pb-5 sm:pb-7">
        <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/15 bg-[#080a14]/58 px-2 py-4 shadow-2xl backdrop-blur-xl sm:grid-cols-6 sm:px-4">
          {capabilities.map(([icon, label]) => (
            <div key={label} className="flex min-h-16 flex-col items-center justify-center gap-2 border-white/15 px-2 text-center sm:border-r sm:last:border-r-0">
              <ServiceIcon name={icon} className="h-6 w-6" />
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.88)] sm:text-[0.64rem]">
                {label}
              </span>
            </div>
          ))}
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
    <div className={align === "right" ? "ml-auto" : "mr-auto"}>
      <ServiceIcon name={icon} className={align === "right" ? "ml-auto" : "mr-auto"} />
      <h1 className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#ffffff]">
        {title}
      </h1>
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
    applications: <><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-7 w-7 text-[#ff8ca5] ${className}`} aria-hidden>
      {paths[name]}
    </svg>
  );
}
