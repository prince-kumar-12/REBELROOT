"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroAnimationProps {
  containerRef: RefObject<HTMLElement | null>;
}

/**
 * Non-visual component that runs the hero's cinematic entrance timeline.
 * Targets elements inside containerRef via data-hero attributes so Hero.tsx
 * stays purely declarative. Cleans up via gsap.context on unmount.
 */
export default function HeroAnimation({
  containerRef,
}: HeroAnimationProps) {
  const prefersReduced = useReducedMotion();

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    if (prefersReduced) {
      gsap.set(
        container.querySelectorAll("[data-hero]"),
        {
          opacity: 1,
          y: 0,
          scale: 1,
          clearProps: "transform",
        }
      );

      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        '[data-hero="navbar"]',
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        0
      )

        .fromTo(
          '[data-hero="badge"]',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          0.25
        )

        .fromTo(
          '[data-hero="heading"]',
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
          },
          0.35
        )

        .fromTo(
          '[data-hero="description"]',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          0.55
        )

        .fromTo(
          '[data-hero="cta"]',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          0.65
        )

        .fromTo(
          '[data-hero="phone"]',
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "expo.out",
          },
          0.4
        )

        .fromTo(
          '[data-hero="scroll-indicator"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
          },
          1.1
        );
    }, container);

    return () => ctx.revert();
  }, [containerRef, prefersReduced]);

  return null;
}