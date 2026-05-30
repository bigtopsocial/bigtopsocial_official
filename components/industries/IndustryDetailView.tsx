import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { BlurTextReveal } from "@/components/motion/BlurTextReveal";
import type { Industry } from "@/lib/content/industries";

export function IndustryDetailView({
  industry,
  others,
}: {
  industry: Industry;
  others: { slug: string; title: string }[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-16 pt-28 sm:pt-32">
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
            <source
              src="https://res.cloudinary.com/diqnwnz6x/video/upload/v1779957986/herovideo2_qdgibs.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <Container className="relative z-10 -translate-y-[8vh] sm:-translate-y-[10vh]">
          <Reveal className="lg:text-center">
            <div className="relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-['']">
              {industry.badge}
            </div>
            <BlurTextReveal
              as="h1"
              text={industry.heroLine1}
              className="mt-6 max-w-4xl text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground lg:mx-auto"
            />
            <BlurTextReveal
              as="h1"
              text={industry.heroLine2}
              delay={0.35}
              className="mt-1 max-w-4xl text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground lg:mx-auto"
            />
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg lg:mx-auto">
              {industry.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-2 lg:justify-center">
              {industry.pills.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-foreground/90 backdrop-blur-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>

        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* Overlapping hero image */}
      <Container className="relative z-20 -mt-[28vh] sm:-mt-[32vh]">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-white/[0.02] shadow-2xl">
            <Image
              src={industry.heroImage}
              alt={industry.heroImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </Reveal>
      </Container>

      {/* Challenges */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />
        <Container className="relative z-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#12ced6]">
              The Challenge
            </p>
            <BlurTextReveal
              as="h2"
              text={`What's breaking growth in ${industry.title.toLowerCase()}`}
              className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-[3px] sm:grid-cols-2">
            {industry.challenges.map((c, idx) => (
              <Reveal key={c.title} delay={idx * 0.05}>
                <div className="h-full rounded-[18px] bg-card p-6 sm:p-7">
                  <span className="text-sm font-semibold text-foreground/50">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-medium text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#12ced6]">
              Our Solutions
            </p>
            <BlurTextReveal
              as="h2"
              text="How we fix it"
              className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-[3px] sm:grid-cols-2 lg:grid-cols-4">
            {industry.solutions.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 0.05}>
                <div className="h-full transform-gpu rounded-[18px] bg-card transition-transform duration-500 ease-out motion-safe:hover:scale-[1.02]">
                  <div className="flex min-h-[260px] flex-col justify-between p-6 sm:p-7">
                    <span className="text-sm font-semibold text-foreground/50">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-2">
              {industry.servicesMix.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#12ced6]">
              Results
            </p>
            <BlurTextReveal
              as="h2"
              text="The numbers we move"
              className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            />
          </Reveal>
          <div className="mt-10 grid gap-[3px] sm:grid-cols-3">
            {industry.results.map((r, idx) => (
              <Reveal key={r.label} delay={idx * 0.05}>
                <div className="h-full rounded-[18px] bg-card p-8 text-center">
                  <p className="text-4xl font-semibold text-foreground sm:text-5xl">
                    {r.metric}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {r.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Client examples */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#12ced6]">
              Client Examples
            </p>
            <BlurTextReveal
              as="h2"
              text="Brands we've grown"
              className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            />
          </Reveal>
          <div className="mt-8 grid gap-[3px] sm:grid-cols-2">
            {industry.clientExamples.map((c, idx) => (
              <Reveal key={c.name} delay={idx * 0.05}>
                <div className="h-full rounded-[18px] bg-card p-6 sm:p-7">
                  <p className="text-base font-semibold text-foreground">
                    {c.name}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {c.result}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="rounded-[18px] border border-white/[0.08] bg-card p-8 text-center">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                {industry.closingParagraph}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/how-we-can-help"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-8 text-sm font-semibold text-foreground transition hover:border-white/30"
                >
                  Find Your Fit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-background transition hover:bg-foreground/90"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Other industries */}
      <section className="border-t border-white/[0.06] py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <BlurTextReveal
              as="h2"
              text="Other industries we serve"
              className="text-2xl font-semibold text-foreground sm:text-3xl"
            />
            <Link
              href="/industries"
              className="text-sm font-semibold text-foreground/80 underline-offset-4 hover:underline"
            >
              View all industries →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/industries/${o.slug}`}
                className="rounded-card bg-[#0d0d0b] px-5 py-4 text-sm font-semibold text-foreground transition hover:bg-[#141412]"
              >
                {o.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
