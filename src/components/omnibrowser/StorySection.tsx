"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Layers, Search, Shield, SplitSquareHorizontal, BookOpen } from "lucide-react";
import StoryScroll from "@/components/omnibrowser/animations/StoryScroll";
import ScrollReveal from "@/components/omnibrowser/animations/ScrollReveal";
import PhoneMockup from "@/components/omnibrowser/PhoneMockup";
import type { StoryChapter } from "@/types";

const CHAPTERS: StoryChapter[] = [
  {
    id: "search",
    index: 0,
    eyebrow: "Chapter 01",
    title: "Search without the search bar",
    description:
      "Type anywhere, ask anything. Omni understands intent and skips straight to the answer — no ten blue links to sift through.",
    docHref: "#",
    accentLabel: "Instant Search",
    screen: { kind: "search", headline: "Ask Omni", detail: "best flights to Lisbon in October" },
  },
  {
    id: "tabs",
    index: 1,
    eyebrow: "Chapter 02",
    title: "Tabs that organize themselves",
    description:
      "Related tabs quietly group by topic as you browse, so a hundred open tabs still feel like ten. Pick up any session on any device.",
    docHref: "#",
    accentLabel: "Smart Tabs",
    screen: { kind: "tabs", headline: "3 groups", detail: "Travel · Research · Reading" },
  },
  {
    id: "reader",
    index: 2,
    eyebrow: "Chapter 03",
    title: "A page, distilled",
    description:
      "Reader mode strips ads and clutter, then hands you a summary in seconds — the article's argument, without the scroll.",
    docHref: "#",
    accentLabel: "Reader Mode",
    screen: { kind: "reader", headline: "4-line summary", detail: "Generated on-device in 1.2s" },
  },
  {
    id: "split",
    index: 3,
    eyebrow: "Chapter 04",
    title: "Two pages, one glance",
    description:
      "Drag any tab into a split view to compare, reference, and write side by side — no second window, no lost place.",
    docHref: "#",
    accentLabel: "Split View",
    screen: { kind: "split", headline: "Docs + Notes", detail: "Synced scroll position" },
  },
  {
    id: "shield",
    index: 4,
    eyebrow: "Chapter 05",
    title: "Private by default",
    description:
      "Trackers blocked, fingerprinting scrambled, nothing sold. Omni's shield runs silently on every page, every tab, every time.",
    docHref: "#",
    accentLabel: "Privacy Shield",
    screen: { kind: "shield", headline: "38 trackers blocked", detail: "on this page alone" },
  },
];

const SCREEN_ICON: Record<StoryChapter["screen"]["kind"], typeof Search> = {
  search: Search,
  tabs: Layers,
  reader: BookOpen,
  split: SplitSquareHorizontal,
  shield: Shield,
};

function ScreenContent({ chapter }: { chapter: StoryChapter }) {
  const Icon = SCREEN_ICON[chapter.screen.kind];
  return (
    <div className="flex h-full flex-col justify-between px-4 pb-6 pt-4">
      <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-carbon-800 px-3 py-3">
        <Icon className="h-4 w-4 text-accent" strokeWidth={2.25} />
        <div>
          <p className="text-[12px] font-medium text-ink-100">
            {chapter.screen.headline}
          </p>
          <p className="text-[10px] text-ink-500">{chapter.screen.detail}</p>
        </div>
      </div>
      <div className="space-y-2">
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className="h-3 rounded-full bg-white/5"
            style={{ width: `${85 - row * 18}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function StorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChapterChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative">
      {/* Desktop pinned experience */}
      <div className="relative hidden h-screen overflow-hidden lg:block">
        <StoryScroll
          sectionRef={sectionRef}
          chapterCount={CHAPTERS.length}
          onChapterChange={handleChapterChange}
        />

        <div className="mx-auto grid h-full max-w-7xl grid-cols-2 items-center gap-16 px-8">
          {/* Phone anchor, fixed position, screens cross-fade */}
          <div className="relative flex justify-center">
            <PhoneMockup>
              {CHAPTERS.map((chapter, i) => (
                <div
                  key={chapter.id}
                  className={`absolute inset-0 transition-all duration-500 ease-cinematic ${
                    i === activeIndex
                      ? "pointer-events-auto scale-100 opacity-100"
                      : "pointer-events-none scale-[0.96] opacity-0"
                  }`}
                >
                  <ScreenContent chapter={chapter} />
                </div>
              ))}
            </PhoneMockup>
          </div>

          {/* Text column, cross-fades per chapter */}
          <div className="relative h-64">
            {CHAPTERS.map((chapter, i) => (
              <div
                key={chapter.id}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-cinematic ${
                  i === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-[30px] opacity-0"
                }`}
              >
                <span className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
                  {chapter.eyebrow} · {chapter.accentLabel}
                </span>
                <h3 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink-100">
                  {chapter.title}
                </h3>
                <p className="mt-4 max-w-md text-balance leading-relaxed text-ink-500">
                  {chapter.description}
                </p>
                <Link
                  href={chapter.docHref}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm text-ink-300 transition-colors duration-200 hover:text-ink-100"
                >
                  Read the docs
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
          {CHAPTERS.map((chapter, i) => (
            <span
              key={chapter.id}
              className={`h-1.5 rounded-full transition-all duration-300 ease-cinematic ${
                i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile / tablet: stacked cards, no pinning, no tilt */}
      <div className="flex flex-col gap-20 px-6 py-20 lg:hidden">
        {CHAPTERS.map((chapter) => (
          <ScrollReveal key={chapter.id} className="flex flex-col items-center text-center">
            <PhoneMockup className="mb-8">
              <ScreenContent chapter={chapter} />
            </PhoneMockup>
            <span className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
              {chapter.eyebrow} · {chapter.accentLabel}
            </span>
            <h3 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-ink-100">
              {chapter.title}
            </h3>
            <p className="mt-4 max-w-sm text-balance leading-relaxed text-ink-500">
              {chapter.description}
            </p>
            <Link
              href={chapter.docHref}
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-ink-100"
            >
              Read the docs
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
