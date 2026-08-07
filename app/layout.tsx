import type { Metadata, Viewport } from "next";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — Next.js, React, Webflow, Framer & WordPress Studio`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Next.js developer",
    "React developer",
    "Webflow developer",
    "Framer developer",
    "WordPress developer",
    "Figma to Next.js",
    "web agency",
    "performance optimization",
  ],
  openGraph: {
    title: `${site.name} — Web engineering studio`,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Web engineering studio`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: `https://${site.domain}`,
  email: site.email,
  areaServed: "Worldwide",
  knowsAbout: [
    "Next.js",
    "React",
    "Webflow",
    "Framer",
    "WordPress",
    "WooCommerce",
    "Tailwind CSS",
    "Firebase",
    "API integration",
    "Web performance optimization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-neon-cyan focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-void"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
