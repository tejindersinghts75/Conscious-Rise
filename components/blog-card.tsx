import Image from "next/image";
import type { BlogPost } from "@/data/blog-posts";

const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const imageCard = Boolean(post.heroImage);

  return (
    <article className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#4a0d1d]/10 shadow-[0_24px_70px_-52px_rgba(74,13,29,.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-45px_rgba(74,13,29,.5)] ${imageCard ? "min-h-[34rem] bg-[#12070b] p-7 sm:min-h-[40rem] sm:p-10" : "bg-[#ffffff] p-7"}`}>
      {post.heroImage ? <><Image src={post.heroImage.src} alt={post.heroImage.alt} fill sizes={featured ? "(max-width: 1344px) 100vw, 1280px" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" /><div aria-hidden className="absolute inset-0 bg-black/55" /><div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/40" /></> : <div aria-hidden className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#d2042d]/[.06] transition-transform duration-500 group-hover:scale-125" />}
      <div className={`relative flex items-center gap-3 font-mono text-[.64rem] uppercase tracking-[.16em] ${imageCard ? "text-[#ffb0c0]" : "text-[#991b3b]"}`}>
        <span>{post.category}</span><span aria-hidden className="h-1 w-1 rounded-full bg-[#d2042d]/40" /><time dateTime={post.publishedAt}>{dateFormatter.format(new Date(`${post.publishedAt}T00:00:00Z`))}</time>
      </div>
      <h2 className={`relative mt-auto pt-16 font-display font-semibold leading-[1.06] tracking-[-.04em] ${imageCard ? "text-[#ffffff]" : "text-[#4a0d1d]"} ${featured ? "max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)]" : "text-[clamp(1.7rem,3vw,2.4rem)]"}`}>
        <a href={`/blog/${post.slug}`} className="after:absolute after:inset-0">{post.title}</a>
      </h2>
      <p className={`relative mt-5 leading-7 ${imageCard ? "text-[#ffffff]/75" : "text-[#4a0d1d]/65"} ${featured ? "max-w-2xl text-lg" : "text-base"}`}>{post.excerpt}</p>
      <div className="relative flex items-center justify-between gap-4 pt-9 text-sm">
        <span className={imageCard ? "text-[#ffffff]/60" : "text-[#4a0d1d]/50"}>{post.readingTime}</span><span className={`font-semibold transition-transform group-hover:translate-x-1 ${imageCard ? "text-[#ffffff]" : "text-[#991b3b]"}`}>Read article →</span>
      </div>
    </article>
  );
}
