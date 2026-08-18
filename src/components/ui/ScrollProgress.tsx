"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden h-40 w-px -translate-y-1/2 bg-white/[0.06] lg:block"
      aria-hidden="true"
    >
      <motion.div
        style={{ scaleY }}
        className="h-full w-full origin-top bg-gradient-to-b from-electric to-violet"
      />
    </div>
  );
}
