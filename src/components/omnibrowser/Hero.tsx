"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Product } from "@/types";
import { StatusBadge } from "@/components/ui/Badge";
import { resolveIcon } from "@/lib/icon-map";
import { accentToClasses, cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motion";


export default function Hero({ product }: { product: Product }) {
   const Icon = resolveIcon(product.icon);
  const accent = accentToClasses(product.accent);

  // CTA links come from product data so every product can define its own
  // download / source destinations. Missing links are handled gracefully
  // below instead of rendering a broken button.
  const downloadUrl = product.links?.downloadUrl;
  const downloadLabel = product.links?.downloadLabel ?? `Get ${product.name}`;
  const sourceUrl = product.links?.sourceUrl;
  const sourceLabel = product.links?.sourceLabel ?? "View source";

  return (
    <>
     {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative section-pad pb-20 pt-40 lg:pt-48">
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
          >
            {/* Product icon + status */}

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl",
                  "border border-white/8 bg-white/4",
                  accent.text,
                )}
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>

              <StatusBadge status={product.status} />
            </motion.div>

            {/* Product name */}

            <motion.h1
              variants={fadeUp}
              className="
                mt-8
                max-w-2xl
                text-4xl
                font-medium
                leading-[1.06]
                text-ink
                sm:text-5xl
                lg:text-6xl
              "
            >
              {product.name}
            </motion.h1>

            {/* Product info */}

            <motion.p
              variants={fadeUp}
              className={cn("mt-4 text-lg font-medium sm:text-xl", accent.text)}
            >
              {product.info}
            </motion.p>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="
                mt-6
                max-w-2xl
                text-base
                leading-relaxed
                text-ink-muted
                sm:text-lg
              "
            >
              {product.description}
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              {downloadUrl ? (
                <Button
                  href={downloadUrl}
                  target="_blank"
                  className="text-black! dark:text-white!"
                  icon={
                    <ArrowRight className="h-4 w-4 text-black dark:text-white" />
                  }
                >
                  {downloadLabel}
                </Button>
              ) : (
                <Button
                  href="/contact#support"
                  className="text-black! dark:text-white!"
                  icon={
                    <ArrowRight className="h-4 w-4 text-black dark:text-white" />
                  }
                >
                  Get {product.name}
                </Button>
              )}

              {sourceUrl ? (
                <Button
                  href={sourceUrl}
                  target="_blank"
                  variant="secondary"
                  iconPosition="left"
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.38 2.89-.39.98.01 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.26 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                    </svg>
                  }
                >
                  {sourceLabel}
                </Button>
              ) : product.showDocsButton ? (
                <Button href="/docs" variant="secondary" iconPosition="left">
                  Read the docs
                </Button>
              ) : null}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}