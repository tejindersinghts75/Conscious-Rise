/**
 * BLOG EDITING GUIDE
 * ------------------
 * Add a post by copying one object in `blogPosts`, changing its values, and
 * keeping the slug unique. Posts are automatically sorted newest-first.
 *
 * Supported content blocks:
 *   { type: "paragraph", text: "..." }
 *   { type: "heading", text: "..." }
 *   { type: "list", items: ["...", "..."] }
 *   { type: "quote", text: "..." }
 */

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  featured?: boolean;
  readingTime: string;
  seoTitle?: string;
  heroImage?: { src: string; alt: string };
  cta?: { eyebrow: string; title: string; body: string; primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
  sources?: { label: string; href: string }[];
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-should-a-dental-website-include",
    title: "What Should a Dental Website Include? 9 Essentials for a Modern Dental Practice",
    seoTitle: "What Should a Dental Website Include? 9 Essentials",
    excerpt: "What should a dental website include? Discover 9 essential elements that help dental practices build trust, improve patient experience and strengthen their online presence.",
    category: "Dental Website Design",
    publishedAt: "2026-08-22",
    author: "Tejinder Singh",
    featured: true,
    readingTime: "10 min read",
    heroImage: { src: "/assets/blog/dental-website-essentials.jpg", alt: "Modern dental practice reception with a calm burgundy and neutral interior" },
    content: [
      { type: "paragraph", text: "A patient searches Google for a dentist in their area. They find your practice, check your reviews, and then click through to your website. What happens next?" },
      { type: "paragraph", text: "Your website may be the first real experience that person has with your dental practice. Before they speak with your receptionist or sit in your chair, they are already forming an impression of your practice based on what they see online." },
      { type: "paragraph", text: "The American Dental Association recommends that dental practice websites be visually appealing, communicate the practice's brand, and be designed around the needs of prospective and current patients. So having a website is not enough." },
      { type: "quote", text: "A modern dental website should make three things easy: understand the practice, trust the practice, and contact or book with the practice." },
      { type: "paragraph", text: "Here are nine things a strong dental website should include." },
      { type: "heading", text: "1. A Homepage That Immediately Explains Your Practice" },
      { type: "paragraph", text: "A visitor should not have to search around to understand who you are, where you are located, and what you offer. The top of the homepage should quickly communicate:" },
      { type: "list", items: ["What type of dental practice you are", "Where you are located", "Your primary treatments or services", "Why a patient should consider your practice", "How to book or contact you"] },
      { type: "paragraph", text: "Avoid filling the opening section with generic statements that could belong to any dental practice. Instead, give prospective patients a clear reason to continue exploring." },
      { type: "paragraph", text: "The homepage should also provide easy routes to important treatments, doctor information, reviews, financing information, and appointment options." },
      { type: "heading", text: "2. Individual Pages for Important Dental Services" },
      { type: "paragraph", text: "Putting every treatment on one general Services page may be convenient, but individual treatment pages can provide patients with more relevant information. Someone considering dental implants has very different questions from someone looking for emergency dentistry or teeth whitening." },
      { type: "paragraph", text: "Depending on the services actually provided by a practice, dedicated pages might include:" },
      { type: "list", items: ["Dental implants", "Invisalign or clear aligners", "Cosmetic dentistry", "Emergency dentistry", "Teeth whitening", "Crowns and bridges", "Preventive dentistry"] },
      { type: "paragraph", text: "Each page should genuinely explain the treatment rather than simply repeating keywords. Answer useful patient questions: What is the treatment? Who might it be appropriate for? What does the process involve? What should the patient do next?" },
      { type: "paragraph", text: "A logical website structure and descriptive pages also make it easier for visitors and search engines to understand the website." },
      { type: "heading", text: "3. A Clear Appointment Path" },
      { type: "paragraph", text: "If someone has decided they want to contact the practice, do not make them search for the next step. A clear Book Appointment, Request Appointment, or Call Now option should be easy to find." },
      { type: "paragraph", text: "This is particularly important on mobile. Someone looking for a dentist from their phone should not need to navigate through several pages just to find a phone number or appointment option." },
      { type: "quote", text: "Book online. Call the practice. Request an appointment. Make the right options clear without covering every page with buttons." },
      { type: "paragraph", text: "The objective is to make the next step obvious when a prospective patient is ready." },
      { type: "heading", text: "4. Real Trust Signals" },
      { type: "paragraph", text: "Dentistry requires trust. The website should help prospective patients understand who will actually be treating them. A strong doctor or team section can include:" },
      { type: "list", items: ["Professional photographs", "Dentist biographies", "Education and qualifications", "Professional experience", "Areas of clinical focus", "Practice philosophy"] },
      { type: "paragraph", text: "Real photographs of the practice can also help visitors understand the environment they may be visiting. The website should feel like that specific dental practice, rather than a generic template that could belong to any dentist." },
      { type: "heading", text: "5. Patient Reviews and Reputation" },
      { type: "paragraph", text: "A dental practice may already have an excellent reputation on Google or other platforms. That reputation should not disappear when someone reaches the website. Relevant patient feedback can be presented naturally throughout the website where appropriate." },
      { type: "paragraph", text: "Practices must be careful with patient privacy and applicable laws when using patient information, images, testimonials, or responding to online reviews. Trust is important, but patient privacy is equally important." },
      { type: "heading", text: "6. Clear Insurance and Financing Information" },
      { type: "paragraph", text: "Cost and payment options can be important considerations for patients. If the practice accepts dental benefit plans, provides financing, membership options, or other payment arrangements, make appropriate information easy to find and keep it accurate." },
      { type: "paragraph", text: "A dedicated Insurance & Financing area can explain:" },
      { type: "list", items: ["General insurance information", "Financing options", "Payment methods", "Membership plans, if offered", "How patients can ask financial questions"] },
      { type: "paragraph", text: "The website does not need to make promises about coverage or publish information that could become inaccurate. The goal is to reduce unnecessary uncertainty and tell patients how they can get accurate information from the practice." },
      { type: "heading", text: "7. A Strong Local Search Foundation" },
      { type: "paragraph", text: "For a local dental practice, the website and Google Business Profile should support one another. Important business information should be clear and consistent, including:" },
      { type: "list", items: ["Practice name", "Address", "Phone number", "Opening hours", "Services", "Location information"] },
      { type: "paragraph", text: "Google explains that local results are primarily influenced by relevance, distance, and prominence. A complete and accurate Google Business Profile, useful website content, reviews, and a clear local presence can all support how a business is understood online." },
      { type: "quote", text: "No legitimate dental website SEO strategy can guarantee a specific Google position." },
      { type: "heading", text: "8. A Fast, Clean Mobile Experience" },
      { type: "paragraph", text: "Many prospective patients will experience a dental website from a phone. The website therefore needs to work properly across screen sizes. Avoid:" },
      { type: "list", items: ["Tiny text", "Difficult navigation", "Overlapping elements", "Huge blocks of text", "Buttons that are difficult to tap", "Unnecessary animations that interfere with navigation", "Layouts that only work properly on desktop"] },
      { type: "paragraph", text: "A premium dentist website does not need to be complicated. Clarity is more important than unnecessary complexity. Design should help visitors understand the practice and move naturally toward the information they need." },
      { type: "heading", text: "9. A Website That Reflects the Quality of the Practice" },
      { type: "paragraph", text: "A practice can have excellent dentists, strong patient reviews, modern facilities, a welcoming team, and years of experience. But if the website feels outdated or generic, the online presentation may fail to communicate those strengths." },
      { type: "paragraph", text: "The American Dental Association recommends that a practice website be visually appealing, communicate the practice's mission and brand, and appeal to prospective and current patients." },
      { type: "paragraph", text: "A website is not simply a collection of information. It is part of how the practice presents itself before a prospective patient ever walks through the door. If a dental practice has invested heavily in creating an excellent patient experience, its digital experience should aim to represent the same standard." },
      { type: "heading", text: "A Good Dental Website Does Not Need to Be Complicated" },
      { type: "paragraph", text: "The best dental website is not necessarily the website with the most animations, pages, or technology. It is one that helps a prospective patient answer:" },
      { type: "list", items: ["Is this the right dentist for me?", "Can I trust this practice?", "Do they provide the treatment I need?", "Where are they located?", "How can I contact or book with them?"] },
      { type: "paragraph", text: "Get those fundamentals right first. Then thoughtful dental website design, useful content, SEO, analytics, and appropriate automation can work together to create a stronger digital presence." },
      { type: "heading", text: "Thinking About Improving Your Dental Website?" },
      { type: "paragraph", text: "At Conscious Rise, we design and develop websites around the way real businesses need them to work. For dental practices, that means going beyond simply making a website look modern." },
      { type: "paragraph", text: "We think about the complete journey from someone discovering a practice online to understanding its services, trusting the team, and taking the next step." },
      { type: "paragraph", text: "If your current dental practice website works but no longer represents the quality of your practice, or you are planning a completely new website, we would be happy to take a look." },
    ],
    cta: { eyebrow: "Your digital patient experience", title: "Make your website reflect the quality of your practice.", body: "Tell us what is working, what is not, and what you want prospective patients to experience. We will respond with a practical next step.", primaryLabel: "Discuss Your Dental Website", primaryHref: "/contact", secondaryLabel: "View Our Work", secondaryHref: "/work" },
    sources: [
      { label: "American Dental Association — Design and Content", href: "https://www.ada.org/resources/practice/practice-management/27_websitedevelopment_designandcontent" },
      { label: "American Dental Association — Attracting New Patients to Your Dental Practice", href: "https://www.ada.org/resources/practice/practice-management/attracting-new-patients-to-your-dental-practice" },
      { label: "American Dental Association — Check Your Website for Legal Risks", href: "https://www.ada.org/resources/practice/legal-and-regulatory/check-your-website-for-legal-risks" },
      { label: "American Dental Association — Managing Dental Practice Online Reviews", href: "https://www.ada.org/resources/practice/legal-and-regulatory/managing-dental-practice-online-reviews" },
      { label: "Google Search Central — Creating Helpful, Reliable, People-First Content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "Google Search Central — SEO Guide for Web Developers", href: "https://developers.google.com/search/docs/fundamentals/get-started-developers" },
    ],
  },
  {
    slug: "what-makes-a-business-website-work",
    title: "What makes a business website actually work?",
    excerpt: "A useful website does more than look polished. It makes the next step obvious, earns trust quickly and removes friction from every important journey.",
    category: "Web strategy",
    publishedAt: "2026-08-20",
    author: "Tejinder Singh",
    featured: true,
    readingTime: "5 min read",
    content: [
      { type: "paragraph", text: "The strongest business websites are not collections of attractive sections. They are carefully arranged decisions: what to say first, what evidence a visitor needs and which action should feel natural next." },
      { type: "heading", text: "Start with one clear job" },
      { type: "paragraph", text: "Before choosing colours, animations or a platform, define the primary job of the website. It might be generating qualified enquiries, explaining a new product or helping customers buy without assistance. Every page should support that job." },
      { type: "list", items: ["Use a headline that says what you do and who it helps.", "Put proof close to important claims.", "Give each page one obvious primary action.", "Remove fields, clicks and choices that do not help the visitor."] },
      { type: "heading", text: "Clarity builds trust" },
      { type: "paragraph", text: "People rarely read a website from top to bottom. They scan headings, compare options and look for signs that the business understands their problem. Specific language, real examples and transparent expectations make that scan easier." },
      { type: "quote", text: "A good website does not make visitors work to understand the value." },
      { type: "heading", text: "Performance is part of the experience" },
      { type: "paragraph", text: "Fast loading, responsive layouts and accessible interactions are not finishing touches. They affect whether visitors stay, whether search engines can understand the site and whether the experience works for everyone." },
    ],
  },
  {
    slug: "choosing-the-right-platform",
    title: "Next.js, Webflow or Framer: choosing the right platform",
    excerpt: "The right platform depends less on trends and more on who will maintain the site, what it needs to do and how quickly it will change.",
    category: "Technology",
    publishedAt: "2026-08-12",
    author: "Tejinder Singh",
    readingTime: "6 min read",
    content: [
      { type: "paragraph", text: "Platform decisions shape how quickly a website launches, how easily a team can update it and what becomes possible later. There is no universal winner—the best choice follows the operating reality of the business." },
      { type: "heading", text: "Choose Framer for speed and visual freedom" },
      { type: "paragraph", text: "Framer is a strong fit for focused marketing sites where visual polish and fast iteration matter. It gives designers direct control and makes routine content edits approachable." },
      { type: "heading", text: "Choose Webflow for structured marketing content" },
      { type: "paragraph", text: "Webflow works well when a marketing team needs reusable collections, controlled layouts and a mature visual CMS without maintaining a custom codebase." },
      { type: "heading", text: "Choose Next.js for application logic" },
      { type: "paragraph", text: "Next.js is the natural choice when the project needs accounts, dashboards, custom integrations, complex data or workflows that extend beyond a standard content website." },
      { type: "list", items: ["Who will publish and edit content?", "Does the project need authentication or custom data?", "How frequently will the structure change?", "What integrations are required now and later?"] },
    ],
  },
  {
    slug: "practical-website-performance",
    title: "A practical guide to faster website performance",
    excerpt: "Better performance starts with a few high-impact decisions around images, fonts, scripts and rendering—not an endless list of micro-optimisations.",
    category: "Performance",
    publishedAt: "2026-08-04",
    author: "Tejinder Singh",
    readingTime: "4 min read",
    content: [
      { type: "paragraph", text: "Website speed is easiest to improve when it is treated as a design and architecture constraint from the beginning. Most slow pages are caused by a small number of heavy assets and unnecessary work in the browser." },
      { type: "heading", text: "Fix the largest assets first" },
      { type: "paragraph", text: "Images and video commonly account for most page weight. Serve appropriately sized modern formats, reserve their layout space and avoid loading media that is not yet visible." },
      { type: "heading", text: "Be intentional with JavaScript" },
      { type: "paragraph", text: "Every third-party widget and client-side feature has a cost. Keep essential content available without waiting for JavaScript and load optional tools only when they are needed." },
      { type: "list", items: ["Optimise the hero image before anything else.", "Use fewer font files and weights.", "Delay non-essential analytics and widgets.", "Measure real pages on real mobile connections."] },
    ],
  },
];

export function getBlogPosts() {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
