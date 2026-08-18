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
export interface Product {
  name: string;
  slug: string;
  icon: string;
  accent: "electric" | "violet" | "mixed";
  status: ProductStatus;
  info: string;
  heroCopy: string;
  description: string;
  category: string[];
  screenshots: ProductScreenshot[];
  features: ProductFeature[];
  quickTools: ProductQuickTool[];
  platforms: string[];
  architecture: string[];
  security: string[];
  faq: FAQItem[];
}
export type ProductStatus = "Live" | "Beta" | "In Development";

export interface ProductScreenshot {
  label: string;
  image: string;
  description: string;
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
