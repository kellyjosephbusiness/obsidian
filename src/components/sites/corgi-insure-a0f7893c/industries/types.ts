/** Content types for the FundLine Capital `/industry/[industry]` pages (built on the `/industry/ai` layout). */

import type { FaqItem, MaterialIconName } from "@/types/sites/corgi-insure-a0f7893c/home";
import type { FundingMoment, ThreeUpBandContent } from "@/types/sites/corgi-insure-a0f7893c/industry-ai";

/** The eleven industries served by the dynamic route (`/industry/ai` is its own static route). */
export type IndustrySlug =
  | "construction"
  | "healthcare"
  | "retail"
  | "restaurants"
  | "trucking"
  | "ecommerce"
  | "manufacturing"
  | "professional-services"
  | "fintech"
  | "marketplaces"
  | "saas";

/** Optional DOM ids for sections that the site navigation deep-links to (e.g. `/industry/trucking#fleet-credit`). */
export interface IndustrySectionAnchors {
  why?: string;
  moments?: string;
  products?: string;
  scenarios?: string;
}

/** Hero: Material icon tile in place of the AI page's illustration, two-line H1, sub and CTA. */
export interface IndustryIconHeroContent {
  icon: MaterialIconName;
  headingLine1: string;
  headingLine2: string;
  sub: string;
  cta: { label: string; href: string; icon: MaterialIconName };
}

export interface IndustryDefinition {
  slug: IndustrySlug;
  /** Short display name used in breadcrumbs, chips and package headings ("Construction"). */
  name: string;
  /** Lower-case plural noun phrase used in headings ("construction companies"). */
  plural: string;
  /** Material Symbols glyph for the hero tile and the "other industries" chip. */
  icon: MaterialIconName;
  meta: { title: string; description: string };
  hero: { headingLine1: string; headingLine2: string; sub: string };
  why: ThreeUpBandContent;
  momentsHeading: { line1: string; line2: string };
  moments: FundingMoment[];
  /** Sub line under the "Core Funding Products" heading. */
  productsSub: string;
  scenarios: ThreeUpBandContent;
  faq: FaqItem[];
  anchors?: IndustrySectionAnchors;
}
