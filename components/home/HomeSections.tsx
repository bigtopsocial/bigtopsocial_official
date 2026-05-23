import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { Container } from "@/components/layout/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { HowWeWorkTimeline } from "@/components/home/HowWeWorkTimeline";
import { ReelsCarousel } from "@/components/home/ReelsCarousel";
import { PostStageSlider } from "@/components/home/PostStageSlider";
import { MobileContentReel } from "@/components/home/MobileContentReel";
import { WobbleCard } from "@/components/ui/wobble-card";
import { blogListing } from "@/lib/content/blog";
import {
  homeBlogTeasers,
  pricingPlans,
  services,
  stats,
  testimonials,
} from "@/lib/content/home";
import { projectTeasers } from "@/lib/content/projects";

const serviceIcons = [
  // Globe — Social Media Strategy
  <svg key="globe" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  // Video — Story-Driven Content
  <svg key="video" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><rect x="2" y="6" width="15" height="12" rx="2" /><path d="m17 10 5-3v10l-5-3" /></svg>,
  // Layers — Brand Identity
  <svg key="layers" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><path d="m12 2 10 6.5-10 6.5L2 8.5z" /><path d="m2 15.5 10 6.5 10-6.5" /><path d="m2 12 10 6.5 10-6.5" /></svg>,
  // Users — Influencer Marketing
  <svg key="users" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  // Target — Paid Campaigns
  <svg key="target" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  // Bar chart — Analytics & Growth
  <svg key="chart" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
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

const clientLogos = Array.from(
  { length: 38 },
  (_, i) => `/clients-logos/${i + 1}.png`
);

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

const partnerLogoPlacements = [
  "sm:left-[1%] sm:top-[5%] sm:w-[96px] lg:w-[124px] sm:-rotate-3",
  "sm:left-[13%] sm:top-[1%] sm:w-[78px] lg:w-[108px] sm:rotate-2",
  "sm:left-[27%] sm:top-[8%] sm:w-[112px] lg:w-[142px] sm:-rotate-1",
  "sm:left-[44%] sm:top-[2%] sm:w-[86px] lg:w-[118px] sm:rotate-3",
  "sm:left-[58%] sm:top-[9%] sm:w-[118px] lg:w-[150px] sm:-rotate-2",
  "sm:left-[76%] sm:top-[3%] sm:w-[92px] lg:w-[124px] sm:rotate-1",
  "sm:left-[89%] sm:top-[11%] sm:w-[74px] lg:w-[104px] sm:-rotate-3",
  "sm:left-[6%] sm:top-[22%] sm:w-[122px] lg:w-[156px] sm:rotate-2",
  "sm:left-[22%] sm:top-[25%] sm:w-[86px] lg:w-[116px] sm:-rotate-2",
  "sm:left-[36%] sm:top-[19%] sm:w-[102px] lg:w-[136px] sm:rotate-1",
  "sm:left-[50%] sm:top-[28%] sm:w-[80px] lg:w-[112px] sm:-rotate-1",
  "sm:left-[64%] sm:top-[22%] sm:w-[124px] lg:w-[158px] sm:rotate-3",
  "sm:left-[82%] sm:top-[28%] sm:w-[96px] lg:w-[130px] sm:-rotate-2",
  "sm:left-[0%] sm:top-[41%] sm:w-[84px] lg:w-[114px] sm:rotate-1",
  "sm:left-[15%] sm:top-[43%] sm:w-[114px] lg:w-[148px] sm:-rotate-3",
  "sm:left-[31%] sm:top-[39%] sm:w-[76px] lg:w-[106px] sm:rotate-2",
  "sm:left-[43%] sm:top-[47%] sm:w-[122px] lg:w-[158px] sm:-rotate-1",
  "sm:left-[61%] sm:top-[42%] sm:w-[88px] lg:w-[120px] sm:rotate-3",
  "sm:left-[73%] sm:top-[48%] sm:w-[116px] lg:w-[148px] sm:-rotate-2",
  "sm:left-[91%] sm:top-[43%] sm:w-[72px] lg:w-[100px] sm:rotate-1",
  "sm:left-[7%] sm:top-[61%] sm:w-[98px] lg:w-[132px] sm:-rotate-1",
  "sm:left-[20%] sm:top-[66%] sm:w-[80px] lg:w-[112px] sm:rotate-3",
  "sm:left-[34%] sm:top-[58%] sm:w-[120px] lg:w-[154px] sm:-rotate-2",
  "sm:left-[52%] sm:top-[64%] sm:w-[92px] lg:w-[124px] sm:rotate-2",
  "sm:left-[66%] sm:top-[60%] sm:w-[108px] lg:w-[142px] sm:-rotate-3",
  "sm:left-[83%] sm:top-[67%] sm:w-[82px] lg:w-[112px] sm:rotate-1",
  "sm:left-[2%] sm:top-[81%] sm:w-[112px] lg:w-[144px] sm:rotate-2",
  "sm:left-[18%] sm:top-[85%] sm:w-[74px] lg:w-[102px] sm:-rotate-2",
  "sm:left-[30%] sm:top-[78%] sm:w-[96px] lg:w-[128px] sm:rotate-1",
  "sm:left-[45%] sm:top-[84%] sm:w-[118px] lg:w-[152px] sm:-rotate-3",
  "sm:left-[63%] sm:top-[79%] sm:w-[82px] lg:w-[114px] sm:rotate-3",
  "sm:left-[75%] sm:top-[86%] sm:w-[108px] lg:w-[140px] sm:-rotate-1",
  "sm:left-[90%] sm:top-[80%] sm:w-[76px] lg:w-[104px] sm:rotate-2",
  "sm:left-[10%] sm:top-[52%] sm:w-[70px] lg:w-[98px] sm:-rotate-2",
  "sm:left-[25%] sm:top-[51%] sm:w-[92px] lg:w-[122px] sm:rotate-1",
  "sm:left-[56%] sm:top-[52%] sm:w-[72px] lg:w-[100px] sm:-rotate-1",
  "sm:left-[70%] sm:top-[12%] sm:w-[80px] lg:w-[110px] sm:rotate-2",
  "sm:left-[39%] sm:top-[71%] sm:w-[78px] lg:w-[108px] sm:-rotate-2",
] as const;

const partnerLogoSizes = [
  "h-36 sm:h-36 lg:h-44",
  "h-36 sm:h-40 lg:h-48",
  "h-36 sm:h-44 lg:h-52",
  "h-36 sm:h-48 lg:h-56",
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

const shuffledPlacements = seededShuffle(partnerLogoPlacements);
const shuffledSizes = seededShuffle(partnerLogoSizes);

export function HomeSections() {
  return (
    <>
      <section className="relative flex min-h-[90svh] flex-col overflow-hidden pt-[70px] sm:pt-[80px] lg:pt-[90px]">
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
            <source src="/herovideo2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center pb-16 sm:pb-20 lg:pb-24">
          <Container className="relative text-center">
            <Reveal>
              <Stars />
              <p className="mt-3 text-sm text-foreground/80">
                5.0 rating · Helped over 100+ businesses
              </p>
              <h1 className="mt-10 text-[clamp(1.75rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight text-foreground">
                Elevating brands
              </h1>
              <h1 className="mt-1 text-[clamp(1.75rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight text-foreground">
                Forward, Faster
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                We help ambitious brands scale with performance marketing, creative
                strategy, and conversion-focused campaigns.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-10 text-sm text-background transition hover:bg-foreground/90"
              >
                Book a Consultation
              </Link>
            </Reveal>

            <Reveal delay={0.08} className="mt-14">
              <p className="text-xs tracking-[0.28em] text-white/80">
                Trusted by startups, scaleups &amp; global brands
              </p>
              <div className="mt-6 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <div
                  className="flex items-center gap-4 sm:gap-5"
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
                        className="h-20 w-auto object-contain sm:h-28 lg:h-32"
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

      <section className="relative bg-background py-16 sm:py-20 lg:py-24">
        {/* ✅ BLEND: reinforces the black at the very top of this section */}
        <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />

        <Container>
          <Reveal className="mb-14">
            <Link
              href="/about"
              className="
    mb-10
    relative -top-10 left-1/2 z-40
    inline-flex -translate-x-1/2
    overflow-hidden
    rounded-full
        bg-black/70
    px-6 py-2
    text-xs font-semibold uppercase tracking-[0.2em]
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
              About
            </Link>
            <h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl text-center mx-auto">
              We make brands memorable
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted text-center mx-auto">
              We blend strategy & creativity to help brands grow, connect, & stand
              out with content that drives real engagement.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-[3px] lg:grid-cols-4">
            {stats.map((s, idx) => (
              <Reveal key={s.numeral} delay={idx * 0.05}>
                <div className="flex min-h-[260px] flex-col justify-between rounded-[12px] bg-card p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs text-foreground/40">{s.numeral}</span>
                    <span className="text-right text-xs text-foreground/40">{s.label}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[3.25rem] font-semibold leading-none tracking-tight text-foreground sm:text-[4rem]">
                      {s.value}
                    </span>
                    <span className="text-lg font-medium text-foreground/60">{s.suffix}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="mb-14 text-center flex flex-col items-center">
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-['']">
              Our Services
            </div>
            <h2 className="mt-10 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl mx-auto">
              What we master
            </h2>
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
            <h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl">
              Posts that stop the scroll
            </h2>

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

              <h2 className="mt-6 sm:mt-10 text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                The selected projects
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-white/60">
                Discover our selected projects, highlighting partnerships with
                forward-thinking clients in various sectors.
              </p>
            </Reveal>
          </div>

          {/* Bento Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5 lg:auto-rows-[320px]">
            {projectTeasers.slice(0, 5).map((p, idx) => {
              // Bento Layout Pattern
              const layouts = [
                "lg:col-span-8 lg:row-span-2", // hero
                "lg:col-span-4", // small
                "lg:col-span-4 lg:row-span-2", // tall
                "lg:col-span-4", // small
                "lg:col-span-8", // wide
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
                min-h-[280px] sm:min-h-[320px]
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
                        sizes="100vw"
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
                      <div className="absolute bottom-0 left-0 z-20 w-full p-6 sm:p-8">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="mb-3 text-sm text-white/60">
                              {p.year}
                            </p>

                            <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                              {p.title}
                            </h3>

                            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                              Building immersive digital experiences with scalable
                              modern architecture and refined visual systems.
                            </p>
                          </div>

                          {/* Arrow */}
                          <div
                            className="
                        flex
                        h-12
                        w-12
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
            <Reveal className="lg:col-span-4">
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
            min-h-[280px] sm:min-h-[320px]
          "
              >
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50">
                    Projects Delivered
                  </p>

                  <h3 className="mt-4 sm:mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
                    48+
                  </h3>
                </div>

                <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-white/70">
                  Helping startups and brands craft scalable, high-performing digital
                  products with modern user experiences.
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
            <h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl">
              Client feedback that speaks volumes
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Trusted by founders, creators, and growing brands to deliver
              high-performing creative systems and scalable marketing results.
            </p>
          </Reveal>
        </Container>

        {/* ── MOBILE: static stacked cards ── */}
        <div className="lg:hidden mt-10 px-4 sm:px-6">
          <div className="flex flex-col gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative overflow-hidden rounded-[24px] bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                {/* stars */}
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* quote */}
                <p className="mt-4 text-[14px] leading-[1.8] text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* author */}
                <div className="mt-5 flex items-center gap-3">
                  {t.bgImage ? (
                    <Image
                      src={t.bgImage}
                      alt={t.name}
                      width={44}
                      height={44}
                      loading="lazy"
                      className="h-11 w-11 shrink-0 rounded-full border border-white/10 object-cover"
                    />
                  ) : (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-[13px] font-medium text-white">{t.name}</p>
                    <p className="mt-0.5 text-[11px] text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
      <section className="relative flex min-h-screen items-center overflow-hidden py-16 sm:py-20 lg:py-24">
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
        <Container className="relative z-10">
          <Reveal className="mb-14 text-center flex flex-col items-center">
            <div className="mb-8 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-['']">
              Partners
            </div>
            <h2 className="max-w-3xl text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl mx-auto">
              Trusted by ambitious brands
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
              We collaborate with industry leaders and fast-growing startups to build digital authorities and high-converting channels.
            </p>
          </Reveal>

          {/* Clean Floating Grid Layout */}
          <div className="relative mt-10 grid grid-cols-4 items-center gap-x-6 gap-y-0 sm:gap-y-8 sm:block sm:h-[600px] lg:h-[660px] xl:h-[720px]">
            {clientLogos.map((logoPath, idx) => {
              const name = logoPath.split("/").pop()?.replace(".png", "") || `Client ${idx}`;
              const placement = shuffledPlacements[idx % shuffledPlacements.length];
              const size = shuffledSizes[idx % shuffledSizes.length];

              return (
                <Reveal
                  key={logoPath}
                  delay={idx * 0.02}
                  className={`flex items-center justify-center p-0 sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2 sm:p-0 ${placement}`}
                >
                  <div className={`relative flex w-full items-center justify-center ${size}`}>
                    <Image
                      src={logoPath}
                      alt={name}
                      width={340}
                      height={170}
                      loading="lazy"
                      className="h-full w-auto max-w-none object-contain"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24">
        <Container>
          {/* SECTION HEADING */}
          <Reveal className="mb-14 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-['']">
              FAQ
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl">
              Everything you’re wondering
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Have questions? Find clear, concise answers to the most common
              inquiries below.
            </p>
          </Reveal>

          {/* FAQ ACCORDION */}
          <Reveal className="mx-auto mt-16 w-full max-w-4xl">
            <FaqAccordion />
          </Reveal>
        </Container>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-b from-transparent to-[#000]" />
      </section>


    </>
  );
}
