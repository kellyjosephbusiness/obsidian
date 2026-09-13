import type { ArticleCard, ArticleParagraph, BreadcrumbItem, InlineCta, MediaContact, RailCta } from "@/types/sites/corgi-insure-a0f7893c/press-release";

export type { ArticleCard, ArticleParagraph, BreadcrumbItem, InlineCta, MediaContact, RailCta };

/** Which index an article belongs to; drives the breadcrumb, back link and route prefix. */
export type ArticleKind = "blog" | "guide" | "news";

/** Content of the dark thumbnail card in the article hero (mirrors the press-release card). */
export interface ArticleThumbnail {
  /** Big number/figure top-left, e.g. "48 hrs". */
  stat: string;
  /** Small caption under the stat. */
  statLabel: string;
  /** Bold lead of the bottom caption, e.g. "Checklist:". */
  footLead: string;
  /** Rest of the bottom caption, e.g. " bank statements". */
  footTail: string;
  /** Uppercase display line at the bottom, e.g. "FASTER DECISION". */
  footTitle: string;
}

/** One body block: an optional H2, paragraphs and an optional bullet list rendered after them. */
export interface EditorialBlock {
  id: string;
  tocLabel: string;
  heading?: string;
  paragraphs: ArticleParagraph[];
  bullets?: string[];
}

export interface EditorialArticle {
  slug: string;
  kind: ArticleKind;
  title: string;
  /** Meta description and card excerpt. */
  excerpt: string;
  /** Long byline date, e.g. "August 27th 2026". */
  date: string;
  /** Short card date, e.g. "Aug. 27 2026". */
  cardDate: string;
  /** ISO date used for ordering. */
  isoDate: string;
  readTime: string;
  author: string;
  tags: string[];
  thumbnail: ArticleThumbnail;
  blocks: EditorialBlock[];
  /** The block id after which the dark inline CTA card renders. */
  inlineCtaAfter: string;
  /** Hrefs of 2–4 related articles (any kind, including /newsroom/series-b). */
  related: string[];
  /** Press releases end with a media-contact block. */
  mediaContact?: MediaContact;
}

/** One row on the /updates page. */
export interface ProductUpdate {
  date: string;
  tag: "New" | "Improved" | "Fixed";
  title: string;
  description: string;
  href?: string;
}

export interface IndexHeroContent {
  eyebrow: string;
  heading: string;
  sub: string;
}
