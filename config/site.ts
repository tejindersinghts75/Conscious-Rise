const defaultCanonicalUrl = "https://www.consciousrise.in";

export const siteConfig = {
  name: "Conscious Rise",
  ownerName: "Tejinder Singh",
  ownerPhoto: "/assets/tejinder-singh-hq.jpg",
  tagline: "Websites, web applications and automation",
  url: process.env.NEXT_PUBLIC_SITE_URL || defaultCanonicalUrl,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@consciousrise.in",
  upworkUrl:
    process.env.NEXT_PUBLIC_UPWORK_PROFILE_URL ||
    "https://www.upwork.com/freelancers/~0103e20fb261a8a280?mp_source=share",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "{{BOOKING_URL}}",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  },
  description: "Conscious Rise creates high-performing websites, custom web applications, no-code solutions, AI automation and connected digital systems for startups and agencies.",
  locationLine: "Based in India, working overlapping hours with UK and US Eastern time. Every enquiry gets a reply within one business day.",
} as const;

export const hasBookingUrl = !siteConfig.bookingUrl.includes("{{");

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.endsWith("/") ? siteConfig.url.slice(0, -1) : siteConfig.url;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
