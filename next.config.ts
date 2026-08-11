import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: process.cwd(),
  experimental: {
    optimizeCss: false,
  },
  async redirects() {
    return [
      {
        source: "/services/websites",
        destination: "/services/website-design-development",
        permanent: true,
      },
      {
        source: "/services/ai-solutions",
        destination: "/services/ai-automation",
        permanent: true,
      },
      {
        source: "/services/web-applications",
        destination: "/services/web-app-development",
        permanent: true,
      },
      {
        source: "/services/automation-integrations",
        destination: "/services/ai-automation",
        permanent: true,
      },
      {
        source: "/services/seo-performance",
        destination: "/services/technical-seo-performance",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/#testimonials",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "consciousrise2.vercel.app" }],
        destination: "https://www.consciousrise.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
