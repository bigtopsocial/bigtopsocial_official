# Homepage Design System

This document outlines the refined design system for the Bigtop Social homepage, established to ensure visual consistency, premium feel, and cohesive user experience.

## Spacing System

All spacing follows a 4px-based scale for consistency and rhythm.

### Section Vertical Padding
- Mobile: `py-16`
- Sm (tablet): `py-20`
- Lg (desktop): `py-24`

### Internal Section Spacing
- Between section badge/heading and description: `mt-10` (heading) and `mt-6` (description)
- Between cards/grid items: `gap-5` (desktop), `gap-3` or `gap-4` (mobile/tablet)
- Between major sections: Defined by section padding; no additional spacer divs
- Within content blocks: `space-y-4` or `space-y-6` as appropriate

### Container Padding
- Horizontal padding is handled by the `Container` component (`w-[92%] max-w-[1440px] mx-auto`)
- Internal content padding varies by component (cards, stats, etc.)

## Typography System

A unified typographic scale ensures readability and hierarchy.

### Font Sizes & Weights
- **Hero Heading**: `text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight`
- **Section Heading**: `text-4xl sm:text-5xl tracking-tight text-foreground`
- **Section Description**: `text-base leading-relaxed text-muted sm:text-lg`
- **Badge/Pill**: `text-xs uppercase tracking-[0.2em]`
- **Card Title**: `text-lg font-semibold text-foreground` (adjust per card)
- **Card Description**: `text-sm leading-relaxed text-foreground/[opacity]`
- **Metadata/Data**: `text-sm` or `text-xs` with appropriate opacity
- **FAQ/Testimonial Text**: `text-base leading-relaxed` (testimonials: `text-[16px] leading-[1.9]`)

### Line Heights & Tracking
- Headings: `leading-[1.05]` and `tracking-tight`
- Body text: `leading-relaxed`
- Badges: `uppercase tracking-[0.2em]`
- Numbers/data: `tracking-[0.16em]` or similar for tight numeric presentation

### Opacity Hierarchy
- Primary text: `text-foreground/95`
- Secondary: `text-foreground/90`
- Tertiary: `text-foreground/80`
- Muted: `text-muted` (equivalent to `/60`)
- Disabled/Hint: `text-foreground/45`

## Heading Structure

Every major section follows the same three-part structure for visual consistency.

### Badge/Pill
```
<div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
  Section Name
</div>
```

### Heading
```
<h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl">
  Section Heading
</h2>
```

### Description
```
<p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
  Section description...
</p>
```

### Spacing
- Badge to Heading: `mb-10` on badge, implicit via flow
- Heading to Description: `mt-6` on description
- Max-width: `max-w-3xl` for heading, `max-w-2xl` for description
- Alignment: `text-center` for all three parts

## Card System

All cards adhere to a unified visual language while accommodating functional variations.

### Base Card Styles
- **Border Radius**: `rounded-[18px]` (most cards), `rounded-[8px]` (stats), `rounded-[24px]` (timeline), `rounded-[28px]` (portfolio), `rounded-[32px]` (testimonials) - preserved as designed but normalized where close
- **Border**: `border border-white/10` (or `border-white/[0.08]` for glassmorphism)
- **Background**: 
  - Solid: `bg-card` or `bg-black/70` with `backdrop-blur-md`
  - Glassmorphism: `bg-white/[0.03]` to `bg-white/[0.045]` with `backdrop-blur-xl`
  - Alternate: `bg-[#BFB6A40D]` (specific to timeline)
- **Padding**: 
  - Base: `p-5`
  - Sm+/lg: `sm:p-6` or `lg:p-8` depending on card size
- **Shadow**: 
  - Default: none or subtle (`shadow-sm`)
  - Hover: `shadow-[0_0_0_rgba(0,0,0,0.2)]` or similar lift
- **Hover Effects**:
  - Scale: `motion-safe:hover:scale-[1.03]` (cards), `group-hover:scale-[1.06]` (images within)
  - Border: `hover:border-white/20`
  - Background: `hover:bg-white/[0.07]` or `hover:bg-white/[0.045]` increase
- **Transition**: `duration-300 ease-out` (500 for image-specific transitions)
- **Transform GPU**: `transform-gpu` where applicable for performance

### Specific Card Adjustments
- **Service Cards**: `aspect-[4/4] h-full rounded-[18px] border border-white/10 bg-card transform-gpu transition-transform duration-300 ease-out motion-safe:hover:scale-[1.03]`
- **Stats Cards**: `aspect-square h-full rounded-[12px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition duration-300 ease-out hover:border-white/20 hover:bg-white/[0.07]`
- **Testimonial Cards**: `rounded-[32px] border border-white/[0.08] bg-white/[0.03] p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.045]`
- **Portfolio Cards**: `rounded-[28px] border border-white/10 bg-card transition-all duration-500 will-change-transform hover:-translate-y-1 hover:border-white/20`

## Container & Alignment System

All sections use the `Container` component for consistent horizontal alignment and max-width.

### Container Usage
```tsx
<Container className="optional-additional-classes">
  {/* Section content */}
</Container>
```
- The `Container` provides `mx-auto w-[92%] max-w-[1440px]`
- Additional classes can constrain width further (e.g., `max-w-2xl`, `max-w-3xl`)

### Alignment Principles
- **Text Alignment**: Headings and descriptions use `text-center`; card content uses `text-left` or `text-start`
- **Horizontal Centering**: Sections use `flex justify-center` or `mx-auto` on inner containers
- **Grid Systems**: 
  - Consistent gaps: `gap-5` (lg), `gap-3` or `gap-4` (sm)
  - Column definitions maintain existing layouts but with normalized spacing
  - Items stretch where appropriate (`items-stretch`)

### Max-Width Guidelines
- Heading containers: `max-w-3xl`
- Description containers: `max-w-2xl`
- Card grids: `max-w-5xl` (services), `max-w-4xl` (FAQ), etc.
- Full-width sections: use container default or `max-w-[1440px]`

## Transitions & Motion

All interactive elements use consistent timing and easing for a cohesive feel.

### Standard Transition
```
transition duration-300 ease-out
```
- Applied to borders, backgrounds, transforms, opacity
- Image-specific transitions may use `duration-700 ease-out`

### Hover Behaviors
- **Scale Increase**: 
  - Cards: `scale-[1.03]`
  - Images within cards: `scale-[1.06]`
  - Links/Buttons: `scale-[1.05]` where applicable
- **Border Opacity**: From `/10` to `/20` on hover
- **Background Opacity**: Increase by `0.02-0.03` on hover
- **Translation**: Subtle `hover:-translate-y-1` for lift effect
- **Duration**: `duration-300` for most, `duration-500` for larger motions

### Motion Safety
- Use `motion-safe:` prefix for scale transitions to respect reduced motion preferences
- Preserve existing animation libraries (Framer Motion, GSAP) for complex interactions

## Color & Effects System

### Primary Accent Color
- **Teal/Accent**: `#40ffbb` used consistently for:
  - Gradients: `from-[#40ffbb] to-[#40bbff]`
  - Glows: `bg-[#40ffbb]/10` or `/30`
  - Text: `text-[#40ffbb]` (stars, highlights)
  - Borders/Rings: accent-based glows

### Glassmorphism
- **Standard**: `bg-white/[0.03] to bg-white/[0.045]` with `backdrop-blur-xl`
- **Variant**: `bg-black/50` or `bg-black/70` with `backdrop-blur-md` for darker sections
- **Tinted Glass**: `bg-[#40ffbb]/10` with blur for subtle accent variation

### Gradients
- **Hero Blend**: 
  - Top: `bg-gradient-to-b from-transparent to-black` (hero into about)
  - Bottom: `bg-gradient-to-b from-black to-transparent` (about into hero)
- **Section Overlays**: `bg-gradient-to-t from-black/[opacity] via-transparent to-black/[opacity]`
- **Badge Accent**: `bg-gradient-to-r from-transparent via-sky-400/60 to-transparent`

### Shadows & Elevation
- **Soft Shadow**: `shadow-[0_0_0_rgba(0,0,0,0.1)]` for subtle lift
- **Medium Shadow**: `shadow-[0_10px_15px_rgba(0,0,0,0.1)]` for cards
- **Deep Shadow**: `shadow-[0_30px_80px_rgba(0,0,0,0.55)]` (timeline visual panel)
- **Glow/Blur**: `blur-3xl` for ambient glows, `blur-lg` or `blur-md` for smaller effects

### Opacity & Blend Modes
- **Backgrounds**: `bg-white/[0.03]` to `bg-white/[0.15]` for overlays
- **Gradients**: Use `/[opacity]` values for smooth transitions
- **Blend Modes**: Existing `mix-blend-mode` where used preserved

## Responsive Behavior

The design system adapts gracefully across breakpoints.

### Breakpoints
- **Mobile**: `default`
- **Tablet**: `sm: ≈640px`
- **Desktop**: `lg: ≈1024px`
- **Large Desktop**: `xl: ≈1280px`

### Spacing Scaling
- **Vertical Padding**: Increases from `py-16` → `py-20` → `py-24`
- **Gaps**: Increase from `gap-3` → `gap-4` → `gap-5` (or similar)
- **Font Sizes**: Headings scale with `sm:`, `lg:` prefixes (e.g., `text-4xl sm:text-5xl`)
- **Card Padding**: Increases from `p-5` → `sm:p-6` → `lg:p-8` where applicable
- **Image Sizes**: Adjust via responsive `sizes` attribute on `Next/Image`

### Layout Adaptations
- **Grid Columns**: 
  - Mobile: `grid-cols-1`
  - Tablet: `sm:grid-cols-2`
  - Desktop: `lg:grid-cols-3` or custom (e.g., services)
  - Special: Bento grid maintains `lg:grid-cols-12` with specific spans
- **Hidden/Visible**: Use `hidden lg:block` etc. for device-specific sections
- **Touch Targets**: Ensure minimum 48x48px for interactive elements

## Implementation Guidelines

To maintain consistency in future sections:

1. **Use Present Patterns**: Reuse badge/heading/description structure exactly
2. **Adopt Spacing Values**: Refer to the spacing scale for margins and padding
3. **Follow Typography Scale**: Use defined sizes, weights, line heights
4. **Apply Card Standards**: Use base card styles and adjust only as needed
5. **Leverage Container**: Wrap section content in `<Container>` for alignment
6. **Standardize Transitions**: Use `duration-300 ease-out` for hover/state changes
7. **Apply Accent Color**: Use `#40ffbb` for glows, gradients, highlights
8. **Test Responsively**: Verify at mobile, tablet, desktop breakpoints
9. **Preserve Interactions**: Do not alter existing animation or interaction logic
10. **Visual Regression**: Check for consistent density, rhythm, and alignment

## Exceptions & Notes

- **Hero Section**: Maintains unique clamp-based heading and video background
- **HowWeWorkTimeline**: Preserves complex GSAP-driven 3D transforms and scroll logic
- **ReelsCarousel & PostStageSlider**: Retain Framer Motion physics-based navigation
- **Partners Section**: Keeps floating logo layout with specific placements
- **Testimonial Strip**: Maintains marquee animation and ambient glow effects
- **Existing Opacities**: Where specific opacities are integral to design (e.g., timeline gradients), they are preserved

This design system reflects the refined state of the homepage as of the latest consistency pass and should guide all future additions or modifications to ensure visual cohesion.