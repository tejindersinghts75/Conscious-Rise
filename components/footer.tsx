import Image from "next/image";
import { nav, site, stackGroups } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07] pt-24 pb-10 sm:pt-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/conscious-rise-logo.png"
              alt={`${site.name} logo`}
              width={88}
              height={88}
              className="h-20 w-20 rounded-full object-cover"
            />
            <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-white/45">
              A great website should look great, load fast, and scale as your
              business grows. That&apos;s the whole job.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-white transition-colors hover:text-neon-cyan"
            >
              {site.email}
              <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5">
                <path
                  d="M5 11 11 5M6 5h5v5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 space-y-3">
              {[...nav, { label: "FAQ", href: "#faq" }].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.9375rem] text-white/45 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Built with</p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
              {stackGroups
                .flatMap((g) => g.items)
                .slice(0, 12)
                .map((item) => (
                  <li key={item} className="font-mono text-[0.75rem] text-white/35">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="font-mono text-[0.75rem] text-white/30">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-mono text-[0.75rem] text-white/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#28c840] animate-pulse-ring" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#28c840]" />
            </span>
            Available for new projects
          </p>
        </div>
      </div>
    </footer>
  );
}
