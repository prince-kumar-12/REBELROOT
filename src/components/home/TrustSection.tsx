"use client";

import { motion } from "framer-motion";
import { HardDrive, EyeOff, ScanSearch } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, defaultViewport } from "@/lib/motion";

const pillars = [
  {
    icon: HardDrive,
    title: "Local-first",
    description:
      "Your data lives on your device by default. Sync and cloud features are opt-in additions, never the foundation.",
  },
  {
    icon: EyeOff,
    title: "Zero telemetry",
    description:
      "No usage analytics, no crash reporting to a third party, no silent background requests. What you don't send, we can't lose.",
  },
  {
    icon: ScanSearch,
    title: "Open & auditable",
    description:
      "Every line of code, every build pipeline, and every dependency is public. Trust is verified, not requested.",
  },
];

const stack = ["TypeScript","Next.js", "kotlin","React", "Androis SDK","Rust", "Redis", "Docker", "Git & Open Source"];

export function TrustSection() {
  return (
    <section className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="How we build"
            title="Three commitments that shape every decision."
            description="They aren't marketing language — they're constraints we design against before a single feature ships."
          />

          <motion.ol
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="divide-y divide-base-border border-y border-base-border"
          >
            {pillars.map((pillar, i) => (
              <motion.li
                key={pillar.title}
                variants={fadeUp}
                className="grid grid-cols-[auto_1fr] items-start gap-5 py-7 sm:grid-cols-[3rem_auto_1fr] sm:gap-6"
              >
                <span className="hidden font-mono text-sm text-ink-faint sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-base-border bg-white/[0.03] text-electric-soft">
                  <pillar.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>

                <div>
                  <h3 className="text-lg font-medium text-ink">{pillar.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                    {pillar.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-16   flex flex-col items-start gap-5   border-base-border pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
            Powering the stack
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 font-mono text-xs text-ink-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}