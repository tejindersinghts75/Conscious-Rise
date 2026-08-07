# Conscious Rise

A futuristic marketing site for a web agency working across Next.js, React,
Webflow, Framer and WordPress.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.
Statically generated, ~108 kB first-load JS, no runtime dependencies beyond
React itself.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Editing the content

Everything visible on the page — copy, services, stats, tech stack, process,
case studies, FAQ — lives in [`lib/content.ts`](lib/content.ts). Change the data
there and the sections update; you shouldn't need to touch component files for
routine copy edits.

Things worth changing before launch:

| What | Where |
| --- | --- |
| Studio name, email, domain | `site` in `lib/content.ts` |
| **Case studies (currently placeholders)** | `work` in `lib/content.ts` |
| Stats (years, projects, hours) | `stats` in `lib/content.ts` |
| Contact form destination | `handleSubmit` in `components/contact.tsx` |

> The four entries under **Selected work** are illustrative placeholders with
> invented metrics. Replace them with real projects before publishing.

## Contact form

There is no backend. Submitting opens the visitor's mail client with the brief
pre-filled, addressed to `site.email`. To post to a real endpoint instead,
replace the body of `handleSubmit` in `components/contact.tsx` with a `fetch`
to your form service (Formspree, Resend, a Next.js route handler, etc.).

## Structure

```
app/
  layout.tsx        fonts, metadata, JSON-LD structured data
  page.tsx          section composition
  globals.css       design tokens, utilities, keyframes
  icon.svg          favicon
  sitemap.ts        /sitemap.xml
  robots.ts         /robots.txt
components/
  interactions.tsx  the page's only global client script
  nav.tsx           sticky header + mobile sheet     (client)
  stats.tsx         animated counters                (client)
  contact.tsx       enquiry form                     (client)
  hero.tsx  services.tsx  stack.tsx  process.tsx
  work.tsx  expectations.tsx  faq.tsx  footer.tsx    (server)
  ui/
    primitives.tsx  Reveal, Card, SectionHeading, Pill
    backdrop.tsx    aurora + grid background
lib/
  content.ts        all site copy and data
```

## Design and performance notes

- **Four client components total.** Scroll reveals, card spotlights and the
  scroll-progress bar are all driven by one delegated script
  (`components/interactions.tsx`), so every content section stays a server
  component.
- **No images.** The background aurora, grid, scanline and film grain are CSS
  and inline SVG — nothing to download, nothing to lay out.
- **FAQ uses native `<details>`**, so the accordion is keyboard accessible and
  costs zero JavaScript.
- **Motion respects `prefers-reduced-motion`** — reveals resolve immediately,
  the spotlight and counters are disabled.
- Fonts are self-hosted at build time via `next/font` (Space Grotesk, Inter,
  JetBrains Mono), so there is no render-blocking request to Google.

## Deploying

Deploys to Vercel with no configuration. Any host that runs
`npm run build && npm start` works too; the page is fully static, so
`output: "export"` is also viable if you want plain files.
