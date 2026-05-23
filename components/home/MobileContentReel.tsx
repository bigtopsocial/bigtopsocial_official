"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
  type MotionValue,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";

// ─── data ────────────────────────────────────────────────────────────────────

type Item = { id: string; type: "image" | "video"; src: string };

const POSTS: Item[] = Array.from({ length: 8 }, (_, i) => ({
  id: `post-${i + 1}`,
  type: "image",
  src: `/post contents/${i + 1}.png`,
}));
const REELS: Item[] = Array.from({ length: 9 }, (_, i) => ({
  id: `reel-${i + 1}`,
  type: "video",
  src: `/reels/${i + 1}.mp4`,
}));
const ITEMS: Item[] = (() => {
  const out: Item[] = [];
  const n = Math.max(POSTS.length, REELS.length);
  for (let i = 0; i < n; i++) {
    if (POSTS[i]) out.push(POSTS[i]);
    if (REELS[i]) out.push(REELS[i]);
  }
  return out;
})();
const N = ITEMS.length;

// ─── physics ──────────────────────────────────────────────────────────────────

// pixels to drag to advance one card
const STEP = 152;

// snappy for user gesture
const SNAP = { type: "spring" as const, stiffness: 410, damping: 40, mass: 0.6 };
// cinematic for autoplay
const AUTO = { type: "spring" as const, stiffness: 82, damping: 22, mass: 1.1 };

// ─── spatial transform table  (index maps to fractional offset -3…+3) ────────

const OFF  = [-3,   -2,   -1,   0,    1,    2,    3  ];
const TX   = [-310, -235, -148, 0,    148,  235,  310 ]; // px — lateral spread
const TY   = [ 48,   28,   12,  0,    12,   28,   48  ]; // px — depth sink
const SC   = [ 0.5,  0.66, 0.83, 1,   0.83, 0.66, 0.5 ]; // scale
const OP   = [ 0,    0.48, 0.8,  1,   0.8,  0.48, 0   ]; // opacity
const RZ   = [-8,   -4,   -2,   0,    2,    4,    8   ]; // rotateZ deg
const DIM  = [ 0.55, 0.32, 0.13, 0,   0.13, 0.32, 0.55]; // black overlay opacity

// ─── Card ─────────────────────────────────────────────────────────────────────

// Each card is its own component so useTransform is called at component top-level
// (not inside .map — that would violate rules of hooks).
// All transforms run on the compositor thread; zero React re-renders during drag/autoplay.

type CardProps = {
  item: Item;
  index: number;
  scrollX: MotionValue<number>;
  onOpen: (i: number) => void;
  onJump: (i: number) => void;
};

function Card({ item, index, scrollX, onOpen, onJump }: CardProps) {
  const videoRef    = useRef<HTMLVideoElement | null>(null);
  const lastOff     = useRef(0);

  // fractional offset from center — shortest-path wrap around N cards
  const offset = useTransform(scrollX, (sx) => {
    let o = index - sx / STEP;
    o = o - Math.round(o / N) * N;      // normalise to [-N/2, N/2]
    return o;
  });

  const x       = useTransform(offset, OFF, TX,  { clamp: false });
  const y       = useTransform(offset, OFF, TY,  { clamp: false });
  const scale   = useTransform(offset, OFF, SC,  { clamp: false });
  const opacity = useTransform(offset, OFF, OP,  { clamp: false });
  const rotateZ = useTransform(offset, OFF, RZ,  { clamp: false });
  const dim     = useTransform(offset, OFF, DIM, { clamp: false });
  const zIndex  = useTransform(offset, (v) => Math.max(1, Math.round(20 - Math.abs(v) * 4)));

  // Imperative video control — no React state, no re-renders
  useEffect(() => {
    return offset.on("change", (v) => {
      lastOff.current = v;
      const vid = videoRef.current;
      if (!vid) return;
      if (Math.abs(v) < 0.45) {
        vid.play().catch(() => {});
      } else if (!vid.paused) {
        vid.pause();
      }
    });
  }, [offset]);

  return (
    <motion.div
      className="absolute inset-y-0 cursor-pointer select-none"
      style={{
        // centered card — width & margin-left mirror each other
        width: "clamp(160px, 56vw, 230px)",
        left: "50%",
        marginLeft: "clamp(-80px, -28vw, -115px)",
        x, y, scale, opacity, rotateZ, zIndex,
        willChange: "transform, opacity",
      }}
      onClick={() => {
        if (Math.abs(lastOff.current) < 0.48) onOpen(index);
        else onJump(index);
      }}
    >
      {/* card shell */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[20px] bg-[#090909]"
        style={{
          boxShadow:
            "0 22px 60px rgba(0,0,0,.68), 0 6px 18px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,255,255,.08)",
        }}
      >
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.id}
            fill
            sizes="(max-width:640px) 56vw, 230px"
            className="object-cover"
            loading="eager"
            draggable={false}
          />
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={item.src} type="video/mp4" />
          </video>
        )}

        {/* depth darkening — GPU-friendly opacity, no filter */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: "#000", opacity: dim }}
        />

        {/* premium glass sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(148deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,.04) 26%, transparent 54%, rgba(0,0,0,.1) 100%)",
          }}
        />

        {/* top-edge shimmer */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-[11] h-px rounded-t-[20px]"
          style={{ background: "rgba(255,255,255,.18)" }}
        />
      </div>
    </motion.div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({ item, onClose }: { item: Item; onClose: () => void }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,.88)", backdropFilter: "blur(18px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[min(88vw,340px)] overflow-hidden rounded-[22px] bg-black"
        style={{
          aspectRatio: "9/16",
          boxShadow: "0 32px 80px rgba(0,0,0,.85), 0 0 0 1px rgba(255,255,255,.08)",
        }}
        initial={{ scale: 0.86, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 12 }}
        transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.id}
            fill
            sizes="88vw"
            className="object-contain"
            priority
          />
        ) : (
          <video
            src={item.src}
            className="h-full w-full object-contain"
            controls
            autoPlay
            loop
            playsInline
          />
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full text-white transition"
          style={{ background: "rgba(255,255,255,.12)", backdropFilter: "blur(8px)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </motion.div>
    </motion.div>,
    document.body
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export function MobileContentReel() {
  // Unbounded scroll position (0 = card 0 centered, -STEP = card 1, etc.)
  // Never reset — autoplay keeps advancing indefinitely; modulo handles wrap display.
  const scrollX = useMotionValue(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [openIdx,   setOpenIdx]   = useState<number | null>(null);

  const ptrStartX  = useRef(0);
  const ptrStartSX = useRef(0);
  const ptrTime    = useRef(0);
  const dragging   = useRef(false);
  const animCtrl   = useRef<{ stop(): void } | null>(null);
  const autoTimer  = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeT    = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── helpers ──────────────────────────────────────────────────────────────

  const stopAnim = useCallback(() => {
    animCtrl.current?.stop();
    animCtrl.current = null;
  }, []);

  // Snap scrollX to an absolute target (unbounded px)
  const snapToX = useCallback(
    (targetX: number, spring = SNAP) => {
      stopAnim();
      animCtrl.current = animate(scrollX, targetX, spring);
      const norm = ((-Math.round(targetX / STEP) % N) + N) % N;
      setActiveIdx(norm);
    },
    [scrollX, stopAnim]
  );

  // Jump to card index via shortest path in unbounded space
  const jumpTo = useCallback(
    (modTarget: number) => {
      const cur     = Math.round(-scrollX.get() / STEP);
      const curMod  = ((cur % N) + N) % N;
      let   diff    = modTarget - curMod;
      if (diff >  N / 2) diff -= N;
      if (diff < -N / 2) diff += N;
      snapToX(-(cur + diff) * STEP);
    },
    [scrollX, snapToX]
  );

  // ── autoplay ──────────────────────────────────────────────────────────────

  const stopAuto = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    if (resumeT.current)   clearTimeout(resumeT.current);
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    autoTimer.current = setInterval(() => {
      if (dragging.current) return;
      const nextX = scrollX.get() - STEP;
      stopAnim();
      animCtrl.current = animate(scrollX, nextX, AUTO);
      const norm = ((-Math.round(nextX / STEP) % N) + N) % N;
      setActiveIdx(norm);
    }, 3600);
  }, [scrollX, stopAnim, stopAuto]);

  const scheduleResume = useCallback(() => {
    if (resumeT.current) clearTimeout(resumeT.current);
    resumeT.current = setTimeout(startAuto, 2400);
  }, [startAuto]);

  useEffect(() => {
    if (openIdx !== null) { stopAuto(); return; }
    startAuto();
    return stopAuto;
  }, [openIdx, startAuto, stopAuto]);

  // ── pointer events ────────────────────────────────────────────────────────

  const onPointerDown = (e: React.PointerEvent) => {
    ptrStartX.current  = e.clientX;
    ptrStartSX.current = scrollX.get();
    ptrTime.current    = Date.now();
    dragging.current   = false;
    stopAuto();
    stopAnim();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const dx = e.clientX - ptrStartX.current;
    if (Math.abs(dx) > 5) dragging.current = true;
    if (dragging.current) scrollX.set(ptrStartSX.current + dx);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const dx  = e.clientX - ptrStartX.current;
    const dt  = Math.max(1, Date.now() - ptrTime.current);
    const vel = dx / dt; // px/ms

    const cur = -scrollX.get() / STEP;
    let target: number;
    if (Math.abs(vel) > 0.32 || Math.abs(dx) > 46) {
      target = Math.round(cur - Math.sign(dx) * 0.55);
    } else {
      target = Math.round(cur);
    }
    snapToX(-target * STEP);

    setTimeout(() => { dragging.current = false; }, 40);
    scheduleResume();
  };

  const onPointerCancel = () => {
    snapToX(-Math.round(-scrollX.get() / STEP) * STEP);
    dragging.current = false;
    scheduleResume();
  };

  const openItem = openIdx !== null ? ITEMS[openIdx] : null;

  return (
    <section className="lg:hidden select-none overflow-x-hidden py-8 sm:py-14">
      {/* Stack arena — NO overflow-hidden so cards bleed to screen edges */}
      <div
        className="relative"
        style={{ height: "clamp(22rem, 88vw, 36rem)" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {/* subtle ambient radial behind the stack */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,.035) 0%, transparent 100%)",
          }}
        />

        {ITEMS.map((item, i) => (
          <Card
            key={item.id}
            item={item}
            index={i}
            scrollX={scrollX}
            onOpen={setOpenIdx}
            onJump={(idx) => {
              jumpTo(idx);
              stopAuto();
              scheduleResume();
            }}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <Container>
        <div className="mt-5 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-[6px]">
            {ITEMS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  jumpTo(i);
                  stopAuto();
                  scheduleResume();
                }}
                aria-label={`Go to slide ${i + 1}`}
                animate={{
                  width: i === activeIdx ? 20 : 6,
                  backgroundColor:
                    i === activeIdx
                      ? "rgba(255,255,255,.9)"
                      : "rgba(255,255,255,.2)",
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                style={{ height: 6, borderRadius: 9999 }}
              />
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Swipe to browse · Tap to open
          </p>
        </div>
      </Container>

      <AnimatePresence>
        {openItem && (
          <Lightbox item={openItem} onClose={() => setOpenIdx(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
