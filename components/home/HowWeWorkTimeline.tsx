"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useLayoutEffect,
  useRef,
  useState,
  type MutableRefObject,
} from "react";

import { Container } from "@/components/layout/Container";
import { processSteps } from "@/lib/content/home";

gsap.registerPlugin(ScrollTrigger);

const CARD_GAP_PX = 20;
const CARD_HEIGHT_PX = 345;

const PIN_START_OFFSET = 88;

const POST_PANEL_WIDTH_PX = 530;
const POST_PANEL_HEIGHT_PX = 535;

const easeOutCubic = (t: number) =>
  1 - Math.pow(1 - t, 3);

function CardIcon({ index }: { index: number }) {
  const className = "h-5 w-5 text-white/90";

  switch (index) {
    case 0:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <circle cx="11" cy="11" r="6" />
          <path d="M16 16l5 5" strokeLinecap="round" />
        </svg>
      );

    case 1:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <path
            d="M4 7h16M4 12h16M4 17h10"
            strokeLinecap="round"
          />
        </svg>
      );

    case 2:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <path
            d="M12 4l8 4-8 4-8-4 8-4z"
            strokeLinejoin="round"
          />
          <path
            d="M4 12l8 4 8-4M4 16l8 4 8-4"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <path
            d="M4 18V8M9 18V5M14 18v-7M19 18V10"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function ProcessCard({
  step,
  index,
  distance,
  cardRef,
  showMobileImage = true,
  compact = false,
}: {
  step: (typeof processSteps)[number];
  index: number;
  distance: number;
  cardRef?: (el: HTMLElement | null) => void;
  showMobileImage?: boolean;
  compact?: boolean;
}) {
  const normalizedDistance = Math.min(distance, 3);

  const scale = 1 - normalizedDistance * 0.08;

  const opacity = 1 - normalizedDistance * 0.22;

  const translateX = normalizedDistance * -22;

  const rotateY = normalizedDistance * 5;

  const blur = normalizedDistance * 0.8;

  return (
    <article
      ref={cardRef}
      className={[
        "process-card relative flex shrink-0 flex-col justify-between rounded-[24px] border p-6 sm:p-10",
        compact ? "" : "min-h-[280px]",
        distance === 0
          ? "border-white/[0.12] bg-[#BFB6A40D]"
          : "border-white/[0.05] bg-[#BFB6A40D]",
      ].join(" ")}
      style={{
        height: compact ? CARD_HEIGHT_PX : undefined,

        transform: `
          translate3d(${translateX}px,0,0)
          scale(${scale})
          rotateY(${rotateY}deg)
        `,

        opacity: Math.max(opacity, 0.15),

        filter: `blur(${blur}px)`,

        zIndex: 20 - normalizedDistance,

        transformStyle: "preserve-3d",

        willChange:
          "transform, opacity, filter",

        backfaceVisibility: "hidden",

        transition:
          "transform 900ms cubic-bezier(0.22,1,0.36,1), opacity 700ms ease, border-color 700ms ease, filter 700ms ease",
      }}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-black/50">
        <CardIcon index={index} />
      </div>

      <div
        className={[
          "max-w-md",
          compact ? "mt-auto pt-6" : "mt-8",
        ].join(" ")}
      >
        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          {step.title}
        </h3>

        <div className="mt-4 h-px w-full max-w-[12rem] bg-white/15" />

        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          {step.description}
        </p>
      </div>

      {showMobileImage && (
        <div className="relative mx-auto mt-6 aspect-[4/5] w-full max-w-[25rem] overflow-hidden rounded-2xl border border-white/[0.06] bg-black lg:hidden">
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
      )}
    </article>
  );
}

function VisualPanel({
  activeIndex,
  imageRefs,
}: {
  activeIndex: number;
  imageRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#BFB6A40D] shadow-[0_32px_100px_rgba(0,0,0,0.55)]"
      style={{
        width: POST_PANEL_WIDTH_PX,
        height: POST_PANEL_HEIGHT_PX,
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      {processSteps.map((step, index) => (
        <div
          key={step.step}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          className="absolute inset-0 will-change-[opacity,transform]"
        >
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            className="object-cover"
            sizes="530px"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.06] bg-black/50 px-6 py-4 backdrop-blur-md">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          Step {processSteps[activeIndex].step}
        </p>

        <p className="mt-1 text-sm font-medium text-white/90">
          {processSteps[activeIndex].title}
        </p>
      </div>
    </div>
  );
}

export function HowWeWorkTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  const pinWrapRef = useRef<HTMLDivElement>(null);

  const leftViewportRef = useRef<HTMLDivElement>(null);

  const leftTrackRef = useRef<HTMLDivElement>(null);

  const desktopCardRefs = useRef<(HTMLElement | null)[]>([]);

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const mobileCardRefs = useRef<(HTMLElement | null)[]>([]);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeIndexRef = useRef(0);

  const setActive = (index: number) => {
    if (index === activeIndexRef.current)
      return;

    activeIndexRef.current = index;

    setActiveIndex(index);
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const imageLayers = imageRefs.current.filter(
      Boolean
    ) as HTMLDivElement[];

    imageLayers.forEach((el, i) => {
      gsap.set(el, {
        opacity: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 1.05,
        zIndex: i === 0 ? 2 : 1,
      });
    });

    const animateImages = (index: number) => {
      imageLayers.forEach((el, i) => {
        gsap.to(el, {
          opacity: i === index ? 1 : 0,

          scale: i === index ? 1 : 1.05,

          zIndex: i === index ? 2 : 1,

          duration: 0.9,

          ease: "power3.out",

          overwrite: "auto",

          force3D: true,
        });
      });
    };

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pinWrap = pinWrapRef.current;

        const viewport =
          leftViewportRef.current;

        const track = leftTrackRef.current;

        if (!pinWrap || !viewport || !track)
          return;

        let currentY = 0;

        let targetY = 0;

        let rafId = 0;

        const cards =
          desktopCardRefs.current.filter(
            Boolean
          );

        const viewportCenter =
          viewport.clientHeight / 2;

        const getScrollDistance = () =>
          Math.max(
            0,
            track.scrollHeight -
              viewport.clientHeight
          );

        const getClosestCard = (y: number) => {
          let closestIndex = 0;

          let closestDistance =
            Number.POSITIVE_INFINITY;

          cards.forEach((card, index) => {
            const el = card as HTMLElement;

            const cardCenter =
              el.offsetTop +
              el.offsetHeight / 2;

            const distance = Math.abs(
              cardCenter -
                (-y + viewportCenter)
            );

            if (
              distance < closestDistance
            ) {
              closestDistance = distance;

              closestIndex = index;
            }
          });

          return closestIndex;
        };

        const getLockedYForCard = (
          index: number
        ) => {
          const card =
            cards[index] as HTMLElement;

          const cardCenter =
            card.offsetTop +
            card.offsetHeight / 2;

          return -(
            cardCenter - viewportCenter
          );
        };

        const update = () => {
          currentY +=
            (targetY - currentY) * 0.04;

          gsap.set(track, {
            y: currentY,
            force3D: true,
          });

          const active =
            getClosestCard(currentY);

          if (
            active !==
            activeIndexRef.current
          ) {
            setActive(active);

            animateImages(active);
          }

          rafId =
            requestAnimationFrame(update);
        };

        update();

        const pinTrigger =
          ScrollTrigger.create({
            trigger: pinWrap,

            start: `top ${PIN_START_OFFSET}px`,

            end: () =>
              `+=${getScrollDistance()}`,

            pin: true,

            pinSpacing: true,

            scrub: 1,

            anticipatePin: 1,

            invalidateOnRefresh: true,

            onUpdate: (self) => {
              const progressY =
                -getScrollDistance() *
                self.progress;

              if (self.progress < 0.04) {
                const nearestIndex =
                  getClosestCard(
                    progressY
                  );

                const lockedY =
                  getLockedYForCard(
                    nearestIndex
                  );

                const t =
                  self.progress / 0.04;

                targetY =
                  lockedY *
                  easeOutCubic(t);
              } else {
                const nearestIndex =
                  getClosestCard(
                    progressY
                  );

                targetY =
                  getLockedYForCard(
                    nearestIndex
                  );
              }
            },
          });

        setActive(0);

        animateImages(0);

        ScrollTrigger.refresh();

        return () => {
          cancelAnimationFrame(rafId);

          pinTrigger.kill();
        };
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32 lg:py-12"
    >
      {/* Desktop */}
      <div
        ref={pinWrapRef}
        className="hidden lg:block"
      >
        <Container>
          <div className="grid grid-cols-[minmax(520px,620px)_530px] items-start justify-center gap-24 xl:gap-48">
            {/* LEFT */}
            <div
              ref={leftViewportRef}
              className="relative h-[calc(100vh-8rem)] min-h-[680px] overflow-hidden"
              style={{
                perspective: "1600px",

                perspectiveOrigin:
                  "center center",
              }}
            >
              <div
                ref={leftTrackRef}
                className="will-change-transform"
              >
                {/* HEADING */}
                <div className="max-w-[620px]">
                  <div className="relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm text-foreground/90 backdrop-blur-md">
                    How We Work?
                  </div>

                  <h2 className="mt-16 max-w-[430px] text-[4rem] leading-[0.95] tracking-tight text-foreground">
                    Our proven growth process
                  </h2>

                  <p className="mt-8 max-w-[520px] text-base leading-snug text-muted">
                    We blend strategy,
                    creativity, and data to
                    design campaigns that grab
                    attention, foster
                    engagement, and drive
                    tangible results.
                  </p>
                </div>

                {/* CARDS */}
                <div
                  className="mt-12 flex flex-col"
                  style={{
                    gap: `${CARD_GAP_PX}px`,

                    paddingTop: "20vh",

                    paddingBottom: "55vh",
                  }}
                >
                  {processSteps.map(
                    (step, index) => (
                      <ProcessCard
                        key={step.step}
                        step={step}
                        index={index}
                        distance={Math.abs(
                          activeIndex - index
                        )}
                        showMobileImage={
                          false
                        }
                        compact
                        cardRef={(el) => {
                          desktopCardRefs.current[
                            index
                          ] = el;
                        }}
                      />
                    )
                  )}

                  <div className="shrink-0 pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-transparent px-10 text-sm font-semibold text-foreground transition hover:border-white/30"
                    >
                      Book an Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex h-[calc(100vh-8rem)] items-center">
              <VisualPanel
                activeIndex={activeIndex}
                imageRefs={imageRefs}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}