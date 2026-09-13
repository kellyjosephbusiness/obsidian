import type { FaqItem } from "@/types/sites/corgi-insure-a0f7893c/home";
import type {
  CompareCard,
  GlossaryEntry,
  IconCard,
  IndustryPill,
  ReadingCard,
  Scenario,
  TermTile,
} from "@/types/sites/corgi-insure-a0f7893c/term-loans";
import { ASSETS, LINKS } from "../root-8a5edab2/data";

/** FundLine Capital — "/term-loans" content. Amounts, rates and dates are illustrative. */

export const TERM_META = {
  title: "Business Term Loans | FundLine Capital",
  description:
    "Business term loans from $5K to $5M with fixed schedules and terms from 6 to 60 months. Apply once and compare real offers from FundLine Capital's lender network.",
} as const;

export const FORM_CODE = "FLC-TL-0100";

export const HERO = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Products", href: LINKS.loanTypes },
    { label: "Term Loans", href: undefined },
  ] as { label: string; href?: string }[],
  heading: "Business Term Loans for Growing Companies",
  intro:
    "Growing a business means making big moves before the cash is fully there: a second location, a wholesale order, new equipment, a stubborn merchant advance that needs refinancing. A term loan gives you a lump sum up front with a fixed repayment schedule, so you can fund the plan today and pay it back predictably. FundLine Capital matches one application to term-loan offers from banks, credit unions and online lenders, then lets you pick the amount, term and payment that fit.",
  reviewed: "Last reviewed April 24, 2026 · Reviewed by the FundLine credit team",
  cta: { label: "Get a term loan offer", href: LINKS.apply },
} as const;

export const PULL_QUOTE =
  "Your next expansion is worth more than the wait. A term loan turns a good plan into funded work without draining the cash you run on.";

export const ANATOMY = {
  heading: "What's Actually Inside Your Term Loan Agreement",
  sub: "Agreement structure under form FLC-TL-0100. How the principal, term and schedule fit together, what fees apply, and why prepaying is your friend. Amounts shown are illustrative. Important: the descriptions on this page are general summaries for informational purposes only. They do not constitute an offer, commitment or guarantee of financing. Terms are set only by the lender's issued agreement. Always refer to your actual loan agreement and disclosure for the governing terms. If there is any conflict between this summary and the agreement, the agreement controls.",
  formTitle: "Term Loan",
  formCaption: { label: "ORIGINATION FEE:", value: "2.0% of principal" },
} as const;

export const TERM_TILES: TermTile[] = [
  { title: "Loan amount", label: "PER LOAN :", value: "$5,000 – $5,000,000" },
  { title: "Term length", label: "MONTHS :", value: "6 – 60" },
  { title: "Rate", label: "FIXED APR FROM :", value: "7.99%" },
  { title: "Repayment", label: "SCHEDULE :", value: "Weekly or monthly" },
  { title: "Prepayment", label: "PENALTY :", value: "None" },
  { title: "Collateral", label: "PERSONAL GUARANTEE :", value: "Varies by lender" },
];

export const PLAIN_ENGLISH = {
  heading: "Plain English on the Left. Loan Language on the Right.",
  sub: "What this loan pays for.",
  colLeft: "IF THIS HAPPENS…",
  colRight: "…YOUR TERM LOAN WORKS LIKE THIS",
  scenarioNotesTitle: "Scenario notes",
  loanNotesTitle: "Loan notes",
} as const;

export const SCENARIOS: Scenario[] = [
  {
    note: 1,
    prompt: "A national retailer places a $180K wholesale order and wants it delivered in six weeks, before they pay you on net-60 terms.",
    lead: "Principal funds the order up front",
    body: "The lender disburses the full amount in one transfer once you accept the offer. You buy inventory and cover labor now, then repay on a fixed weekly or monthly schedule that starts after funding. Because the schedule is fixed, the retailer's net-60 payment lands well inside your repayment window. No draw limits or redraws apply: a term loan is one lump sum, one schedule.",
    amountsLabel: "AVAILABLE AMOUNTS",
    amounts: "Up to $5M per loan / 60-month term",
  },
  {
    note: 2,
    prompt: "You sign a lease on a second location and need $250K for the build-out, signage and opening inventory before the doors open.",
    lead: "A 36–60 month term matches the payback",
    body: "Long-lived investments are paired with longer terms so the monthly payment fits the new location's ramp. The agreement fixes your APR for the life of the loan, so a rate move next year does not change the payment. Origination is deducted from proceeds; the amortization schedule in the agreement shows exactly how much of each payment is principal versus interest.",
    amountsLabel: "AVAILABLE AMOUNTS",
    amounts: "Up to $5M per loan / 60-month term",
  },
  {
    note: 3,
    prompt: "A merchant cash advance is taking 18% of your daily card sales and the effective cost is far higher than the factor rate suggested.",
    lead: "Refinance into a fixed schedule",
    body: "Many lenders in the network will pay off an existing advance directly at closing and issue the remainder to you. Your new payment is a known amount on a known date instead of a percentage of sales, and the disclosure shows the APR side by side with the old factor rate. Prepaying later carries no penalty under form FLC-TL-0100.",
    amountsLabel: "AVAILABLE AMOUNTS",
    amounts: "Up to $5M per loan / 60-month term",
  },
];

export const SCENARIO_NOTES: string[] = [
  "Term loans in the FundLine network are originated by the individual lender you select; FundLine Capital is not the lender. Funds are disbursed in a single transfer after the agreement is signed, typically within one to three business days. The amortization schedule is part of the agreement and lists every payment. Refer to your agreement for the specific disbursement and payment provisions, as these differ between lenders.",
  "Rates are fixed for the life of the loan unless the agreement states otherwise. Origination fees are deducted from proceeds before disbursement, so the amount that lands in your account is the principal less the fee. Some lenders require a personal guarantee or a UCC lien on business assets; both are disclosed before you accept the offer.",
  "Refinancing an advance requires a payoff letter from the existing funder. Lenders may pay that balance directly at closing. Not all advances can be refinanced, and the effective APR of an advance depends on how quickly it is repaid. Consult your disclosure and, where useful, your accountant.",
];

export const LOAN_NOTES: string[] = [
  "Time in business, average monthly revenue and credit history determine which lenders return an offer. Most term-loan programs require at least one year in business and $10K or more in monthly revenue; some SBA-backed programs require two years.",
  "Late-payment provisions apply: agreements include a cure period (commonly 10 days) before a default fee is assessed. Repeated missed payments can trigger acceleration, meaning the remaining balance becomes due. Review your agreement for the specific cure and default terms.",
  "A term loan does not include a redraw feature (that's a line of credit), does not finance a specific asset with that asset as collateral (that's equipment financing), and does not advance against invoices (that's invoice financing). Use the comparison below to choose the right product.",
  "APR is the all-in annual cost including interest and required fees. Where a lender quotes a factor rate, the disclosure also shows the equivalent APR so offers can be compared on the same basis.",
  "The scenarios above are illustrative examples only and do not guarantee an offer or any specific terms. Actual offers depend on the facts of your application and the specific terms of your issued agreement. Results may differ based on lender, amount, term and applicable law.",
];

export const COMPARE = {
  heading: "How Term Loans Compare",
  sub: "Term loans, lines of credit and SBA 7(a) loans each fit a different cash-flow shape.",
} as const;

export const COMPARE_CARDS: CompareCard[] = [
  {
    title: "Term Loan",
    image: `${ASSETS}/images/fl.webp`,
    rows: [
      { label: "What it's for:", text: "A one-time investment with a known cost, funded as a lump sum" },
      { label: "Who it fits:", text: "Businesses with 12+ months of history and steady monthly revenue" },
      { label: "Common scenario:", text: "Opening a second location or financing a large order" },
      { label: "Key difference:", text: "Fixed amount, fixed schedule, fixed rate. Is the need a single project with a clear price tag? That's a term loan." },
    ],
  },
  {
    title: "Line of Credit",
    image: `${ASSETS}/images/tech-eo.webp`,
    rows: [
      { label: "What it's for:", text: "Recurring or unpredictable cash needs you draw on as they arise" },
      { label: "Who it fits:", text: "Seasonal businesses and companies smoothing receivables" },
      { label: "Common scenario:", text: "Covering payroll while a large customer pays on net-60" },
      { label: "Key difference:", text: "Revolving limit, interest only on what you use. Is the need ongoing and variable? That's a line of credit." },
    ],
  },
  {
    title: "SBA 7(a)",
    image: `${ASSETS}/images/cyber.webp`,
    rows: [
      { label: "What it's for:", text: "Larger, longer projects where a lower rate matters more than speed" },
      { label: "Who it fits:", text: "Established businesses that can wait 30–90 days for approval" },
      { label: "Common scenario:", text: "Buying a building or acquiring a competitor" },
      { label: "Key difference:", text: "Government-backed terms up to 25 years with more paperwork. Is the need big, long and rate-sensitive? That's SBA." },
    ],
  },
];

export const QUALIFY = {
  heading: "Who Qualifies & What to Expect",
  cards: [
    {
      icon: "verified_user",
      title: "Who Qualifies",
      body: "Most term-loan programs look for at least one year in business, $10,000 or more in average monthly revenue and a personal credit score of 600 or higher. Stronger profiles unlock lower rates and longer terms; newer businesses are routed to starter programs and lines of credit instead.",
    },
    {
      icon: "balance",
      title: "Loan Boundaries",
      body: "A term loan is a single disbursement with a fixed amortization schedule. There is no redraw once repayment begins, and the rate is fixed for the life of the loan unless the agreement says otherwise. Origination is deducted from proceeds; late payments carry a cure period before default fees apply. Some lenders require a personal guarantee or a UCC lien, both disclosed before you accept. Prepayment carries no penalty under form FLC-TL-0100, and interest stops accruing on the day the balance is paid.",
    },
    {
      icon: "business_center",
      title: "Available Extensions",
      body: "Optional features include Payment Holiday, Rate Lock and Top-Up Draw. Availability varies by lender and by the strength of the application; features are noted on each offer before you accept.",
    },
  ] satisfies IconCard[],
} as const;

export const ADD_ONS = {
  heading: "Available Add-ons",
  cards: [
    {
      icon: "schedule",
      title: "Payment Holiday",
      body: "Skip one scheduled payment in any rolling 12-month period without a late fee or credit reporting. Interest continues to accrue and the term extends by one payment. For example: a restaurant skips its January payment after a slow holiday season and resumes in February. [Feature availability varies by lender]",
    },
    {
      icon: "lock",
      title: "Rate Lock",
      body: "Hold your offered APR and terms for 30 days while you finalize the lease, purchase order or contractor bid the loan will fund. For example: your build-out quote slips two weeks and the offer waits for you at the same rate. [Feature availability varies by lender]",
    },
    {
      icon: "add_circle",
      title: "Top-Up Draw",
      body: "After six on-time payments, request an additional amount up to 25% of the original principal on the same schedule without a new application. For example: your second location outperforms and you add inventory mid-term. [Feature availability varies by lender]",
    },
  ] satisfies IconCard[],
} as const;

export const PRODUCTS_HEADER = {
  heading: "Our Core Products",
  sub: "Term loans are the foundation for growing companies. Layer in a line of credit, equipment financing, invoice financing and more: modular capital that grows with you.",
  cta: { label: "Apply now", href: LINKS.apply },
} as const;

export const GLOSSARY = {
  heading: "Term Loan Glossary",
  sub: "Key terms from the agreement and offer summary.",
} as const;

export const GLOSSARY_ENTRIES: GlossaryEntry[] = [
  { term: "APR", definition: "Annual percentage rate: the all-in yearly cost of the loan including interest and required fees, expressed as a percentage of principal. APR is the number to compare across offers, because two loans with the same interest rate can have very different APRs once fees are included." },
  { term: "Principal", definition: "The amount you borrow. Each scheduled payment is split between principal and interest; the amortization schedule in your agreement shows how that split shifts toward principal over the term." },
  { term: "Origination Fee", definition: "A one-time fee, typically 1–4% of principal, deducted from proceeds before disbursement. A $100,000 loan with a 2% origination fee lands as $98,000 in your account while you repay $100,000 plus interest." },
  { term: "Amortization", definition: "The schedule that spreads repayment across the term in equal installments. Early payments are interest-heavy; later payments are principal-heavy. Prepaying reduces the interest that would have accrued on the remaining schedule." },
  { term: "Prepayment Penalty", definition: "A fee some lenders charge for paying a loan off early. Offers under form FLC-TL-0100 carry none, and interest stops accruing on the day the balance is paid. Always confirm the prepayment clause before accepting an offer from any lender." },
  { term: "Personal Guarantee", definition: "A commitment by the owner to repay the loan personally if the business cannot. Common on loans to companies under $5M in revenue; the guarantee is disclosed in the offer and signed with the agreement." },
  { term: "UCC Lien", definition: "A public filing that gives the lender a claim on business assets as collateral until the loan is repaid. A blanket lien covers all business assets; a specific lien covers named ones. Liens are released when the balance is paid." },
  { term: "Debt Service Coverage Ratio (DSCR)", definition: "Net operating income divided by total debt payments. Lenders typically want 1.25 or higher, meaning the business earns $1.25 for every $1.00 of scheduled debt payments. A low DSCR shrinks the offer or lengthens the term." },
  { term: "Factor Rate vs. APR", definition: "A factor rate (e.g. 1.20) multiplies the principal to give the total repayment and ignores how fast you repay; APR annualizes the cost. A 1.20 factor rate repaid over six months is roughly a 70% APR. Disclosures show both so offers can be compared." },
  { term: "Cure Period", definition: "The number of days after a missed payment before a late fee or default is assessed, commonly 10 days. Paying within the cure period keeps the loan in good standing and out of credit reporting." },
];

export const READING = {
  heading: "Continue Reading",
  sub: "Go deeper on term loans and the rest of the small business funding stack.",
} as const;

export const READING_CARDS: ReadingCard[] = [
  { title: "5 Ways a Term Loan Secures Your Company's Next Stage", href: "/blog/term-loan-next-stage", source: "FundLine Blog", date: "March 16th 2026" },
  { title: "How Much Does Business Funding Really Cost by Stage?", href: "/blog/funding-cost-by-stage", source: "FundLine Blog", date: "March 18th 2026" },
  { title: "Small Business Funding Guide for Owners", href: "/blog/funding-guide-for-owners", source: "FundLine Blog", date: "March 20th 2026" },
  { title: "Term Loan Built for Growing Companies", href: "/blog/term-loan-for-growing-companies", source: "FundLine Blog", date: "March 22nd 2026" },
];

export const TERM_FAQ: FaqItem[] = [
  { question: "What does a term loan cover?", answerHtml: "Anything with a known, one-time cost: a build-out, a large inventory order, new equipment, an acquisition, or refinancing an expensive advance. You receive the full amount up front and repay it on a fixed schedule with a fixed rate." },
  { question: "When does the first payment start?", answerHtml: "Most schedules begin one week (weekly plans) or one month (monthly plans) after disbursement. The exact first-payment date, the payment amount and the full amortization schedule are printed in the agreement before you sign." },
  { question: "What are the key limits or fees?", answerHtml: 'Amounts run from $5,000 to $5,000,000 with terms of 6 to 60 months. Origination fees of 1–4% are deducted from proceeds. Offers under form FLC-TL-0100 have no prepayment penalty. Late payments carry a cure period before fees apply. See the <a class="underline" href="#glossary">glossary</a> for definitions.' },
  { question: "Are add-ons available for term loans?", answerHtml: "Depending on the lender: Payment Holiday (skip one payment per 12 months), Rate Lock (hold your offer 30 days) and Top-Up Draw (re-borrow up to 25% after six on-time payments). Available features are shown on each offer." },
  { question: "Are FundLine's lenders licensed?", answerHtml: "Yes. Every lender in the network is a licensed bank, credit union or state-licensed commercial lender. FundLine Capital is not a lender and does not make credit decisions; the lender you choose issues the agreement and services the loan." },
];

export const INDUSTRIES = {
  heading: "Industries That Rely on Term Loans",
  pills: [
    { label: "Construction", href: "/industry/construction" },
    { label: "Restaurants", href: "/industry/restaurants" },
    { label: "Healthcare", href: "/industry/healthcare" },
    { label: "Retail", href: "/industry/retail" },
    { label: "Trucking", href: "/industry/trucking" },
    { label: "Manufacturing", href: "/industry/manufacturing" },
  ] satisfies IndustryPill[],
} as const;
