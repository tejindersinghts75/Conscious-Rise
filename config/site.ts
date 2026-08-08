const canonicalPlaceholder = "https://{{CANONICAL_DOMAIN}}";

export const siteConfig = {
  name: "Conscious Rise",
  tagline: "Web engineering studio",
  url: process.env.NEXT_PUBLIC_SITE_URL || canonicalPlaceholder,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@consciousrise.in",
  upworkUrl:
    process.env.NEXT_PUBLIC_UPWORK_PROFILE_URL ||
    "https://www.upwork.com/freelancers/~0103e20fb261a8a280?mp_source=share",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "{{BOOKING_URL}}",
  contactFormEndpoint:
    process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "{{CONTACT_FORM_ENDPOINT}}",
  description: "Conscious Rise builds fast, maintainable Next.js, Webflow, Framer and WordPress websites for startups and agencies in the UK and US.",
  locationLine: "Based in India, working overlapping hours with UK and US Eastern time. I reply to every enquiry within one business day.",
} as const;

export const hasRealSiteUrl = !siteConfig.url.includes("{{");
export const hasBookingUrl = !siteConfig.bookingUrl.includes("{{");

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.endsWith("/") ? siteConfig.url.slice(0, -1) : siteConfig.url;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
