"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/**
 * Scroll-triggered fade-up animation wrapper.
 * Feels organic — elements slide up gently as user scrolls into view.
 */
export function FadeUp({ children, delay = 0, duration = 0.6, className = "", once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Fade in from left — good for text blocks
 */
export function FadeLeft({ children, delay = 0, duration = 0.6, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Fade in from right — good for images/stats
 */
export function FadeRight({ children, delay = 0, duration = 0.6, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scale up from center — good for cards and icons
 */
export function ScaleIn({ children, delay = 0, duration = 0.5, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered container — children appear one by one
 */
export function StaggerContainer({ children, className = "", staggerDelay = 0.08 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Animated counter — numbers count up naturally
 */
export function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ""));
    if (isNaN(numericValue)) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      // Ease out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericValue;

      if (Number.isInteger(numericValue)) {
        setDisplayValue(Math.round(current));
      } else {
        setDisplayValue(parseFloat(current.toFixed(1)));
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

/**
 * Line draw animation — for decorative lines/dividers
 */
export function AnimatedLine({ className = "", delay = 0.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    />
  );
}
