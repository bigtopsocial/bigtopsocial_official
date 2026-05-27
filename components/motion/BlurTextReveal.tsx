"use client";

import { Fragment, type ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type AsTag = "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4";

type BlurTextRevealProps = {
  text: string;
  className?: string;
  /** Element the reveal renders as. Defaults to an inline span. */
  as?: AsTag;
  /** Seconds between each word starting to animate. */
  stagger?: number;
  /** Seconds to wait before the first word starts. */
  delay?: number;
  /** Per-word animation duration in seconds. */
  duration?: number;
  /** Starting blur amount in px (animates to 0). */
  blur?: number;
  /** Starting vertical offset in px (animates to 0). */
  y?: number;
  /** Only play the first time the text scrolls into view. */
  once?: boolean;
};

/**
 * Reveals a string one word at a time, each word fading + sliding up while a
 * blur sharpens to focus. Companion to the block-level <Reveal>. Pass `as` to
 * render it as the real heading element so semantics and font styles are kept.
 * Words wrap naturally because the spaces between them stay as real text nodes.
 */
export function BlurTextReveal({
  text,
  className,
  as = "span",
  stagger = 0.2,
  delay = 0,
  duration = 2,
  blur = 17,
  y = 16,
  once = true,
}: BlurTextRevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion[as] as any;
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      style={as === "span" ? { display: "inline-block" } : undefined}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px" }}
    >
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <motion.span
            variants={word}
            style={{ display: "inline-block", willChange: "transform, filter, opacity" }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </MotionTag>
  );
}
