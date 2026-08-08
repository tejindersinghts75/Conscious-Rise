export const site = {
  name: "Conscious Rise",
  tagline: "Web engineering studio",
  domain: "consciousrise.com",
  email: "hello@consciousrise.com",
  description:
    "A great website should look great, load fast, and scale as your business grows. Conscious Rise builds modern websites and scalable digital products with Next.js, React, Webflow, Framer and WordPress.",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Stack", href: "/#stack" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 5, suffix: "+", label: "Years of experience", detail: "Shipping production web since 2019" },
  { value: 70, suffix: "+", label: "Projects delivered", detail: "Startups, agencies and businesses" },
  { value: 2800, suffix: "+", label: "Hours worked", detail: "Tracked, billed and accounted for" },
  { value: 100, suffix: "%", label: "On-time delivery", detail: "Scoped honestly, shipped when promised" },
];

export type Service = {
  id: string;
  title: string;
  blurb: string;
  points: string[];
  glyph: string;
};

export const services: Service[] = [
  {
    id: "next-react",
    title: "Next.js & React Web Applications",
    blurb:
      "Server-rendered, type-safe applications built on the App Router — dashboards, portals and products that stay fast as they grow.",
    points: ["App Router & RSC", "Auth & dashboards", "Firebase / REST backends"],
    glyph: "01",
  },
  {
    id: "webflow",
    title: "Webflow Website Development",
    blurb:
      "Pixel-accurate Webflow builds with clean class systems and a CMS your marketing team can actually run without a developer.",
    points: ["Client-first classes", "CMS collections", "Interactions & GSAP"],
    glyph: "02",
  },
  {
    id: "framer",
    title: "Framer Design & Development",
    blurb:
      "Motion-led Framer sites that feel alive on every scroll — designed and built in one place, launched in days rather than months.",
    points: ["Scroll & hover motion", "Custom code components", "CMS + localisation"],
    glyph: "03",
  },
  {
    id: "wordpress",
    title: "WordPress & WooCommerce",
    blurb:
      "Custom themes and stores built for editors — no page-builder bloat, no plugin sprawl, no mystery slowdowns six months later.",
    points: ["Custom themes / ACF", "WooCommerce stores", "Headless WP + Next.js"],
    glyph: "04",
  },
  {
    id: "figma-to-code",
    title: "Figma to Production",
    blurb:
      "Hand off the file, get back the live site. Figma translated to Next.js, React, Webflow, Framer or WordPress — down to the last 4px.",
    points: ["Design system parity", "Responsive at every breakpoint", "Component libraries"],
    glyph: "05",
  },
  {
    id: "api",
    title: "API Integrations",
    blurb:
      "Payments, CRMs, bookings, AI endpoints and internal services wired in cleanly, with error states and edge cases handled.",
    points: ["Stripe & payments", "CRM + webhooks", "Third-party & AI APIs"],
    glyph: "06",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    blurb:
      "Core Web Vitals taken seriously. Audits, image and font strategy, bundle surgery and caching until the numbers go green.",
    points: ["Core Web Vitals", "Bundle & image audits", "Caching & edge delivery"],
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
    body: "We talk through goals, audience and constraints. You leave the call with a scope, a timeline and a fixed price — not a vague estimate.",
    duration: "Day 1–2",
  },
  {
    step: "02",
    title: "Design or handoff",
    body: "Bring a Figma file and I build to it exactly. No design yet? I'll wireframe and design the pages before a single line of code is written.",
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

export type Project = {
  slug: string;
  title: string;
  url: string;
  snapshotUrl?: string;
  image: string;
  platform: "Framer" | "Next.js" | "Webflow";
  description: string;
  featured?: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    slug: "eleusis-mind",
    title: "Eleusis Mind",
    url: "https://eleusismind.com/",
    snapshotUrl: "https://www.consciousrise.in/work/eleusis-mind",
    image: "/assets/work/eleusis-mind.jpg",
    platform: "Framer",
    description: "A refined, immersive digital experience for a pioneering consciousness research and psychedelic immersion centre.",
    featured: true,
  },
  {
    slug: "kris-kelly",
    title: "Kris Kelly",
    url: "https://www.kriskelly.co/",
    snapshotUrl: "https://www.consciousrise.in/work/kris-kelly",
    image: "/assets/work/kris-kelly.jpg",
    platform: "Framer",
    description: "A cinematic personal platform bringing breathwork, music and somatic practice together in one expressive experience.",
    featured: true,
  },
  {
    slug: "meagan-perkins",
    title: "Meagan Perkins",
    url: "https://meaganperkins.co/",
    snapshotUrl: "https://www.consciousrise.in/work/meagan-perkins",
    image: "/assets/work/meagan-perkins.jpg",
    platform: "Framer",
    description: "A warm editorial website for Rooted Regeneration, pairing a grounded visual system with clear programme pathways.",
  },
  {
    slug: "insight-funders",
    title: "Insight Funders",
    url: "https://insightfunders.com/",
    snapshotUrl: "https://www.consciousrise.in/work/insight-funders",
    image: "/assets/work/insight-funders.jpg",
    platform: "Framer",
    description: "A sharp, product-led site for an AI-powered lending marketplace connecting businesses with private credit.",
    featured: true,
  },
  {
    slug: "leafy-plate",
    title: "Leafy Plate",
    url: "https://www.leafyplate.co/",
    snapshotUrl: "https://www.consciousrise.in/work/leafy-plate",
    image: "/assets/work/leafy-plate.jpg",
    platform: "Next.js",
    description: "A fresh meal-delivery experience with plan discovery, subscriptions and a clean, conversion-focused ordering journey.",
    featured: true,
  },
  {
    slug: "elite-b-car",
    title: "Elite B Car",
    url: "https://www.elitebcar.com/",
    snapshotUrl: "https://www.consciousrise.in/work/elite-b-car",
    image: "/assets/work/elite-b-car.jpg",
    platform: "Next.js",
    description: "A premium chauffeur-service website for New York travel, corporate transport and special-event bookings.",
  },
  {
    slug: "elysium-experiential-real-estate",
    title: "Elysium Experiential Real Estate",
    url: "https://live.elysiumcommunities.com/experiential-real-estate",
    snapshotUrl: "https://www.consciousrise.in/work/elysium-experiential-real-estate",
    image: "/assets/work/elysium-experiential.jpg",
    platform: "Next.js",
    description: "An immersive launch experience introducing Elysium’s vision for community-led experiential real estate.",
  },
  {
    slug: "elysium-communities",
    title: "Elysium Communities",
    url: "https://www.elysiumcommunities.com/",
    snapshotUrl: "https://www.consciousrise.in/work/elysium-communities",
    image: "/assets/work/elysium-communities.jpg",
    platform: "Webflow",
    description: "A narrative-led brand website for a new model of experiential microcities built around wellness and belonging.",
  },
  {
    slug: "savage-and-saint",
    title: "Savage & Saint",
    url: "https://savageandsaint.com/",
    image: "/assets/work/savage-and-saint.jpg",
    platform: "Framer",
    description: "A bold, character-rich platform for a global men’s mentoring collective focused on vitality, excellence and freedom.",
    status: "Snapshot coming soon",
  },
];

export const expectations = [
  {
    title: "Clean, maintainable code",
    body: "Typed, componentised and documented. The next developer who opens the repo — including future you — will understand it in minutes.",
  },
  {
    title: "Clear communication",
    body: "Updates you don't have to chase, in plain language. You always know what's done, what's next and what I need from you.",
  },
  {
    title: "Reliable, on-time delivery",
    body: "Dates are commitments, not guesses. If something threatens a deadline, you hear about it early — never after the fact.",
  },
  {
    title: "Long-term collaboration",
    body: "Most clients stay past launch. I'm still here for the iteration, the new page, the feature and the audit six months later.",
  },
];

export const faqs = [
  {
    q: "Which platform is right for my project?",
    a: "It depends on who maintains it. Marketing sites that a non-technical team updates weekly do best in Webflow or Framer. Content-heavy sites with existing editorial workflows suit WordPress. Anything with authentication, dashboards or real application logic belongs in Next.js. I'll recommend the honest answer on our first call — including when that answer means a smaller invoice.",
  },
  {
    q: "How long does a project take?",
    a: "A Framer or Webflow marketing site typically runs 1–3 weeks. A custom Next.js site is 3–6 weeks. Full web applications scope individually. You get a firm timeline before any work starts.",
  },
  {
    q: "Do you work from an existing Figma file?",
    a: "Yes — that's a large part of what I do. Send the file and I'll build it faithfully in Next.js, React, Webflow, Framer or WordPress, flagging any interaction or responsive states the design doesn't yet cover.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a handover walkthrough and 30 days of support for fixes and questions. Beyond that, I offer monthly retainers for ongoing iteration, new pages and performance monitoring.",
  },
  {
    q: "How do you handle performance?",
    a: "It's built in, not bolted on: image and font strategy, minimal JavaScript, server rendering where it helps and caching at the edge. Every site ships with a Lighthouse pass, and I'll show you the before-and-after numbers.",
  },
];
