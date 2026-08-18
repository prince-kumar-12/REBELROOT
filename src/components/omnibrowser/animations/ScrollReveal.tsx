"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, useful when rendering several in a loop. */
  delay?: number;
  /** Vertical travel distance in px before settling. */
  y?: number;
  /** Duration of the reveal in seconds (0.6–0.8s per spec). */
  duration?: number;
  as?: "div" | "li";
}

/**
 * Wraps any content in a one-time opacity + translateY reveal that fires
 * once the element enters the viewport. Uses IntersectionObserver so no
 * ScrollTrigger instances need to be tracked or cleaned up for simple cases.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 25,
  duration = 0.7,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: "power3.out",
              overwrite: true,
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, y, prefersReduced]);

  const Comp = as;

  return (
    <Comp ref={ref as never} className={className}>
      {children}
    </Comp>
  );
}
