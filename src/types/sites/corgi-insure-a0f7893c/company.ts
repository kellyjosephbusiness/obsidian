/** Content types for the FundLine Capital company and account pages (about, careers, contact, apply, sign-in…). */

import type { MaterialIconName } from "./home";

export interface CompanyCta {
  label: string;
  href: string;
}

export interface CompanyHeroContent {
  /** Small uppercase pill above the heading. */
  eyebrow?: string;
  headingLine1: string;
  headingLine2?: string;
  sub: string;
  primary?: CompanyCta;
  secondary?: CompanyCta;
}

export interface CompanyMeta {
  title: string;
  description: string;
}

/** Icon + title + paragraph card (values, controls, benefits). */
export interface IconCard {
  icon: MaterialIconName;
  title: string;
  description: string;
}

/** Icon + title + a few short lines (support channels, offices). */
export interface InfoCard {
  icon: MaterialIconName;
  title: string;
  lines: string[];
  link?: CompanyCta;
  /** Small pill rendered next to the title (e.g. "HQ"). */
  badge?: string;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
}

export interface OpenRole {
  title: string;
  team: string;
  location: string;
  type: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  icon: MaterialIconName;
  title: string;
  description: string;
  /** Short bullet facts under the description. */
  facts: string[];
}

export interface TimelineItem {
  when: string;
  title: string;
  description: string;
}

export interface ReviewEntry {
  name: string;
  photo?: number;
  city: string;
  quote: string;
  /** 1–5 */
  rating: number;
  product: string;
  date: string;
}

export interface RatingBar {
  stars: number;
  /** 0–100 */
  percent: number;
}

export interface RatingSummaryContent {
  average: string;
  count: string;
  caption: string;
  bars: RatingBar[];
}

export interface CustomerStory {
  photo?: number;
  author: string;
  role: string;
  company: string;
  quote: string;
  industry: string;
  product: string;
  amount: string;
  outcome: string;
}

export interface CtaBandContent {
  headingLine1: string;
  headingLine2: string;
  sub: string;
  primary: CompanyCta;
  secondary: CompanyCta;
}

export interface SelectOption {
  value: string;
  label: string;
}

/** One step of the /apply flow. */
export interface ApplyStep {
  id: "business" | "financials" | "contact";
  label: string;
  title: string;
  sub: string;
}

export interface CallSlot {
  /** "9:00 AM" */
  label: string;
}

export interface SignInContent {
  eyebrow: string;
  heading: string;
  sub: string;
  emailLabel: string;
  passwordLabel: string;
  button: string;
  forgot: CompanyCta;
  alt: { text: string; link: CompanyCta };
  /** Small trust line under the card. */
  note: string;
}
