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

// ─── physics ──────────────────────────────────────────────────────────────────

// STEP ≈ TX_adjacent (148) so 1 card of drag = 1 card of visual movement (~1:1 feel)
const STEP = 155;
const SNAP = { type: "spring" as const, stiffness: 400, damping: 38, mass: 0.65 };
const AUTO = { type: "spring" as const, stiffness: 82,  damping: 22, mass: 1.1  };

// ─── spatial transform table ──────────────────────────────────────────────────

const OFF = [-3,    -2,    -1,    0,    1,    2,    3   ];
const TX  = [-310,  -230,  -148,  0,   148,  230,  310  ]; // px lateral — adjacent = STEP for 1:1 feel
const SC  = [  0.5,  0.66,  0.83, 1,  0.83, 0.66,  0.5 ];
const OP  = [  0,    0.48,  0.8,  1,  0.8,  0.48,  0   ];
const RZ  = [ -8,   -4,    -2,   0,   2,    4,     8   ];
const DIM = [  0.55, 0.32,  0.13, 0,  0.13, 0.32,  0.55];

// ─── Card ─────────────────────────────────────────────────────────────────────

type CardProps = {
  item: Item;
  index: number;
  total: number;
  scrollX: MotionValue<number>;
  onOpen: (i: number) => void;
  onJump: (i: number) => void;
};

function Card({ item, index, total, scrollX, onOpen, onJump }: CardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastOff  = useRef(0);

  const offset = useTransform(scrollX, (sx) => {
    let o = index + sx / STEP;   // + not − : drag-left (sx decreases) → cards move left
    o = o - Math.round(o / total) * total;
    return o;
  });

  const x       = useTransform(offset, OFF, TX,  { clamp: false });
  const scale   = useTransform(offset, OFF, SC,  { clamp: false });
  const opacity = useTransform(offset, OFF, OP,  { clamp: false });
  const rotateZ = useTransform(offset, OFF, RZ,  { clamp: false });
  const dim     = useTransform(offset, OFF, DIM, { clamp: false });
  const zIndex  = useTransform(offset, (v) => Math.max(1, Math.round(20 - Math.abs(v) * 4)));

  useEffect(() => {
    return offset.on("change", (v) => {
      lastOff.current = v;
      const vid = videoRef.current;
      if (!vid) return;
      if (Math.abs(v) < 0.45) vid.play().catch(() => {});
      else if (!vid.paused)   vid.pause();
    });
  }, [offset]);

  return (
    <motion.div
      className="absolute inset-y-0 cursor-pointer select-none"
      style={{
        width: "clamp(160px, 56vw, 230px)",
        // 50vw = always the exact viewport center, immune to any parent padding/offset
        left: "calc(50vw - clamp(80px, 28vw, 115px))",
        x, scale, opacity, rotateZ, zIndex,
        willChange: "transform, opacity",
      }}
      onClick={() => {
        if (Math.abs(lastOff.current) < 0.48) onOpen(index);
        else onJump(index);
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-[20px] bg-[#090909]"
        style={{
          boxShadow:
            "0 22px 60px rgba(0,0,0,.68), 0 6px 18px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,255,255,.08)",
        }}
      >
        {item.type === "image" ? (
          <Image
            src={item.src} alt={item.id} fill
            sizes="(max-width:640px) 56vw, 230px"
            className="object-cover"
            loading={Math.abs(index) < 2 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted loop playsInline preload="none"
          >
            <source src={item.src} type="video/mp4" />
          </video>
        )}

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: "#000", opacity: dim }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(148deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,.04) 26%, transparent 54%, rgba(0,0,0,.1) 100%)",
          }}
        />
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
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
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
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
        animate={{ scale: 1,    opacity: 1, y: 0  }}
        exit={   { scale: 0.9,  opacity: 0, y: 12 }}
        transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <Image src={item.src} alt={item.id} fill sizes="88vw" className="object-contain" priority />
        ) : (
          <video src={item.src} className="h-full w-full object-contain" controls autoPlay loop playsInline />
        )}
        <button
          type="button" onClick={onClose} aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full text-white transition"
          style={{ background: "rgba(255,255,255,.12)", backdropFilter: "blur(8px)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </motion.div>
    </motion.div>,
    document.body
  );
}

// ─── Reusable CardStack ───────────────────────────────────────────────────────

type CardStackProps = {
  items: Item[];
  label: string;
  autoplayOffset?: number;
};

function CardStack({ items, label, autoplayOffset = 0 }: CardStackProps) {
  const n       = items.length;
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

  const stopAnim = useCallback(() => {
    animCtrl.current?.stop();
    animCtrl.current = null;
  }, []);

  const snapToX = useCallback((targetX: number, spring = SNAP) => {
    stopAnim();
    animCtrl.current = animate(scrollX, targetX, spring);
    setActiveIdx(((-Math.round(targetX / STEP) % n) + n) % n);
  }, [scrollX, stopAnim, n]);

  const jumpTo = useCallback((modTarget: number) => {
    const cur    = Math.round(-scrollX.get() / STEP);
    const curMod = ((cur % n) + n) % n;
    let   diff   = modTarget - curMod;
    if (diff >  n / 2) diff -= n;
    if (diff < -n / 2) diff += n;
    snapToX(-(cur + diff) * STEP);
  }, [scrollX, snapToX, n]);

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
      setActiveIdx(((-Math.round(nextX / STEP) % n) + n) % n);
    }, 3600);
  }, [scrollX, stopAnim, stopAuto, n]);

  const scheduleResume = useCallback(() => {
    if (resumeT.current) clearTimeout(resumeT.current);
    resumeT.current = setTimeout(startAuto, 2400);
  }, [startAuto]);

  useEffect(() => {
    if (openIdx !== null) { stopAuto(); return; }
    const t = setTimeout(startAuto, autoplayOffset);
    return () => { clearTimeout(t); stopAuto(); };
  }, [openIdx, startAuto, stopAuto, autoplayOffset]);

  const onPointerDown = (e: React.PointerEvent) => {
    ptrStartX.current  = e.clientX;
    ptrStartSX.current = scrollX.get();
    ptrTime.current    = Date.now();
    dragging.current   = false;
    stopAuto(); stopAnim();
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
    const vel = dx / dt;
    const cur = -scrollX.get() / STEP;
    const target =
      Math.abs(vel) > 0.45 || Math.abs(dx) > 58
        ? Math.round(cur - Math.sign(dx) * 0.6)
        : Math.round(cur);
    snapToX(-target * STEP);
    setTimeout(() => { dragging.current = false; }, 40);
    scheduleResume();
  };

  const onPointerCancel = () => {
    snapToX(-Math.round(-scrollX.get() / STEP) * STEP);
    dragging.current = false;
    scheduleResume();
  };

  const openItem = openIdx !== null ? items[openIdx] : null;

  return (
    <div>
      <Container>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
          {label}
        </p>
      </Container>

      <div
        className="relative overflow-x-hidden"
        style={{
          height: "clamp(20rem, 82vw, 34rem)",
          // Prevents the browser from competing with our drag (kills scroll-glitches on mobile)
          touchAction: "none",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,.03) 0%, transparent 100%)",
          }}
        />

        {items.map((item, i) => (
          <Card
            key={item.id}
            item={item}
            index={i}
            total={n}
            scrollX={scrollX}
            onOpen={setOpenIdx}
            onJump={(idx) => { jumpTo(idx); stopAuto(); scheduleResume(); }}
          />
        ))}
      </div>

      <Container>
        <div className="mt-4 flex justify-center">
          <div className="flex items-center gap-[6px]">
            {items.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => { jumpTo(i); stopAuto(); scheduleResume(); }}
                aria-label={`Go to ${label} ${i + 1}`}
                animate={{
                  width: i === activeIdx ? 18 : 5,
                  backgroundColor:
                    i === activeIdx ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.18)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ height: 5, borderRadius: 9999 }}
              />
            ))}
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {openItem && <Lightbox item={openItem} onClose={() => setOpenIdx(null)} />}
      </AnimatePresence>
    </div>
  );
}

// ─── export ───────────────────────────────────────────────────────────────────

export function MobileContentReel() {
  return (
    <section className="lg:hidden select-none space-y-12 py-8 sm:py-14">
      <CardStack items={REELS} label="Reels" autoplayOffset={0}    />
      <CardStack items={POSTS} label="Posts" autoplayOffset={1800} />
    </section>
  );
}
