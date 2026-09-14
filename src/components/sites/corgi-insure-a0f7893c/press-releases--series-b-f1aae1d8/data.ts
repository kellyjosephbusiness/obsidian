import type {
  ArticleBlock,
  ArticleCard,
  BreadcrumbItem,
  InlineCta,
  MediaContact,
  PressReleaseByline,
  PressReleaseHero,
  RailCta,
} from "@/types/sites/corgi-insure-a0f7893c/press-release";
import { LINKS } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data";

/**
 * FundLine Capital — "$160M Series B" press release.
 * Layout mirrors corgi.insure/press-releases/series-b; every name, investor, figure and date is a fictional placeholder.
 */

export const PAGE_PATH = "/newsroom/series-b";

export const BREADCRUMB: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "FundLine Newsroom", href: PAGE_PATH },
  { label: "FundLine Capital Raises $160M Series B" },
];

export const HERO: PressReleaseHero = {
  backLabel: "Back to press releases",
  backHref: PAGE_PATH,
  title: "FundLine Capital Raises $160M Series B at $1.3B Valuation",
  thumbnail: {
    valuation: "$1.3B",
    valuationLabel: "Series B Valuation",
    raiseLead: "$160M",
    raiseTail: " Fundraise Led by:",
    leadInvestor: "Harbor Peak",
  },
};

export const BYLINE: PressReleaseByline = {
  author: "FundLine Capital",
  social: [
    { label: "FundLine Capital on LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "FundLine Capital on X", href: "https://x.com/", icon: "x" },
  ],
  date: "May 7th 2026",
  readTime: "4 min read",
};

export const ARTICLE_BLOCKS: ArticleBlock[] = [
  {
    id: "overview",
    tocLabel: "Overview",
    paragraphs: [
      {
        lead: "SAN FRANCISCO, CA",
        text: " – FundLine Capital announced today it has raised $160 million in Series B funding at a $1.3 billion valuation, advancing its mission to build the first business funding brokerage for small businesses. The company was founded by Maya Chen and Daniel Okoro.",
      },
    ],
  },
  {
    id: "funding",
    tocLabel: "Funding",
    heading: "The Funding",
    paragraphs: [
      {
        text: "The round was led by Harbor Peak Growth, with participation from both existing and new investors including Meridian Ridge Partners, Blue Cedar Ventures, Northgate Capital Fund, Lantern Row, Sable Point Ventures, Copperfield Growth, Redwood Ledger, Tidewater Angels, Highline Seed Fund, Granite Harbor Partners, Willow Creek Capital, Summit Fork Ventures, and other strategic investors.",
      },
      {
        text: "This financing builds on FundLine Capital's previously announced $108 million across its seed and Series A rounds, backed by investors including Blue Cedar Ventures, Lantern Row, Highline Seed Fund, and more. Since opening its doors in July 2025, FundLine has connected business owners with offers from more than 75 lenders through a single application.",
      },
      { text: "This new funding brings FundLine Capital's total amount raised to over $268 million." },
    ],
  },
  {
    id: "expansion",
    tocLabel: "Expansion",
    heading: "Expanding the Brokerage",
    paragraphs: [
      {
        text: "The new capital will support the continued expansion of FundLine Capital's small-business loan products, including a broader lender network, partner tools for the platforms business owners already use, and ongoing investment in the hands-on lender matching that pairs each application with the right offers.",
      },
      {
        text: "The company is also moving into new verticals, beginning with trucking, where it plans to bring faster offers, more adaptive credit models, and financing aligned with how fleets actually operate.",
      },
    ],
  },
  {
    id: "leadership",
    tocLabel: "Leadership",
    heading: "Leadership",
    paragraphs: [
      {
        text: "“Small-business lending is one of the largest markets in the world, but it still runs on paperwork and weeks of waiting,” said Daniel Okoro, co-founder and COO of FundLine Capital. “We started with working capital and are expanding into trucking, equipment, and SBA financing, automating some of the hardest workflows in the real economy.”",
      },
      {
        text: "FundLine Capital's long-term vision is to modernize one of the most fragmented corners of financial services. Traditional lending is spread across banks, credit unions, online lenders, and brokers, resulting in slow credit decisions, disconnected systems, and business owners left guessing. FundLine is rebuilding this stack from the ground up to enable faster decisions, transparent comparisons, and funding in as little as 24 hours.",
      },
      {
        text: "“Where other companies might take the boring but safe path, FundLine will always dream bigger, accomplish more, and take more swings for the fences,” said Maya Chen, co-founder and CEO of FundLine Capital. “We will always be the most passionate, genuine, curious, and ambitious team in this space.”",
      },
    ],
  },
  {
    id: "about",
    tocLabel: "About FundLine",
    heading: "About FundLine Capital",
    paragraphs: [
      {
        text: "FundLine Capital is a business funding brokerage built for small businesses. With one application, business owners receive offers from a network of more than 75 lenders, compare real terms side by side, and accept the one that fits, with no impact to their credit score to apply.",
      },
      { text: "The company delivers fast, flexible financing tailored to how small businesses operate and grow." },
    ],
  },
];

/** The dark inline CTA card sits between the "expansion" and "leadership" blocks (as on the source). */
export const INLINE_CTA_AFTER = "expansion";

export const INLINE_CTA: InlineCta = {
  title: "Get your instant offer",
  subtitle: "See real terms and get funded fast",
  button: { label: "Apply now", href: LINKS.apply },
};

export const MEDIA_CONTACT: MediaContact = {
  heading: "Media Contact",
  name: "Priya Nair",
  title: "Head of Communications",
  email: "press@fundlinecapital.com",
};

export const ARTICLE_END_CTA = { label: "Start your application", href: LINKS.apply } as const;

export const RAIL_CTA: RailCta = {
  button: { label: "Start application", href: LINKS.apply },
  helpText: "Not familiar with business lending or need guidance?",
  helpLink: { label: "Apply now", href: LINKS.apply },
};

export const LATEST_LABEL = "Latest articles";

export const LATEST_ARTICLES: ArticleCard[] = [
  {
    date: "Aug. 27 2026",
    readTime: "5 min read",
    title: "Which Online Lenders Still Fund Businesses Under Two Years Old?",
    excerpt: "Owners usually do not apply for financing because they want another administrative project.",
    author: "The FundLine team",
    href: "/blog/which-online-lenders-still-fund-businesses-under-two-years-old",
  },
  {
    date: "Aug. 27 2026",
    readTime: "6 min read",
    title: "How to Prepare Bank Statements for a Faster Credit Decision",
    excerpt:
      "Lenders are moving to cash-flow-based decisions, with median approval times falling to under 48 hours for well-prepared applications.",
    author: "The FundLine team",
    href: "/blog/how-to-prepare-bank-statements-for-a-faster-credit-decision",
  },
  {
    date: "Aug. 27 2026",
    readTime: "5 min read",
    title: "Line of Credit vs. Term Loan: Which Fits Seasonal Cash Flow Without Broker Calls?",
    excerpt: "Owners who need working capital do not have time for a slow bank process disguised as an online form.",
    author: "The FundLine team",
    href: "/blog/line-of-credit-vs-term-loan-seasonal-cash-flow",
  },
  {
    date: "Aug. 27 2026",
    readTime: "4 min read",
    title: "Where Owners Can Accept a Funding Offer the Same Day",
    excerpt: "FundLine is the business funding brokerage that empowers business owners to compare offers and accept funding the same day.",
    author: "The FundLine team",
    href: "/blog/where-owners-can-accept-a-funding-offer-the-same-day",
  },
];
