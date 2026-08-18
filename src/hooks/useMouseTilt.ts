 "use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";

interface UseMouseTiltOptions {
  maxRotateY?: number;
  maxRotateX?: number;
  perspective?: number;
  disabled?: boolean;
}

/**
 * Applies a subtle GSAP quickTo-driven tilt to an element based on mouse
 * position relative to its bounding box. Interpolation is handled entirely
 * by gsap.quickTo so the DOM is never touched directly on every mousemove.
 */
export function useMouseTilt(
  ref: RefObject<HTMLElement | null>,
  {
    maxRotateY = 10,
    maxRotateX = 8,
    perspective = 1100,
    disabled = false,
  }: UseMouseTiltOptions = {}
): void {
  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;

    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    const isDesktop =
      typeof window !== "undefined" && window.innerWidth >= 1024;

    if (isTouchDevice || !isDesktop) return;

    gsap.set(el, { transformPerspective: perspective, transformStyle: "preserve-3d" });

    const rotateX = gsap.quickTo(el, "rotateX", {
      duration: 0.6,
      ease: "power3.out",
    });
    const rotateY = gsap.quickTo(el, "rotateY", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMouseMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = (event.clientX - centerX) / (rect.width / 2);
      const offsetY = (event.clientY - centerY) / (rect.height / 2);

      rotateY(gsap.utils.clamp(-maxRotateY, maxRotateY, offsetX * maxRotateY));
      rotateX(gsap.utils.clamp(-maxRotateX, maxRotateX, -offsetY * maxRotateX));
    };

    const handleMouseLeave = () => {
      rotateX(0);
      rotateY(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, maxRotateY, maxRotateX, perspective, disabled]);
}
