/**
 * Content contract for the FundLine "detail" template (loan-product pages and industry pages).
 * Structure mirrors bluevine.com/business-loans/line-of-credit; styling is FundLine's own.
 */

export interface DetailLink {
  label: string;
  href: string;
}

export interface DetailHero {
  /** Two-line headline; line 2 is rendered in the italic serif accent when `accentLine2` is true. */
  headingLine1: string;
  headingLine2: string;
  accentLine2?: boolean;
  /** Two or three short sentences. Use "¹ ² ³" style markers inline to reference `footnotes`. */
  sub: string;
  cta: DetailLink;
  /** One-line disclosure under the CTA row (e.g. "FundLine Capital is a commercial loan broker, not a lender."). */
  fineprint: string;
  /** Right-hand estimator card. */
  estimator: {
    title: string;
    label: string;
    min: number;
    max: number;
    step: number;
    initial: number;
    /** Illustrative APR used for the payment estimate. */
    apr: number;
    /** Term in months used for the payment estimate. */
    termMonths: number;
    cta: DetailLink;
    note: string;
  };
}

export interface DetailStat {
  value: string;
  label: string;
  blurb: string;
}

export interface DetailFeatureCard {
  icon: string;
  title: string;
  body: string;
}

export interface DetailCallout {
  icon: string;
  heading: string;
  boldLead: string;
  body: string;
  cta: DetailLink;
}

export interface DetailStep {
  title: string;
  body: string;
}

export interface DetailAppMock {
  businessName: string;
  availableLabel: string;
  available: string;
  limit: string;
  balanceLabel: string;
  balance: string;
  primaryAction: string;
  rows: { label: string; value: string }[];
}

export interface DetailReview {
  title: string;
  body: string;
  author: string;
}

export interface DetailFaqItem {
  question: string;
  answer: string;
}

export interface DetailCtaCard {
  icon: string;
  heading: string;
  body: string;
  cta: DetailLink;
  /** "light" = pale navy tint, "periwinkle" = deeper tint. */
  tone: "light" | "periwinkle";
}

export interface DetailGuideCard {
  tag: string;
  title: string;
  body: string;
  href: string;
  icon: string;
}

export interface DetailPageContent {
  slug: string;
  kind: "product" | "industry";
  /** Short name used in breadcrumbs, related chips and the "other pages" strip. */
  name: string;
  /** Material Symbols glyph for the page. */
  icon: string;
  meta: { title: string; description: string };
  breadcrumb: { label: string; href?: string }[];
  hero: DetailHero;
  stat: DetailStat;
  features: { headingLine1: string; headingLine2: string; sub: string; cards: DetailFeatureCard[] };
  callout: DetailCallout;
  steps: { heading: string; items: DetailStep[]; mock: DetailAppMock };
  support: { headingLine1: string; headingLine2: string; body: string; link: DetailLink };
  reviews: { heading: string; score: string; scoreLabel: string; countLabel: string; items: DetailReview[] };
  faq: { heading: string; items: DetailFaqItem[] };
  ctaCards: [DetailCtaCard, DetailCtaCard];
  guides: { heading: string; sub: string; cards: DetailGuideCard[] };
  closing: { headingLine1: string; headingLine2: string; cta: DetailLink; note: string };
  footnotes: string[];
}
