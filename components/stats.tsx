"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/stats";
import { Card } from "@/components/ui/primitives";

export function Stats() {
  return (
    <section className="relative pt-24 sm:pt-28">
      <div className="container-x">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={stat.label} className="p-7">
              <div className="relative z-10">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  delay={i * 120}
                />
                <p className="mt-3 text-[0.9375rem] font-medium text-white">{stat.label}</p>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-white/40">
                  {stat.detail}
                </p>
              </div>
              <span
                aria-hidden
                className="absolute -right-6 -top-8 font-display text-[7rem] font-bold leading-none text-white/[0.025]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({
  target,
  suffix,
  delay,
}: {
  target: number;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [value, setValue] = useState(target);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;
    const fallback = window.setTimeout(() => setValue(target), 2000);

    const run = () => {
      setValue(0);
      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // easeOutExpo: fast start, gentle settle
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setValue(Math.round(target * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started.current) continue;
          started.current = true;
          timer = setTimeout(run, delay);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, [target, delay]);

  return (
    <p
      ref={ref}
      className="font-display text-[2.75rem] font-semibold leading-none tracking-[-0.03em] text-white tabular-nums"
    >
      {value.toLocaleString("en-US")}
      <span className="text-gradient">{suffix}</span>
    </p>
  );
}
