import type { Metadata, Viewport } from "next";
import { siteConfig as site } from "@/config/site";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Next.js, React, Webflow, Framer & WordPress Studio`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.ownerName, url: site.url }],
  creator: site.ownerName,
  publisher: site.name,
  category: "Web development",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: site.url, languages: { "en-GB": site.url, "en-US": site.url } },
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
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Web engineering studio`,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: site.googleSiteVerification
    ? { google: site.googleSiteVerification }
    : undefined,
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      description: site.description,
      url: site.url,
      logo: `${site.url}/assets/conscious-rise-logo.png`,
      image: `${site.url}/og-image.jpg`,
      email: site.email,
      founder: { "@id": `${site.url}/#founder` },
      sameAs: [site.upworkUrl, ...Object.values(site.social)].filter(Boolean),
      areaServed: ["United Kingdom", "United States", "Worldwide"],
      contactPoint: {
        "@type": "ContactPoint",
        email: site.email,
        contactType: "sales",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web development services",
        itemListElement: ["Next.js development", "Webflow development", "Framer development", "WordPress development", "Figma to production"].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#founder`,
      name: site.ownerName,
      image: `${site.url}${site.ownerPhoto}`,
      url: `${site.url}/about`,
      worksFor: { "@id": `${site.url}/#organization` },
      sameAs: [site.upworkUrl],
      knowsAbout: ["Next.js", "React", "Webflow", "Framer", "WordPress", "WooCommerce", "Web performance"],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
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
        <GoogleAnalytics />
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
