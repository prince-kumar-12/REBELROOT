"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-electric-soft">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-medium leading-[1.1] text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
