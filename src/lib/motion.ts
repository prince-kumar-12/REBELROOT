import { Variants, Transition } from "framer-motion";

/**
 * Shared easing curve used across the entire site.
 * A soft, premium deceleration curve — never linear, never bouncy.
 */
export const NOVA_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const nova: Transition = {
  duration: 0.6,
  ease: NOVA_EASE,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: NOVA_EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: NOVA_EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: NOVA_EASE },
  },
};

export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: NOVA_EASE },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: NOVA_EASE },
  },
};

/** Page transition used by the app template for client-side route changes. */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: NOVA_EASE },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.25, ease: NOVA_EASE },
  },
};

export const defaultViewport = { once: true, margin: "-80px" };
