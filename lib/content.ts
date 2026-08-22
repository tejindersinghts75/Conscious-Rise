export { siteConfig as site } from "@/config/site";
export { projects, type Project } from "@/data/projects";

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Stack", href: "/#stack" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];


export type Service = {
  id: string;
  href: string;
  title: string;
  blurb: string;
  points: string[];
  glyph: string;
};

export const services: Service[] = [
  {
    id: "website-development",
    href: "/services/website-design-development",
    title: "Website Design & Development",
    blurb:
      "Modern, responsive websites designed around your audience, business goals and a clear path from first visit to enquiry.",
    points: ["Marketing & business websites", "Responsive design", "Conversion-focused journeys"],
    glyph: "01",
  },
  {
    id: "no-code",
    href: "/services/no-code-low-code",
    title: "No-Code & Low-Code Solutions",
    blurb:
      "Flexible websites and internal tools that your team can update without depending on a developer for every small change.",
    points: ["Editable content systems", "Rapid launches", "Team-friendly handover"],
    glyph: "02",
  },
  {
    id: "web-applications",
    href: "/services/web-app-development",
    title: "Custom Web Applications",
    blurb:
      "Purpose-built portals, dashboards and booking experiences shaped around the way your customers and team actually work.",
    points: ["Dashboards & portals", "Booking systems", "Custom business tools"],
    glyph: "03",
  },
  {
    id: "ai-automation",
    href: "/services/ai-automation",
    title: "AI Automation",
    blurb:
      "Practical AI workflows that handle repetitive work, organise information and help your team respond and operate faster.",
    points: ["AI-assisted workflows", "Lead & content automation", "Human-reviewed outputs"],
    glyph: "04",
  },
  {
    id: "integrations",
    href: "/services/api-system-integrations",
    title: "API & System Integrations",
    blurb:
      "Your payments, CRM, booking tools, forms and internal systems connected so information moves without manual copying.",
    points: ["CRM & form connections", "Payments & bookings", "Webhooks & data sync"],
    glyph: "05",
  },
  {
    id: "ecommerce",
    href: "/services/ecommerce-development",
    title: "E-commerce Development",
    blurb:
      "Clear, dependable buying experiences for products, services and subscriptions, from discovery through payment and fulfilment.",
    points: ["Online stores", "Subscriptions & payments", "Custom purchase journeys"],
    glyph: "06",
  },
  {
    id: "performance-seo",
    href: "/services/technical-seo-performance",
    title: "Performance & SEO",
    blurb:
      "Technical improvements that make your website faster, easier to discover and more usable across devices and abilities.",
    points: ["Technical SEO", "Speed & Core Web Vitals", "Analytics & accessibility"],
    glyph: "07",
  },
];

export const stackGroups = [
  {
    label: "Core Development",
    icon: "bolt",
    items: ["Next.js", "React.js", "JavaScript", "TypeScript", "Firebase"],
  },
  {
    label: "Frontend & Design",
    icon: "palette",
    items: ["Figma", "HTML", "CSS", "Tailwind CSS", "Photoshop", "Canva"],
  },
  {
    label: "CMS & Platforms",
    icon: "layers",
    items: ["Webflow", "Framer", "WordPress", "WooCommerce"],
  },
  {
    label: "Webflow Ecosystem",
    icon: "puzzle",
    items: ["Relume", "Finsweet", "Jetboost"],
  },
  {
    label: "Tools",
    icon: "wrench",
    items: ["Git", "Vercel", "GitHub Actions"],
  },
];

export const marquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Webflow",
  "Framer",
  "WordPress",
  "WooCommerce",
  "Figma",
  "Firebase",
  "Vercel",
  "Relume",
  "Finsweet",
  "Jetboost",
  "Git",
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    body: "Goals, audience and constraints are clarified first. You leave the conversation with a scope, timeline and fixed price, not a vague estimate.",
    duration: "Day 1–2",
  },
  {
    step: "02",
    title: "Design or handoff",
    body: "Bring a Figma file for faithful implementation. If there is no design yet, wireframes and page designs are completed before development begins.",
    duration: "Week 1",
  },
  {
    step: "03",
    title: "Build",
    body: "Development in the right tool for the job, with a staging link from day one. You see progress continuously instead of waiting for a reveal.",
    duration: "Week 2–4",
  },
  {
    step: "04",
    title: "Launch & support",
    body: "Performance pass, SEO checks, analytics, cross-browser QA and deployment. Then a handover walkthrough and 30 days of post-launch support.",
    duration: "Launch week",
  },
];

export const expectations = [
  {
    title: "Clean, maintainable code",
    body: "Typed, componentised and documented. The next developer who opens the repo, including future you, will understand it in minutes.",
  },
  {
    title: "Clear communication",
    body: "Updates you do not have to chase, written in plain language. You always know what is done, what comes next and what input is needed.",
  },
  {
    title: "Reliable, on-time delivery",
    body: "Dates are commitments, not guesses. If something threatens a deadline, you hear about it early, never after the fact.",
  },
  {
    title: "Long-term collaboration",
    body: "Support can continue past launch for iterations, new pages, features and future audits.",
  },
];

export const faqs = [
  {
    q: "Which platform is right for my project?",
    a: "It depends on who maintains it. Marketing sites that a non-technical team updates weekly do best in Webflow or Framer. Content-heavy sites with existing editorial workflows suit WordPress. Anything with authentication, dashboards or real application logic belongs in Next.js. The first conversation includes an honest recommendation, including when the right answer means a smaller scope.",
  },
  {
    q: "How long does a project take?",
    a: "A Framer or Webflow marketing site typically runs 1–3 weeks. A custom Next.js site is 3–6 weeks. Full web applications scope individually. You get a firm timeline before any work starts.",
  },
  {
    q: "Do you work from an existing Figma file?",
    a: "Yes. Existing designs can be built faithfully in Next.js, React, Webflow, Framer or WordPress, with missing interaction and responsive states identified before implementation.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a handover walkthrough and 30 days of support for fixes and questions. Monthly retainers are also available for ongoing iteration, new pages and performance monitoring.",
  },
  {
    q: "How do you handle performance?",
    a: "It is built in, not bolted on: image and font strategy, minimal JavaScript, server rendering where it helps and caching at the edge. Every site receives a Lighthouse review with clear before-and-after findings where applicable.",
  },
];
