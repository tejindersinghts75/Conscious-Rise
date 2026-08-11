export type ServicePage = {
  slug: string;
  shortTitle: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  hero: string;
  audience: string;
  visual: string;
  visualAlt: string;
  storyTitles: string[];
  storyLabels: string[];
  storyHighlights: string[];
  overview: string[];
  outcomes: { title: string; body: string }[];
  deliverables: string[];
  process: { title: string; body: string }[];
  technologies: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "website-design-development",
    shortTitle: "Website development",
    title: "Website Design & Development",
    seoTitle: "Website Design & Development Services",
    description: "Conversion-focused website design and development for startups, agencies and growing businesses. Responsive, fast and built to be maintained.",
    eyebrow: "Website design and development",
    hero: "A clear, fast website designed to turn attention into trust—and trust into enquiries.",
    audience: "For startups, service businesses and agencies that need a polished marketing website without sacrificing speed, accessibility or maintainability.",
    visual: "/assets/services/website-development.jpg",
    visualAlt: "Layered responsive website layouts represented as translucent editorial panels",
    storyLabels: ["Clarity", "The right system", "Search-ready delivery"],
    storyTitles: ["Your website has seconds to make the offer clear.", "The platform should fit the way your team works.", "A beautiful launch is only the beginning."],
    storyHighlights: ["Clear positioning beats visual noise.", "Technology follows the business requirement.", "Performance and discoverability are built into the page system."],
    overview: [
      "A business website has to do more than look polished. It needs to explain the offer quickly, guide different visitors to the right information and make the next action feel obvious. Conscious Rise combines content structure, interface design and front-end development so those decisions work together from the beginning.",
      "Every build is shaped around the audience and commercial goal. That may mean a focused lead-generation site, an editorial platform your team can update, or a custom Next.js experience with integrations behind it. The platform follows the job—not the other way around.",
      "The result is responsive across devices, tested in modern browsers and prepared for search engines with meaningful page structure, metadata, canonical URLs, sitemaps and performance-conscious implementation.",
    ],
    outcomes: [
      { title: "A clearer offer", body: "Page hierarchy and messaging help visitors understand what you do, who it is for and why they should choose you." },
      { title: "More confident enquiries", body: "Calls to action, proof and contact journeys are placed around real buying questions rather than decorative sections." },
      { title: "A site that can grow", body: "Reusable components and sensible content systems make future pages and updates easier to ship." },
    ],
    deliverables: ["Discovery and content architecture", "Responsive interface design", "Next.js, Webflow, Framer or WordPress development", "CMS setup and editor handover", "Contact forms and analytics", "Technical SEO foundations", "Accessibility and cross-browser QA", "Launch support and 30-day handover period"],
    process: [
      { title: "Discover", body: "Define the audience, offer, required pages, conversion goal and practical constraints." },
      { title: "Structure and design", body: "Turn the brief into a page system, responsive layouts and clear interaction states." },
      { title: "Build and test", body: "Develop the approved experience, connect content and forms, then test performance and usability." },
      { title: "Launch and improve", body: "Deploy, verify analytics and search essentials, document the build and support the first month." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Webflow", "Framer", "WordPress", "Tailwind CSS", "Vercel"],
    faqs: [
      { q: "How much does a website design and development project cost?", a: "Cost depends on the number of page types, design requirements, CMS needs and integrations. After a discovery conversation, you receive a defined scope, timeline and fixed project price before work starts." },
      { q: "Can you develop from an existing Figma design?", a: "Yes. Existing Figma files can be developed faithfully in Next.js, Webflow, Framer or WordPress. Missing responsive and interaction states are identified before development." },
      { q: "Will I be able to update the website myself?", a: "When regular editing is important, the project includes an appropriate CMS and a handover walkthrough. The content model is designed around the updates your team actually makes." },
      { q: "Is SEO included in website development?", a: "Every build includes technical foundations such as semantic structure, metadata, canonical URLs, sitemap support and performance checks. Ongoing content strategy, authority building and competitive SEO can be scoped separately." },
    ],
    related: ["web-app-development", "technical-seo-performance", "ecommerce-development"],
  },
  {
    slug: "web-app-development",
    shortTitle: "Web app development",
    title: "Custom Web Application Development",
    seoTitle: "Custom Web App Development Services",
    description: "Custom web application development for portals, dashboards, booking systems and business tools using Next.js, React and dependable integrations.",
    eyebrow: "Custom web app development",
    hero: "Purpose-built web applications for the workflows your business cannot solve with an ordinary website.",
    audience: "For founders and teams building customer portals, dashboards, booking products, internal tools or workflow-heavy digital services.",
    visual: "/assets/services/web-app-development.jpg",
    visualAlt: "A modular web application system connected through precise translucent layers",
    storyLabels: ["Workflow first", "System design", "Built to continue"],
    storyTitles: ["The product starts before the first screen.", "Every integration is part of the experience.", "Useful software must survive its first release."],
    storyHighlights: ["Map decisions, roles and exceptions before writing code.", "A dependable application handles the unhappy path too.", "Maintainability is a product feature."],
    overview: [
      "A web application should make a complex job feel straightforward. The work starts by mapping users, permissions, data and decisions before choosing frameworks or writing interface code. This prevents the product from becoming a collection of screens that look finished but do not support the full workflow.",
      "Conscious Rise builds responsive applications with reusable React components, clear state management and secure server-side boundaries. Where the product depends on payments, authentication, CRM data or third-party services, those integrations are treated as part of the system design—not last-minute plugins.",
      "Projects are delivered in reviewable stages so stakeholders can test real flows early. The finished application includes practical documentation and a codebase structured for continued development.",
    ],
    outcomes: [
      { title: "Less operational friction", body: "Replace spreadsheets, repeated data entry and disconnected tools with one focused workflow." },
      { title: "A product users understand", body: "Information architecture and interface states make complicated actions easier to learn and complete." },
      { title: "A maintainable foundation", body: "Typed components, documented decisions and sensible boundaries support future features without constant rewrites." },
    ],
    deliverables: ["Product and workflow discovery", "User flows and technical architecture", "Responsive application interface", "Authentication and role-aware experiences", "Dashboards, portals and internal tools", "Database and API integration", "Payments, booking or CRM connections", "Testing, deployment and technical handover"],
    process: [
      { title: "Map the workflow", body: "Document user roles, key actions, data sources, exceptions and the smallest valuable release." },
      { title: "Prototype the product", body: "Resolve navigation, information hierarchy and important states before full implementation." },
      { title: "Build in milestones", body: "Ship working vertical slices for review instead of keeping the complete application hidden until the end." },
      { title: "Harden and launch", body: "Test permissions, errors, responsive behaviour and production integrations before handover." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "REST APIs", "Webhooks", "Vercel", "GitHub Actions"],
    faqs: [
      { q: "What kinds of custom web applications do you build?", a: "Typical projects include customer portals, admin dashboards, booking experiences, membership tools, data-driven websites and internal business systems. Scope is based on the workflow rather than a fixed product template." },
      { q: "Can you build an MVP for a startup?", a: "Yes. The first phase focuses on the smallest complete workflow that can be tested with real users, while preserving a foundation that can support later iterations." },
      { q: "Can the application connect to our existing systems?", a: "Yes, provided those systems expose a suitable API, webhook or supported integration. The discovery phase verifies access, limits and data ownership before the integration is committed to scope." },
      { q: "Who owns the code after launch?", a: "The client receives the agreed project code and handover materials. Any third-party services remain subject to their own accounts, subscriptions and licences." },
    ],
    related: ["api-system-integrations", "ai-automation", "website-design-development"],
  },
  {
    slug: "ai-automation",
    shortTitle: "AI automation",
    title: "AI Automation Services",
    seoTitle: "AI Automation Services for Business",
    description: "Practical AI automation services for lead handling, content operations, document workflows and connected business processes—with human review built in.",
    eyebrow: "AI automation for business",
    hero: "Practical AI workflows that reduce repetitive work while keeping people in control of important decisions.",
    audience: "For businesses that have a repeatable, time-consuming process and want to use AI safely without rebuilding their entire operation.",
    visual: "/assets/services/ai-automation.jpg",
    visualAlt: "Business information passing through a transparent AI workflow with a human control point",
    storyLabels: ["Start with the process", "Control the risk", "Support the team"],
    storyTitles: ["AI is useful when the workflow is already understood.", "Automation needs boundaries, not blind confidence.", "The best result gives people better work to do."],
    storyHighlights: ["Choose a measurable bottleneck—not an AI trend.", "Human review belongs wherever consequences matter.", "Automate repetition while preserving accountability."],
    overview: [
      "Useful AI automation begins with a process, not a model. The first task is to identify where information enters, what judgement is required, which outputs are safe to automate and where a person must review the result. That distinction is what turns an impressive demo into a dependable business workflow.",
      "Conscious Rise designs AI-assisted systems for tasks such as classifying enquiries, extracting structured information, preparing drafts, routing work and connecting knowledge across existing tools. Each workflow includes clear inputs, observable outputs and fallbacks for cases the automation cannot handle confidently.",
      "The goal is not to remove human expertise. It is to give teams more time for the decisions, relationships and creative work where that expertise matters most.",
    ],
    outcomes: [
      { title: "Faster routine work", body: "Automate repeatable preparation, categorisation and routing steps that consume attention every day." },
      { title: "More consistent outputs", body: "Use defined instructions, structured formats and validation instead of relying on ad-hoc prompting." },
      { title: "Human control", body: "Approval stages, logs and fallbacks keep consequential decisions visible and reviewable." },
    ],
    deliverables: ["Workflow and automation audit", "Opportunity and risk prioritisation", "AI-assisted workflow design", "Prompt and output schema design", "Human approval and exception paths", "CRM, form, email or document integrations", "Testing with representative examples", "Monitoring guidance and team handover"],
    process: [
      { title: "Audit", body: "Choose a repetitive process with measurable cost, stable inputs and a clear owner." },
      { title: "Design safeguards", body: "Define acceptable outputs, sensitive data boundaries, review points and failure behaviour." },
      { title: "Prototype", body: "Test the workflow against representative cases before connecting it to live operations." },
      { title: "Integrate and monitor", body: "Connect approved tools, document ownership and track quality after launch." },
    ],
    technologies: ["OpenAI APIs", "Structured outputs", "Webhooks", "REST APIs", "Next.js", "TypeScript", "Google Workspace", "CRM integrations"],
    faqs: [
      { q: "Which business processes are suitable for AI automation?", a: "Good candidates are repetitive, text- or data-heavy processes with clear examples and a person responsible for the outcome. High-stakes decisions without reliable review are usually poor first projects." },
      { q: "Will AI automation replace our team?", a: "The service is designed to remove repetitive preparation and routing work, not accountability. Important outputs can require human approval before they affect a customer or business system." },
      { q: "Can AI automation use our existing tools?", a: "Often, yes. Forms, CRMs, email platforms, document stores and internal applications can be connected when appropriate APIs or integration methods are available." },
      { q: "How do you handle inaccurate AI output?", a: "The workflow is designed with structured outputs, validation, representative testing, confidence boundaries and fallback paths. No model is treated as infallible." },
    ],
    related: ["api-system-integrations", "web-app-development", "no-code-low-code"],
  },
  {
    slug: "no-code-low-code",
    shortTitle: "No-code solutions",
    title: "No-Code & Low-Code Development",
    seoTitle: "No-Code & Low-Code Development Services",
    description: "No-code and low-code development for editable websites, internal tools and rapid launches using Webflow, Framer and connected platforms.",
    eyebrow: "No-code and low-code development",
    hero: "Launch quickly with a system your team can understand, edit and operate after handover.",
    audience: "For marketing teams, agencies and early-stage businesses that value speed and editing independence more than unnecessary custom engineering.",
    visual: "/assets/services/no-code-low-code.jpg",
    visualAlt: "A refined modular no-code design system assembled from reusable tactile components",
    storyLabels: ["Structure", "Platform choice", "Responsible flexibility"],
    storyTitles: ["No-code still needs a system behind it.", "Choose for tomorrow’s editors—not today’s demo.", "Custom code should solve a real limitation."],
    storyHighlights: ["Reusable patterns make fast launches sustainable.", "Editing independence is part of the product decision.", "Use the platform fully before adding complexity."],
    overview: [
      "No-code does not mean no planning. A strong build still needs information architecture, reusable patterns, responsive behaviour and a content model that matches how the team works. The advantage is that many everyday updates can happen without returning to a developer.",
      "Conscious Rise builds in Webflow, Framer and other suitable platforms when they offer the best balance of launch speed, visual control and long-term ownership. Custom code is added selectively when it solves a real limitation rather than turning a maintainable platform into a fragile hybrid.",
      "Platform recommendations are made after understanding publishing frequency, integrations, team skills and expected growth. If a custom application is the more responsible choice, that is explained before the project begins.",
    ],
    outcomes: [
      { title: "Faster launch", body: "Use mature visual and content tools to reduce unnecessary engineering time." },
      { title: "Editor independence", body: "Give the team structured fields and reusable pages for common updates." },
      { title: "A deliberate platform choice", body: "Select technology around ownership, integrations and future requirements—not fashion." },
    ],
    deliverables: ["Platform recommendation", "Responsive Webflow or Framer development", "Reusable components and style system", "CMS collections and templates", "Forms and essential integrations", "Custom code where justified", "Editor training and documentation", "Pre-launch SEO and quality checks"],
    process: [
      { title: "Choose the platform", body: "Compare editing, design, integration and scaling requirements before committing." },
      { title: "Create the system", body: "Build reusable styles, components and CMS structures instead of isolated pages." },
      { title: "Connect and test", body: "Add forms and required integrations, then verify responsive and editor behaviour." },
      { title: "Hand over", body: "Train the people who will publish content and document the important controls." },
    ],
    technologies: ["Webflow", "Framer", "WordPress", "Finsweet", "Relume", "Jetboost", "Zapier-compatible tools", "Custom JavaScript"],
    faqs: [
      { q: "Should I choose Webflow, Framer or custom development?", a: "Webflow suits structured CMS-driven marketing sites, while Framer is strong for design-led sites with quick visual editing. Custom development is better when the product needs complex application logic, permissions or unusual integrations." },
      { q: "Can you rebuild an existing website in Webflow or Framer?", a: "Yes. A rebuild can preserve useful content while improving structure, responsive behaviour, maintainability and performance. Redirect planning is included when URLs change." },
      { q: "Will no-code limit future growth?", a: "Every platform has limits. The project identifies likely future requirements early so the chosen system supports realistic growth without pretending it can solve every possible need." },
      { q: "Do you provide training after launch?", a: "Yes. Handover includes a walkthrough focused on the content and components your team will actually update." },
    ],
    related: ["website-design-development", "api-system-integrations", "technical-seo-performance"],
  },
  {
    slug: "api-system-integrations",
    shortTitle: "API integrations",
    title: "API & System Integration Services",
    seoTitle: "API & System Integration Services",
    description: "API and system integration services connecting forms, CRMs, payments, booking tools and internal applications through dependable data workflows.",
    eyebrow: "API and system integrations",
    hero: "Connect the tools your business already uses so information moves without repeated copying and preventable errors.",
    audience: "For teams whose customer, payment, booking or operational data is split across systems that do not work together cleanly.",
    visual: "/assets/services/api-integrations.jpg",
    visualAlt: "Connected business systems exchanging validated information through clear pathways",
    storyLabels: ["One data journey", "Failure-aware design", "Practical connection"],
    storyTitles: ["Repeated copying is a systems problem.", "A successful demo is not a dependable integration.", "Connect what works before replacing everything."],
    storyHighlights: ["Give every important field a clear source of truth.", "Retries, logs and recovery paths are part of the build.", "Integration should reduce operational risk—not move it elsewhere."],
    overview: [
      "Disconnected systems create quiet operational costs: the same details are entered twice, updates arrive late and nobody is certain which record is current. A good integration defines one clear journey for the data and makes failures visible instead of hiding them.",
      "Conscious Rise connects web forms, CRMs, payment services, booking platforms and custom applications through supported APIs and webhooks. The work includes field mapping, authentication, validation, retry behaviour and documentation—not only the successful example shown in a demo.",
      "Where a direct integration is not responsible or possible, the constraint is explained clearly and an alternative workflow is recommended.",
    ],
    outcomes: [
      { title: "Less manual entry", body: "Move approved information between systems automatically and reduce duplicate work." },
      { title: "More reliable records", body: "Define ownership, validation and update rules so teams know which data they can trust." },
      { title: "Visible failures", body: "Logging and exception paths make integration problems actionable instead of silent." },
    ],
    deliverables: ["Systems and data-flow audit", "API capability assessment", "Field and ownership mapping", "Secure authentication setup", "Webhook and event workflows", "Validation and duplicate prevention", "Error handling and logging", "Integration documentation and handover"],
    process: [
      { title: "Map", body: "Identify source systems, destination systems, data owners, triggers and required outcomes." },
      { title: "Verify", body: "Confirm API access, authentication, limits and sandbox availability before implementation." },
      { title: "Connect", body: "Build the smallest end-to-end flow, then add validation and exception handling." },
      { title: "Test and document", body: "Exercise expected and failed cases, monitor production and record operating details." },
    ],
    technologies: ["REST APIs", "Webhooks", "OAuth", "Stripe", "CRM platforms", "Booking systems", "Next.js", "TypeScript"],
    faqs: [
      { q: "Which systems can you integrate?", a: "Any suitable service with documented API, webhook or supported connector access may be considered. Feasibility depends on authentication, available endpoints, account permissions and usage limits." },
      { q: "Can you connect our website forms to a CRM?", a: "Yes. Form submissions can be validated, mapped and sent to a CRM, with duplicate handling and notifications designed around the team’s process." },
      { q: "How are integration failures handled?", a: "Depending on the system, the implementation can include retries, error logs, alerts and a manual recovery path. Failure behaviour is defined as part of scope." },
      { q: "Do we need to replace our existing software?", a: "Usually not. The first goal is to improve the flow between tools that already serve the business. Replacement is recommended only when a core system cannot support the required workflow responsibly." },
    ],
    related: ["ai-automation", "web-app-development", "ecommerce-development"],
  },
  {
    slug: "ecommerce-development",
    shortTitle: "E-commerce development",
    title: "E-commerce Website Development",
    seoTitle: "E-commerce Website Development Services",
    description: "E-commerce website development for products, services and subscriptions with clear buying journeys, dependable payments and maintainable operations.",
    eyebrow: "E-commerce development",
    hero: "A dependable buying experience—from product discovery and decision-making through payment and fulfilment.",
    audience: "For businesses selling products, paid services or subscriptions that need a clearer storefront and a purchase flow connected to real operations.",
    visual: "/assets/services/ecommerce-development.jpg",
    visualAlt: "An elegant product journey moving from discovery through secure payment to fulfilment",
    storyLabels: ["Buyer confidence", "The complete journey", "Operations connected"],
    storyTitles: ["Customers buy when uncertainty is removed.", "Checkout is one moment in a longer decision.", "The order must work after the payment succeeds."],
    storyHighlights: ["Useful product information is conversion design.", "Every state should make the next step obvious.", "A storefront is only as strong as its fulfilment handoff."],
    overview: [
      "E-commerce performance depends on the complete buying journey, not only the checkout button. Customers need useful product information, confidence in the business, transparent delivery expectations and a smooth path across mobile and desktop.",
      "Conscious Rise develops commerce experiences around catalogue structure, product discovery, payments and the operational steps that follow an order. The chosen platform reflects the size of the catalogue, editing needs, custom purchase logic and systems that must stay connected.",
      "Before launch, important states such as unavailable products, payment errors, confirmation messages and responsive checkout journeys are reviewed alongside analytics and search foundations.",
    ],
    outcomes: [
      { title: "Clearer purchase decisions", body: "Organise product information, proof and policies around the questions buyers need answered." },
      { title: "Lower checkout friction", body: "Reduce unnecessary steps and make payment, confirmation and error states understandable." },
      { title: "Connected operations", body: "Link orders and customer information to the tools used for fulfilment and follow-up." },
    ],
    deliverables: ["Commerce discovery and platform selection", "Catalogue and product-page structure", "Responsive storefront development", "Cart, checkout and payment setup", "Subscription or custom purchase flows", "Order notifications and integrations", "Analytics and conversion events", "Technical SEO and pre-launch testing"],
    process: [
      { title: "Understand the offer", body: "Map products, variants, payments, regions, fulfilment and customer questions." },
      { title: "Design the journey", body: "Structure discovery, product detail, cart and checkout around buyer confidence." },
      { title: "Build and connect", body: "Implement the storefront and integrate payments and required operational systems." },
      { title: "Test real scenarios", body: "Verify mobile purchases, failed payments, confirmations, analytics and fulfilment handoff." },
    ],
    technologies: ["WooCommerce", "Stripe", "Next.js", "React", "WordPress", "Payment APIs", "Webhooks", "Analytics"],
    faqs: [
      { q: "Which e-commerce platform should I use?", a: "The answer depends on catalogue size, content needs, payment model, team familiarity and required custom logic. Platform selection is part of discovery rather than a predetermined choice." },
      { q: "Can you build subscriptions or service payments?", a: "Yes. Recurring payments, deposits and service purchase journeys can be scoped when supported by the selected payment provider and business model." },
      { q: "Can the store connect to our other systems?", a: "Order, customer and payment events can often connect to CRM, email, booking or internal systems through APIs and webhooks." },
      { q: "Is e-commerce SEO included?", a: "The build includes technical foundations such as crawlable structure, metadata patterns, canonical handling and performance checks. Product content and ongoing authority building require a continuing strategy." },
    ],
    related: ["website-design-development", "api-system-integrations", "technical-seo-performance"],
  },
  {
    slug: "technical-seo-performance",
    shortTitle: "Technical SEO",
    title: "Technical SEO & Web Performance",
    seoTitle: "Technical SEO & Web Performance Services",
    description: "Technical SEO and web performance services covering crawlability, indexing, redirects, metadata, structured data and Core Web Vitals foundations.",
    eyebrow: "Technical SEO and performance",
    hero: "Make your website easier to crawl, faster to use and technically ready to compete in search.",
    audience: "For businesses launching, migrating or improving a website that needs reliable indexing, clean technical signals and a better page experience.",
    visual: "/assets/services/technical-seo.jpg",
    visualAlt: "Layered web pages under a precision inspection instrument for technical SEO analysis",
    storyLabels: ["Remove barriers", "Measure real experience", "Prioritise evidence"],
    storyTitles: ["Search engines need a clean path to the right pages.", "Fast for a test is not always fast for a visitor.", "SEO work should explain what matters and why."],
    storyHighlights: ["Align redirects, canonicals, links and sitemaps.", "Optimise the templates people actually use.", "Fix measurable constraints before chasing folklore."],
    overview: [
      "Technical SEO helps search engines access and understand a website, but it cannot manufacture authority or guarantee rankings. The work is valuable because indexing mistakes, duplicate URLs, broken migrations and slow templates can prevent otherwise useful content from performing as well as it should.",
      "Conscious Rise audits crawl paths, status codes, canonical signals, metadata, sitemaps, structured data and page templates. Performance work then looks at the assets, rendering and interaction costs that affect real visitors—not only a single synthetic score.",
      "Recommendations are prioritised by impact and effort. The goal is an actionable implementation plan, with fixes completed directly when the codebase and scope allow it.",
    ],
    outcomes: [
      { title: "Cleaner indexing signals", body: "Align redirects, canonicals, sitemaps and internal links around the URLs intended for search." },
      { title: "Faster page experience", body: "Reduce avoidable image, font, JavaScript and rendering costs across important templates." },
      { title: "Decisions backed by evidence", body: "Use Search Console, analytics and measured tests to prioritise work instead of SEO folklore." },
    ],
    deliverables: ["Technical crawl and indexation review", "Redirect and migration assessment", "Canonical and metadata checks", "Sitemap and robots review", "Structured-data validation", "Core Web Vitals investigation", "Image, font and JavaScript optimisation", "Prioritised findings and implementation support"],
    process: [
      { title: "Establish evidence", body: "Review Search Console, analytics, important templates and live server responses." },
      { title: "Diagnose", body: "Separate indexing, relevance, authority and experience problems so each gets the right response." },
      { title: "Prioritise and fix", body: "Address high-impact technical blockers before low-value cosmetic scores." },
      { title: "Validate", body: "Retest responses and templates, document changes and monitor search data over time." },
    ],
    technologies: ["Google Search Console", "Lighthouse", "Core Web Vitals", "Schema.org", "Next.js", "Vercel", "Google Analytics", "Chrome DevTools"],
    faqs: [
      { q: "Can technical SEO guarantee first-page rankings?", a: "No. Technical SEO removes barriers and improves signals, but rankings also depend on search intent, content quality, competition, authority and links. No responsible provider can guarantee a specific organic position." },
      { q: "What is included in a technical SEO audit?", a: "The audit can cover crawlability, status codes, redirects, canonicals, sitemaps, metadata, internal links, structured data and performance across representative templates." },
      { q: "Can you help after a website migration?", a: "Yes. Redirect mappings, canonical URLs, sitemap changes and Search Console signals can be reviewed before or after launch. Earlier involvement usually reduces avoidable disruption." },
      { q: "How quickly will SEO improvements affect Google?", a: "Technical fixes may be discovered after Google recrawls affected URLs, but ranking changes have no fixed schedule. Competitive improvements normally require continued content, authority and measurement over time." },
    ],
    related: ["website-design-development", "web-app-development", "ecommerce-development"],
  },
];

export const servicePageBySlug = new Map(servicePages.map((service) => [service.slug, service]));
