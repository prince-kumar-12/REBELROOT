import type { ReactNode } from "react";

export interface StoryChapter {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  docHref: string;
  accentLabel: string;
  screen: PhoneScreenContent;
}

export interface PhoneScreenContent {
  kind: "tabs" | "reader" | "split" | "shield" | "search";
  headline: string;
  detail: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "zap" | "shield" | "layers" | "gauge" | "eye" | "wand";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuickToolItem {
  id: string;
  title: string;
  description: string;
  icon: "search" | "translate" | "note" | "capture";
}

export interface ProductLinks {
  downloadUrl?: string;
  downloadLabel?: string;
  sourceUrl?: string;
  sourceLabel?: string;
}

export interface PowerUtilitiesCopy {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
}

export interface TechSpecRow {
  component: string;
  technology: string;
}

export interface TechSpecStack {
  title: string;
  rows: TechSpecRow[];
}

export interface TechnicalSpecifications {
  heading?: string;
  stacks: TechSpecStack[];
}

export interface ProductSteps {
  number: string;
  title: string;
  description: ReactNode;
}

export interface Product {
  name: string;
  slug: string;
  icon: string;
  accent: "electric" | "violet" | "mixed";
  status: ProductStatus;
  info: string;
  build?: string;
  steps?: ProductSteps[];
  stepsTitle?:string;
  heroCopy: string;
  description: string;
  category: string[];
  screenshots?: ProductScreenshot[];
  features: ProductFeature[];
  quickTools: ProductQuickTool[];
  platforms: string[];
  architecture: string[];
  security: string[];
  faq: FAQItem[];
  links?: ProductLinks;

  capabilitiesDescription?: string;

  powerUtilities?: PowerUtilitiesCopy;

  showBenchmark?: boolean;

  showDocsButton?: boolean;

  technicalSpecifications?: TechnicalSpecifications;
}

export type ProductStatus = "Live" | "Beta" | "In Development";

export interface ProductScreenshot {
  label: string;
  image: string;
  description: string;
  href?:string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductQuickTool {
  icon: string;
  title: string;
  description: string;
  href?: string;
}