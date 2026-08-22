import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { StructuredData } from "@/components/structured-data";
import { Backdrop } from "@/components/ui/backdrop";
import { Eyebrow, Reveal } from "@/components/ui/primitives";
import { blogPosts, getBlogPost, getBlogPosts } from "@/data/blog-posts";
import { absoluteUrl, siteConfig } from "@/config/site";

const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = getBlogPost(slug); if (!post) return {}; const url = absoluteUrl(`/blog/${slug}`); return { title: post.title, description: post.excerpt, alternates: { canonical: url }, openGraph: { type: "article", title: post.title, description: post.excerpt, url, publishedTime: post.publishedAt, modifiedTime: post.updatedAt, authors: [post.author], images: ["/og-image.jpg"] }, twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: ["/og-image.jpg"] } }; }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = getBlogPost(slug); if (!post) notFound(); const posts = getBlogPosts(); const index = posts.findIndex((item) => item.slug === slug); const next = posts[(index + 1) % posts.length];
  return <><Backdrop /><StructuredData data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt, datePublished: post.publishedAt, dateModified: post.updatedAt ?? post.publishedAt, author: { "@type": "Person", name: post.author }, publisher: { "@id": `${siteConfig.url}/#organization` }, mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`), image: absoluteUrl("/og-image.jpg") }} /><Interactions /><Nav />
    <main id="main" className="overflow-hidden pt-24"><article>
      <header className="pb-14 pt-16 sm:pb-20 sm:pt-24"><div className="container-x"><div className="mx-auto max-w-4xl"><Reveal><Eyebrow>{post.category}</Eyebrow></Reveal><Reveal delay={60}><h1 className="mt-6 font-display text-[clamp(3rem,7vw,6rem)] font-semibold leading-[.96] tracking-[-.055em] text-[#4a0d1d]">{post.title}</h1></Reveal><Reveal delay={120}><p className="mt-7 max-w-3xl text-xl leading-8 text-[#4a0d1d]/65">{post.excerpt}</p><div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-[#4a0d1d]/10 py-4 font-mono text-[.68rem] uppercase tracking-[.13em] text-[#4a0d1d]/55"><span>By {post.author}</span><span aria-hidden>·</span><time dateTime={post.publishedAt}>{dateFormatter.format(new Date(`${post.publishedAt}T00:00:00Z`))}</time><span aria-hidden>·</span><span>{post.readingTime}</span></div></Reveal></div></div></header>
      <div className="container-x pb-24 sm:pb-32"><div className="blog-prose mx-auto max-w-3xl">{post.content.map((block, i) => { if (block.type === "heading") return <h2 key={i}>{block.text}</h2>; if (block.type === "list") return <ul key={i}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>; if (block.type === "quote") return <blockquote key={i}>{block.text}</blockquote>; return <p key={i}>{block.text}</p>; })}</div><div className="mx-auto mt-20 flex max-w-3xl flex-col gap-5 border-t border-[#4a0d1d]/10 pt-8 sm:flex-row sm:items-center sm:justify-between"><a href="/blog" className="text-sm font-semibold text-[#991b3b]">← All insights</a>{next.slug !== post.slug ? <a href={`/blog/${next.slug}`} className="max-w-sm text-sm font-semibold text-[#4a0d1d] sm:text-right">Next: {next.title} →</a> : null}</div></div>
    </article></main><Footer /></>;
}
