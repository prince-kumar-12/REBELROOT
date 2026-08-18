"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";
import { NOVA_EASE } from "@/lib/motion";

/**
 * Applies the site-wide easing curve and makes every Framer Motion
 * animation respect the user's `prefers-reduced-motion` setting.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig transition={{ duration: 0.6, ease: NOVA_EASE }} reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
