import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { Footer } from "@/components/footer";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { StructuredData } from "@/components/structured-data";
import { Backdrop } from "@/components/ui/backdrop";
import { Eyebrow, Reveal } from "@/components/ui/primitives";
import { getBlogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Insights", description: "Practical articles about websites, digital products, automation and performance from Conscious Rise.", alternates: { canonical: "/blog" }, openGraph: { title: "Insights | Conscious Rise", description: "Practical thinking for better digital products.", url: "/blog", images: ["/og-image.jpg"] } };

export default function BlogPage() {
  const posts = getBlogPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const remaining = posts.filter((post) => post.slug !== featured.slug);
  return <><Backdrop /><StructuredData data={{ "@context": "https://schema.org", "@type": "Blog", name: "Conscious Rise insights", url: `${siteConfig.url}/blog`, blogPost: posts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `${siteConfig.url}/blog/${post.slug}`, datePublished: post.publishedAt })) }} /><Interactions /><Nav />
    <main id="main" className="internal-page overflow-hidden pt-24">
      <section className="relative pb-14 pt-16 sm:pb-20 sm:pt-24"><div aria-hidden className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#d2042d]/[.06] blur-3xl" /><div className="container-x relative"><Reveal><Eyebrow>Insights</Eyebrow></Reveal><Reveal delay={70}><h1 className="mt-6 max-w-5xl font-display text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[.94] tracking-[-.055em] text-[#4a0d1d]">Ideas for building <span className="text-[#d2042d]">better digital work.</span></h1></Reveal><Reveal delay={130}><p className="mt-8 max-w-2xl text-lg leading-8 text-[#4a0d1d]/65">Practical notes on websites, product decisions, automation and the details that make digital experiences useful.</p></Reveal></div></section>
      <section className="pb-24 pt-6 sm:pb-32"><div className="container-x"><Reveal><BlogCard post={featured} featured /></Reveal>{remaining.length ? <div className="mt-6 grid gap-6 md:grid-cols-2">{remaining.map((post, index) => <Reveal key={post.slug} delay={(index % 2) * 70} className="h-full"><BlogCard post={post} /></Reveal>)}</div> : null}</div></section>
    </main><Footer /></>;
}
