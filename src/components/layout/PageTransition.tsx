"use client";

import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition } from "@/lib/motion";

/**
 * Wraps every route's content. Because this component lives in
 * `app/template.tsx`, Next.js remounts it on every navigation
 * (unlike layout.tsx, which persists). That remount is what drives
 * the fade-in + upward motion, and gives us a reliable hook to reset
 * scroll position — all without a full page refresh.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
