"use client";

import { useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const reelCards = [
  {
    title: "Launch reel",
    caption: "Fast-cut brand story",
    src: "/herovideo.mp4",
  },
  {
    title: "Product reel",
    caption: "Product-led motion",
    src: "/herovideo.mp4",
  },
  {
    title: "Campaign reel",
    caption: "Minimal social edit",
    src: "/herovideo.mp4",
  },
  {
    title: "Founder reel",
    caption: "Short-form narrative",
    src: "/herovideo.mp4",
  },
] as const;

export function ReelsCarousel() {
  const reduceMotion = useReducedMotion();

  // duplicate for seamless infinite loop
  const loopedCards = [...reelCards, ...reelCards];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Heading */}
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
            Reels
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Short-form motion, built to loop
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            A minimal horizontal reel strip for campaign cuts, product clips,
            and founder stories.
          </p>
        </div>
      </Container>

      {/* Slider */}
      <div className="relative mt-14 overflow-hidden">
        {/* INNER LEFT EDGE MASK */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-24 bg-[linear-gradient(to_right,#000_0%,rgba(0,0,0,0.92)_18%,rgba(0,0,0,0.65)_42%,transparent_100%)]" />

        {/* INNER RIGHT EDGE MASK */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-24 bg-[linear-gradient(to_left,#000_0%,rgba(0,0,0,0.92)_18%,rgba(0,0,0,0.65)_42%,transparent_100%)]" />

        {/* Carousel Container */}
        <div className="relative overflow-hidden px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="group overflow-hidden">
            <div
              className={[
                `
                reels-track
                flex w-max items-stretch
                gap-6 lg:gap-8
                py-2

                transform-gpu
                will-change-transform
                backface-hidden
              `,
                reduceMotion
                  ? ""
                  : "motion-safe:animate-[reels-marquee_26s_linear_infinite] group-hover:[animation-play-state:paused]",
              ].join(" ")}
            >
              {loopedCards.map((card, index) => (
                <article
                  key={`${card.title}-${index}`}
                  className="
                    relative flex-none
                    w-[72vw]
                    max-w-[20rem]
                    sm:w-[16rem]
                    lg:w-[17rem]

                    transform-gpu
                    will-change-transform
                  "
                >
                  <div
                    className="
                      group/card
                      relative aspect-[9/16]
                      overflow-hidden
                      rounded-2xl
                      border border-white/10
                      bg-[#0b0b0b]

                      shadow-[0_18px_45px_rgba(0,0,0,0.42)]

                      transform-gpu
                      backface-hidden
                      will-change-transform

                      transition-transform
                      duration-300
                      ease-out

                      hover:scale-[1.02]
                    "
                  >
                    {/* VIDEO */}
                    <video
                      className="
                        h-full w-full
                        object-cover

                        transform-gpu
                        backface-hidden
                      "
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-label={card.title}
                      disablePictureInPicture
                      disableRemotePlayback
                    >
                      <source src={card.src} type="video/mp4" />
                    </video>

                    {/* OVERLAY */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.88),rgba(0,0,0,0.08)_62%,rgba(0,0,0,0.12))]" />

                    {/* CONTENT */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/55">
                        Reel
                      </p>

                      <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
                        {card.title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {card.caption}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}