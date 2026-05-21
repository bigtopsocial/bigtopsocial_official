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
  colors: ["#071a3d", "#40bbff", "#ffffff"],
};

export function HomeSections() {
  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[76px] sm:pt-[84px] lg:pt-[88px]">
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
              <h1 className="mt-10 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-foreground">
                Elevating brands
              </h1>
              <h1 className="mt-1 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-foreground">
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
                Trusted by startups, scaleups & global brands
              </p>
              <div className="mt-20 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <div
                  className="flex items-center gap-8 px-6"
                  style={{
                    width: 'max-content',
                    animation: 'scroll-right 10s linear infinite'
                  }}
                >
                  {[...clientLogos, ...clientLogos].map((logo, idx) => (
                    <div
                      key={`${logo}-${idx}`}
                      className="flex h-8 w-auto items-center justify-center opacity-80 transition duration-300 hover:opacity-100 sm:h-10"
                    >
                      <img
                        src={logo}
                        alt={logo.replace("/clients-logos/", "").replace(/[-.]/g, " ")}
                        className="h-20 w-auto object-contain"
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

      <section className="relative bg-background py-20 sm:py-24">
        {/* ✅ BLEND: reinforces the black at the very top of this section */}
        <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />

        <Container>
          <Reveal>
            <Link
              href="/about"
              className="
    mb-10
    relative -top-10 left-1/2 z-40
    inline-flex -translate-x-1/2
    overflow-hidden
    rounded-full
    border border-white/10
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
    before:via-sky-400/60
    before:to-transparent
    before:content-['']
  "
            >
              About
            </Link>
            <h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl text-center mx-auto">
              We make brands memorable
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-center mx-auto">
              We blend strategy & creativity to help brands grow, connect, & stand
              out with content that drives real engagement.
            </p>
          </Reveal>

          <div className="mt-12 grid w-full items-stretch justify-center gap-4 lg:grid-cols-[minmax(280px,420px)_minmax(280px,750px)] lg:gap-8">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {stats.map((s, idx) => (
                <Reveal key={s.numeral} delay={idx * 0.05} className="h-full">
                  <div className="aspect-square h-full rounded-[8px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-5">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-sm font-semibold text-foreground/95">
                          {s.value}
                          {s.suffix}
                        </span>
                        <span className="text-right text-[10px] uppercase tracking-[0.16em] text-foreground/45">
                          {s.numeral}
                        </span>
                      </div>
                      <span className="max-w-[9rem] text-sm leading-tight text-foreground/75">
                        {s.label}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12} className="min-h-[260px] lg:h-full">
              <div className="relative h-full min-h-[260px] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] sm:min-h-[340px] lg:min-h-0">
                <Image
                  src="/image.png"
                  alt="Bigtop Social creative team workspace"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="text-center flex flex-col items-center">
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
              Our Services
            </div>
            <h2 className="mt-10 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl mx-auto">
              What we master
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We empower brands to grow, engage, and succeed with clever social
              tactics and captivating visuals.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            {services.map((svc, idx) => (
              <Reveal key={svc.title} delay={idx * 0.04}>
                <div className="group relative overflow-hidden aspect-square h-full rounded-[18px] border border-gray-400/20 bg-card transform-gpu transition-transform duration-500 ease-out motion-safe:hover:scale-[1.03]">
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
                    <h3 className="text-lg text-foreground">
                      {svc.title}
                    </h3>
                    <p className="mt-auto text-sm leading-relaxed text-white/70">
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

      <ReelsCarousel />

      <PostStageSlider />

      <section className="py-24 sm:py-32">
  <Container>
    {/* Heading */}
    <div className="flex justify-center text-center">
      <Reveal className="max-w-2xl flex flex-col items-center">
        <div className="relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
          Portfolio
        </div>

        <h2 className="mt-10 text-4xl tracking-tight text-foreground sm:text-5xl">
          The selected projects
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-muted">
          Discover our selected projects, highlighting partnerships with
          forward-thinking clients in various sectors.
        </p>
      </Reveal>
    </div>

    {/* Bento Grid */}
    <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[320px]">
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
                overflow-hidden
                rounded-[28px]
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
            rounded-[28px]
            border
            border-white/10
            bg-card
            p-8
          "
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Projects Delivered
            </p>

            <h3 className="mt-6 text-6xl font-semibold tracking-tight text-white">
              48+
            </h3>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Helping startups and brands craft scalable, high-performing digital
            products with modern user experiences.
          </p>

          {/* Ambient Glow */}
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
        </div>
      </Reveal>
    </div>
  </Container>
</section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="text-center flex flex-col items-center">
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
              Testimonial
            </div>
            <h2 className="mt-10 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl mx-auto">
              Client Feedback
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Discover success stories from satisfied clients. Learn how we assisted
              them in reaching their objectives and generating significant, enduring
              results.
            </p>
          </Reveal>

        </Container>

        <div className="relative mt-16 flex flex-col gap-6 overflow-hidden py-10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-30 w-24 bg-gradient-to-r from-black via-black/80 to-transparent backdrop-blur-[16px] sm:w-48 lg:w-72"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0) 100%)",
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0) 100%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-30 w-24 bg-gradient-to-l from-black via-black/80 to-transparent backdrop-blur-[16px] sm:w-48 lg:w-72"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0) 100%)",
              maskImage:
                "linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0) 100%)",
            }}
            aria-hidden
          />

          {/* Row 1 - scrolling left */}
          <div className="flex w-max" style={{ animation: 'reels-marquee 150s linear infinite' }}>
             <div className="flex gap-6 px-3">
               {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                  <div key={`row1-${idx}`} className="flex w-[320px] sm:w-[400px] flex-col gap-5 rounded-2xl bg-card p-6 sm:p-8 text-left transition-transform duration-300 hover:scale-[1.02] border border-white/[0.05] shadow-2xl shrink-0">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="flex-1 text-[15px] leading-relaxed text-white/90">
                      "{t.quote}"
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      {t.bgImage ? (
                        <Image src={t.bgImage} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white">
                          {t.name.charAt(0)}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">{t.name}</span>
                        <span className="text-xs text-white/50">{t.role}</span>
                      </div>
                    </div>
                  </div>
               ))}
             </div>
          </div>
          
          {/* Row 2 - scrolling right */}
          <div className="flex w-max" style={{ animation: 'scroll-right 160s linear infinite' }}>
             <div className="flex gap-6 px-3">
               {[...testimonials, ...testimonials, ...testimonials, ...testimonials].reverse().map((t, idx) => (
                  <div key={`row2-${idx}`} className="flex w-[320px] sm:w-[400px] flex-col gap-5 rounded-2xl bg-card p-6 sm:p-8 text-left transition-transform duration-300 hover:scale-[1.02] border border-white/[0.05] shadow-2xl shrink-0">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="flex-1 text-[15px] leading-relaxed text-white/90">
                      "{t.quote}"
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      {t.bgImage ? (
                        <Image src={t.bgImage} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white">
                          {t.name.charAt(0)}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">{t.name}</span>
                        <span className="text-xs text-white/50">{t.role}</span>
                      </div>
                    </div>
                  </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Brands / Partners Section */}
      <section className="relative overflow-hidden py-28 sm:py-36">
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
          <Reveal className="text-center flex flex-col items-center">
            <div className="mb-20 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
              Partners
            </div>
            <h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl mx-auto">
              Trusted by ambitious brands
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We collaborate with industry leaders and fast-growing startups to build digital authorities and high-converting channels.
            </p>
          </Reveal>

          {/* Clean Floating Grid Layout */}
          <div className="mt-20 mb-20 grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-x-4 gap-y-6 sm:gap-y-8 items-center justify-center">
            {clientLogos.map((logoPath, idx) => {
              const name = logoPath.split("/").pop()?.replace(".png", "") || `Client ${idx}`;
              return (
                <Reveal
                  key={logoPath}
                  delay={idx * 0.02}
                  className="flex items-center justify-center p-4 transition-all duration-300"
                >
                  <div className="relative w-full h-full flex items-center justify-center transition-all duration-300">
                    <Image
                      src={logoPath}
                      alt={name}
                      width={340}
                      height={170}
                      className="max-h-28 sm:max-h-32 w-auto object-contain transition-all duration-300 filter brightness-0 invert sepia-[0.25] opacity-50 hover:opacity-100 hover:sepia-0 hover:scale-[1.05]"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
                FAQ
              </div>
              <h2 className="mt-10 text-4xl tracking-tight text-foreground sm:text-5xl">
                Everything you’re wondering
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                Have questions? Find clear, concise answers to the most common inquiries
                below.
              </p>
            </Reveal>

            <Reveal className="lg:ml-auto lg:w-full lg:max-w-4xl">
              <FaqAccordion />
            </Reveal>
          </div>
        </Container>
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-b from-transparent to-[#000]" />
      </section>


    </>
  );
}
