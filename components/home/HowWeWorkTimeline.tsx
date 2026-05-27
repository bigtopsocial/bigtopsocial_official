"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

import { Container } from "@/components/layout/Container";
import { BlurTextReveal } from "@/components/motion/BlurTextReveal";
import { processSteps } from "@/lib/content/home";

const stepImages = [
  "/testimonials/15M4kvkfOTEm4Aa0gaOHpjxbsg.png",
  "/testimonials/36gqztWcToPPHd22gfZKy1MeKM.png",
  "/testimonials/RnNDQCdRzWFSlr5xHMtOdaCwv0A.png",
  "/testimonials/wCeVqDNsespfMwpEZDJh9bvoe0.png",
];

function CardIcon({ index }: { index: number }) {
  const cls = "h-6 w-6 text-sky-400";
  switch (index) {
    case 0:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="11" cy="11" r="6" />
          <path d="M16 16l5 5" strokeLinecap="round" />
        </svg>
      );
    case 1:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
        </svg>
      );
    case 2:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M12 4l8 4-8 4-8-4 8-4z" strokeLinejoin="round" />
          <path d="M4 12l8 4 8-4M4 16l8 4 8-4" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 18V8M9 18V5M14 18v-7M19 18V10" strokeLinecap="round" />
        </svg>
      );
  }
}

export function HowWeWorkTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.55 }
    );

    cardRefs.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    imageRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = i === activeIndex ? "1" : "0";
      el.style.transform = i === activeIndex ? "scale(1)" : "scale(1.04)";
    });
  }, [activeIndex]);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">

          {/* LEFT — heading + cards */}
          <div>
            {/* Pill */}
            <div className="relative mx-auto mb-10 flex w-fit overflow-hidden rounded-full lg:mx-0 lg:inline-flex border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-['']">
              How We Work?
            </div>

            <BlurTextReveal
              as="h2"
              text="Our proven growth process"
              className="mx-auto max-w-[22rem] text-center text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.0] tracking-tight text-foreground lg:mx-0 lg:text-left"
            />

            <p className="mt-5 max-w-[30rem] text-sm leading-relaxed text-muted sm:text-base">
              We blend strategy, creativity, and data to design campaigns that
              grab attention, foster engagement, and drive tangible results.
            </p>

            {/* Cards */}
            <div className="mt-10 flex flex-col gap-[3px]">
              {processSteps.map((step, index) => (
                <article
                  key={step.step}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="flex min-h-[280px] flex-col justify-between rounded-[18px] bg-card p-6 sm:min-h-[360px] sm:rounded-[20px] sm:p-10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06]">
                    <CardIcon index={index} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {step.title}
                    </h3>
                    <div className="my-4 h-px w-full bg-white/10" />
                    <p className="text-sm leading-relaxed text-muted sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}

            </div>
          </div>

          {/* RIGHT — sticky image panel */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
                <div className="relative aspect-square w-full overflow-hidden rounded-[24px] bg-card">
                {processSteps.map((step, index) => (
                  <div
                    key={step.step}
                    ref={(el) => { imageRefs.current[index] = el; }}
                    className="absolute inset-0"
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      transform: index === 0 ? "scale(1)" : "scale(1.04)",
                      transition: "opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <Image
                      src={stepImages[index] ?? step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      loading="lazy"
                    />
                  </div>
                ))}

                {/* bottom label */}
                <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.06] bg-black/50 px-6 py-4 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Step {processSteps[activeIndex].step}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/90">
                    {processSteps[activeIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
