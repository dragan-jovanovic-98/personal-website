# draganjovanovic.com

Personal credibility-anchor website for Dragan Jovanovic, fractional CTO and AI
builder. Built as the Year 6 "Build & Earn" foundation piece.

Its V1 job: a clean, fast, honest place to send people already in conversation
(leads, audit calls, referrals) so they can vet who Dragan is, see proof, and
book a call.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (tokens defined in `src/app/globals.css` via `@theme`)
- Fonts via `next/font`: Archivo (display), IBM Plex Sans (body), IBM Plex Mono (labels/stats)
- Deploys to **Vercel**

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, Nav + Footer shell
│   ├── page.tsx            # Home (hero, proof strip, selected work, about teaser, CTA)
│   ├── work/page.tsx       # Work index
│   ├── work/[slug]/page.tsx# Case study detail (statically generated)
│   ├── about/page.tsx      # About
│   └── contact/page.tsx    # Book a call (booking embed + form)
├── components/             # Nav, Footer, CTAButton, ProofStrip, CaseStudyCard, ContactForm, Container
├── content/case-studies.ts # Canonical case study copy (ported from the review workspace copy doc)
└── lib/site.ts             # Brand strings, nav, booking + email config
```

## Updating content

- **Case studies, proof stats:** edit `src/content/case-studies.ts`. The proof
  strip, Work index, and detail pages all read from it.
- **Brand strings, nav, email, booking embed:** edit `src/lib/site.ts`.
- **Design tokens (colors, fonts):** edit the `@theme` block in `src/app/globals.css`.

## Before launch (open items)

- `src/lib/site.ts`: set `bookingEmbedUrl` to the Google Appointment Scheduling
  embed URL, and flip `showEmail` to `true` once the `dragan@draganjovanovic.com`
  mailbox is live.
- Add Dragan's headshot on the About page (placeholder in `src/app/about/page.tsx`).
- Add a social `opengraph-image`.
- Re-check PrimeSync metrics close to launch (they keep growing).
- Connect the `draganjovanovic.com` custom domain on Vercel.
