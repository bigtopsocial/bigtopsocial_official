"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { BlurTextReveal } from "@/components/motion/BlurTextReveal";

type StepKey = "industry" | "problem" | "budget" | "timeline";

type Option = { label: string; value: string };

type Step = {
  key: StepKey;
  question: string;
  options: Option[];
};

const steps: Step[] = [
  {
    key: "industry",
    question: "First up — which world do you operate in?",
    options: [
      { label: "Real Estate", value: "Real Estate" },
      { label: "Hospitality", value: "Hospitality" },
      { label: "Education", value: "Education" },
      { label: "Other", value: "Other" },
    ],
  },
  {
    key: "problem",
    question: "Got it. What's the biggest thing holding you back right now?",
    options: [
      { label: "Brand Awareness", value: "Brand Awareness" },
      { label: "Lead Generation", value: "Lead Generation" },
      { label: "Content", value: "Content" },
      { label: "Website", value: "Website" },
      { label: "Sales", value: "Sales" },
      { label: "Other", value: "Other" },
    ],
  },
  {
    key: "budget",
    question: "Makes sense. What kind of monthly budget are you working with?",
    options: [
      { label: "Under $1k", value: "Under $1,000 / mo" },
      { label: "$1k – $5k", value: "$1,000 – $5,000 / mo" },
      { label: "$5k – $15k", value: "$5,000 – $15,000 / mo" },
      { label: "$15k+", value: "$15,000+ / mo" },
    ],
  },
  {
    key: "timeline",
    question: "Last one — how soon are you looking to get moving?",
    options: [
      { label: "Immediate", value: "Immediate" },
      { label: "1 – 3 months", value: "1 – 3 months" },
      { label: "Flexible", value: "Flexible" },
    ],
  },
];

type Answers = Partial<Record<StepKey, string>>;

type Recommendation = {
  headline: string;
  services: string[];
  pitch: string;
};

// Maps the identified problem to a recommended service mix.
function recommend(answers: Answers): Recommendation {
  const problem = answers.problem ?? "Other";
  const industry = answers.industry ?? "your industry";

  const byProblem: Record<string, Recommendation> = {
    "Brand Awareness": {
      headline: "The Visibility Package",
      services: ["Branding", "Digital Marketing", "Influencer Marketing"],
      pitch:
        "We'll sharpen your identity and put it in front of the right audience consistently, so people in " +
        industry +
        " actually remember you.",
    },
    "Lead Generation": {
      headline: "The Growth Engine Package",
      services: ["Performance Marketing", "SEO"],
      pitch:
        "A paid + organic funnel built to turn attention into qualified leads — tuned for the " +
        industry +
        " buyer.",
    },
    Content: {
      headline: "The Content Studio Package",
      services: ["Digital Marketing", "Branding"],
      pitch:
        "A steady stream of on-brand content and a system to publish it, so your channels never go quiet.",
    },
    Website: {
      headline: "The Digital Presence Package",
      services: ["Web Development", "SEO"],
      pitch:
        "A fast, conversion-focused site that ranks — built to make a strong first impression for " +
        industry +
        " clients.",
    },
    Sales: {
      headline: "The Revenue Package",
      services: ["Performance Marketing", "Web Development"],
      pitch:
        "We connect a high-converting site to paid campaigns engineered around your sales goals.",
    },
    Other: {
      headline: "The Custom Strategy Package",
      services: ["Digital Marketing", "Branding"],
      pitch:
        "Not a one-size problem — so we'll start with a tailored mix and refine it with you on the call.",
    },
  };

  return byProblem[problem] ?? byProblem.Other;
}

export default function HowWeCanHelpPage() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [answers, setAnswers] = useState<Answers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [finished, setFinished] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentStep = steps[stepIndex];

  // Auto-scroll the chat to the newest bubble.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [stepIndex, typing, finished, reduce]);

  function handleSelect(value: string) {
    if (typing || finished) return;
    const key = currentStep.key;
    setAnswers((a) => ({ ...a, [key]: value }));

    const isLast = stepIndex === steps.length - 1;
    setTyping(true);
    window.setTimeout(
      () => {
        setTyping(false);
        if (isLast) {
          setFinished(true);
        } else {
          setStepIndex((i) => i + 1);
        }
      },
      reduce ? 0 : 850
    );
  }

  function goToQuote() {
    const rec = recommend(answers);
    const params = new URLSearchParams({
      industry: answers.industry ?? "",
      problem: answers.problem ?? "",
      budget: answers.budget ?? "",
      timeline: answers.timeline ?? "",
      package: rec.headline,
      services: rec.services.join(", "),
    });
    router.push(`/contact?${params.toString()}`);
  }

  function restart() {
    setAnswers({});
    setStepIndex(0);
    setTyping(false);
    setFinished(false);
  }

  const rec = finished ? recommend(answers) : null;

  const bubbleIn = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 12, filter: "blur(6px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section className="relative min-h-[100svh] overflow-hidden pb-24">
      {/* Hero banner: video occupies the top ~60% of the viewport */}
      <div className="relative h-[55vh] w-full overflow-hidden sm:h-[60vh]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
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
        {/* Fade the video into the black page */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />

        {/* Header centered over the video */}
        <Container className="relative z-10 flex h-full max-w-3xl flex-col items-center justify-center pt-20 text-center">
          <div className="relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#12ced6]/60 before:to-transparent before:content-['']">
            Find Your Fit
          </div>
          <BlurTextReveal
            as="h1"
            text="How We Can Help You"
            className="mt-6 text-[clamp(2.25rem,7vw,4rem)] font-medium leading-[1.1] tracking-tight text-foreground"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Answer a few quick questions and we&apos;ll point you to the right
            service mix — then take you straight to a quote.
          </p>
        </Container>
      </div>

      {/* Chat card pulled up to overlap the lower half of the video */}
      <Container className="relative z-10 -mt-[12vh] max-w-2xl">
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/40 backdrop-blur-xl">
          {/* progress bar */}
          <div className="h-1 w-full bg-white/[0.06]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#12ced6] to-white/80"
              initial={false}
              animate={{
                width: `${
                  ((finished ? steps.length : stepIndex) / steps.length) * 100
                }%`,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <div
            ref={scrollRef}
            className="max-h-[60vh] space-y-5 overflow-y-auto px-4 py-6 sm:px-7"
          >
            {/* Intro bot bubble */}
            <BotBubble {...bubbleIn}>
              Hey 👋 I&apos;m here to figure out exactly how we can help you grow.
              Let&apos;s keep it quick.
            </BotBubble>

            {/* Conversation history */}
            {steps.map((step, i) => {
              if (i > stepIndex) return null;
              const answered = answers[step.key];
              const showQuestion = i < stepIndex || (i === stepIndex && !finished) || finished;
              return (
                <div key={step.key} className="space-y-5">
                  {showQuestion && (
                    <BotBubble {...bubbleIn}>{step.question}</BotBubble>
                  )}
                  {answered && (
                    <UserBubble reduce={reduce}>{answered}</UserBubble>
                  )}
                </div>
              );
            })}

            {/* Typing indicator */}
            <AnimatePresence>
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <TypingBubble />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Result bubble */}
            {finished && rec && !typing && (
              <BotBubble {...bubbleIn}>
                <p className="text-foreground">
                  Based on what you told me, here&apos;s where I&apos;d start:
                </p>
                <div className="mt-3 rounded-2xl border border-[#12ced6]/30 bg-[#12ced6]/[0.06] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#12ced6]">
                    Recommended
                  </p>
                  <p className="mt-1.5 text-lg font-semibold text-foreground">
                    {rec.headline}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {rec.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {rec.pitch}
                  </p>
                </div>
              </BotBubble>
            )}
          </div>

          {/* Action area */}
          <div className="border-t border-white/10 px-4 py-5 sm:px-7">
            {!finished ? (
              <div className="flex flex-wrap gap-2.5">
                <AnimatePresence mode="wait">
                  {!typing && (
                    <motion.div
                      key={currentStep.key}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {currentStep.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleSelect(opt.value)}
                          className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-foreground transition hover:border-[#12ced6]/50 hover:bg-white/[0.12]"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={goToQuote}
                  className="flex-1 rounded-full bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get My Quote →
                </button>
                <button
                  onClick={restart}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-3.5 text-sm font-medium text-foreground transition hover:bg-white/[0.12]"
                >
                  Start over
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function BotBubble({
  children,
  ...motionProps
}: {
  children: React.ReactNode;
} & Record<string, unknown>) {
  return (
    <motion.div {...motionProps} className="flex items-start gap-2.5">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#12ced6] to-[#0a8e94] text-xs font-bold text-black">
        BT
      </div>
      <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/[0.08] px-4 py-3 text-sm leading-relaxed text-foreground">
        {children}
      </div>
    </motion.div>
  );
}

function UserBubble({
  children,
  reduce,
}: {
  children: React.ReactNode;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10, x: 10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-end"
    >
      <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-white px-4 py-3 text-sm font-medium text-black">
        {children}
      </div>
    </motion.div>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-start gap-2.5">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#12ced6] to-[#0a8e94] text-xs font-bold text-black">
        BT
      </div>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-white/[0.08] px-4 py-4">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-foreground/60"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}
