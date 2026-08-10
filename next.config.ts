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
        source: "/:path*",
        has: [{ type: "host", value: "consciousrise2.vercel.app" }],
        destination: "https://www.consciousrise.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
