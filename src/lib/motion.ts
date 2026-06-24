import type { Variants, Transition } from "framer-motion";

// The single shared easing curve — refined ease-out used across the app.
export const luxeEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const luxeTransition: Transition = {
  duration: 0.9,
  ease: luxeEase,
};

/** Fade + rise, for scroll reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: luxeEase },
  },
};

/** Staggered container for sequenced children (hero, lists). */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Child of a staggered container. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: luxeEase },
  },
};

/** Subtle scale-in for imagery. */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: luxeEase },
  },
};
