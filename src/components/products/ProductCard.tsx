"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";
import { resolveIcon } from "@/lib/icon-map";
import { StatusBadge } from "@/components/ui/Badge";
import { accentToClasses, cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const Icon = resolveIcon(product.icon);
  const accent = accentToClasses(product.accent);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group relative flex h-full self-stretch flex-col overflow-hidden rounded-xl2 border border-base-border bg-base-card p-6 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-white/[0.14]"
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
          accent.gradient
        )}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/5",
            accent.text
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>

        <StatusBadge status={product.status} />
      </div>

      <h3 className="relative mt-6 text-xl font-medium text-ink">
        {product.name}
      </h3>

      <p className={cn("relative mt-1 text-sm font-medium", accent.text)}>
        {product.info}
      </p>

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {product.description}
      </p>

      <div className="relative mt-6 flex min-h-13.25 items-center justify-between border-t border-base-border pt-5">
        <div className="flex gap-1.5">
          {product.platforms.map((p) => (
            <span
              key={p}
              className="rounded-md bg-white/4 px-2 py-1 text-[11px] font-medium text-ink-faint"
            >
              {p}
            </span>
          ))}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-electric-soft"
        >
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}