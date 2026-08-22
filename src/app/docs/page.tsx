import type { Metadata } from "next";
import { DocsContent } from "@/components/docs/DocsContent";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Getting started guides, contributing instructions, and the security disclosure process for every RebelRoot product.",
};

export default function DocsPage() {
  return <DocsContent />;
}
