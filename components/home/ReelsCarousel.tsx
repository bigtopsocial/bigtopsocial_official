"use client";

import {
  motion,
  useMotionValue,
  animate,
  PanInfo,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMatchMedia } from "@/lib/useMatchMedia";

const reelCards = [
  {
    title: "Feature showcase",
    caption: "Editorial campaign",
    src: "/reels/1.mp4",
  },
  {
    title: "Community highlight",
    caption: "Real audience moments",
    src: "/reels/2.mp4",
  },
  {
    title: "Brand reveal post",
    caption: "Creative identity reveal",
    src: "/reels/3.mp4",
  },
  {
    title: "Product teaser",
    caption: "Launch-ready visuals",
    src: "/reels/4.mp4",
  },
  {
    title: "Behind the scenes",
    caption: "Studio process",
    src: "/reels/5.mp4",
  },
  {
    title: "Founder vision",
    caption: "Story-driven messaging",
    src: "/reels/6.mp4",
  },
  {
    title: "Campaign launch",
    caption: "High-converting creative",
    src: "/reels/7.mp4",
  },
  {
    title: "Creative direction",
    caption: "Design-led storytelling",
    src: "/reels/8.mp4",
  },
  {
    title: "Social campaign",
    caption: "Scroll-stopping visuals",
    src: "/reels/9.mp4",
  },
] as const;

/* ------------------------------------------------ */
/* CARD */
/* ------------------------------------------------ */

function ReelCard({
  card,
  isActive,
}: {
  card: (typeof reelCards)[number];
  isActive: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isActive) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <div
      className="
        relative
        aspect-[9/16]
        w-[280px] sm:w-[320px]
        overflow-hidden
        rounded-[24px] sm:rounded-[30px]
        bg-black
      "
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={card.src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
          Feed post
        </p>

        <h3 className="mt-2 text-[30px] font-medium leading-none text-white">
          {card.title}
        </h3>

        <p className="mt-2 text-sm text-white/60">
          {card.caption}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------ */
/* MAIN */
/* ------------------------------------------------ */

export function ReelsCarousel() {
  const reduceMotion = useReducedMotion();
  // This carousel is desktop-only (parent uses `hidden lg:block`). Skip mounting
  // it on mobile entirely so its videos and autoplay timers never run there.
  const isDesktop = useMatchMedia("(min-width: 1024px)");

  const [activeIndex, setActiveIndex] = useState(2);

  const x = useMotionValue(0);

  const total = reelCards.length;

  const wrappedCards = useMemo(() => {
    return [...reelCards];
  }, []);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -80 || velocity < -500) {
      next();
    }

    if (offset > 80 || velocity > 500) {
      prev();
    }

    animate(x, 0, {
      type: "spring",
      stiffness: 260,
      damping: 28,
    });
  };

  useEffect(() => {
    if (reduceMotion || !isDesktop) return;

    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [reduceMotion, isDesktop]);

  if (!isDesktop) return null;

  return (
    <section className="relative z-0 overflow-hidden bg-black py-0">
      <div className="relative min-h-[600px] sm:min-h-[680px] lg:h-[760px] overflow-hidden">
        {/* LEFT FADE */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-0 z-40
            w-32 sm:w-40 lg:w-52
            bg-gradient-to-r
            from-black
            via-black/90
            to-transparent
          "
        />

        {/* RIGHT FADE */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 right-0 z-40
            w-32 sm:w-40 lg:w-52
            bg-gradient-to-l
            from-black
            via-black/90
            to-transparent
          "
        />

        {/* CENTER STAGE */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
          "
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="
              relative
              h-[520px] sm:h-[600px] lg:h-[680px]
              w-full
              cursor-grab
              active:cursor-grabbing
            "
          >
            {wrappedCards.map((card, index) => {
              let offset = index - activeIndex;

              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const abs = Math.abs(offset);

              const isActive = offset === 0;

              const translateX = offset * 285;

              const scale =
                isActive
                  ? 1
                  : abs === 1
                    ? 0.92
                    : abs === 2
                      ? 0.82
                      : 0.72;

              const translateY =
                isActive
                  ? 0
                  : abs === 1
                    ? -12
                    : abs === 2
                      ? -24
                      : -36;

              const opacity =
                isActive
                  ? 1
                  : abs === 1
                    ? 0.55
                    : abs === 2
                      ? 0.28
                      : 0.1;

              const blur =
                abs >= 3
                  ? 1.4
                  : abs === 2
                    ? 0.7
                    : 0;

              const brightness =
                isActive
                  ? 1
                  : abs === 1
                    ? 0.7
                    : 0.42;

              const zIndex = 100 - abs;

              return (
                <motion.div
                  key={`${card.title}-${index}`}
                  animate={{
                    x: translateX,
                    y: translateY,
                    scale,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                  }}
                  style={{
                    zIndex,
                    filter: `
                      blur(${blur}px)
                      brightness(${brightness})
                    `,
                  }}
                  className="
                    absolute
                    left-1/2 top-1/2
                    will-change-transform
                  "
                >
                  <div className="-translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      whileHover={{
                        scale: isActive ? 1.02 : scale + 0.02,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative"
                    >
                      <ReelCard
                        card={card}
                        isActive={isActive}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* FOOTER */}
        <div
          className="
            absolute bottom-10 left-1/2 z-50
            -translate-x-1/2
            text-center
          "
        >
          <p className="text-sm text-white/50">
            Active:
            <span className="ml-2 text-white/80">
              {wrappedCards[activeIndex].title}
            </span>
          </p>

          <p className="mt-2 text-xs text-muted">
            Swipe, scroll, or click a card
          </p>
        </div>
      </div>
    </section>
  );
}