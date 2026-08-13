# Case study confirmations

The published case studies now use only details confirmed by this website, the supplied brief, public live pages, or implementation files available locally. The items below should be confirmed before they are added publicly.

## Elysium Communities

- Confirm which production authentication provider is active (Clerk was requested for investigation but was not verified in the available implementation files).
- Confirm whether Stripe is active in production. A Stripe-labelled early-application interface exists in the local handoff, but the available code simulates completion and does not verify a live payment connection.
- Confirm whether Zendesk, Calendly and Cloudflare Turnstile are active and which parts of the customer journey they control.
- Confirm which database stores application and referral records and which backend endpoints are safe to describe publicly.

## Leafy Plate

- Confirm the active authentication and email-verification provider.
- Confirm the production payment provider and checkout flow.
- Confirm which customer dashboard, order-history, admin and kitchen features are currently live.
- Confirm the Supabase tables/data areas that may be named publicly (users, meals, plans, subscriptions, orders, delivery slots and meal selections were requested for investigation but the application source was not available here).
- Confirm the subscription-date and meal-selection rules before publishing a detailed flow.

## Elite B Car

- The live site routes booking to a Limo Anywhere-hosted booking experience. Confirm whether there is also a direct API integration beyond this public handoff.
- Confirm which booking fields, validation, status updates and error states are handled by custom code and may be described publicly.
- Confirm the deployment platform before adding it to the stack.

## Framer projects

- Confirm whether Insight Funders, Meagan Perkins, Eleusis Mind, Kris Kelly or Savage & Saint use Framer CMS, forms, custom code components or third-party embeds.
- The brief mentions Athereal and Ben Holt, but neither project exists in the current Conscious Rise project data or assets. Add their URLs, screenshots and confirmed scope before creating case-study routes.

## General

- Confirm project years for all case studies.
- Confirm whether “Elite B Car” is the preferred public spelling; this matches the current site data and live domain title.
- Confirm whether the Elysium Experiential Real Estate page should remain a separate project or be folded into the main Elysium case study.
