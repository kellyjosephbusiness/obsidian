import type { FaqItem } from "@/types/sites/corgi-insure-a0f7893c/home";

/** Content contracts for the FundLine Capital product, partner and legal pages (Group D). */

export interface PageMeta {
  title: string;
  description: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface HeroContent {
  /** Small uppercase chip above the heading. */
  eyebrow?: string;
  /** Material Symbols icon drawn in a 72px tile above the heading. */
  icon?: string;
  headingLine1: string;
  headingLine2?: string;
  sub: string;
  primary: Cta;
  secondary?: Cta;
}

export interface IconCard {
  icon: string;
  title: string;
  body: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}

/** One anchored loan-product entry on /loan-types. */
export interface LoanTypeDetail {
  /** Anchor id (the nav links to `/loan-types#<id>`). */
  id: string;
  title: string;
  icon: string;
  summary: string;
  amount: string;
  term: string;
  speed: string;
  bestFor: string;
  rate: string;
  /** 1-bit stipple product illustration drawn in the card's top-right corner. */
  image: string;
  /** Dedicated product page, when one exists. */
  href?: string;
}

export interface ComparisonRow {
  product: string;
  anchor: string;
  amount: string;
  term: string;
  speed: string;
  bestFor: string;
}

/** Time-in-business option for the qualification estimator. */
export interface TenureOption {
  id: string;
  label: string;
  /** Scales the annual-revenue base. */
  factor: number;
  /** Product families that typically return offers at this tenure. */
  products: string[];
}

export interface CreditBandOption {
  id: string;
  label: string;
  factor: number;
}

export type FeatureMockKind = "application" | "marketplace" | "matching" | "prequalify";

export interface FeaturePageContent {
  slug: string;
  meta: PageMeta;
  hero: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    sub: string;
    primary: Cta;
    secondary: Cta;
  };
  mock: FeatureMockKind;
  benefits: { heading: string; sub: string; cards: IconCard[] };
  steps: { heading: string; sub: string; items: Step[] };
  snippet: { heading: string; sub: string; filename: string; code: string; notes: string[] };
  faq: FaqItem[];
  cta: { heading: string; sub: string; primary: Cta; secondary: Cta };
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  slug: string;
  meta: PageMeta;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  /** Render the privacy preferences form after the sections (privacy-choices only). */
  showPreferences?: boolean;
}
