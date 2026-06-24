"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** delay in seconds */
  delay?: number;
  /** how much of the element must be visible before triggering */
  amount?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wraps children in a scroll-triggered fade-up.
 * Animates once. Honours reduced-motion via the global CSS override.
 */
export function Reveal({
  delay = 0,
  amount = 0.2,
  className,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
