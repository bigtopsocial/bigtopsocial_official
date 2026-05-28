import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { Container } from "@/components/layout/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { BlurTextReveal } from "@/components/motion/BlurTextReveal";
import { HowWeWorkTimeline } from "@/components/home/HowWeWorkTimeline";
import { ReelsCarousel } from "@/components/home/ReelsCarousel";
import { PostStageSlider } from "@/components/home/PostStageSlider";
import { MobileTestimonials } from "@/components/home/MobileTestimonials";
import dynamic from "next/dynamic";
const MobileContentReel = dynamic(
  () => import("@/components/home/MobileContentReel").then((m) => m.MobileContentReel)
);
import { WobbleCard } from "@/components/ui/wobble-card";
import { blogListing } from "@/lib/content/blog";
import {
  homeBlogTeasers,
  pricingPlans,
  services,
  testimonials,
} from "@/lib/content/home";
import { projectTeasers } from "@/lib/content/projects";

const serviceIcons = [
  // Globe — Social Media Strategy
  <svg key="globe" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  // Video — Story-Driven Content
  <svg key="video" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><rect x="2" y="6" width="15" height="12" rx="2" /><path d="m17 10 5-3v10l-5-3" /></svg>,
  // Layers — Brand Identity
  <svg key="layers" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><path d="m12 2 10 6.5-10 6.5L2 8.5z" /><path d="m2 15.5 10 6.5 10-6.5" /><path d="m2 12 10 6.5 10-6.5" /></svg>,
  // Users — Influencer Marketing
  <svg key="users" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  // Target — Paid Campaigns
  <svg key="target" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  // Bar chart — Analytics & Growth
  <svg key="chart" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
];

function Stars() {
  return (
    <div className="flex items-center justify-center gap-1 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-base leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

const clientLogos = [
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958429/1_claxp2.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958429/2_n5jpvb.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958430/3_qgybwn.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958430/4_vihtww.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958430/6_muawws.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958431/8_r9bkuq.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958431/9_zjbseh.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958431/10_z7zxuj.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958431/11_kbneh1.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958431/12_gtfklr.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958431/13_lth947.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958432/14_bsijjz.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958432/15_eawuml.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958432/16_qlk2vt.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958432/17_f0qmp1.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958432/18_bfjgxt.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958433/19_ifbz26.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958433/20_udeca1.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958433/21_t0wqhv.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958433/22_hliljw.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958433/23_sxftjt.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958434/24_etow4b.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958434/25_apzjox.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958435/26_hxz6jr.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958435/27_xnjpma.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958435/28_prbv3g.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958435/29_x4vgqu.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958436/30_nt8eq1.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958436/31_mpmi8o.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958437/32_rmsgac.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958437/33_hvswe7.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958437/34_abrwom.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958437/35_wpvgrh.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958437/36_s8mr2t.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958438/37_bmocca.png",
  "https://res.cloudinary.com/diqnwnz6x/image/upload/v1779958438/38_ls8kmf.png",
];

const homeCardGlow = {
  backgroundColor: "#BFB6A40D",
  borderRadius: 12,
  glowRadius: 34,
  edgeSensitivity: 18,
  glowColor: "220 85 48",
  glowIntensity: 0.9,
  coneSpread: 22,
  fillOpacity: 0.16,
  colors: ["#071a3d", "#12ced6", "#ffffff"],
};

const partnerLogoSizes = [
  // Phone (< sm) renders these in a 4-col grid whose rows stretch to fill the
  // viewport, so the base height is `h-full` (logo fills its row, capped by the
  // cell width). The sm:/lg: values drive the scattered floating layout unchanged.
  "h-full sm:h-36 lg:h-44",
  "h-full sm:h-40 lg:h-48",
  "h-full sm:h-44 lg:h-52",
  "h-full sm:h-48 lg:h-56",
] as const;

/**
 * Seeded shuffle function for consistent randomization
 * Uses current date as seed so layout changes daily but stays consistent within a day
 */
function seededShuffle<T>(array: readonly T[]): T[] {
  const arr = [...array];
  const seed = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // New seed each day
  let random = (index: number) => {
    const x = Math.sin(seed + index) * 10000;
    return x - Math.floor(x);
  };

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random(i) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledSizes = seededShuffle(partnerLogoSizes);

/**
 * Jittered-grid scatter: lays logos into a COLS×ROWS grid (one per cell) and
 * nudges each within its cell. Even coverage (no gaps / clusters) that still
 * reads as random. Cells are shuffled with the daily seed so it varies per day.
 */
const PARTNER_COLS = 9;
const PARTNER_ROWS = 4;

function buildPartnerPlacements(count: number) {
  const seed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const rand = (n: number) => {
    const x = Math.sin(seed * 127.1 + n * 311.7) * 43758.5453;
    return x - Math.floor(x);
  };

  const cells = Array.from({ length: PARTNER_COLS * PARTNER_ROWS }, (_, i) => i);
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(rand(i + 911) * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }

  const cellW = 100 / PARTNER_COLS;
  const cellH = 100 / PARTNER_ROWS;

  return Array.from({ length: count }, (_, i) => {
    const cell = cells[i];
    const col = cell % PARTNER_COLS;
    const row = Math.floor(cell / PARTNER_COLS);
    // Lock each logo to its cell centre — uniform, consistent spacing. Only a
    // tiny nudge (±12% of a cell) so it reads as placed, not mechanical.
    const left = cellW * (col + 0.5) + (rand(i * 2 + 1) - 0.5) * cellW * 0.12;
    const top = cellH * (row + 0.5) + (rand(i * 2 + 2) - 0.5) * cellH * 0.12;
    const wSm = Math.round(92 + rand(i + 31) * 24);
    const wLg = Math.round(wSm * 1.28);
    return { left: +left.toFixed(2), top: +top.toFixed(2), wSm, wLg };
  });
}

const partnerPlacements = buildPartnerPlacements(clientLogos.length);

const partnerPlacementCss =
  "@media (min-width:640px){" +
  partnerPlacements
    .map(
      (p, i) =>
        `.partner-cell-${i}{left:${p.left}%;top:${p.top}%;width:${p.wSm}px;transform:translate(-50%,-50%);}`
    )
    .join("") +
  "}@media (min-width:1024px){" +
  partnerPlacements.map((p, i) => `.partner-cell-${i}{width:${p.wLg}px;}`).join("") +
  "}";

export function HomeSections() {
  return (
    <>
      <section className="relative flex min-h-[90svh] flex-col overflow-hidden pt-[120px] sm:pt-[130px] lg:pt-[140px]">
        <div className="pointer-events-none absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          >
            <source src="https://res.cloudinary.com/diqnwnz6x/video/upload/v1779957986/herovideo2_qdgibs.mp4" type="video/mp4" />
          </video>
          {/* Mobile-only legibility scrim: darkens the top/middle so the white
              headline reads cleanly over the video. Desktop (sm+) is unchanged. */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-transparent sm:hidden" />
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center pb-16 sm:pb-20 lg:pb-24">
          <Container className="relative text-center">
            <Reveal>
              <Stars />
              <p className="mt-3 text-sm text-foreground/80">
                5.0 rating · Helped over 50+ businesses
              </p>
              <BlurTextReveal
                as="h1"
                text="Elevating brands"
                className="mt-8 text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.05] tracking-tight text-foreground sm:mt-10"
              />
              <BlurTextReveal
                as="h1"
                text="Forward, Faster"
                delay={0.4}
                className="mt-1 text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.05] tracking-tight text-foreground"
              />
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                We help ambitious brands scale with performance marketing, creative
                strategy, and conversion-focused campaigns.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-10 text-sm text-background transition hover:bg-foreground/90 sm:mt-10"
              >
                Book a Consultation
              </Link>
            </Reveal>

            <Reveal delay={0.08} className="mt-10 sm:mt-14">
              <div className="mx-auto inline-flex items-stretch divide-x divide-white/15 px-1.5 py-1.5">
                <div className="flex w-20 flex-col items-center px-2 sm:w-24">
                  <span className="text-sm font-semibold text-white sm:text-base">2+</span>
                  <span className="mt-0.5 text-[8px] tracking-[0.18em] uppercase text-white/60 sm:text-[10px]">Experience</span>
                </div>
                <div className="flex w-20 flex-col items-center px-2 sm:w-24">
                  <span className="text-sm font-semibold text-white sm:text-base">50+</span>
                  <span className="mt-0.5 text-[8px] tracking-[0.18em] uppercase text-white/60 sm:text-[10px]">Clients</span>
                </div>
                <div className="flex w-20 flex-col items-center px-2 sm:w-24">
                  <span className="text-sm font-semibold text-white sm:text-base">8x</span>
                  <span className="mt-0.5 text-[8px] tracking-[0.18em] uppercase text-white/60 sm:text-[10px]">ROI</span>
                </div>
              </div>
              <div className="mt-6 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <div
                  className="flex items-center gap-1 sm:gap-5"
                  style={{
                    width: 'max-content',
                    animation: 'scroll-right 55s linear infinite',
                  }}
                >
                  {[...clientLogos, ...clientLogos].map((logo, idx) => (
                    <div
                      key={`${logo.replace('/clients-logos/', '')}-${idx}`}
                      className="flex shrink-0 items-center justify-center opacity-80 transition-opacity duration-300 hover:opacity-100"
                    >
                      <img
                        src={logo}
                        alt={logo.replace('/clients-logos/', '').replace(/[-.]/g, ' ')}
                        loading="lazy"
                        decoding="async"
                        className="h-24 w-auto object-contain sm:h-28 lg:h-32"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </div>

        {/* ✅ BLEND: fades hero into black below */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent to-black" />
      </section>

      <section className="relative bg-background py-16 sm:py-20 lg:py-28">
        {/* ✅ BLEND: reinforces the black at the very top of this section */}
        <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />

        <Container>
          <Reveal className="mb-12 flex flex-col items-center text-center sm:mb-16">
            <Link
              href="/about"
              className="relative inline-flex overflow-hidden rounded-full border border-white/10 bg-[#0a0a0a] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400 before:to-transparent before:shadow-[0_0_12px_1px_rgba(56,189,248,0.9)] before:content-['']"
            >
              About
            </Link>
            <BlurTextReveal
              as="h2"
              text="We make brands memorable"
              className="mt-8 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl"
            />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              We blend strategy & creativity to help brands grow, connect, & stand
              out with content that drives real engagement.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Image */}
              <div className="order-1 lg:col-span-6 lg:order-2">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                  <img
                    src="/image%20copy.png"
                    alt="Our team"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Text */}
              <div className="order-2 text-center lg:col-span-6 lg:order-1 lg:text-left">
                <h3 className="text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.5rem]">
                  Our team of creatives, strategists, and growth experts is
                  dedicated to crafting content that not only looks stunning but
                  also delivers{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-[#12ced6] bg-clip-text text-transparent">
                    measurable results
                  </span>
                  .
                </h3>

                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/90 transition hover:text-sky-400"
                >
                  Learn more about us
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="mb-14 text-center flex flex-col items-center">
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-['']">
              Our Services
            </div>
            <BlurTextReveal
              as="h2"
              text="What we master"
              className="mt-10 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl mx-auto"
            />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
              We empower brands to grow, engage, and succeed with clever social
              tactics and captivating visuals.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-[3px] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, idx) => (
              <Reveal key={svc.title} delay={idx * 0.04}>
                <div className="flex min-h-[280px] flex-col justify-between rounded-[18px] bg-card p-6 sm:p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/[0.06]">
                    {serviceIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {svc.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <HowWeWorkTimeline />

      <section className="pt-16 sm:pt-20 lg:pt-24 pb-0">
        <Container>
          <Reveal className="mb-8 flex flex-col items-center text-center">
            {/* Badge */}
            <div
              className="
          mb-10
          relative
          inline-flex
          overflow-hidden
          rounded-full
                    bg-black/70
          px-6 py-2
          text-xs
          uppercase
          tracking-[0.2em]
          text-foreground/90
          backdrop-blur-md
          transition
          hover:border-white/20
          hover:bg-black/80

          before:absolute
          before:left-[12%]
          before:right-[12%]
          before:top-0
          before:h-px
          before:bg-gradient-to-r
          before:from-transparent
          before:via-[#12ced6]/60
          before:to-transparent
          before:content-['']
        "
            >
              Creations
            </div>

            {/* Heading */}
            <BlurTextReveal
              as="h2"
              text="Posts that stop the scroll"
              className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl"
            />

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
              A curated pair of motion sections featuring cinematic reels and
              high-converting social content built to capture attention instantly.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Desktop: two carousels */}
      <div className="hidden lg:block">
        <ReelsCarousel />
        <PostStageSlider />
      </div>

      {/* Mobile: combined 3D cylinder */}
      <MobileContentReel />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          {/* Heading */}
          <div className="flex justify-center text-center">
            <Reveal className="mb-10 sm:mb-14 max-w-2xl flex flex-col items-center px-4 sm:px-0">
              <div className="relative inline-flex overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-4 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-md transition-colors duration-300 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#40ffbb]/40 before:to-transparent before:content-['']">
                Portfolio
              </div>

              <BlurTextReveal
                as="h2"
                text="The selected projects"
                className="mt-6 sm:mt-10 text-4xl sm:text-5xl tracking-tight text-white"
              />

              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-white/60">
                Discover our selected projects, highlighting partnerships with
                forward-thinking clients in various sectors.
              </p>
            </Reveal>
          </div>

          {/* Bento Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-5 lg:auto-rows-[320px]">
            {projectTeasers.slice(0, 5).map((p, idx) => {
              // Bento Layout Pattern
              const layouts = [
                "col-span-2 min-h-[180px] sm:min-h-[220px] lg:col-span-8 lg:row-span-2", // hero — full width
                "col-span-1 aspect-square lg:aspect-auto lg:col-span-4", // mobile: square / desktop: small
                "col-span-1 aspect-square lg:aspect-auto lg:col-span-4 lg:row-span-2", // mobile: square / desktop: tall
                "col-span-1 aspect-square lg:aspect-auto lg:col-span-4", // mobile: square / desktop: small
                "col-span-1 aspect-square lg:aspect-auto lg:col-span-8", // mobile: square / desktop: wide
              ];

              return (
                <Reveal
                  key={p.slug}
                  delay={idx * 0.05}
                  className={layouts[idx]}
                >
                  <Link
                    href={`/project/${p.slug}`}
                    className="
                group
                relative
                flex
                h-full
                lg:min-h-[320px]
                overflow-hidden
                rounded-[20px] sm:rounded-[28px]
                border
                border-white/10
                bg-card
                transition-all
                duration-500
                will-change-transform
                hover:-translate-y-1
                hover:border-white/20
              "
                  >
                    {/* Image */}
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        loading="lazy"
                        className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]
                  "
                        sizes="(min-width: 1024px) 66vw, 50vw"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Top Tags */}
                      <div className="absolute left-5 top-5 z-20 flex gap-2">
                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-white backdrop-blur-md">
                          SaaS
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-white backdrop-blur-md">
                          Branding
                        </span>
                      </div>

                      {/* Bottom Content */}
                      <div className="absolute bottom-0 left-0 z-20 w-full p-4 sm:p-6 lg:p-8">
                        <div className="flex items-end justify-between gap-3 lg:gap-4">
                          <div>
                            <p className="mb-1 text-xs text-white/60 lg:mb-3 lg:text-sm">
                              {p.year}
                            </p>

                            <h3 className="text-base font-medium tracking-tight text-white sm:text-lg lg:text-3xl">
                              {p.title}
                            </h3>

                            <p className="mt-3 hidden max-w-md text-sm leading-relaxed text-white/70 lg:block">
                              Building immersive digital experiences with scalable
                              modern architecture and refined visual systems.
                            </p>
                          </div>

                          {/* Arrow */}
                          <div
                            className="
                        flex
                        h-8 w-8 shrink-0
                        lg:h-12 lg:w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        text-white
                        backdrop-blur-md
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                          >
                            →
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}

            {/* Stats Card */}
            <Reveal className="col-span-1 aspect-square lg:aspect-auto lg:col-span-4">
              <div
                className="
            relative
            flex
            h-full
            flex-col
            justify-between
            overflow-hidden
            rounded-[20px] sm:rounded-[28px]
            border
            border-white/10
            bg-card
            p-5 sm:p-8
            lg:min-h-[320px]
          "
              >
                {/* Background Video */}
                <video
                  className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden
                >
                  <source src="https://res.cloudinary.com/diqnwnz6x/video/upload/v1779957986/herovideo2_qdgibs.mp4" type="video/mp4" />
                </video>

             

                <div className="relative z-10">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50">
                    Projects Delivered
                  </p>

                  <h3 className="mt-4 sm:mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
                    48+
                  </h3>
                </div>

                <p className="relative z-10 max-w-xs text-xs sm:text-sm leading-relaxed text-white/70">
                  Helping brands craft scalable, high-performing digital products.
                </p>

                {/* Ambient Glow */}
                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#12ced6]/20 blur-3xl" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>


      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="mb-14 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-['']">
              Testimonials
            </div>

            {/* Heading */}
            <BlurTextReveal
              as="h2"
              text="Client feedback that speaks volumes"
              className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl"
            />

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Trusted by founders, creators, and growing brands to deliver
              high-performing creative systems and scalable marketing results.
            </p>
          </Reveal>
        </Container>

        {/* ── MOBILE: static stacked cards (2 visible + show more) ── */}
        <MobileTestimonials />

        {/* ── DESKTOP: marquee strip ── */}
        <div className="hidden lg:block relative mt-20 overflow-hidden py-12">
          {/* LEFT FADE */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-30 w-24 bg-gradient-to-r from-black via-black/90 to-transparent sm:w-48 lg:w-72"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0) 100%)",
            }}
            aria-hidden
          />

          {/* RIGHT FADE */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-30 w-24 bg-gradient-to-l from-black via-black/90 to-transparent sm:w-48 lg:w-72"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0) 100%)",
            }}
            aria-hidden
          />

          {/* SINGLE ROW */}
          <div
            className="flex w-max"
            style={{
              animation: "reels-marquee 170s linear infinite",
            }}
          >
            <div className="flex gap-8 px-4">
              {[
                ...testimonials,
                ...testimonials,
                ...testimonials,
              ].map((t, idx) => (
                <div
                  key={`testimonial-${idx}`}
                  className="
              group
              relative
              flex
              w-[380px]
              sm:w-[480px]
              lg:w-[540px]
              flex-col
              justify-between
              overflow-hidden
              rounded-[32px]
              bg-white/[0.03]
              p-8
              sm:p-10
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-white/15
              hover:bg-white/[0.045]
              shrink-0
            "
                >
                  {/* Stars */}
                  <div className="relative z-10 flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="relative z-10 mt-8 text-[16px] leading-[1.9] text-white/85 sm:text-[17px]">
                    “{t.quote}”
                  </p>

                  {/* Footer */}
                  <div className="relative z-10 mt-10 flex items-center gap-5">
                    {/* Profile Photo */}
                    {t.bgImage ? (
                      <Image
                        src={t.bgImage}
                        alt={t.name}
                        width={64}
                        height={64}
                        loading="lazy"
                        className="h-16 w-16 rounded-full border border-white/10 object-cover"
                      />
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/10 text-base font-semibold text-white">
                        {t.name.charAt(0)}
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex flex-col">
                      <span className="text-[15px] font-medium text-white">
                        {t.name}
                      </span>

                      <span className="mt-1 text-sm text-white/45">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands / Partners Section */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-10 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.46)_72%,rgba(0,0,0,0.82)_100%)]" />
        <Container className="relative z-10 flex w-[90%] flex-1 flex-col sm:block sm:flex-none">
          <Reveal className="mb-6 text-center flex flex-col items-center sm:mb-14">
            <div className="mb-4 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-[''] sm:mb-8">
              Partners
            </div>
            <BlurTextReveal
              as="h2"
              text="Trusted by ambitious brands"
              className="max-w-3xl text-2xl tracking-tight text-foreground sm:text-4xl lg:text-5xl mx-auto"
            />
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
              We collaborate with industry leaders and fast-growing startups to build digital authorities and high-converting channels.
            </p>
          </Reveal>

          {/* Mobile: fills remaining viewport as a 4-col grid (10 stretched rows).
              sm+: reverts to the scattered floating layout. */}
          <style>{partnerPlacementCss}</style>
          <div className="relative grid flex-1 grid-cols-4 content-center items-stretch gap-x-2 gap-y-2 [grid-auto-rows:minmax(0,1fr)] sm:mt-10 sm:block sm:h-[600px] sm:flex-none sm:gap-x-4 sm:gap-y-8 lg:h-[660px] xl:h-[720px]">
            {clientLogos.map((logoPath, idx) => {
              const name = logoPath.split("/").pop()?.replace(".png", "") || `Client ${idx}`;
              const size = shuffledSizes[idx % shuffledSizes.length];

              return (
                <div
                  key={logoPath}
                  className={`partner-cell-${idx} flex items-center justify-center p-0 sm:absolute sm:p-0`}
                >
                  <div className={`relative flex w-full items-center justify-center ${size}`}>
                    <Image
                      src={logoPath}
                      alt={name}
                      width={340}
                      height={170}
                      loading="lazy"
                      className="h-full w-auto max-w-full object-contain sm:max-w-none"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative py-14 sm:py-20 lg:py-24">
        <Container>
          {/* SECTION HEADING */}
          <Reveal className="mb-10 flex flex-col items-center text-center sm:mb-14">
            {/* Badge */}
            <div className="mb-4 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-[''] sm:mb-8">
              FAQ
            </div>

            {/* Heading */}
            <BlurTextReveal
              as="h2"
              text="Everything you’re wondering"
              className="max-w-3xl text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            />

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
              Have questions? Find clear, concise answers to the most common
              inquiries below.
            </p>
          </Reveal>

          {/* FAQ ACCORDION */}
          <Reveal className="mx-auto mt-10 w-full max-w-4xl sm:mt-16">

            <FaqAccordion />
          </Reveal>
        </Container>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-b from-transparent to-[#000]" />
      </section>


    </>
  );
}
