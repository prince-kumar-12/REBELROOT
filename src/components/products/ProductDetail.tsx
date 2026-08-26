"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Layers, Shield } from "lucide-react";
import Link from "next/link";

import { Product } from "@/types";
import { resolveIcon } from "@/lib/icon-map";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Benchmark from "@/components/omnibrowser/Benchmark";
import Hero from "@/components/omnibrowser/Hero";
import { accentToClasses, cn } from "@/lib/utils";
import {
  fadeUp,
  staggerContainer,
  defaultViewport,
} from "@/lib/motion";

export function ProductDetail({
  product,
}: {
  product: Product;
}) {
  const downloadUrl = product.links?.downloadUrl;

  const downloadLabel =
    product.links?.downloadLabel ?? `Get ${product.name}`;

  const accent = accentToClasses(product.accent);

  // Safely handle optional sections
  const steps = product.steps ?? [];
  const screenshots = product.screenshots ?? [];

  return (
    <div>
      {/* =========================================================
          HERO
      ========================================================= */}

      <Hero product={product} />

      {/* =========================================================
          STEPS / HOW IT WORKS
          Only renders when product has steps.
      ========================================================= */}

      {steps.length > 0 && (
        <section className="w-full overflow-x-hidden bg-white px-4 py-16 dark:bg-[#08090b] sm:px-6 sm:py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-[-0.04em] text-ink dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px]">
              {product.stepsTitle ?? `How ${product.name} Works`}
            </h2>

            <div
              className="
                mt-12
                flex
                flex-col
                items-center
                gap-8
                sm:mt-14
                sm:gap-10
                md:flex-row
                md:flex-wrap
                md:items-start
                md:justify-center
                md:gap-x-4
                md:gap-y-8
                lg:gap-x-6
                xl:gap-x-8
              "
            >
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="
                    flex
                    w-full
                    max-w-xs
                    flex-col
                    items-center
                    sm:max-w-sm
                    md:w-auto
                    md:max-w-none
                    md:flex-row
                    md:items-start
                  "
                >
                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      items-center
                      wrap-break-words
                      text-center
                      md:w-40
                      lg:w-48
                      xl:w-56
                    "
                  >
                    <span
                      className="
                        text-4xl
                        font-bold
                        leading-none
                        tracking-tight
                        text-green-400
                        sm:text-[42px]
                      "
                    >
                      {step.number}
                    </span>

                    <h3
                      className="
                        mt-3
                        text-lg
                        font-bold
                        text-ink
                        dark:text-white
                        sm:text-xl
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#929292]
                        sm:text-base
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      className="
                        my-6
                        h-6
                        w-6
                        shrink-0
                        rotate-90
                        text-[#55565a]
                        sm:my-8
                        md:mx-4
                        md:my-0
                        md:rotate-0
                        lg:mx-6
                        xl:mx-7
                      "
                      strokeWidth={2}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          INTERFACE / SCREENSHOTS
          Only renders when product has screenshots.
      ========================================================= */}

      {screenshots.length > 0 && (
        <section className="section-pad py-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Interface"
              title="A closer look"
            />

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="
                mt-10
                grid
                grid-cols-1
                gap-5
                min-[640px]:grid-cols-2
                min-[770px]:grid-cols-3
              "
            >
              {screenshots.map((shot) => (
                <motion.div
                  key={shot.label}
                  variants={fadeUp}
                  className="
                    group
                    overflow-hidden
                    rounded-xl2
                    border
                    border-base-border
                    bg-base-card
                    payment-shadow
                    min-[640px]:h-100
                    min-[770px]:h-auto
                  "
                >
                  <div
                    className="
                      relative
                      aspect-4/3
                      w-full
                      overflow-hidden
                      bg-base-raised
                    "
                  >
                    <Image
                      src={shot.image}
                      alt={shot.label}
                      fill
                      className="
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                      sizes="
                        (max-width: 639px) 100vw,
                        (max-width: 769px) 50vw,
                        33vw
                      "
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-sm font-medium text-ink">
                      {shot.label}
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-relaxed
                        text-ink-muted
                      "
                    >
                      {shot.description}
                    </p>
                   {product.slug === "omni-browser" && (
                     <div className="mt-auto pt-7 cursor-pointer">
                      {shot.href ? (
                        <Link
                        href={shot.href}
                        className="
                        inline-flex
                        items-center
                        gap-1.5
                        font-mono
                        text-xs
                        font-medium
                        transition-colors
                        hover:text-red-400
                        "
                        >
                         View Documentation

                          <ArrowRight
                            className="
                            h-3.5
                            w-3.5
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            "
                            />
                        </Link>
                      ) : (
                        <span
                        className="
                        inline-flex
                        items-center
                        gap-1.5
                        font-mono
                        text-xs
                        font-medium
                        text-red-500
                        "
                        >
                          Documentation

                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </div>
                  )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="section-pad py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything you need. Nothing you don't."
            description={
              product.capabilitiesDescription ??
              `Everything ${product.name} needs, purpose-built for how it's actually used.`
            }
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-10"
          >
            {product.features.map((feature, i) => {
              const FeatureIcon = resolveIcon(feature.icon);

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="
                    flex
                    gap-5
                    border-t
                    border-base-border
                    py-6
                    first:border-t-0
                    sm:gap-6
                  "
                >
                  <span
                    className="
                      w-8
                      shrink-0
                      pt-1
                      font-mono
                      text-xs
                      text-ink-faint
                    "
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-base-border
                      bg-base-raised
                    "
                  >
                    <FeatureIcon
                      className={cn("h-5 w-5", accent.text)}
                      strokeWidth={1.75}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="
                        text-base
                        font-medium
                        text-ink
                        sm:text-lg
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-relaxed
                        text-ink-muted
                        sm:text-base
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          POWER UTILITIES
      ========================================================= */}

      <section className="section-pad py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {product.slug === "omni-browser" ? (
              <SectionHeading
                eyebrow={
                  product.powerUtilities?.eyebrow ?? "UTILITIES"
                }
                title={
                  product.powerUtilities?.title ?? "Built-in Tools"
                }
              />
            ) : (
              <SectionHeading
                eyebrow={
                  product.powerUtilities?.eyebrow ?? "UTILITIES"
                }
                title={
                  product.build ??
                  product.powerUtilities?.title ??
                  "Built"
                }
              />
            )}

            {product.powerUtilities?.highlight && (
              <motion.h2
                variants={fadeUp}
                className="
                  mt-5
                  max-w-4xl
                  text-4xl
                  font-semibold
                  leading-[1.05]
                  tracking-tight
                  text-ink
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                <span className="text-ink-muted">
                  {product.powerUtilities.highlight}
                </span>
              </motion.h2>
            )}

            {product.powerUtilities?.description && (
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
                {product.powerUtilities.description}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="
              mt-12
              grid
              grid-cols-1
              gap-5
              min-[640px]:grid-cols-2
              lg:grid-cols-4
            "
          >
            {product.quickTools.map((tool) => {
              const ToolIcon = resolveIcon(tool.icon);

              return (
                <motion.div
                  key={tool.title}
                  variants={fadeUp}
                  className="
                    group
                    flex
                    min-h-72.5
                    flex-col
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-base-border
                    payment-shadow
                    bg-base-card
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-red-500/30
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-base-border
                      payment-shadow
                      transition-all
                      duration-300
                      group-hover:border-red-500/50
                      group-hover:bg-red-500/10
                    "
                  >
                    <ToolIcon
                      className="h-5 w-5"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="mt-6">
                    <h3
                      className="
                        text-lg
                        font-semibold
                        tracking-tight
                        text-ink
                        sm:text-xl
                      "
                    >
                      {tool.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-relaxed
                        text-ink-muted
                        sm:text-[15px]
                      "
                    >
                      {tool.description}
                    </p>
                  </div>

                  {product.slug === "omni-browser" && (
                    <div className="mt-auto pt-7">
                      {tool.href ? (
                        <Link
                          href={tool.href}
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            font-mono
                            text-xs
                            font-medium
                            transition-colors
                            hover:text-red-400
                          "
                        >
                          Documentation

                          <ArrowRight
                            className="
                              h-3.5
                              w-3.5
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          />
                        </Link>
                      ) : (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            font-mono
                            text-xs
                            font-medium
                            text-red-500
                          "
                        >
                          Documentation

                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BENCHMARK
      ========================================================= */}

      {product.showBenchmark && <Benchmark />}

      {/* =========================================================
          TECHNICAL SPECIFICATIONS
      ========================================================= */}

      {product.technicalSpecifications && (
        <section className="section-pad py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              align="center"
              className="mx-auto max-w-2xl"
              title={
                product.technicalSpecifications.heading ??
                "Technical Specifications"
              }
            />

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="
                mt-12
                grid
                grid-cols-1
                gap-6
                lg:grid-cols-2
              "
            >
              {product.technicalSpecifications.stacks.map(
                (stack) => (
                  <motion.div
                    key={stack.title}
                    variants={fadeUp}
                    className="
                      rounded-xl2
                      border
                      border-base-border
                      bg-base-card/60
                      p-6
                      sm:p-8
                    "
                  >
                    <h3
                      className="
                        text-lg
                        font-semibold
                        tracking-tight
                        text-ink
                        sm:text-xl
                      "
                    >
                      {stack.title}
                    </h3>

                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full min-w-full border-collapse text-left">
                        <thead>
                          <tr className="border-b border-base-border">
                            <th
                              className="
                                w-2/5
                                pb-3
                                pr-4
                                font-mono
                                text-xs
                                font-medium
                                uppercase
                                tracking-wider
                                text-ink-faint
                              "
                            >
                              Component
                            </th>

                            <th
                              className="
                                pb-3
                                font-mono
                                text-xs
                                font-medium
                                uppercase
                                tracking-wider
                                text-ink-faint
                              "
                            >
                              Technology
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {stack.rows.map((row) => (
                            <tr
                              key={row.component}
                              className="
                                border-b
                                border-base-border/60
                                last:border-b-0
                              "
                            >
                              <td
                                className="
                                  py-3.5
                                  pr-4
                                  align-top
                                  text-sm
                                  font-medium
                                  text-ink
                                "
                              >
                                {row.component}
                              </td>

                              <td
                                className="
                                  py-3.5
                                  align-top
                                  text-sm
                                  leading-relaxed
                                  text-ink-muted
                                "
                              >
                                {row.technology}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* =========================================================
          ARCHITECTURE + SECURITY
      ========================================================= */}
{/* 
      <section className="section-pad py-16">
        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-8
            md:grid-cols-2
          "
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="
              rounded-xl2
              border
              border-base-border
              bg-base-card/60
              p-8
            "
          >
            <div className="flex items-center gap-3">
              <Layers
                className="h-5 w-5 text-electric-soft"
                strokeWidth={1.75}
              />

              <h3 className="text-lg font-medium text-ink">
                Architecture
              </h3>
            </div>

            <ul className="mt-6 space-y-4">
              {product.architecture.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    gap-3
                    text-sm
                    leading-relaxed
                    text-ink-muted
                  "
                >
                  <span
                    className="
                      mt-1.5
                      h-1
                      w-1
                      shrink-0
                      rounded-full
                      bg-electric
                    "
                  />

                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="
              rounded-xl2
              border
              border-base-border
              bg-base-card/60
              p-8
            "
          >
            <div className="flex items-center gap-3">
              <Shield
                className="h-5 w-5 text-violet-soft"
                strokeWidth={1.75}
              />

              <h3 className="text-lg font-medium text-ink">
                Security
              </h3>
            </div>

            <ul className="mt-6 space-y-4">
              {product.security.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    gap-3
                    text-sm
                    leading-relaxed
                    text-ink-muted
                  "
                >
                  <span
                    className="
                      mt-1.5
                      h-1
                      w-1
                      shrink-0
                      rounded-full
                      bg-violet
                    "
                  />

                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section> */}

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="section-pad py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked"
          />

          <div className="mt-10">
            <Accordion items={product.faq} />
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section id="cta" className="section-pad py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="
            mx-auto
            max-w-4xl
            rounded-xl2
            border
            border-base-border
            bg-linear-to-br
            from-base-card
            to-base-raised
            p-10
            text-center
            sm:p-16
          "
        >
          <h2
            className="
              text-3xl
              font-medium
              text-ink
              sm:text-4xl
            "
          >
            Ready to try {product.name}?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-md
              text-sm
              leading-relaxed
              text-ink-muted
              sm:text-base
            "
          >
            Free, open source, and yours to inspect line by line.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {downloadUrl ? (
              <Button
                href={downloadUrl}
                target="_blank"
                icon={
                  <ArrowRight className="h-4 w-4" />
                }
                className="text-ink"
              >
                {downloadLabel}
              </Button>
            ) : (
              <Button
                href="#"
                icon={
                  <ArrowRight className="h-4 w-4" />
                }
                className="text-ink"
              >
                Get started
              </Button>
            )}

            {product.slug === "omni-browser" &&
              product.showDocsButton !== false && (
                <Button
                  href="/docs"
                  variant="secondary"
                >
                  Read the docs
                </Button>
              )}
          </div>
          {product.slug === "omni-browser" &&(

            <p className="mt-6 text-xs text-ink-faint">
            Read the  
            <Link
              href={`/products/${product.slug}/privacy`}
              className="
              underline
              underline-offset-2
              hover:text-ink-muted
              "
              >
              {product.name} Privacy Policy
            </Link>
          </p>
            )}
        </motion.div>
      </section>
    </div>
  );
}