import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/work", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((path, index) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : index < 3 ? 0.9 : 0.7,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
