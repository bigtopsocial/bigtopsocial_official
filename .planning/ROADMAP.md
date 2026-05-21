# Project Roadmap

## Phase 1: Foundation & Layout Refinement (Completed)
- [x] Initial Next.js App Router setup.
- [x] Implement core design tokens (Dark mode, Helvetica typography).
- [x] Build global layout components (`Header`, `Footer`).
- [x] Adjust global container constraints to `90%` width / `1440px` max to eliminate excessive side bars.

## Phase 2: Home Page & Visual Polish (In Progress)
- [x] Hero section with video background.
- [x] "What We Master" services grid (removed background images for cleanliness).
- [x] Client Feedback section overhaul (dual infinite marquees, dark neon cards, magenta glow).
- [ ] Mobile responsiveness audit for the new ultra-wide layouts and marquees.
- [ ] Performance optimization of videos and WebGL canvas elements (lazy loading, resolution adjustments).

## Phase 3: Content & Sub-pages (Upcoming)
- [ ] Build out individual case study pages (`/projects/[slug]`).
- [ ] Implement Blog/Insights section.
- [ ] Contact/Lead generation page with form integration (e.g., Formspree, Resend).
- [ ] Legal pages (Terms, Privacy Policy).

## Phase 4: CMS Integration & Handoff (Future)
- [ ] Evaluate and select a headless CMS (Sanity, Contentful, or local Markdown/MDX).
- [ ] Migrate `lib/content/*.ts` hardcoded data to the CMS.
- [ ] Setup ISR (Incremental Static Regeneration) or Webhooks for CMS updates.
- [ ] Final SEO audit and accessibility (a11y) improvements.
