"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cx } from "@/components/ui/primitives";

type StoryChapter = {
  label: string;
  title: string;
  highlight: string;
  body: string;
};

const crops = [
  "object-center scale-100",
  "object-[42%_36%] scale-[1.13]",
  "object-[58%_68%] scale-[1.22]",
];

function splitBody(body: string) {
  const sentences = body.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence) => sentence.trim()) ?? [body];
  return {
    lead: sentences.slice(0, 1).join(" "),
    rest: sentences.slice(1).join(" "),
  };
}

export function ServiceStory({
  image,
  imageAlt,
  chapters,
}: {
  image: string;
  imageAlt: string;
  chapters: StoryChapter[];
}) {
  const [active, setActive] = useState(0);
  const chapterRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.storyIndex);
        if (Number.isFinite(index)) setActive(index);
      },
      { rootMargin: "-30% 0px -35% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );

    chapterRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-clip bg-[#4a0d1d] text-[#ffffff]">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,176,193,0.12),transparent_32%),radial-gradient(circle_at_88%_76%,rgba(255,255,255,0.06),transparent_30%)]" />
      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:py-0">
        <div className="relative lg:h-full">
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-[#ffffff]/15 bg-[#f5e9e5] shadow-[0_35px_100px_-40px_rgba(0,0,0,0.7)] lg:max-h-[76vh]">
            {chapters.map((chapter, index) => (
              <Image
                key={`${chapter.label}-${index}`}
                src={image}
                alt={index === 0 ? imageAlt : ""}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className={cx(
                  "object-cover transition-[opacity,transform,filter] duration-1000 ease-out",
                  crops[index % crops.length],
                  active === index ? "opacity-100 blur-0" : "opacity-0 blur-sm",
                )}
                priority={index === 0}
              />
            ))}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#26040d]/35 via-transparent to-[#ffffff]/5" />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-full border border-[#ffffff]/20 bg-[#2e0712]/65 px-4 py-3 backdrop-blur-xl">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#ffffff]/70">{chapters[active]?.label}</span>
              <span className="font-mono text-[0.62rem] tracking-[0.18em] text-[#ffb0c1]">0{active + 1} / 0{chapters.length}</span>
            </div>
          </div>
          </div>
        </div>

        <div>
          {chapters.map((chapter, index) => {
            const copy = splitBody(chapter.body);
            return (
              <article
                key={chapter.title}
                ref={(node) => { chapterRefs.current[index] = node; }}
                data-story-index={index}
                className="flex min-h-[78vh] flex-col justify-center border-b border-[#ffffff]/12 py-20 last:border-b-0 lg:min-h-screen lg:py-28"
              >
                <div className={cx("transition-all duration-700", active === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-55")}>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#ffb0c1]">{chapter.label}</p>
                  <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.2vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#ffffff]">
                    {chapter.title}
                  </h2>
                  <p className="mt-7 max-w-2xl text-[1.08rem] leading-8 text-[#ffffff]/72">
                    <strong className="font-semibold text-[#ffffff]">{copy.lead}</strong>{copy.rest ? ` ${copy.rest}` : ""}
                  </p>
                  <div className="mt-8 max-w-xl border-l-2 border-[#ff8ca5] pl-5">
                    <p className="font-display text-xl font-semibold leading-snug text-[#ffffff]">{chapter.highlight}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
