"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * In-view entrance used by the card grids: 12px rise + 3px blur → rest, 500ms, staggered by `index`
 * (same tokens as the home page's `--stagger-*`). Runs once.
 */
export function Reveal({ children, index = 0, className }: { children: ReactNode; index?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: EASE, delay: Math.min(index, 8) * 0.06 }}
    >
      {children}
    </motion.div>
  );
}
