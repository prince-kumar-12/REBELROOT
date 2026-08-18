import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import Community from "@/components/layout/joinCommunity"

export const metadata: Metadata = {
  title: "About",
  description:
    "NovaRoot is an independent open-source collective building software around digital sovereignty: local-first, zero telemetry, and fully auditable.",
};

export default function AboutPage() {
  return(
<>
    <AboutContent />
    <Community/>
</>
  ) 
}
