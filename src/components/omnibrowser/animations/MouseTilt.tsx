"use client";

import { ReactNode, useRef } from "react";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MouseTiltProps {
  children: ReactNode;
  className?: string;
}

/**
 * Applies a subtle 3D tilt that follows the cursor, scoped to desktop
 * pointer devices only. Reduced-motion users get a static element.
 */
export default function MouseTilt({ children, className = "" }: MouseTiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  useMouseTilt(ref, {
    maxRotateY: 10,
    maxRotateX: 8,
    perspective: 1100,
    disabled: prefersReduced,
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
