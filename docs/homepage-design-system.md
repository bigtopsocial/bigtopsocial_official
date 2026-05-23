# Homepage Design System

This document outlines the visual system, alignment, typography, and spacing rules standardized across the Bigtopsocial homepage to ensure a cinematic, premium, and cohesive experience.

## 1. Spacing System & Section Rhythm

To maintain a consistent flow and breathing room across the entire homepage, section spacing strictly adheres to a responsive vertical scale.

### Section Wrappers
All major sections use consistent responsive vertical padding:
- **Default:** `py-16 sm:py-20 lg:py-24`
- **Exceptions:** When a section immediately precedes a full-bleed visual element (like the Reels Slider), the bottom padding is removed (`pb-0`) to bring the visual closer to the heading rhythm.

### Content Gaps
- **Section Intros (Badge to Heading to Description):**
  - Margin below section intro container: `mb-16` (or `mb-14` / `mb-8` when tightly coupled to visuals).
  - Margin below badge: `mb-6`
  - Margin above description: `mt-5`
- **Grid Gaps:** Cards within a Bento grid or standard 3-column grid use `gap-3 sm:gap-4 lg:gap-5` depending on container width.

## 2. Typography Scale & Heading Structure

Typography scaling relies on fluid breakpoints to prevent oversized or clamped text on smaller devices while retaining cinematic impact on desktop.

### Section Intros
Every major section (About, Services, Creations, Portfolio, Testimonials, Partners, FAQ) utilizes a unified Intro block:

- **Badge:**
  ```html
  <div className="mb-6 relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#40ffbb]/40 before:to-transparent">
    Badge Text
  </div>
  ```
  - **Scale:** `text-[11px]`
  - **Tracking:** `tracking-[0.24em]`
  - **Accent:** Custom `#40ffbb` (teal/sky) top glow line.

- **Heading:**
  ```html
  <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
    Heading Text
  </h2>
  ```
  - **Scale:** `text-3xl` (Mobile) -> `sm:text-4xl` (Tablet) -> `md:text-5xl` (Desktop).
  - **Tracking:** `tracking-tight`

- **Description:**
  ```html
  <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-base">
    Description Text
  </p>
  ```
  - **Scale:** `text-[15px]` (Mobile) -> `sm:text-base` (Tablet/Desktop).
  - **Opacity:** `text-white/60`

## 3. Card Styles & Glassmorphism

All cards share a unified glassmorphism aesthetic that prioritizes subtle borders and deep backdrop blurs over heavy backgrounds.

- **Border:** `border border-white/10`
- **Background:** `bg-white/[0.045]` (default) to `bg-white/[0.03]` (lighter elements).
- **Backdrop Blur:** `backdrop-blur-md` or `backdrop-blur-xl`.
- **Border Radius:** Ranges from `rounded-[12px]` to `rounded-[18px]` depending on the grid size.
- **Dark Overlays (Image Cards):** `bg-gradient-to-t from-black/80 via-black/40 to-black/10` to ensure text legibility over photography.

## 4. Hover System & Transition Timing

Transitions are kept smooth and extended to create a premium, cinematic feel. 

- **Timing Function:** `ease-out`
- **Duration:** 
  - Structural/Scale transitions: `duration-300` or `duration-500`
  - Subtle color/border shifts: `duration-300`
  - Image zooms inside cards: `duration-700`
- **Hover Scale:** `hover:scale-[1.03]` (for cards), `group-hover:scale-[1.06]` (for images inside cards).
- **Hover Colors:** Borders shift from `border-white/10` to `border-white/20`. Backgrounds shift from `bg-white/[0.045]` to `bg-white/[0.07]`.

## 5. Glow Usage & Opacity Rules

- **Accent Glow:** `#40ffbb` is the primary accent. Applied as soft glows (`blur-3xl`) with extreme transparency (`opacity-20` to `opacity-40`) to prevent overwhelming the layout.
- **Top-Border Highlights:** Used inside badges with `h-px` gradients fading into transparent edges.
- **Ambient Lighting:** Backgrounds and section blends use `bg-gradient-to-b` from `#000` to transparent, smoothing sharp lines between stacked structural blocks.

## 6. Container Widths & Alignment

- The main structural container leverages standard `max-w-7xl` or custom max widths depending on the content density.
- **Section Intros:** Hardcapped at `max-w-3xl` for headings and `max-w-2xl` for paragraphs, strictly centering content (`flex-col items-center text-center`) to maintain editorial layout balance.

## 7. Footer Design System

The footer is designed to be a cinematic crescendo, seamlessly blending from the final black section into a motion background.

### Footer Background
- Contains a full-bleed `video` element with `object-cover`.
- A `bg-black/60` mask ensures contrast.
- A seamless top blend (`bg-gradient-to-b from-black via-black/80 to-transparent`) spans `h-64` to melt the previous section directly into the footer without a harsh layout shift.

### Footer Typography Scaling
- **Giant Wordmark:** Utilizes absolute viewport width (`text-[14.5vw]`) to stretch perfectly edge-to-edge across all devices. Uses `tracking-tight` and `leading-[0.8]` to condense negative space, alongside `pb-12` padding to comfortably distance it from the bottom edge.
- **Links & Metadata:** Unified at `text-[13px] text-white/60`, with column headers matching at `text-[13px] text-white font-semibold`.

### Footer Responsive Behavior
- Reorders from a stacked single column on mobile (`flex-col`) to a distributed 12-column grid on desktop (`lg:flex-row`).
- Max-widths on the newsletter column (`lg:max-w-[260px]`) prevent the input field from distorting layout bounds on ultrawide displays.

## 8. Mobile Behavior

- Card grids stack predictably (`grid-cols-1` -> `sm:grid-cols-2` -> `lg:grid-cols-3` or `12`).
- No horizontal scrolling (handled via `overflow-hidden` containers).
- Carousel mechanics handle their own overflow via dragging/swiping natively, without breaking the viewport's X-axis bounds.
- Typography shrinks predictably via Tailwind's `sm:` and `md:` prefixes, preventing text from clipping boundaries on small devices.