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

const stack = ["React", "Fastify", "PostgreSQL", "Redis", "Docker", "Nginx"];

export function TrustSection() {
  return (
    <section className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How we build"
          title="Three commitments that shape every decision."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="rounded-xl2 border border-base-border bg-base-card/60 p-8 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.04] text-electric-soft">
                <pillar.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-lg font-medium text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-16 flex flex-col items-center gap-6 border-t border-base-border pt-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
            Powering the stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
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
