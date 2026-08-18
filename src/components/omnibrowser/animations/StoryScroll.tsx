"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StoryScrollProps {
  sectionRef: RefObject<HTMLElement | null>;
  chapterCount: number;
  onChapterChange: (index: number) => void;
}

/**
 * Non-visual component that pins the story section on desktop and drives
 * the active-chapter index off ScrollTrigger progress. Disabled below
 * 1024px and under prefers-reduced-motion, per spec — mobile renders a
 * normal stacked list instead (see StorySection.tsx).
 */
export default function StoryScroll({
  sectionRef,
  chapterCount,
  onChapterChange,
}: StoryScrollProps) {
  const prefersReduced = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReduced) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      let lastIndex = -1;

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${chapterCount * 80}%`,
        pin: true,
        scrub: 0.1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const activeIndex = Math.min(
            chapterCount - 1,
            Math.floor(self.progress * chapterCount)
          );
          if (activeIndex !== lastIndex) {
            lastIndex = activeIndex;
            onChapterChange(activeIndex);
          }
        },
      });

      return () => {
        trigger.kill();
      };
    });

    return () => mm.revert();
  }, [sectionRef, chapterCount, onChapterChange, prefersReduced]);

  return null;
}
