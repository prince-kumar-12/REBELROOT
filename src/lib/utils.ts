import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const accentToClasses = (accent: "electric" | "violet" | "mixed") => {
  switch (accent) {
    case "electric":
      return {
        text: "text-electric-soft",
        ring: "ring-electric/30",
        glow: "shadow-glow",
        gradient: "from-electric/20 to-transparent",
        dot: "bg-electric",
      };
    case "violet":
      return {
        text: "text-violet-soft",
        ring: "ring-violet/30",
        glow: "shadow-glow-violet",
        gradient: "from-violet/20 to-transparent",
        dot: "bg-violet",
      };
    default:
      return {
        text: "text-electric-soft",
        ring: "ring-violet/30",
        glow: "shadow-glow",
        gradient: "from-electric/20 via-violet/10 to-transparent",
        dot: "bg-gradient-to-r from-electric to-violet",
      };
  }
};
