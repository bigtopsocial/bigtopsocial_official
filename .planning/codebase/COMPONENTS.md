# Component Inventory

## Layout (`components/layout/`)
- `Container`: Standard width constraint and centering wrapper (`w-[90%] max-w-[1440px]`).
- `Header`: Sticky/fixed top navigation with glassmorphism (`backdrop-blur-xl`). Hides on scroll down, reveals on scroll up.
- `Footer`: Large site footer with links and a subscription form.
- `FooterSubscribeForm`: Interactive email input for newsletters.
- `NavLinks`: Reusable navigation anchor list.

## Home Page (`components/home/`)
- `HomeSections`: The monolithic orchestrator for the landing page. Contains the hero video, stats, services grid, and the new infinite testimonial marquees.
- `ReelsCarousel`: A horizontal scrolling or interactive carousel for video reels/case studies.
- `PostStageSlider`: Interactive slider component for showcasing content stages.

## Project & Content (`components/project/`, `components/faq/`, `components/blog/`)
- `CaseStudyView`: Detailed template for viewing a specific portfolio project.
- `FaqAccordion`: Expandable/collapsible FAQ list using framer-motion for smooth height transitions.

## UI & Effects (`components/ui/`, `components/motion/`)
- `Reveal`: Framer Motion wrapper for scroll-triggered fade-in animations.
- `wobble-card`: Interactive 3D tilt card effect.
- `canvas-reveal-effect`: Complex WebGL/canvas-based background reveal effect.
- `BorderGlow.jsx` & `BorderGlow.css`: Custom CSS and React logic for animated, multi-colored neon border tracing effects.
