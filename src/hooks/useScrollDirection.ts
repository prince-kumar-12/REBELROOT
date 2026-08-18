"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollState {
  direction: "up" | "down";
  scrollY: number;
  pastThreshold: boolean;
}

/**
 * Tracks scroll direction and position with rAF throttling so the navbar
 * can hide on scroll-down and reveal on scroll-up without layout thrash.
 */
export function useScrollDirection(hideThreshold = 80): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: "up",
    scrollY: 0,
    pastThreshold: false,
  });

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateScrollState = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;
      const delta = Math.abs(currentY - lastScrollY.current);

      // Ignore tiny jitters so the navbar doesn't flicker.
      if (delta > 4) {
        setState({
          direction: goingDown ? "down" : "up",
          scrollY: currentY,
          pastThreshold: currentY > hideThreshold,
        });
        lastScrollY.current = currentY;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideThreshold]);

  return state;
}
