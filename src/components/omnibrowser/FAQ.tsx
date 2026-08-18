"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import ScrollReveal from "@/components/omnibrowser/animations/ScrollReveal";
import type { FAQItem } from "@/types";

const FAQS: FAQItem[] = [
  {
    id: "privacy",
    question: "Does Omni track my browsing history?",
    answer:
      "No. Omni never sends browsing history, page content, or search queries to our servers. Sync data is end-to-end encrypted, so even we can't read it.",
  },
  {
    id: "ai",
    question: "Where do the AI summaries run?",
    answer:
      "Entirely on-device using a small local model. If a page needs more context, Omni asks first — nothing is sent automatically.",
  },
  {
    id: "extensions",
    question: "Can I still use my existing extensions?",
    answer:
      "Omni supports the same extension APIs as major Chromium-based browsers, so most of your existing extensions will work without changes.",
  },
  {
    id: "cost",
    question: "Is Omni free to use?",
    answer:
      "Yes. The core browser is free with no account required. An optional Omni+ plan adds extra device sync slots and priority support.",
  },
  {
    id: "platforms",
    question: "Which platforms are supported?",
    answer:
      "Omni is available today on macOS, Windows, iOS, and Android, with a consistent feature set and synced settings across all four.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-6 py-28 lg:px-8">
      <ScrollReveal className="text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          FAQ
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
          Questions, answered
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="mt-14 divide-y divide-white/8 rounded-card border border-white/8 bg-carbon-900">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="px-6 sm:px-8">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                // aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-sm font-medium text-ink-100 sm:text-base">
                  {faq.question}
                </span>
                <Plus
                  className={`h-4 w-4 shrink-0 text-ink-500 transition-transform duration-300 ease-cinematic ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-350 ease-cinematic"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p className="pb-5 text-sm leading-relaxed text-ink-500 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
