import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { projects } from "@/lib/content";
import { servicePages } from "@/data/service-pages";
import { getBlogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/services", "/work", "/blog", "/contact", "/privacy", "/terms"];
  const lastModified = new Date("2026-08-10T00:00:00.000Z");
  return [
    ...pages.map((path, index) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: (path === "/" || path === "/work" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: index === 0 ? 1 : index < 3 ? 0.9 : 0.7,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...servicePages.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...getBlogPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
