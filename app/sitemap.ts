import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/work", "/contact", "/privacy", "/terms"];
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
  ];
}
