"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";

export interface NavbarScrollState {
  /** true once the user has scrolled past ~40px — used to solidify the bg */
  isSolid: boolean;
  /** true when the navbar should translate out of view */
  isHidden: boolean;
}

/**
 * Custom hook (kept in animations/ alongside its sibling controllers) that
 * turns raw scroll position/direction into the two booleans Navbar.tsx
 * needs: whether the background should be solid, and whether the bar
 * should be translated off-screen. Kept transform-only per spec — no
 * layout-affecting properties are touched.
 */
export function useNavbarScroll(
  solidThreshold = 40,
  hideThreshold = 80
): NavbarScrollState {
  const { direction, scrollY } = useScrollDirection(hideThreshold);

  const isSolid = scrollY > solidThreshold;
  const isHidden = scrollY > hideThreshold && direction === "down";

  return { isSolid, isHidden };
}
