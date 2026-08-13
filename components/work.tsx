import Image from "next/image";
import { projects, type Project } from "@/lib/content";
import { Reveal, SectionHeading } from "@/components/ui/primitives";

const projectCountWords: Record<number, string> = { 9: "nine" };

export function Work() {
  const featured = projects.slice(0, 4);

  return (
    <section id="work" className="relative scroll-mt-24 pt-24 sm:pt-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Real websites, built for <span className="text-gradient">real businesses.</span></>}
            lead="Live sites, built in the platform that fit the job."
          />
          <Reveal delay={160}>
            <a href="/work" className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-neon-cyan/20 bg-[#ffffff] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_-24px_rgba(119,12,38,0.5)] transition-all hover:-translate-y-0.5 hover:border-neon-cyan/40">
              See all {projectCountWords[projects.length] ?? projects.length} projects
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 100} className="h-full">
              <ProjectCard project={project} priority={index < 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, priority = false, headingLevel = 3 }: { project: Project; priority?: boolean; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neon-cyan/15 bg-[#ffffff] shadow-[0_18px_55px_-36px_rgba(119,12,38,0.42)] transition-all duration-500 hover:-translate-y-1.5 hover:border-neon-cyan/30 hover:shadow-[0_28px_75px_-38px_rgba(119,12,38,0.48)]">
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live website, ${project.platform}`} className="relative block aspect-[16/10] overflow-hidden bg-[#f7f2f3]">
        <Image
          src={project.image}
          alt={`${project.name} website homepage preview`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 640px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#4a0d1d]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#ffffff]/40 bg-[#ffffff]/90 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.13em] text-[#4a0d1d] shadow-lg backdrop-blur-md">
          {project.platform}
        </span>
        <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-[#991b3b] text-lg text-[#ffffff] opacity-0 shadow-lg transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">↗</span>
      </a>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#8f1731]">Live project</p>
            <Heading className="mt-2 font-display text-[1.55rem] font-semibold tracking-[-0.03em] text-white">{project.name}</Heading>
          </div>
          <span className="font-mono text-[0.62rem] text-white/30">Live</span>
        </div>
        <p className="mt-4 flex-1 text-[0.93rem] leading-7 text-white/50">{project.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-neon-cyan/10 pt-5">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-neon-cyan">
            View live site
            <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
          </a>
          <a href={`/work/${project.slug}`} className="text-xs font-medium text-white/40 underline decoration-neon-cyan/25 underline-offset-4 transition-colors hover:text-white">View case study</a>
        </div>
      </div>
    </article>
  );
}
