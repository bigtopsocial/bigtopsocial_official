'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * Blur-to-focus reveal: the block starts blurred and sharpens as it scrolls
   * into view. On by default (applied app-wide). Pass `blur={false}` to opt a
   * specific element out — e.g. logos or imagery where a blur-in looks like a
   * loading glitch.
   */
  blur?: boolean;
};

export function Reveal({ children, className, delay = 0, blur = true }: RevealProps) {
  const reduce = useReducedMotion();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const shouldAnimate = isHydrated && !reduce;

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, ...(blur ? { filter: 'blur(12px)' } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(blur ? { filter: 'blur(0px)' } : {}) }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1] as const,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
