import type { ReactNode } from "react";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Wraps content in a scroll-reveal container. `delay` is in milliseconds. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
}) {
  return (
    <Tag
      data-reveal
      className={cx("reveal", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 eyebrow">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-neon-cyan animate-pulse-ring" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-cyan" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={140}>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/55">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

/** Glass card with an animated gradient ring and mouse-follow spotlight. */
export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "card-hover group relative isolate overflow-hidden rounded-2xl glass ring-gradient spotlight",
        "transition-[transform,border-color,box-shadow] duration-500 ease-out",
        "hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_24px_70px_-30px_rgba(210,4,45,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.6875rem] tracking-wide text-white/60 transition-colors duration-300 hover:border-neon-cyan/40 hover:text-neon-cyan">
      {children}
    </span>
  );
}
