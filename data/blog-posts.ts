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
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
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
