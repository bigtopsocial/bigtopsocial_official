# Architecture

## Overview
This is a modern React/Next.js application using the App Router. The site is a marketing/agency website (Bigtopsocial / ELEVON) focused on high-performance, visually rich layouts.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, Motion (v12)
- **3D Graphics**: Three.js, React Three Fiber
- **Deployment**: Vercel (assumed based on Next.js usage)

## Directory Structure
- `app/`: Next.js App Router definitions. Contains `(site)` route group for the main website and `globals.css` for base styles.
- `components/`: Modular React components.
  - `home/`: Components specific to the landing page (e.g., `HomeSections`, `ReelsCarousel`, `PostStageSlider`).
  - `layout/`: Global layout components (`Header`, `Footer`, `Container`).
  - `motion/`: Animation wrappers (e.g., `Reveal`).
  - `project/`: Components for case studies/portfolio items (`CaseStudyView`).
  - `ui/`: Generic UI components and visual effects (`wobble-card`, `canvas-reveal-effect`).
- `lib/`: Content and utilities.
  - `content/`: Static data sources (`home.ts`, `blog.ts`, `projects.ts`, `faq.ts`).

## Data Flow
The application currently relies on static content defined in `lib/content/`. There is no active external database connection or CMS integration visible in the core setup. Page components map over static arrays to render sections like FAQs, Projects, and Testimonials.

## Key Abstractions
- **Layouts**: The root layout (`app/layout.tsx`) handles global fonts (Helvetica Neue) and metadata. The site layout (`app/(site)/layout.tsx`) wraps pages with the `Header` and `Footer`.
- **Containers**: A custom `Container` component is used to manage maximum width and horizontal padding, ensuring a consistent alignment across sections (currently set to 90% width max-w-[1440px] for a premium ultra-wide feel).
- **Animation Wrappers**: Framer Motion is abstracted into reusable components like `<Reveal>` to standardize scroll-triggered fade/slide effects.
