import type { EditorialArticle } from "./types";
import { AUTHOR } from "./constants";

/** Long-form small-business guides. All figures and ranges are illustrative placeholders, not offers. */
export const GUIDES: EditorialArticle[] = [
  {
    slug: "business-financing",
    kind: "guide",
    title: "Business Financing 101: Every Way to Fund a Small Business",
    excerpt: "Debt, equity and everything in between; the eight loan products explained; how much you can borrow; what it costs; and how to choose.",
    date: "June 3rd 2026",
    cardDate: "Jun. 3 2026",
    isoDate: "2026-06-03",
    readTime: "9 min read",
    author: AUTHOR,
    tags: ["Financing basics"],
    thumbnail: { stat: "8", statLabel: "loan products, one application", footLead: "Guide:", footTail: " business financing", footTitle: "Financing 101" },
    inlineCtaAfter: "how-much",
    related: ["/guides/getting-ready-to-borrow", "/guides/business-credit", "/blog/funding-guide-for-owners"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "There are more ways to fund a small business than most owners realize, and fewer that fit any particular moment. This guide walks the whole landscape once: the difference between debt and equity, the eight loan products lenders actually offer, what secured and unsecured mean in practice, how much you can realistically borrow, what it costs, and a simple way to choose. Read it start to finish once; afterwards, jump to the section you need.",
          },
        ],
      },
      {
        id: "debt-equity",
        tocLabel: "Debt vs. equity",
        heading: "Debt, equity and everything else",
        paragraphs: [
          { text: "Equity means selling a share of the company for cash. It never has to be repaid, and it costs you a share of every future dollar, plus a partner with a vote. It fits businesses aiming for a sale or a very large scale. Debt means borrowing cash and repaying it with interest. You keep the whole company; the lender only cares that you pay on time. For the vast majority of owner-operated businesses, debt is cheaper and simpler, which is why this guide spends most of its time there." },
          { text: "In between sit revenue-based financing, which is repaid as a percentage of sales, and grants, which are rare, slow and worth applying for anyway if you qualify." },
        ],
      },
      {
        id: "products",
        tocLabel: "The eight products",
        heading: "The eight loan products explained",
        paragraphs: [{ text: "Almost every offer you will ever see is one of these." }],
        bullets: [
          "Term loan: a lump sum repaid on a fixed schedule over six months to five years. Best for a defined investment with a payback.",
          "Business line of credit: a limit you draw against and repay repeatedly, paying interest only on what you use. Best for cash-flow gaps.",
          "SBA loan: a bank loan backed by a government guarantee, with terms up to ten years (twenty-five for real estate) and low rates in exchange for a slower, document-heavy process.",
          "Equipment financing: a loan or lease secured by the equipment itself, so the rate is lower and startups can often qualify.",
          "Invoice financing: an advance of 80% to 90% on unpaid invoices, repaid when the customer pays. Best when slow-paying customers are the problem.",
          "Merchant cash advance: a purchase of future card sales for cash today, repaid daily or weekly. Fast and flexible, and the most expensive option on this list.",
          "Commercial real estate loan: long-term financing to buy, build or refinance the property the business operates in.",
          "Business credit card: revolving credit for small, frequent spend that also builds your business credit file.",
        ],
      },
      {
        id: "secured",
        tocLabel: "Secured vs. unsecured",
        heading: "Secured vs. unsecured",
        paragraphs: [
          { text: "A secured loan is backed by something the lender can take if you stop paying: equipment, property, receivables or a blanket lien on business assets. It costs less because the lender's risk is lower. An unsecured loan relies on your cash flow and, almost always, a personal guarantee, which makes you personally responsible for the debt. Read that clause. Most online business loans are unsecured with a personal guarantee, and many also file a UCC lien, a public notice that the lender has a claim on business assets. Neither is unusual. Both should be understood before you sign." },
        ],
      },
      {
        id: "how-much",
        tocLabel: "How much you can borrow",
        heading: "How much can you borrow?",
        paragraphs: [
          { text: "Rules of thumb that hold across most of the market: unsecured term loans and lines usually top out at 10% to 15% of annual revenue, or about one to two months of deposits. Secured equipment financing goes to the value of the equipment. Invoice financing is limited by the invoices you have outstanding. SBA loans can reach $5 million but are sized to the cash flow that will repay them. Lenders check that your total loan payments stay comfortably under your operating cash flow, typically by a margin of 20% or more. An application that respects that ratio is approved faster and priced better." },
        ],
      },
      {
        id: "cost",
        tocLabel: "What it costs",
        heading: "What it costs",
        paragraphs: [
          { text: "Rates depend on product, time in business, revenue and credit. Illustrative ranges: SBA and bank term loans from 7% to 14% APR; online term loans and lines from 10% to 30%; equipment financing 6% to 20%; invoice financing 1% to 3% of the invoice per 30 days; merchant cash advances at factor rates of 1.15 to 1.40, which convert to APRs well above 40%. Always ask for APR and total payback. Two offers with the same headline rate can differ by thousands of dollars once fees and payment frequency are included." },
        ],
      },
      {
        id: "choosing",
        tocLabel: "Choosing",
        heading: "How to choose",
        paragraphs: [{ text: "Work through four questions in order." }],
        bullets: [
          "What is the money for? A defined purchase points to a term loan or equipment financing; a recurring gap points to a line; slow customers point to invoice financing.",
          "How fast do you need it? Lines and short-term loans can fund in a day; SBA and real estate take weeks.",
          "What can you show? Six months of statements opens cash-flow products; two years of returns opens the bank.",
          "What is the total cost against the return? If the investment earns more than the loan costs, borrow. If not, wait.",
        ],
      },
      {
        id: "next",
        tocLabel: "Next step",
        heading: "Next step",
        paragraphs: [
          { text: "You do not have to pick the product before you apply. On FundLine, one application is matched to the lenders and products that fit your profile, and you compare the offers that come back. Fifteen minutes, no impact to your credit score, and a clear answer on what your business can borrow today." },
        ],
      },
    ],
  },
  {
    slug: "business-credit",
    kind: "guide",
    title: "Building Business Credit: A Practical Guide",
    excerpt: "How business credit differs from personal credit, how it is scored, the six steps that build it, and the mistakes that quietly hold it back.",
    date: "June 10th 2026",
    cardDate: "Jun. 10 2026",
    isoDate: "2026-06-10",
    readTime: "8 min read",
    author: AUTHOR,
    tags: ["Credit"],
    thumbnail: { stat: "680+", statLabel: "the credit band that unlocks bank pricing", footLead: "Guide:", footTail: " building business credit", footTitle: "Business credit" },
    inlineCtaAfter: "steps",
    related: ["/guides/getting-ready-to-borrow", "/blog/funding-cost-by-stage", "/blog/which-online-lenders-still-fund-businesses-under-two-years-old"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "Business credit is the reputation your company has with lenders, separate from your own. Built well, it lowers the cost of every loan you take, raises the amounts you qualify for, and eventually lets the business borrow without leaning on your personal score. Built badly, or not at all, it keeps you paying startup rates years after you have stopped being a startup. This guide explains how it works and gives you a plan you can run in a year.",
          },
        ],
      },
      {
        id: "personal-vs-business",
        tocLabel: "Personal vs. business",
        heading: "Personal credit vs. business credit",
        paragraphs: [
          { text: "Your personal score is tied to your social security number and follows you everywhere. Business credit is tied to the company's tax ID and its legal name. In the first year or two, nearly every lender decides on your personal score because the business has no file yet. Over time the balance shifts: a strong business file lets lenders price the company on its own record, and it stops every business loan from showing up on your personal report. For most owners, the personal score never stops mattering entirely, but it stops being the whole story." },
        ],
      },
      {
        id: "scored",
        tocLabel: "How it is scored",
        heading: "How business credit is scored",
        paragraphs: [
          { text: "Commercial credit bureaus collect payment data from suppliers, lenders and card issuers that report to them, then score the company on payment history, credit utilization, age of accounts, the number of accounts, and public records like liens and judgments. Payment history is weighted heavily, and \"on time\" is often defined as early: many commercial scores reward paying invoices before the due date. Unlike personal credit, a company can have several different scores across bureaus, and some lenders use their own models built from your bank statements instead." },
        ],
      },
      {
        id: "steps",
        tocLabel: "Six steps",
        heading: "Six steps that build it",
        paragraphs: [{ text: "Do these in order. Most owners can finish the first four in a month." }],
        bullets: [
          "Form a legal entity and get an employer identification number, so the business has an identity to build a file under.",
          "Open a business checking account and run all revenue and expenses through it. Lenders read statements first.",
          "Get a business phone line and address listed consistently everywhere; mismatched records fragment your file.",
          "Open accounts with two or three suppliers that report payments, and pay them early. These trade lines are the foundation of the file.",
          "Add a business credit card, keep utilization under 30%, and pay in full every month.",
          "Take a small term loan or line of credit once you qualify, repay it perfectly, and let the history compound.",
        ],
      },
      {
        id: "lenders-check",
        tocLabel: "What lenders check",
        heading: "What lenders actually check",
        paragraphs: [
          { text: "A commercial score is one input, rarely the deciding one. Most lenders look at your personal credit, three to six months of business bank statements, time in business, revenue, industry and existing debt, and then at the business file to confirm the story. A personal score in the high 600s or better, combined with clean statements and a growing business file, is what moves you from online pricing toward bank pricing. Business credit does its most visible work on larger amounts, longer terms and the removal of a personal guarantee." },
        ],
      },
      {
        id: "mistakes",
        tocLabel: "Mistakes",
        heading: "Mistakes that hold it back",
        paragraphs: [
          { text: "Paying suppliers late, even by a few days. Mixing personal and business spending in one account. Applying to many lenders one after another, which stacks hard inquiries on your personal report. Letting a small tax lien or judgment sit unresolved. Closing your oldest accounts. And the quietest one: never checking your business file, so an error from a supplier sits there for years. Pull each bureau's report at least once a year and dispute anything that is wrong." },
        ],
      },
      {
        id: "next",
        tocLabel: "Next step",
        heading: "Next step",
        paragraphs: [
          { text: "If you are early, start with the entity, the bank account and two reporting suppliers this month. If you are already borrowing, make the next loan the one that builds the file: on FundLine, an application does not affect your credit score, and the lenders in our network report clean repayment, so every on-time payment lowers the cost of the loan after it." },
        ],
      },
    ],
  },
  {
    slug: "getting-ready-to-borrow",
    kind: "guide",
    title: "Getting Ready to Borrow: The 30-Day Checklist",
    excerpt: "Four weeks of preparation, one week at a time: the numbers, the documents, the credit cleanup and the ask, plus the document list lenders expect.",
    date: "June 17th 2026",
    cardDate: "Jun. 17 2026",
    isoDate: "2026-06-17",
    readTime: "8 min read",
    author: AUTHOR,
    tags: ["Getting started"],
    thumbnail: { stat: "30", statLabel: "days to a stronger application", footLead: "Checklist:", footTail: " getting ready to borrow", footTitle: "Ready to borrow" },
    inlineCtaAfter: "week-two",
    related: ["/blog/how-to-prepare-bank-statements-for-a-faster-credit-decision", "/guides/business-financing", "/guides/business-credit"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "The difference between a decline and a good offer is often thirty days of preparation. Not thirty days of paperwork, just a short list done in the right order so that when a lender opens your file, every question already has an answer. This checklist is organized by week. If you need money sooner, compress it; the order still holds.",
          },
        ],
      },
      {
        id: "week-one",
        tocLabel: "Week 1: numbers",
        heading: "Week one: know your numbers",
        paragraphs: [{ text: "Lenders ask the same handful of questions. Have the answers written down before you start." }],
        bullets: [
          "Average monthly revenue for the last six months, and the trend: up, flat or down.",
          "Time in business, measured from the date you first took revenue, not the date you incorporated.",
          "Every existing loan, advance, lease and credit card balance, with its monthly payment.",
          "Your personal credit score, pulled from a free source, so nothing surprises you.",
          "The amount you need, what it buys, and when it pays back. Vague requests get vague offers.",
        ],
      },
      {
        id: "week-two",
        tocLabel: "Week 2: documents",
        heading: "Week two: gather the documents",
        paragraphs: [
          { text: "Download the last six months of business bank statements as full PDFs. Export a year-to-date profit-and-loss statement and a balance sheet from your accounting software, even if they are rough. Locate last year's business tax return and your formation documents. If the request is for equipment, get the quote or invoice. Put everything in one folder named for the month. Most online applications need only the statements; the rest is for lenders that ask for more, and having it ready turns a week of follow-up into an hour." },
        ],
      },
      {
        id: "week-three",
        tocLabel: "Week 3: cleanup",
        heading: "Week three: clean up credit and cash flow",
        paragraphs: [{ text: "This is the week that changes your pricing." }],
        bullets: [
          "Pay revolving balances down below 30% of their limits; utilization updates within a statement cycle.",
          "Dispute any error on your personal report. Resolve or set up a payment plan on any tax lien.",
          "Keep a floor balance in the business account so the month you apply has zero negative days.",
          "Pay off any small advance whose daily debits clutter the statement.",
          "Stop applying elsewhere. Every hard inquiry in the last ninety days is a question you will have to answer.",
        ],
      },
      {
        id: "week-four",
        tocLabel: "Week 4: the ask",
        heading: "Week four: make the ask",
        paragraphs: [
          { text: "Size the request to the job plus a 10% cushion, and check that the payment fits: as a rule, total loan payments should stay under about 10% of monthly deposits for online products and well under your operating cash flow for bank products. Decide which product fits the job using the financing guide, but do not over-think it; a broker will match you to several. Apply early in the week and early in the day so lenders can decide and fund before their cutoffs. Then compare offers on APR, total payback, payment frequency and prepayment terms, not on the headline rate." },
        ],
      },
      {
        id: "document-list",
        tocLabel: "The document list",
        heading: "The document list",
        paragraphs: [{ text: "For reference, everything a lender might ask for, from most to least common." }],
        bullets: [
          "Three to six months of business bank statements, or a read-only bank connection.",
          "Government ID for every owner with 20% or more of the company.",
          "Year-to-date profit-and-loss statement and balance sheet.",
          "Most recent business tax return; two years for SBA and bank loans.",
          "Formation documents, EIN letter and any licenses the business needs to operate.",
          "Accounts receivable and payable aging, for invoice financing and larger requests.",
          "Equipment quote, purchase agreement or lease, when the loan buys something specific.",
          "Existing debt schedule listing each lender, balance and payment.",
        ],
      },
      {
        id: "next",
        tocLabel: "Next step",
        heading: "Next step",
        paragraphs: [
          { text: "If you have the statements and the numbers from week one, you are ready enough to check eligibility today; the rest improves the offer rather than gating it. One application on FundLine reaches more than 75 lenders and does not affect your credit score. Start there, and use the remaining weeks to make the best offer better." },
        ],
      },
    ],
  },
];
