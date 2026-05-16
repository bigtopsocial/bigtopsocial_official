"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";

type PostCard = {
  title: string;
  meta: string;
  type: "Image" | "Video";
  src: string;
};

const cards: PostCard[] = [
  {
    title: "Brand reveal post",
    meta: "Feed post • 01",
    type: "Image",
    src: "/image.png",
  },
  {
    title: "Campaign highlight",
    meta: "Carousel • 02",
    type: "Image",
    src: "/image.png",
  },
  {
    title: "Launch announcement",
    meta: "Video post • 03",
    type: "Video",
    src: "/herovideo.mp4",
  },
  {
    title: "Social proof card",
    meta: "Feed post • 04",
    type: "Image",
    src: "/image.png",
  },
  {
    title: "Motion teaser",
    meta: "Video post • 05",
    type: "Video",
    src: "/herovideo2.mp4",
  },
] as const;

export function PostStageSlider() {
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(2);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const wheelLock = useRef(false);
  const autoAdvance = useRef<number | null>(null);

  const activeCard = useMemo(
    () => cards[activeIndex],
    [activeIndex]
  );

  const goTo = (nextIndex: number) => {
    const total = cards.length;
    setActiveIndex((nextIndex + total) % total);
  };

  useEffect(() => {
    if (reduceMotion) return;

    autoAdvance.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 3200);

    return () => {
      if (autoAdvance.current) {
        window.clearInterval(autoAdvance.current);
      }
    };
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Header */}
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
            Posts
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Posts that pop on the feed 
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            A centered cinematic carousel with layered depth and smooth
            horizontal interaction.
          </p>
        </div>
      </Container>

      {/* Slider */}
      <div className="mt-16 w-full overflow-hidden px-4 sm:px-8 lg:px-16 xl:px-24">
        <div
          className="relative isolate overflow-hidden rounded-[40px]"
          onWheel={(event) => {
            if (
              !event.shiftKey &&
              Math.abs(event.deltaY) <= Math.abs(event.deltaX)
            ) {
              return;
            }

            event.preventDefault();

            if (wheelLock.current) return;

            wheelLock.current = true;

            goTo(
              activeIndex +
                (event.deltaY > 0 || event.deltaX > 0 ? 1 : -1)
            );

            window.setTimeout(() => {
              wheelLock.current = false;
            }, 140);
          }}
          onPointerDown={(event) =>
            setDragStartX(event.clientX)
          }
          onPointerUp={(event) => {
            if (dragStartX === null) return;

            const delta = event.clientX - dragStartX;

            if (Math.abs(delta) > 40) {
              goTo(activeIndex + (delta < 0 ? 1 : -1));
            }

            setDragStartX(null);
          }}
          onPointerCancel={() => setDragStartX(null)}
        >
          {/* Ambient background glow */}
          <div className="pointer-events-none absolute inset-0 " />

          {/* Carousel */}
          <div className="relative flex min-h-[38rem] items-center justify-center overflow-hidden py-12 sm:min-h-[44rem]">
            <div className="relative flex h-[36rem] w-full items-center justify-center">
              {cards.map((card, index) => {
                const total = cards.length;

                let offset = index - activeIndex;

                // Circular indexing
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const distance = Math.abs(offset);
                const isActive = offset === 0;

                // spacing between cards
                const CARD_SPACING = 290;

                // scale hierarchy
                const scale =
                  isActive
                    ? 1
                    : distance === 1
                    ? 0.88
                    : 0.76;

                // opacity hierarchy
                const opacity =
                  isActive
                    ? 1
                    : distance === 1
                    ? 0.42
                    : 0.12;

                // slight perspective rotation
                const rotate =
                  isActive
                    ? 0
                    : offset > 0
                    ? 5
                    : -5;

                // vertical lift
                const translateY = isActive ? -14 : 0;

                // stacking
                const zIndex = 100 - distance;

                return (
                  <motion.div
                    key={`${card.title}-${index}`}
                    className="
                      absolute
                      w-[78vw]
                      max-w-[24rem]
                      sm:w-[22rem]
                      lg:w-[24rem]
                      cursor-pointer
                    "
                    animate={{
                      x: offset * CARD_SPACING,
                      scale,
                      opacity,
                      rotateY: rotate,
                      y: translateY,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 22,
                    }}
                    style={{
                      zIndex,
                      transformStyle: "preserve-3d",
                    }}
                    onClick={() => goTo(index)}
                  >
                    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0b0b] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                      <div className="relative aspect-[4/5]">
                        {card.type === "Image" ? (
                          <Image
                            src={card.src}
                            alt={card.title}
                            fill
                            className="object-cover"
                            sizes="(max-width:768px) 78vw, 24rem"
                            priority={isActive}
                          />
                        ) : (
                          <video
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label={card.title}
                          >
                            <source
                              src={card.src}
                              type="video/mp4"
                            />
                          </video>
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.88),rgba(0,0,0,0.08)_58%,rgba(0,0,0,0.18))]" />

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
                            {card.meta}
                          </p>

                          <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Container className="mt-8">
        <div className="flex items-center justify-between gap-4 text-sm text-white/50">
          <span>Active: {activeCard.title}</span>
          <span>Swipe, scroll, or click a card</span>
        </div>
      </Container>
    </section>
  );
}