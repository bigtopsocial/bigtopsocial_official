import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/lib/content/home";

function StepIcon({ index }: { index: number }) {
  const icons = [
    <svg key="0" viewBox="0 0 48 40" fill="none" className="h-10 w-12" aria-hidden>
      <rect x="4" y="6" width="32" height="28" rx="3" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <path d="M10 14h18M10 20h14M10 26h10" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 28l6-4v8l-6-4z" fill="#a855f7" />
    </svg>,
    <svg key="1" viewBox="0 0 48 40" fill="none" className="h-10 w-12" aria-hidden>
      <rect x="6" y="8" width="30" height="24" rx="2" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <path d="M6 8h30M6 32h30" stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="6" cy="8" r="2.5" fill="#3b82f6" />
      <circle cx="36" cy="8" r="2.5" fill="#3b82f6" />
      <circle cx="6" cy="32" r="2.5" fill="#3b82f6" />
      <circle cx="36" cy="32" r="2.5" fill="#3b82f6" />
    </svg>,
    <svg key="2" viewBox="0 0 48 40" fill="none" className="h-10 w-12" aria-hidden>
      <rect x="4" y="6" width="14" height="14" rx="2" fill="#a855f7" fillOpacity="0.5" />
      <rect x="20" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="4" y="22" width="14" height="12" rx="2" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="20" y="22" width="14" height="12" rx="2" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
    </svg>,
    <svg key="3" viewBox="0 0 48 40" fill="none" className="h-10 w-12" aria-hidden>
      <rect x="4" y="10" width="28" height="4" rx="1" fill="#3b82f6" fillOpacity="0.7" />
      <rect x="4" y="18" width="22" height="4" rx="1" fill="#ef4444" fillOpacity="0.7" />
      <rect x="4" y="26" width="18" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
      <path d="M36 12l4 2-4 2M36 20l4 2-4 2M36 28l4 2-4 2" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
    </svg>,
  ];

  return <div className="text-foreground/60">{icons[index]}</div>;
}

function TimelineMarker({ color }: { color: string }) {
  return (
    <div
      className="relative z-10 h-2.5 w-2.5 rotate-45 rounded-[1px] ring-4 ring-[#050505]"
      style={{ backgroundColor: color }}
      aria-hidden
    />
  );
}

function StepPreview({
  layout,
  images,
}: {
  layout: (typeof processSteps)[number]["layout"];
  images?: readonly { src: string; alt: string }[];
}) {
  if (!images?.length) return null;

  if (layout === "grid") {
    return (
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] bg-[#111] shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 45vw, 280px"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`mt-10 overflow-hidden rounded-xl border border-white/[0.06] bg-[#111] shadow-[0_12px_48px_rgba(0,0,0,0.5)] ${
        layout === "wide" ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]"
      }`}
    >
      <div className="relative h-full w-full">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 640px"
        />
      </div>
    </div>
  );
}

function TimelineStep({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08} className="how-we-work-step">
      <div className="how-we-work-step__grid">
        {/* Left: faded label + icon */}
        <div className="how-we-work-step__left hidden lg:flex lg:flex-col lg:items-end lg:pr-8">
          <span className="select-none text-[clamp(2.5rem,4vw,3.75rem)] font-sm uppercase leading-none tracking-[0.12em] text-foreground/[0.07]">
            Step {step.step}
          </span>
          <div className="mt-6">
            <StepIcon index={index} />
          </div>
        </div>

        {/* Center: diamond marker on spine */}
        <div className="how-we-work-step__center relative hidden lg:flex lg:items-start lg:justify-center lg:pt-3">
          <TimelineMarker color={step.markerColor} />
        </div>

        {/* Right: content */}
        <div className="how-we-work-step__right min-w-0">
          <div className="mb-6 flex items-center gap-4 lg:hidden">
            <TimelineMarker color={step.markerColor} />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/30">
              Step {step.step}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted">{step.body}</p>
          <h3 className="mt-4 max-w-xl text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {step.heading}
          </h3>

          {step.cta && (
            <div className="mt-8">
              <Link
                href={step.cta.href}
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                {step.cta.label}
              </Link>
              {step.cta.caption && (
                <p className="mt-3 text-xs text-muted">{step.cta.caption}</p>
              )}
            </div>
          )}

          <StepPreview layout={step.layout} images={step.images} />
        </div>
      </div>
    </Reveal>
  );
}

export function HowWeWorkTimeline() {
  return (
    <section className="how-we-work relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <div className="relative mb-10 inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
            How We Work?
          </div>
          <h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl">
            Our proven growth process
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
            We blend strategy, creativity, and data to design campaigns that grab
            attention, foster engagement, and drive tangible results.
          </p>
        </Reveal>

        <div className="how-we-work-timeline relative mx-auto mt-20 max-w-5xl lg:mt-28">
          <div
            className="pointer-events-none absolute bottom-12 top-0 hidden w-px bg-gradient-to-b from-white/[0.04] via-white/[0.14] to-white/[0.04] lg:block lg:left-[calc(28%+24px)]"
            aria-hidden
          />

          <div className="flex flex-col">
            {processSteps.map((step, idx) => (
              <TimelineStep key={step.step} step={step} index={idx} />
            ))}
          </div>


        </div>
      </Container>
    </section>
  );
}
