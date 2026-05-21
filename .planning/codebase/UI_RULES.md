# UI Rules & Conventions

## Design System
- **Theme**: Dark mode by default. The background is a very dark gray/black (`#050505` to `#030303`), with surfaces slightly elevated (`#121212`, `#161618`).
- **Typography**: Geometric sans-serif. Helvetica Neue is the primary brand font, falling back to system-ui. Headings are tight (`tracking-tight`), uppercase tracking is wide (`tracking-[0.2em]`).
- **Colors**:
  - Background: `#050505`
  - Foreground (Text): `#ffffff`
  - Muted Text: `#888888` / `text-white/60`
  - Accents: Warm orange/amber, cyan, and magenta for glows/borders.
- **Borders & Radii**: Elements use rounded corners (`rounded-2xl`, `rounded-[18px]`, `rounded-full` for pills). Borders are extremely subtle, often `border-white/10` or `border-white/[0.05]`.

## Layout Principles
- **Edge-to-Edge with Safe Zones**: The main `Container` spans `w-[90%]` with a `max-w-[1440px]`. Components should not stick to the absolute edges of the browser window; they should respect this 5% side margin.
- **Vertical Rhythm**: Generous vertical spacing between sections (e.g., `py-20 sm:py-24` or `py-28 sm:py-36`).
- **Hero Sections**: Often use `min-h-[100svh]` to fill the viewport, utilizing absolute positioning for background videos or gradients.

## Interaction & Motion
- **Scroll Reveals**: Elements should fade and slide up slightly as they enter the viewport using the `<Reveal>` component.
- **Hover States**: Cards often feature slight scaling (`hover:scale-[1.02]`), border opacity increases (`hover:border-white/20`), and enhanced box-shadows/glows.
- **Marquees**: Infinite scrolling (`animate-marquee`, `scroll-right`) is used for logos and testimonials to create continuous movement.
