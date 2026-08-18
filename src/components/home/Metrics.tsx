"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeUp, staggerContainer, defaultViewport } from "@/lib/motion";

const metrics = [
  { value: 100, suffix: "%", label: "Open source" },
  { value: 0, suffix: "", label: "Trackers shipped" },
  { value: 6, suffix: "", label: "Active projects" },
  { value: 14, suffix: "+", label: "Contributors" },
];

export function Metrics() {
  return (
    <section className="relative section-pad py-20">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 rounded-xl2 border border-base-border bg-base-card/50 px-8 py-12 sm:grid-cols-4 sm:px-12"
      >
        {metrics.map((metric) => (
          <motion.div key={metric.label} variants={fadeUp} className="text-center">
            <p className="font-display text-4xl font-medium text-gradient sm:text-5xl">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-faint sm:text-sm">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
