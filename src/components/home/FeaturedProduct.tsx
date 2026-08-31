"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { slideInLeft, slideInRight, fadeUp, staggerContainer, defaultViewport } from "@/lib/motion";

const features = [
  "Offline-first library synced only when you choose",
  "Typography tuned per book, not per app default",
  "Zero reading-behavior tracking, ever",
  "Portable, plain-text highlights and notes",
];

export function FeaturedProduct() {
  return (
    <section className="relative section-pad">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative"
        >
          <ReaderMockup />
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <Eyebrow>Featured project</Eyebrow>
          <h2 className="mt-6 text-3xl font-medium leading-[1.1] text-ink sm:text-4xl">
            MOCNovel: a reading room, not a reading tracker.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Every other reading app measures you. MOCNovel just gets out of the way
            — offline by default, typographically precise, and entirely uninterested
            in your reading habits.
          </p>

          <motion.ul
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-8 space-y-4"
          >
            {features.map((feature) => (
              <motion.li key={feature} variants={fadeUp} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet/15 text-violet-soft">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-ink-muted sm:text-base">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-10">
            <Button href="/products/mocnovel" icon={<ArrowRight className="h-4 w-4" />}>
              Launch Beta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ReaderMockup() {
  return (
    <div className="relative rounded-xl2 border border-base-border bg-base-card p-3 shadow-card">
      <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      </div>
      <div className="rounded-xl border border-base-border bg-base/70 p-8 sm:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-soft">
          Chapter Nine
        </p>
        <h3 className="mt-3 font-display text-xl text-ink sm:text-2xl">
          The Quiet Archive
        </h3>
        <div className="mt-6 space-y-3">
          {[100, 96, 88, 92, 70].map((w, i) => (
            <div
              key={i}
              className="h-2.5 rounded-full bg-white/[0.06]"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="h-1 w-24 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-electric to-violet" />
          </div>
          <span className="font-mono text-[10px] text-ink-faint">64%</span>
        </div>
      </div>
    </div>
  );
}
