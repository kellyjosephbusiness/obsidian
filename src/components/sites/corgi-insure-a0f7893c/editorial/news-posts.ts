import type { EditorialArticle } from "./types";

/** Press releases under /news. Names, quotes, figures and dates are fictional placeholders. */
export const NEWS_POSTS: EditorialArticle[] = [
  {
    slug: "same-day-decisions",
    kind: "news",
    title: "FundLine Capital Launches Same-Day Funding Decisions on Lines of Credit up to $500K",
    excerpt: "Business owners who connect a business bank account now receive lender decisions on lines of credit the same business day, with funds available as soon as the next morning.",
    date: "September 8th 2026",
    cardDate: "Sep. 8 2026",
    isoDate: "2026-09-08",
    readTime: "3 min read",
    author: "FundLine Capital",
    tags: ["Product launch"],
    thumbnail: { stat: "$500K", statLabel: "line of credit limit, same-day decision", footLead: "Now live:", footTail: " same-day decisions", footTitle: "Lines of credit" },
    inlineCtaAfter: "how-it-works",
    related: ["/newsroom/series-b", "/blog/where-owners-can-accept-a-funding-offer-the-same-day", "/blog/line-of-credit-vs-term-loan-seasonal-cash-flow"],
    mediaContact: { heading: "Media Contact", name: "Priya Nair", title: "Head of Communications", email: "press@fundlinecapital.com" },
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            lead: "SAN FRANCISCO, CA",
            text: " – FundLine Capital today announced same-day funding decisions on business lines of credit up to $500,000 across its funding brokerage. Business owners who connect a business bank account during the application now receive decisions from participating lenders the same business day, with funds available as soon as the following morning. The capability is live for all new applications starting today.",
          },
        ],
      },
      {
        id: "whats-new",
        tocLabel: "What's new",
        heading: "What's new",
        paragraphs: [
          {
            text: "Until now, a line-of-credit application on FundLine typically returned offers within one to three business days, depending on how quickly each lender could review uploaded statements. With a read-only bank connection in place of uploads, lenders in the program receive verified cash-flow data at the moment the application is submitted, and their automated credit models return a decision within hours.",
          },
          {
            text: "Twenty-two lenders in the FundLine network are participating at launch, covering limits from $10,000 to $500,000 and businesses from six months in business. Applications that fall outside the program's criteria continue to receive offers through the standard process.",
          },
        ],
      },
      {
        id: "how-it-works",
        tocLabel: "How it works",
        heading: "How it works",
        paragraphs: [
          { text: "The owner completes the fifteen-minute FundLine application and connects a business checking account. FundLine's funding team sends the application to lenders whose criteria fit the business's revenue, time in business and industry, and flags it for same-day review. Decisions and offers appear in the owner's dashboard as they arrive, each showing APR, draw fees, repayment terms and total cost of a sample draw in the same format. Once an offer is accepted and signed electronically, the lender opens the line and the first draw can be requested immediately." },
          { text: "Checking eligibility does not affect the owner's credit score. A hard inquiry occurs only when an offer is accepted and the lender finalizes the line." },
        ],
      },
      {
        id: "leadership",
        tocLabel: "Leadership",
        heading: "Leadership",
        paragraphs: [
          {
            text: "\"A line of credit is the product business owners reach for when something has to happen this week, and the old timeline made no sense for it,\" said Maya Chen, co-founder and CEO of FundLine Capital. \"The data lenders need already exists in a bank account. We built the connection, the lenders built the models, and the waiting disappeared.\"",
          },
          {
            text: "\"Same-day decisions are the standard we want for every product we broker,\" said Daniel Okoro, co-founder and COO. \"Lines of credit are first because they are decided almost entirely on cash flow. Short-term term loans are next, and we expect to bring equipment financing into the program before the end of the year.\"",
          },
        ],
      },
      {
        id: "availability",
        tocLabel: "Availability",
        heading: "Availability",
        paragraphs: [
          { text: "Same-day decisions are available now to business owners in all states where FundLine operates, for lines of credit up to $500,000. Business owners can apply at fundlinecapital.com or through FundLine's broker and ISO partner portal. Existing FundLine customers with an open line are not affected; their lenders will contact them directly about any changes to draw processing times." },
        ],
      },
      {
        id: "about",
        tocLabel: "About FundLine",
        heading: "About FundLine Capital",
        paragraphs: [
          { text: "FundLine Capital is a business funding brokerage built for small businesses. With one application, business owners receive offers from a network of more than 75 lenders, compare real terms side by side, and accept the one that fits, with no impact to their credit score to apply. The company has matched more than $1.2 billion in funding to over 12,000 businesses and is headquartered in San Francisco." },
        ],
      },
    ],
  },
];
