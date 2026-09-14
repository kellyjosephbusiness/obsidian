/** Content types for FundLine Capital newsroom / press-release pages (corgi.insure press-release layout). */

export interface BreadcrumbItem {
  label: string;
  /** Omitted for the current (last) crumb. */
  href?: string;
}

export interface PressReleaseHero {
  backLabel: string;
  backHref: string;
  title: string;
  /** Rebranded thumbnail card content (replaces the source's static PNG). */
  thumbnail: {
    valuation: string;
    valuationLabel: string;
    raiseLead: string;
    raiseTail: string;
    leadInvestor: string;
  };
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "x";
}

export interface PressReleaseByline {
  author: string;
  social: SocialLink[];
  date: string;
  readTime: string;
}

/** A body paragraph. `lead` renders as a bold dateline prefix ("SAN FRANCISCO, CA"). */
export interface ArticleParagraph {
  lead?: string;
  text: string;
}

export interface ArticleBlock {
  id: string;
  /** Table-of-contents label. */
  tocLabel: string;
  /** Section heading; the overview block has none. */
  heading?: string;
  paragraphs: ArticleParagraph[];
}

export interface MediaContact {
  heading: string;
  name: string;
  title: string;
  email: string;
}

export interface InlineCta {
  title: string;
  subtitle: string;
  button: { label: string; href: string };
}

export interface RailCta {
  button: { label: string; href: string };
  helpText: string;
  helpLink: { label: string; href: string };
}

export interface ArticleCard {
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  href: string;
  /** Material Symbols name drawn on the card's navy-tint cover block; no cover when omitted. */
  coverIcon?: string;
}
