import { LINKS } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data";
import type { SocialLink } from "@/types/sites/corgi-insure-a0f7893c/press-release";
import { BLOG_POSTS } from "./blog-posts";
import { GUIDES } from "./guide-posts";
import { NEWS_POSTS } from "./news-posts";
import type { ArticleCard, ArticleKind, EditorialArticle, IndexHeroContent, InlineCta, ProductUpdate, RailCta } from "./types";
import type { TaggedArticleCard } from "./ArticleIndex";

/**
 * FundLine Capital editorial — blog, guides, press and product updates.
 * Every date, figure, name and quote is a fictional placeholder; the layout mirrors the press-release page.
 */

export { AUTHOR } from "./constants";

export const BYLINE_SOCIAL: SocialLink[] = [
  { label: "FundLine Capital on LinkedIn", href: "https://www.linkedin.com/company/fundline-capital", icon: "linkedin" },
];

/** Per-kind route prefix, breadcrumb label and back-link copy. */
export const KIND_META: Record<ArticleKind, { prefix: string; indexHref: string; crumbLabel: string; backLabel: string }> = {
  blog: { prefix: "/blog", indexHref: "/blog", crumbLabel: "FundLine Blog", backLabel: "Back to the blog" },
  guide: { prefix: "/guides", indexHref: "/guides", crumbLabel: "Small Business Guides", backLabel: "Back to guides" },
  news: { prefix: "/news", indexHref: "/newsroom", crumbLabel: "FundLine Newsroom", backLabel: "Back to press releases" },
};

export const INLINE_CTA: InlineCta = {
  title: "See your real offers",
  subtitle: "One application, offers from 75+ lenders, no impact to your credit score",
  button: { label: "Apply now", href: LINKS.apply },
};

export const ARTICLE_END_CTA = { label: "Start your application", href: LINKS.apply } as const;

export const RAIL_CTA: RailCta = {
  button: { label: "Start application", href: LINKS.apply },
  helpText: "Not familiar with business lending or need guidance?",
  helpLink: { label: "Talk to a specialist", href: LINKS.contact },
};

export const RELATED_LABEL = "Related articles";

/** All articles keyed by href. */
export const ALL_ARTICLES: EditorialArticle[] = [...BLOG_POSTS, ...GUIDES, ...NEWS_POSTS];

export function articleHref(article: EditorialArticle): string {
  return `${KIND_META[article.kind].prefix}/${article.slug}`;
}

/** Cover icon per topic tag (the first tag of an article decides); falls back to a generic article glyph. */
const TAG_ICONS: Record<string, string> = {
  Compare: "compare_arrows",
  "Getting started": "flag",
  Cost: "payments",
  "Term loans": "account_balance_wallet",
  Eligibility: "checklist",
  Speed: "bolt",
  "Cash flow": "waves",
  "Financing basics": "menu_book",
  Credit: "credit_score",
  "Product launch": "campaign",
};

export function coverIconFor(tags: string[]): string {
  const [first] = tags;
  return (first && TAG_ICONS[first]) || "article";
}

/** "Maya Chen, Co-founder & CEO" for named bylines; the plain author otherwise. */
export function bylineOf(article: Pick<EditorialArticle, "author" | "authorRole">): string {
  return article.authorRole ? `${article.author}, ${article.authorRole}` : article.author;
}

export function toCard(article: EditorialArticle): ArticleCard {
  return {
    date: article.cardDate,
    readTime: article.readTime,
    title: article.title,
    excerpt: article.excerpt,
    author: bylineOf(article),
    href: articleHref(article),
    coverIcon: coverIconFor(article.tags),
  };
}

export function toTaggedCard(article: EditorialArticle): TaggedArticleCard {
  return { ...toCard(article), tags: article.tags };
}

const CARDS_BY_HREF = new Map<string, ArticleCard>([
  ...ALL_ARTICLES.map((article): [string, ArticleCard] => [articleHref(article), toCard(article)]),
]);

export function relatedCards(article: EditorialArticle): ArticleCard[] {
  return article.related.map((href) => CARDS_BY_HREF.get(href)).filter((card): card is ArticleCard => card !== undefined);
}

function byDateDesc(a: EditorialArticle, b: EditorialArticle): number {
  return b.isoDate.localeCompare(a.isoDate);
}

export function articlesOfKind(kind: ArticleKind): EditorialArticle[] {
  return ALL_ARTICLES.filter((article) => article.kind === kind).sort(byDateDesc);
}

export function findArticle(kind: ArticleKind, slug: string): EditorialArticle | undefined {
  return ALL_ARTICLES.find((article) => article.kind === kind && article.slug === slug);
}

/** Distinct tags of a kind, in first-seen order of the newest-first list. */
export function tagsOfKind(kind: ArticleKind): string[] {
  const seen = new Set<string>();
  for (const article of articlesOfKind(kind)) article.tags.forEach((tag) => seen.add(tag));
  return [...seen];
}

export const BLOG_INDEX: IndexHeroContent = {
  eyebrow: "FundLine Blog",
  heading: "Straight answers on small business funding.",
  sub: "How lenders decide, what financing really costs, and how to get to a yes faster. Written by the FundLine team for business owners who do not have time to wait.",
};

export const GUIDES_INDEX: IndexHeroContent = {
  eyebrow: "Small Business Guides",
  heading: "The long reads, in plain language.",
  sub: "Start-to-finish guides on financing, business credit and getting ready to borrow. Read one before you apply and you will know exactly what a lender is going to ask.",
};

export const NEWSROOM_INDEX: IndexHeroContent = {
  eyebrow: "FundLine Newsroom",
  heading: "News from FundLine Capital.",
  sub: "Funding rounds, product launches and lender-network milestones. For media inquiries, email press@fundlinecapital.com.",
};

export const UPDATES_INDEX: IndexHeroContent = {
  eyebrow: "Product updates",
  heading: "What changed in FundLine, month by month.",
  sub: "New loan products, faster decisions and fixes, in the order we shipped them.",
};

export const INDEX_LABELS = {
  blog: "Latest articles",
  guides: "All guides",
  newsroom: "Press releases",
  updates: "Changelog",
} as const;

export const INDEX_CTA = {
  heading: "Ready to see real offers?",
  sub: "Fifteen minutes to apply. Offers from 75+ lenders. No impact to your credit score to check eligibility.",
  primary: { label: "Apply now", href: LINKS.apply },
} as const;

export const PRESS_CONTACT = {
  heading: "Media inquiries",
  body: "For interviews, data requests and brand assets, contact our communications team. We reply within one business day.",
  name: "Priya Nair",
  title: "Head of Communications",
  email: "press@fundlinecapital.com",
} as const;

export const PRODUCT_UPDATES: ProductUpdate[] = [
  {
    date: "Sep. 8 2026",
    tag: "New",
    title: "Same-day decisions on lines of credit up to $500K",
    description:
      "Connect a business bank account and most line-of-credit applications now receive lender decisions the same business day, with funds available as soon as the next morning.",
    href: "/news/same-day-decisions",
  },
  {
    date: "Aug. 19 2026",
    tag: "Improved",
    title: "Read-only bank connection replaces statement uploads",
    description:
      "Business owners can now link a business checking account in about 30 seconds instead of uploading PDFs. Statement uploads remain available for lenders that require them.",
  },
  {
    date: "Jul. 28 2026",
    tag: "New",
    title: "Equipment financing offers in the application",
    description:
      "Twelve equipment lenders joined the network. Business owners can add a quote or invoice to an application and compare equipment offers next to term loans and lines.",
  },
  {
    date: "Jun. 30 2026",
    tag: "Improved",
    title: "Offer comparison shows total cost of capital",
    description:
      "Every offer card now lists APR, total payback, payment frequency and prepayment terms side by side, so a factor-rate advance and an amortizing loan compare on the same footing.",
  },
  {
    date: "Jun. 9 2026",
    tag: "Fixed",
    title: "Payoff letters no longer stall for accounts with weekly payments",
    description: "Requesting a payoff letter on a weekly-pay loan could return a stale balance. Letters now reflect the current business day.",
  },
  {
    date: "May 14 2026",
    tag: "New",
    title: "Shareable application link",
    description:
      "Business owners can now send their in-progress application to a partner, bookkeeper or co-owner to finish, and every offer lands in one place.",
    href: "/apply",
  },
  {
    date: "Apr. 22 2026",
    tag: "Improved",
    title: "Faster document requests",
    description:
      "When a lender needs one more document, business owners now get a single checklist in the dashboard and by text instead of separate emails from each lender.",
  },
  {
    date: "Mar. 5 2026",
    tag: "New",
    title: "Loan payment and eligibility calculators",
    description: "Model monthly payments and total interest for any amount, rate and term, and estimate how much you may qualify for before you apply.",
    href: "/calculators",
  },
];
