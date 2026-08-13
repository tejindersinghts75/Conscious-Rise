import { projects } from "@/lib/content";

export type CaseStudy = (typeof caseStudies)[number];

type Detail = {
  role: string;
  sector: string;
  overview: string[];
  stack: { group: string; items: string[] }[];
  built: string[];
  flow?: string[];
  frontend: string[];
  integrations?: { name: string; body: string }[];
  responsive: string;
  quality: string[];
};

const details: Record<string, Detail> = {
  "insight-funders": {
    role: "Frontend Developer · Framer", sector: "Business finance",
    overview: ["Insight Funders is a business-finance marketplace that helps companies explore funding options. I developed the public-facing experience in Framer, turning a dense financial proposition into a clear journey for business owners."],
    stack: [{ group: "Frontend", items: ["Framer"] }],
    built: ["A structured marketing journey that introduces the funding proposition before moving visitors into the application path.", "Reusable content sections for finance products, process explanations, trust content and calls to action.", "A visual hierarchy that keeps detailed lending information readable without losing momentum."],
    frontend: ["Built the supplied visual direction as a production-ready Framer site.", "Balanced strong product messaging with readable typography, consistent spacing and clearly separated content sections.", "Added purposeful transitions and interaction states while keeping important actions easy to find."],
    responsive: "The desktop composition was restructured for tablet and mobile, with shorter text measures, scaled headings, stacked content and touch-friendly actions.",
    quality: ["Reusable Framer components", "Consistent typography and spacing", "Cross-breakpoint layout checks"],
  },
  "elysium-communities": {
    role: "Full-Stack Developer · Frontend and backend integration", sector: "Experiential real estate",
    overview: ["Elysium Communities presents a new model of community-led experiential real estate. I worked across its Webflow customer experience and custom application flows, connecting a visually rich marketing site with application logic built outside Webflow."],
    stack: [{ group: "Frontend", items: ["Webflow", "React"] }, { group: "Application", items: ["Next.js", "Node.js"] }, { group: "Deployment", items: ["Vercel"] }],
    built: ["A multi-step waitlist and application experience that collects living preferences, household information and application choices in manageable stages.", "A configurable options flow for unit, view, dining, transport access, membership and application type.", "Early- and standard-application paths, including validation, progress handling and a confirmation experience.", "A referral journey that preserves a referral code, creates a shareable link and supports sharing by email, SMS, X and WhatsApp.", "A responsive bridge between the Webflow marketing experience and custom application screens."],
    flow: ["Visitor explores the Webflow site", "Starts the waitlist or reservation journey", "Custom application collects choices and contact details", "The selected application path is validated", "Visitor reaches confirmation and referral actions"],
    frontend: ["Webflow carries the editorial, image-led marketing experience; the custom application interface handles steps that need richer state and validation.", "Built option cards, form controls, progress cues, a sticky summary and confirmation states so a long application remains understandable.", "Kept the visual language consistent as visitors move between the public site and application journey."],
    integrations: [{ name: "Webflow + custom application", body: "Webflow controls the public content and visual browsing experience. The custom Next.js/Node.js application layer is used for the more complex, stateful customer journey." }],
    responsive: "Long-form marketing sections, option grids, the progress interface and action areas were adapted independently for desktop, tablet and mobile. On smaller screens, controls stack, tap targets expand and the application summary remains usable without crowding the form.",
    quality: ["Step-by-step validation", "Keyboard-operable option cards", "Persistent journey state", "Responsive image and layout planning", "Clear loading and confirmation states"],
  },
  "leafy-plate": {
    role: "Full-Stack Developer", sector: "Meal delivery",
    overview: ["Leafy Plate is a meal-delivery product built around browsing meals and choosing a plan. I developed the Next.js customer experience and the application structure required for a complete ordering journey."],
    stack: [{ group: "Application", items: ["Next.js", "React"] }, { group: "Backend service", items: ["Supabase"] }],
    built: ["A meal-led storefront with plan discovery and clear routes into ordering.", "Customer-facing screens for browsing the food offering and understanding recurring meal plans.", "The interface structure for account, subscription and order-related journeys."],
    flow: ["Customer explores meals and plans", "Selects the option that fits their schedule", "Continues into the account and ordering journey", "Application data is handled by the Next.js and Supabase stack"],
    frontend: ["Built a food-first interface where photography, plan information and calls to action work together.", "Used reusable page and content patterns so meal and plan information stays consistent throughout the experience."],
    integrations: [{ name: "Supabase", body: "Used as the backend service alongside the Next.js application. The precise production data model and active authentication, payment and fulfilment workflows are awaiting public confirmation." }],
    responsive: "Meal imagery, plan cards and content sections scale from wide desktop layouts into compact tablet and mobile arrangements, with ordering actions kept prominent.",
    quality: ["Reusable application structure", "Responsive content hierarchy", "Clear plan and ordering states"],
  },
  "eleusis-mind": {
    role: "Frontend Engineer · Framer Developer", sector: "Wellness and research",
    overview: ["Eleusis Mind is an immersive site for a consciousness research and psychedelic immersion centre. I developed the Framer experience with a focus on atmosphere, storytelling and clarity."],
    stack: [{ group: "Frontend", items: ["Framer"] }],
    built: ["A long-form visual journey that introduces the centre, its philosophy and its programmes.", "Layered editorial sections that combine large imagery, carefully paced copy and focused calls to action.", "Reusable visual patterns for programme, place and informational content."],
    frontend: ["Translated an art-directed concept into responsive Framer sections.", "Handled large-format imagery, text overlays, section transitions and navigation while preserving legibility.", "Used motion as part of the story without letting it compete with the content."],
    responsive: "Immersive desktop compositions were rebuilt for narrower screens through controlled crops, reordered content, scaled type and mobile-specific spacing.", quality: ["Responsive image treatment", "Consistent animation pacing", "Readable long-form content"],
  },
  "kris-kelly": {
    role: "Frontend Engineer · Framer Developer", sector: "Personal brand and wellness",
    overview: ["Kris Kelly is a personal platform connecting breathwork, music and somatic practice. I developed the expressive Framer site and its responsive content system."],
    stack: [{ group: "Frontend", items: ["Framer"] }], built: ["A cinematic homepage that brings multiple creative disciplines into one coherent story.", "Content pathways for programmes, music and the wider body of work.", "Reusable calls to action and editorial sections that keep the experience cohesive."],
    frontend: ["Built image-led sections, bold type treatments and smooth transitions in Framer.", "Maintained a consistent visual rhythm across very different types of content."], responsive: "Large compositions and typography were rebalanced for tablet and mobile, with navigation, media crops and vertical spacing tuned per breakpoint.", quality: ["Reusable Framer components", "Controlled media crops", "Cross-device interaction checks"],
  },
  "meagan-perkins": {
    role: "Frontend Developer · Framer", sector: "Regenerative practice",
    overview: ["Meagan Perkins’ Rooted Regeneration site presents programmes and ideas through a warm, editorial experience. I implemented the frontend in Framer."],
    stack: [{ group: "Frontend", items: ["Framer"] }], built: ["A clear content structure for the practice, programmes and ways to engage.", "Reusable editorial sections that combine portraits, natural imagery and long-form copy.", "Navigation and calls to action that help visitors move through a reflective, content-rich site."],
    frontend: ["Matched typography, image placement, alignment and spacing across the full page system.", "Built subtle motion and hover feedback that supports the calm visual direction."], responsive: "Desktop editorial layouts shift into a single-column mobile reading experience, with adjusted image crops, type scale, navigation and section spacing.", quality: ["Consistent visual hierarchy", "Responsive image handling", "Reusable content components"],
  },
  "elite-b-car": {
    role: "Frontend and integration-focused developer", sector: "Chauffeur and corporate travel",
    overview: ["Elite B Car is a New York chauffeur service for airport transfers, city travel, corporate transport and events. I built the Next.js website and connected its primary booking path to the client’s existing Limo Anywhere booking system."],
    stack: [{ group: "Frontend", items: ["Next.js", "React"] }, { group: "Booking", items: ["Limo Anywhere"] }],
    built: ["A service-led website covering airport transfers, city tours, corporate travel and event transport.", "Clear booking calls to action throughout the site, handing customers into the operational reservation system.", "Reusable layouts for service and supporting content so the site remains consistent as it grows."],
    flow: ["Customer chooses a transport service", "Selects Book Now", "Booking continues in the Limo Anywhere reservation experience", "The transport request enters the client’s existing operational workflow"],
    frontend: ["Built the public experience in Next.js with premium visual treatment, clear service navigation and direct booking actions.", "Structured content so local and corporate customers can quickly identify the right service before booking."],
    integrations: [{ name: "Limo Anywhere", body: "The website routes booking-ready visitors into the client’s Limo Anywhere reservation experience. This lets the public website support discovery while the established transport platform manages the booking workflow." }],
    responsive: "Service navigation, content blocks, imagery and booking actions were adapted for desktop, tablet and mobile, keeping the primary action easy to reach on touch devices.", quality: ["Consistent reusable layouts", "Clear external-booking handoff", "Responsive navigation and actions", "Descriptive page structure"],
  },
  "elysium-experiential-real-estate": {
    role: "Frontend Developer · Next.js", sector: "Experiential real estate",
    overview: ["This focused launch experience introduces Elysium’s experiential-real-estate concept through a more concentrated visual narrative."], stack: [{ group: "Frontend", items: ["Next.js", "React"] }], built: ["A dedicated campaign page with a strong narrative sequence and focused conversion path.", "Reusable React sections for concept explanation, supporting imagery and calls to action."], frontend: ["Implemented the page structure, visual pacing and responsive layouts in Next.js.", "Kept the campaign experience aligned with the wider Elysium brand."], responsive: "The wide, image-led desktop layout was restructured for tablet and mobile with adjusted crops, scaled headings and compact section spacing.", quality: ["Reusable React sections", "Responsive media treatment", "Focused page hierarchy"],
  },
  "savage-and-saint": {
    role: "Frontend Engineer · Framer Developer", sector: "Men’s mentorship",
    overview: ["Savage & Saint is a global men’s mentoring collective. I developed its bold, character-led public experience in Framer."], stack: [{ group: "Frontend", items: ["Framer"] }], built: ["A high-impact homepage that introduces the collective’s philosophy and programme pathways.", "Distinct content sections for the community, its work and ways to take part.", "Reusable calls to action and content patterns that keep a strong visual identity consistent."], frontend: ["Built large editorial layouts, expressive typography and layered image treatments in Framer.", "Added transitions and interaction feedback that suit the brand while keeping content usable."], responsive: "Complex desktop compositions were simplified thoughtfully on tablet and mobile through reordered blocks, controlled image crops and breakpoint-specific spacing.", quality: ["Consistent brand implementation", "Responsive composition", "Purposeful motion"],
  },
};

export const caseStudies = projects.map((project) => ({ ...project, ...details[project.slug] }));
