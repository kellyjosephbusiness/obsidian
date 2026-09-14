import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";

/**
 * FundLine Capital — industry pages rendered by the "detail" template.
 * Twelve industries; every figure, business name, reviewer and scenario is fictional.
 */

const INDUSTRY_ART = "/sites/corgi-insure-a0f7893c/shared/art/industry";

const APPLY = "/apply";
const BOOK_A_CALL = "/apply";

const FINEPRINT =
  "FundLine Capital is a commercial loan broker, not a lender. Offers are made by the lenders we work with.";

const ESTIMATOR_NOTE =
  "Illustrative only. Your rate, term and payment are set by the lender whose offer you accept.";

const STANDARD_FOOTNOTES: string[] = [
  "¹ Funding in as little as 24 hours applies to select products after you accept an offer. Timing varies by lender, product and how quickly documents are returned.",
  "² Submitting a FundLine application does not affect your personal or business credit score. A lender may run a hard inquiry before final approval and will disclose it first.",
  "³ Amounts, rates and terms are set by the lender and depend on time in business, revenue and credit profile. $5K to $5M is the range across the lenders we work with; not every business qualifies for every amount.",
];

interface EstimatorInput {
  max: number;
  step: number;
  initial: number;
  apr: number;
  termMonths: number;
}

function estimator(input: EstimatorInput): DetailPageContent["hero"]["estimator"] {
  return {
    title: "How much do you need?",
    label: "Funding amount",
    min: 5000,
    max: input.max,
    step: input.step,
    initial: input.initial,
    apr: input.apr,
    termMonths: input.termMonths,
    cta: { label: "Apply now", href: APPLY },
    note: ESTIMATOR_NOTE,
  };
}

function breadcrumb(name: string): DetailPageContent["breadcrumb"] {
  return [{ label: "Home", href: "/" }, { label: "Industries", href: "/loan-types" }, { label: name }];
}

const REVIEW_SCORE = {
  score: "4.8",
  scoreLabel: "Excellent",
  countLabel: "Based on 12,480 reviews",
} as const;

/* ------------------------------------------------------------------ */
/* AI & Software                                                        */
/* ------------------------------------------------------------------ */

const AI: DetailPageContent = {
  slug: "ai",
  kind: "industry",
  name: "AI & Software",
  icon: "smart_toy",
  art: `${INDUSTRY_ART}/ai.png`,
  meta: {
    title: "Funding for AI & Software Companies | FundLine Capital",
    description:
      "Lines of credit, equipment financing and invoice financing for AI and software companies. One application, offers from lenders that read contract revenue and compute spend.",
  },
  breadcrumb: breadcrumb("AI & Software"),
  hero: {
    headingLine1: "Funding for AI,",
    headingLine2: "sized to compute.",
    accentLine2: true,
    sub: "GPU reservations, cloud commitments and enterprise pilots that pay on net-90 all land before the revenue does. One 15-minute application, and we shop it to the lenders we work with that read contract revenue, with funding in as little as 24 hours.¹ No impact to your credit score to apply.²",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 2000000, step: 5000, initial: 250000, apr: 11.9, termMonths: 36 }),
  },
  stat: {
    value: "Net-90",
    label: "is normal on an enterprise pilot",
    blurb: "A six-figure pilot that pays in 90 days is a win on paper and a gap in the bank. The right facility turns the signed contract into cash this week.",
  },
  features: {
    headingLine1: "Capital for compute,",
    headingLine2: "contracts and the team that ships",
    sub: "Software companies do not have inventory or trucks. They have signed contracts, usage revenue and a cloud bill that arrives on the first of the month. We match the product to that pattern.",
    cards: [
      {
        icon: "precision_manufacturing",
        title: "Hardware and reserved compute",
        body: "On-prem GPU servers and networking qualify for equipment financing secured by the hardware. Reserved cloud capacity is funded from a line of credit or a term loan sized to the commitment schedule.",
      },
      {
        icon: "receipt_long",
        title: "Pilots and annual contracts",
        body: "Invoice financing advances up to 85 percent of a signed enterprise invoice within days, so a net-90 pilot pays for its own deployment team.",
      },
      {
        icon: "trending_up",
        title: "Hiring ahead of ARR",
        body: "A 24- to 36-month term loan funds the engineers and sellers you need before recurring revenue catches up, without repricing the company in a bridge round.",
      },
    ],
  },
  callout: {
    icon: "description",
    heading: "Contract revenue is still revenue",
    boldLead: "Lumpy, contract-based income is normal for an AI company, and several of the lenders we work with underwrite specifically against it.",
    body: "Bring signed customer agreements, usage-billing reports and bank statements. A clear list of who owes you what, and when, is the single strongest thing a software company can put in front of a lender.",
    cta: { label: "Read: getting ready to borrow", href: "/guides/getting-ready-to-borrow" },
  },
  steps: {
    heading: "How AI and software companies get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, three to six months of bank statements and your key customer contracts. Connect your billing tool to speed things up.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fit a software business and lay the offers side by side: amount, rate, term and any covenants.",
      },
      {
        title: "Fund the build",
        body: "Accept the offer that fits. Lines of credit and invoice financing can fund in as little as 24 hours; equipment loans take a few days for the hardware quote.",
      },
    ],
    mock: {
      businessName: "Lattice Signal Labs",
      availableLabel: "Available to draw",
      available: "$312,500",
      limit: "$400,000",
      balanceLabel: "Outstanding balance",
      balance: "$87,500",
      primaryAction: "Draw funds",
      rows: [
        { label: "GPU reservation, Q4", value: "$60,000" },
        { label: "Cloud commitment", value: "$27,500" },
        { label: "Next payment", value: "$4,120 on Oct 1" },
        { label: "Illustrative rate", value: "11.9% APR" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who has",
    headingLine2: "funded an AI team before.",
    body: "Our advisors have placed compute lines, pilot invoices and hiring loans for software companies at every stage from seed to Series C. Bring your ARR and your cloud bill; we will tell you which products fit before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What software founders say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Compute line in four days",
        body: "We needed a $250K line before a GPU reservation deadline. FundLine had three offers in front of us in four days. No warrants, no drama.",
        author: "Priya D.",
      },
      {
        title: "They understood usage billing",
        body: "Two banks told us our revenue was too lumpy. FundLine found a lender that reads usage reports and sized the line off contracted ARR.",
        author: "Marcus T.",
      },
      {
        title: "Pilot invoice, paid Tuesday",
        body: "A net-90 pilot became cash in three days with invoice financing. Our deployment team shipped on time and the customer never knew.",
        author: "J. Okafor",
      },
      {
        title: "Clear about the trade-offs",
        body: "The advisor walked us through why a term loan beat a revenue-based line for our hiring plan. Straight answers, no upsell.",
        author: "Elena V.",
      },
      {
        title: "Hardware financed, runway intact",
        body: "Financed two GPU servers over 48 months instead of writing a $180K check. Our next round is happening on our terms, not the cloud bill's.",
        author: "Sam H.",
      },
      {
        title: "No credit hit to look",
        body: "Applying did not touch our founders' credit. We saw real offers before anything was pulled, which is not how our last broker worked.",
        author: "Wei L.",
      },
    ],
  },
  faq: {
    heading: "AI and software funding questions",
    items: [
      {
        question: "What financing does an AI or software company usually qualify for?",
        answer:
          "Most start with a business line of credit for compute and cloud spend and a business credit card for tooling. Companies with signed contracts add invoice financing, and on-prem hardware qualifies for equipment financing. FundLine shops one application to the lenders we work with that fit a software business.",
      },
      {
        question: "Can we finance GPUs and cloud commitments?",
        answer:
          "Yes. Purchased hardware such as GPU servers and networking gear can be financed with an equipment loan secured by the hardware itself. Reserved cloud capacity and multi-year compute commitments are usually funded from a line of credit or a term loan sized to the commitment schedule.",
      },
      {
        question: "Does contract or usage-based revenue count?",
        answer:
          "It does. Lenders look at signed enterprise contracts, annual recurring revenue, usage-billing reports and bank deposits together. Lumpy revenue is expected for a software company, and several lenders we work with underwrite specifically against it.",
      },
      {
        question: "How much can a software company borrow?",
        answer:
          "Lines of credit for software companies commonly run from $50K to $2M depending on ARR and cash on hand. Invoice financing is sized to the invoices you hold, and equipment loans to the hardware quote. Larger growth loans are available to companies with strong retention and investor backing.",
      },
      {
        question: "Do we need to be profitable?",
        answer:
          "No. Many software companies invest ahead of profit. Lenders weigh time in business, monthly revenue, cash on hand, runway and the quality of your customer contracts. Being pre-profit narrows the options and may reduce the amount, but rarely closes the door.",
      },
      {
        question: "Will debt complicate our next equity round?",
        answer:
          "Usually not. Investors commonly see a right-sized line as a sign of financial discipline. Look for offers without warrants or restrictive covenants; every offer's terms are disclosed before you accept, and we flag anything that could trip a future raise.",
      },
      {
        question: "How fast can we get funded?",
        answer:
          "The application takes about 15 minutes. Lines of credit and invoice financing typically return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Equipment and larger term loans take longer for quotes and diligence.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, basic company details and, for larger amounts, a recent P&L, an ARR or usage report and copies of key customer contracts. A cap table helps for growth-stage requests.",
      },
      {
        question: "Can the funds go toward foundation-model API spend or data licensing?",
        answer:
          "Yes. Working-capital products are use-agnostic, so API spend, licensing and data acquisition all qualify. Equipment financing is limited to physical hardware, and SBA loans have their own eligible-use rules.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "credit_score",
      heading: "Business line of credit",
      body: "Draw for compute and cloud spend, repay as usage revenue lands, and pay interest only on what you use.",
      cta: { label: "Explore lines of credit", href: "/line-of-credit" },
      tone: "light",
    },
    {
      icon: "receipt_long",
      heading: "Invoice financing",
      body: "Turn a signed net-90 pilot into cash within days so the deployment ships before the customer pays.",
      cta: { label: "Explore invoice financing", href: "/invoice-financing" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for software founders",
    sub: "How lenders read a software company, and how to get funded without giving up a slice of the cap table.",
    cards: [
      {
        tag: "Guide",
        title: "Getting ready to borrow",
        body: "The document checklist and the numbers a lender wants from a contract-revenue business.",
        href: "/guides/getting-ready-to-borrow",
        icon: "description",
      },
      {
        tag: "Blog",
        title: "What funding costs at each stage",
        body: "Seed to Series B: which products open up, and what they cost as ARR grows.",
        href: "/blog/funding-cost-by-stage",
        icon: "trending_up",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Model a compute line or a hiring loan against your ARR before you apply.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to fund",
    headingLine2: "the next training run?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: STANDARD_FOOTNOTES,
};

/* ------------------------------------------------------------------ */
/* Construction                                                         */
/* ------------------------------------------------------------------ */

const CONSTRUCTION: DetailPageContent = {
  slug: "construction",
  kind: "industry",
  name: "Construction",
  icon: "construction",
  art: `${INDUSTRY_ART}/construction.png`,
  meta: {
    title: "Funding for Construction Companies | FundLine Capital",
    description:
      "Lines of credit, equipment financing and invoice financing for contractors and builders. One application, offers from lenders that understand progress billing and retainage.",
  },
  breadcrumb: breadcrumb("Construction"),
  hero: {
    headingLine1: "Funding for builders,",
    headingLine2: "paced to the job.",
    accentLine2: true,
    sub: "Materials, payroll and equipment are due weeks before the first draw clears. One application, shopped to the lenders we work with that read a schedule of values, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 2000000, step: 5000, initial: 150000, apr: 10.9, termMonths: 48 }),
  },
  stat: {
    value: "10%",
    label: "of every invoice held as retainage",
    blurb: "Owners hold back 5 to 10 percent until closeout, on every pay application, on every job. Financing bridges the held cash so the next project mobilizes on time.",
  },
  features: {
    headingLine1: "Capital for draws,",
    headingLine2: "retainage and bigger bids",
    sub: "Contractors get paid in monthly pay applications, minus retainage, 30 to 75 days after the work is done. Every product we place for a builder is chosen around that calendar.",
    cards: [
      {
        icon: "credit_score",
        title: "A line for mobilization",
        body: "Draw for lumber, steel, permits and the first two weeks of payroll, then repay as each monthly draw is approved. Interest only on the days the balance is out.",
      },
      {
        icon: "precision_manufacturing",
        title: "Equipment that wins bids",
        body: "An excavator, a lift or a second truck lets you self-perform work you used to sub out. Equipment loans of 36 to 84 months are secured by the machine itself, new or used.",
      },
      {
        icon: "receipt_long",
        title: "Cash against pay applications",
        body: "Invoice financing advances most of an approved pay app within days. The lender is repaid when the owner or general contractor pays, and your crew is paid Friday.",
      },
    ],
  },
  callout: {
    icon: "description",
    heading: "Bring the backlog, not just the bank statements",
    boldLead: "A signed backlog and a work-in-progress schedule tell a lender more about a contractor than twelve months of deposits.",
    body: "Lenders that fund builders expect revenue to follow the project calendar. Show them the contracts in hand, the percent complete on each and how prior jobs closed out, and the conversation shifts from whether you qualify to how much.",
    cta: { label: "Read: getting ready to borrow", href: "/guides/getting-ready-to-borrow" },
  },
  steps: {
    heading: "How contractors get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, three to six months of bank statements and, for larger amounts, your backlog and a recent P&L.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund construction and put the offers side by side, including draw terms and equipment collateral.",
      },
      {
        title: "Mobilize",
        body: "Accept the offer that fits. Lines and invoice financing can fund in as little as 24 hours; equipment loans take a few days for the quote and title.",
      },
    ],
    mock: {
      businessName: "Ridgeback Framing Co.",
      availableLabel: "Available to draw",
      available: "$134,000",
      limit: "$250,000",
      balanceLabel: "Outstanding balance",
      balance: "$116,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Lumber package, Lot 14", value: "$68,000" },
        { label: "Payroll, weeks 1 to 2", value: "$48,000" },
        { label: "Next payment", value: "$5,240 on Oct 15" },
        { label: "Draw #3 expected", value: "Oct 28" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who can",
    headingLine2: "read a schedule of values.",
    body: "Our advisors have placed mobilization lines, equipment loans and retainage bridges for framers, site contractors and GCs. Bring your backlog and your slowest-paying owner; we will tell you which products fit before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What contractors say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Lumber ordered before the draw",
        body: "Our $180K line covered the lumber and two payrolls on a 40-unit job. Repaid it as each draw cleared. Exactly what we needed.",
        author: "Dale R.",
      },
      {
        title: "Excavator financed in a week",
        body: "Used excavator, 60 months, payment less than the rental. FundLine had the offer and the title work done in seven days.",
        author: "Tomas G.",
      },
      {
        title: "They knew what retainage was",
        body: "First broker who did not ask me to explain a pay app. Found a lender that advances on approved applications. Cash in three days.",
        author: "K. Whitfield",
      },
      {
        title: "Bonding capacity, finally",
        body: "The SBA loan added $500K of working capital and we qualified for public work twice our old size. Took eight weeks, worth every one.",
        author: "Marisol A.",
      },
      {
        title: "Change orders, covered",
        body: "Six approved change orders and the owner would not pay until the next app. The line kept the crew whole. No missed Fridays.",
        author: "Ben C.",
      },
      {
        title: "Honest about timing",
        body: "The advisor told me the equipment loan would take a week, not a day. It took six days. I would rather hear it straight.",
        author: "Reggie P.",
      },
    ],
  },
  faq: {
    heading: "Construction funding questions",
    items: [
      {
        question: "What financing do construction companies usually qualify for?",
        answer:
          "Most contractors start with a business line of credit for materials and payroll and equipment financing for machines and trucks. Established firms add term loans and SBA 7(a) loans for bonding capacity and growth. FundLine shops one application to the lenders we work with that fund construction.",
      },
      {
        question: "Can we finance against unpaid pay applications or retainage?",
        answer:
          "Yes. Invoice financing advances most of the value of approved pay applications, and several lenders we work with understand retainage schedules. You get the cash now and the lender is repaid when the owner or general contractor pays.",
      },
      {
        question: "Does lumpy, project-based revenue hurt our chances?",
        answer:
          "Not on its own. Lenders that fund contractors expect revenue to follow the project calendar. They look at your backlog, signed contracts, bank deposits over the last 6 to 12 months and how prior jobs closed out.",
      },
      {
        question: "How much do contractors typically borrow?",
        answer:
          "Mobilization lines commonly run from $50K to $500K depending on annual revenue. Equipment loans are sized to the machine, often $40K to $400K. SBA 7(a) loans for bonding and growth run larger, up to $5M through the lenders we work with.",
      },
      {
        question: "Can equipment financing cover used machines?",
        answer:
          "Usually. Most equipment lenders finance used excavators, loaders, lifts and trucks, with terms that depend on age and hours. The equipment secures the loan, so your other business assets stay free.",
      },
      {
        question: "How fast can a contractor get funded?",
        answer:
          "The application takes about 15 minutes. Lines of credit and invoice financing often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Equipment and SBA loans take longer for appraisals and documentation.",
      },
      {
        question: "Does a slow-paying owner affect our application?",
        answer:
          "It can help. Invoice financing is underwritten on the strength of who owes you, so a large, creditworthy owner or GC with a slow process is often an ideal receivable to advance against. Bring the contract and the aging report.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, basic company details and, for larger amounts, a recent P&L, a backlog or work-in-progress schedule and details of any existing equipment loans. Your license and bonding information help for SBA requests.",
      },
      {
        question: "Can a new contractor with under two years in business qualify?",
        answer:
          "Often, yes. Equipment financing depends heavily on the machine and the owner's credit, and several lenders fund businesses under two years old at smaller amounts. Options widen after 12 months of deposits and a completed job or two.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "credit_score",
      heading: "Business line of credit",
      body: "Draw for materials and payroll before the first draw, repay as each pay application clears.",
      cta: { label: "Explore lines of credit", href: "/line-of-credit" },
      tone: "light",
    },
    {
      icon: "precision_manufacturing",
      heading: "Equipment financing",
      body: "Own the excavator, the lift or the second truck on 36 to 84 months, secured by the machine itself.",
      cta: { label: "Explore equipment financing", href: "/equipment-financing" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for builders",
    sub: "How lenders read a contractor, and how to get funded between pay applications.",
    cards: [
      {
        tag: "Guide",
        title: "Getting ready to borrow",
        body: "The checklist: bank statements, backlog, WIP schedule and what a lender does with each.",
        href: "/guides/getting-ready-to-borrow",
        icon: "description",
      },
      {
        tag: "Blog",
        title: "Line of credit vs. term loan for seasonal cash flow",
        body: "When a revolving line beats a fixed payment, and when it is the other way around.",
        href: "/blog/line-of-credit-vs-term-loan-seasonal-cash-flow",
        icon: "sync",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Compare an equipment payment to the rental invoice you are paying today.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to mobilize",
    headingLine2: "before the first draw?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: [
    ...STANDARD_FOOTNOTES,
    "Advance rates on pay applications and retainage vary by lender and by the creditworthiness of the owner or general contractor.",
  ],
};

/* ------------------------------------------------------------------ */
/* Healthcare                                                           */
/* ------------------------------------------------------------------ */

const HEALTHCARE: DetailPageContent = {
  slug: "healthcare",
  kind: "industry",
  name: "Healthcare",
  icon: "medical_services",
  art: `${INDUSTRY_ART}/healthcare.png`,
  meta: {
    title: "Funding for Healthcare Practices | FundLine Capital",
    description:
      "Practice loans, equipment financing and lines of credit for clinics, dental offices and health providers. One application, offers from lenders that understand reimbursement timing.",
  },
  breadcrumb: breadcrumb("Healthcare"),
  hero: {
    headingLine1: "Funding for clinics,",
    headingLine2: "timed to payers.",
    accentLine2: true,
    sub: "The care is delivered today and the payer settles in 45 days. One application, shopped to the lenders we work with that understand how practices get paid, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 1500000, step: 5000, initial: 120000, apr: 9.9, termMonths: 60 }),
  },
  stat: {
    value: "45 days",
    label: "typical wait for a payer to settle",
    blurb: "Payroll runs every two weeks whether or not the reimbursement has arrived. A line sized to your receivables keeps the front desk staffed while the money catches up.",
  },
  features: {
    headingLine1: "Capital for reimbursement gaps,",
    headingLine2: "equipment and the second location",
    sub: "Practices are steady businesses with a slow payment cycle and expensive equipment. Lenders like that profile when it is presented properly, and we know how to present it.",
    cards: [
      {
        icon: "credit_score",
        title: "A line for the payer lag",
        body: "Draw when reimbursements slide and repay when they settle. Practices with steady patient volume qualify for lines from $25K to $500K, with interest only on what is drawn.",
      },
      {
        icon: "medical_services",
        title: "Equipment that keeps procedures in-house",
        body: "Imaging units, chairs, lasers and lab devices qualify for 48- to 84-month equipment loans secured by the device. Installation and training can often be rolled in.",
      },
      {
        icon: "apartment",
        title: "Buy-ins and new offices",
        body: "SBA 7(a) loans up to $5M fund partner buy-ins, second clinics and build-outs over 10 years, with a working-capital cushion for the opening months.",
      },
    ],
  },
  callout: {
    icon: "verified_user",
    heading: "Credentials count for newer practices",
    boldLead: "Lenders that fund healthcare weigh the owner's license, specialty and projected patient volume heavily, so a practice under two years old still has real options.",
    body: "Bring your production or collections report, payer mix and license details. A dentist or physician with a clean credit profile and a full schedule can often qualify before the practice has a full year of deposits.",
    cta: { label: "Read: getting ready to borrow", href: "/guides/getting-ready-to-borrow" },
  },
  steps: {
    heading: "How practices get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Practice details, three to six months of bank statements and, for larger amounts, a production report and a recent P&L.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund healthcare and lay out the offers: amount, rate, term and what the equipment lender needs from the vendor.",
      },
      {
        title: "Fund the practice",
        body: "Accept the offer that fits. Lines can fund in as little as 24 hours; equipment loans take a few days for the vendor quote, SBA loans several weeks.",
      },
    ],
    mock: {
      businessName: "Harborlight Dental Group",
      availableLabel: "Available to draw",
      available: "$96,000",
      limit: "$150,000",
      balanceLabel: "Outstanding balance",
      balance: "$54,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Payroll, Sep 15", value: "$38,000" },
        { label: "Lab and supply invoices", value: "$16,000" },
        { label: "Next payment", value: "$2,310 on Oct 1" },
        { label: "Reimbursements pending", value: "$71,400" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who knows",
    headingLine2: "how a practice gets paid.",
    body: "Our advisors have placed equipment loans, reimbursement lines and buy-in financing for dental, medical, physical therapy and veterinary practices. Bring your payer mix and your equipment wish list; we will tell you what fits before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What practice owners say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Scanner financed, revenue in-house",
        body: "A $120K imaging unit over 72 months. The in-house procedures paid the loan twice over in year one. FundLine handled the vendor paperwork.",
        author: "Dr. Anika S.",
      },
      {
        title: "Payroll never noticed the delay",
        body: "A payer changed systems and $95K slid a month. The line covered two payrolls and we repaid it the week the reimbursements landed.",
        author: "Dr. Luis M.",
      },
      {
        title: "Bought into the practice",
        body: "The retiring partner gave me 90 days. FundLine had an SBA lender engaged in a week and we closed with two weeks to spare.",
        author: "Dr. Hannah R.",
      },
      {
        title: "Second clinic, funded",
        body: "A $650K SBA loan for the build-out and a working-capital cushion. Our advisor knew the eligible-use rules cold.",
        author: "Dr. Omar K.",
      },
      {
        title: "New practice, real options",
        body: "Eleven months in and two banks said no. FundLine found a lender that weighed my license and schedule. Line approved in three days.",
        author: "Dr. Jenna P.",
      },
      {
        title: "No games with the credit pull",
        body: "Saw the offers before any hard inquiry. The lender disclosed the pull before I accepted, exactly as promised.",
        author: "T. Nguyen, DDS",
      },
    ],
  },
  faq: {
    heading: "Healthcare funding questions",
    items: [
      {
        question: "What financing do healthcare practices usually qualify for?",
        answer:
          "Practices with steady patient volume tend to qualify for a business line of credit, equipment financing and term loans. Practices with a strong history are often good SBA 7(a) candidates for buy-ins and second locations. FundLine shops one application to the lenders we work with that fund healthcare.",
      },
      {
        question: "Can we borrow against outstanding reimbursements?",
        answer:
          "Yes. Several lenders we work with advance funds against approved reimbursements and other receivables, turning a 45-day wait into cash this week. Terms depend on your payer mix and historical collection rate.",
      },
      {
        question: "Does a new practice with limited history qualify?",
        answer:
          "Often, yes. Lenders weigh the owner's credentials, personal credit and projected patient volume for newer practices, and products for offices under two years old are available. Options widen after 12 months of deposits.",
      },
      {
        question: "How much do practices typically borrow?",
        answer:
          "Reimbursement lines commonly run $25K to $500K. Equipment loans match the device, often $30K to $300K. Buy-ins and second locations through SBA 7(a) run $250K to $5M through the lenders we work with.",
      },
      {
        question: "Can we finance software and technology, not just equipment?",
        answer:
          "Yes. Practice-management software, electronic records and telehealth setups are usually funded from a line of credit or a term loan since they are not physical assets. Chairs, imaging and lab devices qualify for equipment financing.",
      },
      {
        question: "How fast can a practice get funded?",
        answer:
          "The application takes about 15 minutes. Lines of credit typically return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Equipment loans take a few days for the vendor quote; SBA loans take several weeks.",
      },
      {
        question: "Can we finance a partner buy-in or a practice acquisition?",
        answer:
          "Yes. SBA 7(a) loans and conventional term loans both fund buy-ins and acquisitions, typically over 7 to 10 years. Lenders want the practice's financials, the purchase agreement and a valuation. Start early; these take six to ten weeks.",
      },
      {
        question: "Does applying affect my personal credit?",
        answer:
          "Submitting a FundLine application does not impact your personal or business credit score. Accepting a specific offer may involve a hard inquiry, which the lender discloses before you proceed.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, basic practice details and, for larger amounts, a recent P&L, a production or collections report, your payer mix and professional license details. Equipment requests need the vendor quote.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "medical_services",
      heading: "Equipment financing",
      body: "Imaging, chairs and lab devices on 48 to 84 months, secured by the equipment, with installation rolled in.",
      cta: { label: "Explore equipment financing", href: "/equipment-financing" },
      tone: "light",
    },
    {
      icon: "account_balance",
      heading: "SBA loans",
      body: "Ten-year financing for buy-ins, second clinics and build-outs, up to $5M through the lenders we work with.",
      cta: { label: "Explore SBA loans", href: "/sba-loans" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for practice owners",
    sub: "How lenders read a practice, and how to fund equipment and growth without draining reserves.",
    cards: [
      {
        tag: "Guide",
        title: "Getting ready to borrow",
        body: "The checklist for a practice: statements, production reports, payer mix and license details.",
        href: "/guides/getting-ready-to-borrow",
        icon: "description",
      },
      {
        tag: "Guide",
        title: "Business financing, explained",
        body: "Every product from a line of credit to SBA 7(a), and which fits a practice at each stage.",
        href: "/guides/business-financing",
        icon: "account_balance",
      },
      {
        tag: "Blog",
        title: "Preparing bank statements for a faster decision",
        body: "What underwriters look for in six months of deposits, and how to present a slow month.",
        href: "/blog/how-to-prepare-bank-statements-for-a-faster-credit-decision",
        icon: "receipt_long",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to fund",
    headingLine2: "the next chair?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: STANDARD_FOOTNOTES,
};

/* ------------------------------------------------------------------ */
/* Retail                                                               */
/* ------------------------------------------------------------------ */

const RETAIL: DetailPageContent = {
  slug: "retail",
  kind: "industry",
  name: "Retail",
  icon: "storefront",
  art: `${INDUSTRY_ART}/retail.png`,
  meta: {
    title: "Funding for Retail Businesses | FundLine Capital",
    description:
      "Inventory lines, term loans and business credit cards for shops and retail chains. One application, offers from lenders that understand seasonal buying and slow months.",
  },
  breadcrumb: breadcrumb("Retail"),
  hero: {
    headingLine1: "Funding for retail,",
    headingLine2: "stocked for season.",
    accentLine2: true,
    sub: "Holiday inventory is ordered in July and paid for in September, long before the register rings. One application, shopped to the lenders we work with that fund retailers, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 750000, step: 5000, initial: 75000, apr: 12.5, termMonths: 24 }),
  },
  stat: {
    value: "18%",
    label: "supplier discount for paying in ten days",
    blurb: "A short-term loan that costs 4 percent to take an 18 percent early-pay discount is not debt, it is margin. That is the kind of math a retail line is for.",
  },
  features: {
    headingLine1: "Capital for the buy,",
    headingLine2: "the slow months and the refresh",
    sub: "Retail cash flow is a calendar: buy early, sell late, carry fixed costs in between. We match products to the months, not to an average.",
    cards: [
      {
        icon: "inventory_2",
        title: "An inventory line",
        body: "Draw in September for the holiday buy, repay in January when it sells through. Revolving lines from $25K to $500K, with interest only on the weeks the balance is out.",
      },
      {
        icon: "point_of_sale",
        title: "Repay from card sales",
        body: "Merchant cash advances and some short-term loans are repaid as a small share of daily card receipts, so payments shrink in February and grow in December.",
      },
      {
        icon: "storefront",
        title: "Refreshes and second doors",
        body: "A 24- to 60-month term loan funds new fixtures, a modern checkout or a second location and spreads the cost across the years it lifts sales per square foot.",
      },
    ],
  },
  callout: {
    icon: "point_of_sale",
    heading: "Online sales count",
    boldLead: "Lenders read total deposits across your bank, your card processor and your online storefront, so a shop that sells both ways qualifies on the combined figure.",
    body: "Connecting your processor and storefront during the application usually speeds up the decision. Bring a summary of inventory on hand as well; for a retailer it is the collateral lenders care about most.",
    cta: { label: "Read: getting ready to borrow", href: "/guides/getting-ready-to-borrow" },
  },
  steps: {
    heading: "How retailers get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, three to six months of bank and card-processing statements and, for larger amounts, a recent P&L.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund retail and lay out the offers, including total cost, so a card-sales repayment can be compared with a line.",
      },
      {
        title: "Stock the shelves",
        body: "Accept the offer that fits. Lines and short-term loans can fund in as little as 24 hours after acceptance, in time for the supplier's deadline.",
      },
    ],
    mock: {
      businessName: "Juniper & Vine Home Goods",
      availableLabel: "Available to draw",
      available: "$40,000",
      limit: "$150,000",
      balanceLabel: "Outstanding balance",
      balance: "$110,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Holiday order, deposit", value: "$62,000" },
        { label: "Holiday order, balance", value: "$48,000" },
        { label: "Next payment", value: "$4,780 on Oct 1" },
        { label: "Planned payoff", value: "Jan 12" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who knows",
    headingLine2: "a season is bought early.",
    body: "Our advisors have placed inventory lines, remodel loans and card-sales advances for boutiques, hardware stores and multi-location chains. Bring your seasonal calendar and your biggest supplier's terms; we will tell you what fits.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What retailers say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Holiday buy, funded in September",
        body: "Drew $110K for the fall order, paid it off the second week of January. Best holiday season we have had, and no supplier waited.",
        author: "Colleen B.",
      },
      {
        title: "Took the early-pay discount",
        body: "An 18 percent discount on a full container beat the cost of a short loan three times over. FundLine funded it in two days.",
        author: "Raj P.",
      },
      {
        title: "Remodel paid for itself",
        body: "A 36-month term loan for $75K of fixtures and lighting. Sales per square foot up 22 percent the following year.",
        author: "M. Delacroix",
      },
      {
        title: "They counted my online sales",
        body: "My bank only looked at in-store deposits. FundLine's lender read the storefront payouts too and doubled the line.",
        author: "Aisha W.",
      },
      {
        title: "Showed me the real cost",
        body: "The advisor put the card-sales advance next to a line of credit with total cost for each. I picked the line. No pressure either way.",
        author: "Greg F.",
      },
      {
        title: "February payroll, covered",
        body: "Slow months used to mean cutting hours. Now we draw a little in February and repay by April. The team stays intact.",
        author: "Linda O.",
      },
    ],
  },
  faq: {
    heading: "Retail funding questions",
    items: [
      {
        question: "What financing do retail businesses usually qualify for?",
        answer:
          "Most retailers start with a business line of credit for inventory and a business credit card for everyday spend. Established stores add term loans for remodels and new locations. FundLine shops one application to the lenders we work with that fund retail.",
      },
      {
        question: "Can we get funding that follows our seasonality?",
        answer:
          "Yes. A revolving line lets you draw before the season and repay after it, so you pay interest only on the weeks you use the money. Some lenders also offer repayment that flexes with daily card sales.",
      },
      {
        question: "Do online sales count toward our revenue?",
        answer:
          "They do. Lenders look at total deposits across your bank accounts, card processors and online storefronts. A store that sells both in person and online can often qualify on the combined figure.",
      },
      {
        question: "How much do retailers typically borrow?",
        answer:
          "Inventory lines commonly run $25K to $500K depending on annual sales and margins. Remodel and expansion term loans run $50K to $750K. Multi-location chains with strong history can go higher through the lenders we work with.",
      },
      {
        question: "Is a merchant cash advance a good idea for a shop?",
        answer:
          "Sometimes. Repaying from a share of daily card sales suits a store with strong card volume and a short need. It is usually more expensive than a line of credit, so compare the total cost side by side before you accept. We show both.",
      },
      {
        question: "How fast can a retailer get funded?",
        answer:
          "The application takes about 15 minutes. Lines of credit and short-term loans often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept.",
      },
      {
        question: "Can we finance a point-of-sale or inventory system?",
        answer:
          "Yes. Hardware such as terminals and scanners can qualify for equipment financing; software licenses and training are funded from a line or a term loan. Many retailers bundle the whole upgrade into one term loan.",
      },
      {
        question: "Does applying affect our credit score?",
        answer:
          "Submitting a FundLine application does not impact your personal or business credit score. Accepting a specific offer may involve a hard inquiry, which the lender discloses before you proceed.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, recent card-processing statements, basic company details and, for larger amounts, a recent P&L and a summary of inventory on hand. Your lease helps for expansion requests.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "credit_score",
      heading: "Business line of credit",
      body: "Draw for the seasonal buy, repay when it sells through, and pay interest only on the weeks you use it.",
      cta: { label: "Explore lines of credit", href: "/line-of-credit" },
      tone: "light",
    },
    {
      icon: "credit_card",
      heading: "Business credit card",
      body: "Everyday spend, supplier deposits and a float on purchases, with rewards on what the store buys anyway.",
      cta: { label: "Explore business credit cards", href: "/business-credit-card" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for shop owners",
    sub: "How to fund a season, take a supplier discount and open the second door without guessing at the cost.",
    cards: [
      {
        tag: "Blog",
        title: "Line of credit vs. term loan for seasonal cash flow",
        body: "The clearest way to decide between a revolving line and a fixed payment for a seasonal store.",
        href: "/blog/line-of-credit-vs-term-loan-seasonal-cash-flow",
        icon: "sync",
      },
      {
        tag: "Guide",
        title: "Building business credit",
        body: "How a card and a small line today become a bigger inventory line next season.",
        href: "/guides/business-credit",
        icon: "credit_score",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Price a supplier discount against the cost of the loan that takes it.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to stock",
    headingLine2: "the next season?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: STANDARD_FOOTNOTES,
};

/* ------------------------------------------------------------------ */
/* Restaurants                                                          */
/* ------------------------------------------------------------------ */

const RESTAURANTS: DetailPageContent = {
  slug: "restaurants",
  kind: "industry",
  name: "Restaurants",
  icon: "restaurant",
  art: `${INDUSTRY_ART}/restaurants.png`,
  meta: {
    title: "Funding for Restaurants | FundLine Capital",
    description:
      "Equipment financing, working capital and expansion loans for restaurants, cafes and bars. One application, offers from lenders that understand food costs, tips and slow Tuesdays.",
  },
  breadcrumb: breadcrumb("Restaurants"),
  hero: {
    headingLine1: "Funding for kitchens,",
    headingLine2: "ready for the rush.",
    accentLine2: true,
    sub: "A walk-in dies on a Friday, covers drop 40 percent in January, and the second location needs a build-out before the first table is seated. One application, shopped to the lenders we work with that fund food service, with funding in as little as 24 hours.¹ No impact to your credit score to apply.²",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 500000, step: 5000, initial: 40000, apr: 13.5, termMonths: 24 }),
  },
  stat: {
    value: "3 days",
    label: "to replace a failed walk-in with equipment financing",
    blurb: "A $28K cooler on a 48-month payment costs less than one weekend of lost service. The lenders we work with know that, and they move at kitchen speed.",
  },
  features: {
    headingLine1: "Capital for the kitchen,",
    headingLine2: "the slow season and the second door",
    sub: "Some banks avoid restaurants. Several of the lenders we work with specialize in them, and they read daily card sales and time in business, not the industry label.",
    cards: [
      {
        icon: "restaurant",
        title: "Equipment that cannot wait",
        body: "Ovens, coolers, hoods and espresso machines qualify for 36- to 60-month equipment loans, new or used, secured by the equipment. Same-week funding is common.",
      },
      {
        icon: "point_of_sale",
        title: "Repay from daily card sales",
        body: "Merchant cash advances and card-linked loans are repaid as a small share of each day's receipts, so payments shrink on a slow Tuesday and grow on a packed Saturday.",
      },
      {
        icon: "credit_score",
        title: "A line for the slow season",
        body: "Draw $20K to $150K in January to keep the full crew and repay it by April when patio season starts. Interest only on the weeks you use it.",
      },
    ],
  },
  callout: {
    icon: "calculate",
    heading: "Compare the total cost before you accept a card-sales advance",
    boldLead: "An advance repaid from daily receipts is fast and flexible, and it is usually more expensive than a line of credit for the same need.",
    body: "We put both in front of you with the total payback amount, not just the daily percentage. Plenty of operators choose the advance for a short, urgent need and the line for the slow season. The point is to choose on the numbers.",
    cta: { label: "Read: business financing, explained", href: "/guides/business-financing" },
  },
  steps: {
    heading: "How restaurants get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, three to six months of bank statements and recent card-processing statements. Your lease helps for expansion requests.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund food service and show every offer with its total cost, including any card-sales repayment.",
      },
      {
        title: "Fire the line",
        body: "Accept the offer that fits. Short-term loans and equipment financing often fund in as little as 24 hours after acceptance; SBA expansion loans take several weeks.",
      },
    ],
    mock: {
      businessName: "Copper Kettle Bistro",
      availableLabel: "Available to draw",
      available: "$55,000",
      limit: "$100,000",
      balanceLabel: "Outstanding balance",
      balance: "$45,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "January payroll", value: "$31,000" },
        { label: "Produce and protein invoices", value: "$14,000" },
        { label: "Next payment", value: "$2,050 on Feb 1" },
        { label: "Planned payoff", value: "Apr 15" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who has",
    headingLine2: "replaced a cooler fast.",
    body: "Our advisors have placed same-week equipment loans, slow-season lines and second-location SBA loans for cafes, bistros, bars and multi-unit groups. Bring your card statements and your lease; we will tell you what fits before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What operators say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Walk-in replaced by Thursday",
        body: "Cooler died Monday before a holiday weekend. FundLine had equipment financing approved Wednesday and the unit installed Thursday.",
        author: "Marco V.",
      },
      {
        title: "Kept the whole crew in January",
        body: "Drew $45K on the line in January, repaid it in April. Nobody lost hours. That alone was worth the call.",
        author: "Dana K.",
      },
      {
        title: "Second door, open",
        body: "A $350K SBA loan for build-out, equipment and three months of opening payroll. Eight weeks start to finish with an advisor who knew the rules.",
        author: "Theo A.",
      },
      {
        title: "Showed the real cost of the advance",
        body: "I was about to take a card-sales advance. The advisor showed me the total payback next to a line. Saved me about $9K.",
        author: "S. Ferreira",
      },
      {
        title: "Patio built before the first warm weekend",
        body: "Thirty more seats for six months a year. The $90K term loan funded in five days and the build finished on time.",
        author: "Nikki R.",
      },
      {
        title: "Banks said no, FundLine did not",
        body: "Two banks passed because of the word restaurant. FundLine found a lender that looks at daily card sales. Funded in two days.",
        author: "Paulo E.",
      },
    ],
  },
  faq: {
    heading: "Restaurant funding questions",
    items: [
      {
        question: "What financing do restaurants usually qualify for?",
        answer:
          "Restaurants with a year or more of sales typically qualify for a business line of credit, equipment financing and short-term loans. Established operators are strong candidates for SBA 7(a) loans on expansions. FundLine shops one application to the lenders we work with that fund food service.",
      },
      {
        question: "Are restaurants harder to fund than other businesses?",
        answer:
          "Some banks avoid the category, which is exactly why a broker helps. Several lenders we work with specialize in food service and look at daily card sales, time in business and how you handled past slow seasons rather than the industry label.",
      },
      {
        question: "Can we repay from daily card sales?",
        answer:
          "Yes. Merchant cash advances and some short-term loans are repaid as a small percentage of daily card receipts, so payments shrink on slow days. Compare the total cost against a line of credit before you accept; we show both.",
      },
      {
        question: "How much do restaurants typically borrow?",
        answer:
          "Equipment loans match the quote, often $10K to $150K. Slow-season lines run $20K to $150K. Second locations and major build-outs through SBA 7(a) run $150K to $500K and beyond through the lenders we work with.",
      },
      {
        question: "How fast can a restaurant get funded?",
        answer:
          "The application takes about 15 minutes. Short-term loans and equipment financing often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. SBA loans take several weeks.",
      },
      {
        question: "Can we finance used kitchen equipment?",
        answer:
          "Usually. Most equipment lenders finance used ovens, coolers, hoods and dishwashers from a dealer, with terms that depend on age and condition. The equipment secures the loan, so nothing else in the business is pledged.",
      },
      {
        question: "Can we finance a restaurant that has not opened yet?",
        answer:
          "It is possible. Products for businesses under two years old, equipment financing for the kitchen build-out and SBA loans with a solid business plan are the usual routes. Expect lenders to weigh the owner's credit and prior operating experience heavily.",
      },
      {
        question: "Do tips and cash sales count toward revenue?",
        answer:
          "Deposited cash counts; undeposited cash does not. Lenders read bank deposits and card-processing statements, so run cash through the account for at least three months before you apply. Tips paid out to staff are not revenue.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, recent card-processing statements, basic company details and, for larger amounts, a P&L and your lease. Equipment requests need the dealer quote.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "restaurant",
      heading: "Equipment financing",
      body: "Ovens, coolers and hoods on 36 to 60 months, secured by the equipment, often funded the same week.",
      cta: { label: "Explore equipment financing", href: "/equipment-financing" },
      tone: "light",
    },
    {
      icon: "point_of_sale",
      heading: "Merchant cash advance",
      body: "Fast capital repaid from a share of daily card sales, for the urgent need that cannot wait for a slow month to end.",
      cta: { label: "Explore merchant cash advances", href: "/merchant-cash-advance" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for operators",
    sub: "How to fund the kitchen, survive January and open the second door on the right terms.",
    cards: [
      {
        tag: "Guide",
        title: "Business financing, explained",
        body: "Every product from a card-sales advance to SBA 7(a), with the total cost of each spelled out.",
        href: "/guides/business-financing",
        icon: "account_balance",
      },
      {
        tag: "Blog",
        title: "Where business owners can accept an offer the same day",
        body: "Which products move at kitchen speed, and what to have ready so they do.",
        href: "/blog/where-owners-can-accept-a-funding-offer-the-same-day",
        icon: "bolt",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Compare a 48-month equipment payment to the revenue a working cooler brings back.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready before",
    headingLine2: "the next rush?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: [
    ...STANDARD_FOOTNOTES,
    "Merchant cash advances are a purchase of future receivables, not a loan. Total payback and the share of daily sales are set by the provider and disclosed before you accept.",
  ],
};

/* ------------------------------------------------------------------ */
/* Trucking                                                             */
/* ------------------------------------------------------------------ */

const TRUCKING: DetailPageContent = {
  slug: "trucking",
  kind: "industry",
  name: "Trucking",
  icon: "local_shipping",
  art: `${INDUSTRY_ART}/trucking.png`,
  meta: {
    title: "Funding for Trucking Companies | FundLine Capital",
    description:
      "Truck and trailer financing, freight invoice financing and fleet lines of credit for carriers and owner-operators. One application, offers from lenders that understand fuel, freight and slow-paying shippers.",
  },
  breadcrumb: breadcrumb("Trucking"),
  hero: {
    headingLine1: "Funding for trucking,",
    headingLine2: "built for the haul.",
    accentLine2: true,
    sub: "The load is delivered today and the shipper pays in 45 days, while fuel, tolls and driver pay are due this week. One application, shopped to the lenders we work with that fund carriers, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 750000, step: 5000, initial: 95000, apr: 11.5, termMonths: 48 }),
  },
  stat: {
    value: "90%",
    label: "of a delivered load advanced within two days",
    blurb: "Invoice financing turns freight you have already hauled into cash before the broker's check clears, so a net-60 shipper is good volume instead of a cash-flow problem.",
  },
  features: {
    headingLine1: "Capital for trucks,",
    headingLine2: "fuel and the 45-day wait",
    sub: "Carriers get paid last and pay first. Every product we place for a trucking company is chosen to close that gap or to add a unit that widens the lanes you can run.",
    cards: [
      {
        icon: "local_shipping",
        title: "Trucks and trailers",
        body: "New and used tractors, reefers and dry vans qualify for 36- to 72-month equipment loans secured by the unit. A dedicated lane often earns double the monthly payment.",
      },
      {
        icon: "receipt_long",
        title: "Freight invoice financing",
        body: "Advance up to 90 percent of delivered loads within two days. You keep the shipper relationship; the lender is repaid when the broker or shipper pays.",
      },
      {
        icon: "credit_score",
        title: "A fleet line for repairs and tires",
        body: "A $25K to $250K revolving line covers an engine rebuild or a fuel spike without missing a driver settlement. Draw a few times a year, repay from settlements.",
      },
    ],
  },
  callout: {
    icon: "sync",
    heading: "Invoice financing or factoring?",
    boldLead: "They solve the same problem. Factoring usually sells the invoice and the factor collects from your shipper; invoice financing advances against it while you keep the relationship.",
    body: "Compare fees, recourse terms and contract length before you sign anything, and watch for long lock-ins. We show both options with the true cost per load so an owner-operator can decide on the numbers, not the pitch.",
    cta: { label: "Read: business financing, explained", href: "/guides/business-financing" },
  },
  steps: {
    heading: "How carriers get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, operating authority, three to six months of bank statements and recent settlement statements. Equipment requests need the unit's specs and quote.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund carriers and lay out the offers, including advance rates on freight and down payments on units.",
      },
      {
        title: "Roll",
        body: "Accept the offer that fits. Invoice financing can fund in as little as 24 hours; equipment loans take a few extra days for the title and inspection.",
      },
    ],
    mock: {
      businessName: "Blue Ridge Haulers LLC",
      availableLabel: "Available to draw",
      available: "$108,000",
      limit: "$150,000",
      balanceLabel: "Outstanding balance",
      balance: "$42,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Engine rebuild, unit 4", value: "$22,000" },
        { label: "Tires and fuel card", value: "$20,000" },
        { label: "Next payment", value: "$1,910 on Oct 1" },
        { label: "Settlements pending", value: "$63,800" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who knows",
    headingLine2: "what net-60 does to cash.",
    body: "Our advisors have placed truck loans, freight advances and fleet lines for single-truck operators and 40-unit carriers. Bring your settlement statements and your slowest shipper; we will tell you which products fit before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What carriers say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Second truck, dedicated lane",
        body: "Financed a $95K used tractor over 48 months. The lane I got with two units earns more than double the payment.",
        author: "Darnell W.",
      },
      {
        title: "Fuel paid while the shipper takes 60",
        body: "A new shipper tendered $80K on net-60. Invoice financing advanced 90 percent in two days. Drivers and fuel covered, no stress.",
        author: "Yolanda M.",
      },
      {
        title: "Rebuild done, truck rolling",
        body: "Engine rebuild, $22K, shop wanted half up front. Drew it from the fleet line and repaid from the next three settlements.",
        author: "Curtis B.",
      },
      {
        title: "One truck, still qualified",
        body: "Owner-operator with one unit and a year of authority. Two lenders passed. FundLine found one that reads settlement statements.",
        author: "R. Salazar",
      },
      {
        title: "Explained factoring honestly",
        body: "I almost signed a two-year factoring contract. The advisor showed me invoice financing with no lock-in and a lower cost per load.",
        author: "Mike T.",
      },
      {
        title: "Title and inspection in six days",
        body: "Used reefer trailer, financed and titled in six days. They told me a week and beat it.",
        author: "Priya N.",
      },
    ],
  },
  faq: {
    heading: "Trucking funding questions",
    items: [
      {
        question: "What financing do trucking companies usually qualify for?",
        answer:
          "Most carriers start with equipment financing for trucks and trailers and invoice financing for delivered freight. Growing fleets add a line of credit for repairs and fuel. FundLine shops one application to the lenders we work with that fund carriers.",
      },
      {
        question: "Can an owner-operator with one truck qualify?",
        answer:
          "Yes. Several lenders we work with fund single-truck operations, weighing driving history, credit profile and settlement statements. Invoice financing in particular depends more on who owes you than on the size of your fleet.",
      },
      {
        question: "Do you finance used trucks and trailers?",
        answer:
          "Most equipment lenders do, with terms that depend on the age and mileage of the unit. The truck itself secures the loan. Expect shorter terms and a larger down payment on older equipment, often 10 to 20 percent.",
      },
      {
        question: "How much do carriers typically borrow?",
        answer:
          "Truck loans match the unit, commonly $40K to $180K per tractor. Freight advances are sized to the loads you have delivered. Fleet lines run $25K to $250K, and multi-unit carriers with strong history can go higher.",
      },
      {
        question: "How fast can a carrier get funded?",
        answer:
          "The application takes about 15 minutes. Invoice financing often returns offers within a day or two, and many lenders fund in as little as 24 hours after you accept. Equipment loans take a few extra days for the title and inspection.",
      },
      {
        question: "How is invoice financing different from factoring?",
        answer:
          "Both give you cash now for freight you have already delivered. Factoring typically sells the invoice outright and the factor collects from the shipper. Invoice financing advances against it while you keep the customer relationship. Compare fees, recourse terms and contract length before you accept.",
      },
      {
        question: "Does a fuel card count as debt on my application?",
        answer:
          "Lenders see it as a trade line, not a loan, but they will look at the balance and whether it is paid on time. A fuel card paid weekly with no carried balance helps your profile.",
      },
      {
        question: "Can we finance a truck before we have our own authority?",
        answer:
          "Sometimes. Owner-operators leased to a carrier can often finance a unit on the strength of the lease agreement and settlement history. Lenders will want the carrier's name, your settlement statements and a clean driving record.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, operating authority and registration details, recent settlement statements and, for equipment, the unit's specs and dealer quote. Invoice financing needs the rate confirmations and bills of lading for the loads you want to advance.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "local_shipping",
      heading: "Equipment financing",
      body: "Tractors, trailers and reefers on 36 to 72 months, new or used, secured by the unit.",
      cta: { label: "Explore equipment financing", href: "/equipment-financing" },
      tone: "light",
    },
    {
      icon: "receipt_long",
      heading: "Invoice financing",
      body: "Advance up to 90 percent of delivered loads within two days and keep the shipper relationship.",
      cta: { label: "Explore invoice financing", href: "/invoice-financing" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for carriers",
    sub: "How lenders read a trucking company, and how to add a unit or bridge a slow shipper without a lock-in.",
    cards: [
      {
        tag: "Guide",
        title: "Getting ready to borrow",
        body: "The checklist for a carrier: authority, settlement statements, bank deposits and the unit quote.",
        href: "/guides/getting-ready-to-borrow",
        icon: "description",
      },
      {
        tag: "Blog",
        title: "Lenders that still fund businesses under two years old",
        body: "Where a new authority can get a truck financed, and what the lender wants to see.",
        href: "/blog/which-online-lenders-still-fund-businesses-under-two-years-old",
        icon: "schedule",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Compare a 48-month truck payment to what a dedicated lane brings in.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to add",
    headingLine2: "the next unit?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: [
    ...STANDARD_FOOTNOTES,
    "Advance rates on freight invoices vary by lender and by the creditworthiness of the shipper or broker that owes the invoice.",
  ],
};

/* ------------------------------------------------------------------ */
/* Ecommerce                                                            */
/* ------------------------------------------------------------------ */

const ECOMMERCE: DetailPageContent = {
  slug: "ecommerce",
  kind: "industry",
  name: "Ecommerce",
  icon: "shopping_cart",
  art: `${INDUSTRY_ART}/ecommerce.png`,
  meta: {
    title: "Funding for Ecommerce Brands | FundLine Capital",
    description:
      "Inventory lines, working capital and growth loans for online sellers and DTC brands. One application, offers from lenders that read storefront payouts and ad spend.",
  },
  breadcrumb: breadcrumb("Ecommerce"),
  hero: {
    headingLine1: "Funding for sellers,",
    headingLine2: "sized to your PO.",
    accentLine2: true,
    sub: "The factory wants 50 percent at order and the balance before shipping, months before the first unit sells. One application, shopped to the lenders we work with that read sell-through and payouts, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 1000000, step: 5000, initial: 130000, apr: 12.9, termMonths: 24 }),
  },
  stat: {
    value: "14 days",
    label: "a typical payout hold on a selling channel",
    blurb: "Payouts arrive on the channel's clock and processors keep reserves. A line bridges the delay so a viral week becomes a restock, not a stockout.",
  },
  features: {
    headingLine1: "Capital for inventory,",
    headingLine2: "ads and payout timing",
    sub: "An online brand is a working-capital business: pay the factory, pay the ads, wait for the payout. Every product we place is chosen around that loop.",
    cards: [
      {
        icon: "inventory_2",
        title: "An inventory line",
        body: "Draw to fund a production run, repay over three to six months as units sell through. Lines from $25K to $1M sized to sell-through and margins, not square footage.",
      },
      {
        icon: "trending_up",
        title: "Working capital for ad spend",
        body: "When campaigns return four times their cost, the constraint is cash this week. Short-term loans and lines fund the spend while the return is there.",
      },
      {
        icon: "payments",
        title: "Bridging payouts and reserves",
        body: "A revolving line covers air freight, a 3PL move or a supplier deposit while the selling channel holds funds and the processor keeps its reserve.",
      },
    ],
  },
  callout: {
    icon: "shopping_cart",
    heading: "Connect the storefront and the processor",
    boldLead: "Lenders that fund online brands read payouts from selling channels and card processors alongside bank deposits, so connecting those accounts usually speeds up the decision.",
    body: "Bring your sell-through rate, gross margin and the purchase order you want to fund. Inventory-focused lenders underwrite on those three numbers, and some pay the supplier directly and are repaid as the inventory sells.",
    cta: { label: "Read: getting ready to borrow", href: "/guides/getting-ready-to-borrow" },
  },
  steps: {
    heading: "How online brands get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, three to six months of bank statements and storefront or channel payout reports. Connect your accounts to speed it up.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund ecommerce and lay out the offers: amount, cost, repayment cadence and whether the supplier is paid directly.",
      },
      {
        title: "Fund the run",
        body: "Accept the offer that fits. Lines and short-term loans can fund in as little as 24 hours after acceptance, before the factory's deposit deadline.",
      },
    ],
    mock: {
      businessName: "Meadowlark Skincare Co.",
      availableLabel: "Available to draw",
      available: "$70,000",
      limit: "$200,000",
      balanceLabel: "Outstanding balance",
      balance: "$130,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Production run, deposit", value: "$65,000" },
        { label: "Production run, balance", value: "$65,000" },
        { label: "Next payment", value: "$5,610 on Oct 1" },
        { label: "Channel payout pending", value: "$48,200" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who knows",
    headingLine2: "a healthy sell-through.",
    body: "Our advisors have placed inventory lines, ad-spend loans and supplier-paid financing for DTC brands and multi-channel sellers. Bring your margins, your sell-through and the next purchase order; we will tell you which products fit before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What online sellers say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Production run, funded",
        body: "Drew $130K for a run with 50 percent due at order. Repaid over four months as it sold through. The line was ready in three days.",
        author: "Simone L.",
      },
      {
        title: "Kept the ads on in November",
        body: "A $50K short-term loan added ad budget in our best month ever. Repaid before the end of December. Would do it again.",
        author: "Jared K.",
      },
      {
        title: "Restocked before the attention faded",
        body: "Product went viral and the warehouse emptied in nine days. The line covered a $38K air-freight bill while the channel held our payout.",
        author: "A. Mbeki",
      },
      {
        title: "They read the payout reports",
        body: "Our bank saw lumpy deposits. FundLine's lender saw channel payouts and a 4x sell-through and doubled what the bank offered.",
        author: "Chloe D.",
      },
      {
        title: "Supplier paid directly",
        body: "One lender paid the factory and we repaid as inventory sold. The advisor explained the cost honestly. It fit our margins.",
        author: "Victor S.",
      },
      {
        title: "3PL move, one clean month",
        body: "Setup fees, transfer and double inventory in one month. The line absorbed it and shipping costs are down 20 percent.",
        author: "Renee O.",
      },
    ],
  },
  faq: {
    heading: "Ecommerce funding questions",
    items: [
      {
        question: "What financing do ecommerce brands usually qualify for?",
        answer:
          "Most online sellers start with a business line of credit for inventory and a business credit card for ad spend. Brands with a track record add term loans for larger runs and growth. FundLine shops one application to the lenders we work with that fund ecommerce.",
      },
      {
        question: "Do selling-channel and storefront sales count as revenue?",
        answer:
          "Yes. Lenders read payouts from selling channels, storefront tools and card processors alongside your bank deposits. Connecting those accounts during the application usually speeds up the decision.",
      },
      {
        question: "Can we get inventory financing without a physical store?",
        answer:
          "Yes. Inventory-focused lenders look at sell-through rates, margins and purchase orders, not square footage. Some fund the supplier directly and are repaid as the inventory sells.",
      },
      {
        question: "How much do online brands typically borrow?",
        answer:
          "Inventory lines commonly run $25K to $500K for brands under $5M in sales and up to $1M beyond that. Ad-spend loans run $20K to $250K. Term loans for larger runs and growth run higher through the lenders we work with.",
      },
      {
        question: "Can we use the funds for advertising?",
        answer:
          "Working-capital products are use-agnostic, so ad spend, agency fees and creative production all qualify. Inventory financing is limited to product purchases and equipment financing to physical assets.",
      },
      {
        question: "How fast can an online brand get funded?",
        answer:
          "The application takes about 15 minutes. Lines of credit and short-term loans often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept.",
      },
      {
        question: "Do processor reserves or chargebacks hurt our application?",
        answer:
          "A normal reserve does not. A high chargeback rate or a recent reserve increase will draw questions, so be ready to explain it. Lenders look at refund and chargeback rates as a signal of product quality and customer service.",
      },
      {
        question: "Can a brand under two years old qualify?",
        answer:
          "Often, yes. Several lenders we work with fund brands with six to twelve months of sales history, at smaller amounts and shorter terms. Strong margins and a clear sell-through rate matter more than age.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, channel or storefront payout reports, basic company details and, for larger amounts, a recent P&L and your inventory position. Purchase-order financing needs the supplier's invoice or pro forma.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "credit_score",
      heading: "Business line of credit",
      body: "Draw for the production run, repay as it sells through, and pay interest only on the days the balance is out.",
      cta: { label: "Explore lines of credit", href: "/line-of-credit" },
      tone: "light",
    },
    {
      icon: "payments",
      heading: "Term loans",
      body: "A fixed payment over 12 to 60 months for a larger run, a new channel or the next stage of growth.",
      cta: { label: "Explore term loans", href: "/term-loans" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for online brands",
    sub: "How lenders read a DTC business, and how to fund inventory and ads without stalling on payout timing.",
    cards: [
      {
        tag: "Guide",
        title: "Getting ready to borrow",
        body: "The checklist for an online brand: statements, payout reports, margins and the purchase order.",
        href: "/guides/getting-ready-to-borrow",
        icon: "description",
      },
      {
        tag: "Blog",
        title: "A term loan for growing companies",
        body: "When a fixed payment beats a revolving line for a brand scaling into a new channel.",
        href: "/blog/term-loan-for-growing-companies",
        icon: "trending_up",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Model an inventory line against your sell-through before you place the order.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to fund",
    headingLine2: "the next production run?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: STANDARD_FOOTNOTES,
};

/* ------------------------------------------------------------------ */
/* Manufacturing                                                        */
/* ------------------------------------------------------------------ */

const MANUFACTURING: DetailPageContent = {
  slug: "manufacturing",
  kind: "industry",
  name: "Manufacturing",
  icon: "factory",
  art: `${INDUSTRY_ART}/manufacturing.png`,
  meta: {
    title: "Funding for Manufacturers | FundLine Capital",
    description:
      "Equipment financing, working capital, purchase-order funding and commercial real estate loans for manufacturers and job shops. One application, offers from lenders that understand long production cycles.",
  },
  breadcrumb: breadcrumb("Manufacturing"),
  hero: {
    headingLine1: "Funding for makers,",
    headingLine2: "built for the cycle.",
    accentLine2: true,
    sub: "Materials are bought on net-30 at the start of a run and the customer pays on net-60 after delivery. One application, shopped to the lenders we work with that understand tooling costs and record orders, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 3000000, step: 10000, initial: 310000, apr: 9.5, termMonths: 84 }),
  },
  stat: {
    value: "84 mo",
    label: "terms available on production machinery",
    blurb: "A five-axis mill that clears a four-week backlog should be paid for over the years it runs, not out of one quarter's cash. Equipment lenders we work with go to 84 months on the right machine.",
  },
  features: {
    headingLine1: "Capital for machines,",
    headingLine2: "materials and the record order",
    sub: "Manufacturers have real collateral and long cycles. That is a profile lenders like, and it opens products a service business cannot get.",
    cards: [
      {
        icon: "precision_manufacturing",
        title: "Machines that unlock capacity",
        body: "CNC mills, presses, lasers and robotics qualify for 60- to 84-month equipment loans secured by the machine, new or refurbished. Rigging and installation can usually be rolled in.",
      },
      {
        icon: "receipt_long",
        title: "Purchase-order and invoice funding",
        body: "PO funding pays your suppliers for the materials to fill a confirmed order. Invoice financing then advances up to 85 percent as each shipment ships. The customer's net-60 becomes your cash this week.",
      },
      {
        icon: "apartment",
        title: "Owning the building next door",
        body: "A 20- to 25-year commercial real estate loan finances the facility at a payment often within 10 percent of the rent you already pay, and doubles the floor.",
      },
    ],
  },
  callout: {
    icon: "inventory_2",
    heading: "Customer concentration is a factor, not a wall",
    boldLead: "A shop with two or three creditworthy customers can still qualify; for invoice and PO funding the lender underwrites those customers' payment history, not just yours.",
    body: "Bring copies of your major purchase orders, an aging report and your equipment list. Lenders that fund manufacturers read the whole balance sheet, and the machines on your floor are collateral that widens what you can borrow.",
    cta: { label: "Read: getting ready to borrow", href: "/guides/getting-ready-to-borrow" },
  },
  steps: {
    heading: "How manufacturers get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, three to six months of bank statements and, for larger amounts, a P&L, balance sheet, equipment list and copies of major purchase orders.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund manufacturing and lay out the offers, including equipment terms, PO advance rates and real estate structures.",
      },
      {
        title: "Run the order",
        body: "Accept the offer that fits. Lines and invoice financing can fund in as little as 24 hours; equipment, SBA and real estate loans take longer for appraisals.",
      },
    ],
    mock: {
      businessName: "Ironvale Precision Works",
      availableLabel: "Available to draw",
      available: "$215,000",
      limit: "$400,000",
      balanceLabel: "Outstanding balance",
      balance: "$185,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Aluminum stock, PO 2291", value: "$120,000" },
        { label: "Overtime and tooling", value: "$65,000" },
        { label: "Next payment", value: "$7,880 on Oct 1" },
        { label: "Invoice due from customer", value: "Nov 14" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who can",
    headingLine2: "read a purchase order.",
    body: "Our advisors have placed mill and press financing, PO funding and building loans for job shops, contract manufacturers and food processors. Bring your backlog and your biggest customer's terms; we will tell you which products fit before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What manufacturers say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Second mill, backlog cleared",
        body: "A $310K five-axis mill over 84 months. The cleared backlog pays the loan with room to spare. FundLine handled the builder's paperwork.",
        author: "Hank D.",
      },
      {
        title: "Record order, fully funded",
        body: "A $600K order on net-60. PO funding paid the suppliers and invoice financing covered each shipment. We said yes with confidence.",
        author: "Grace L.",
      },
      {
        title: "Bought the building next door",
        body: "A 25-year real estate loan at a payment within 10 percent of our old rent. Floor space doubled. Advisor knew the appraisal process cold.",
        author: "P. Novak",
      },
      {
        title: "Material spike, absorbed",
        body: "Aluminum jumped 25 percent in a quarter. The line covered the difference on the next run and we repaid it when the order shipped.",
        author: "Teresa Q.",
      },
      {
        title: "Two customers, still approved",
        body: "Everyone said concentration would sink us. The lender underwrote our customers' payment history instead. Approved in a week.",
        author: "Amir Z.",
      },
      {
        title: "Refurbished press, rigging included",
        body: "Financed a refurbished injection press with rigging and installation rolled in. One payment, one machine, no surprises.",
        author: "Doug M.",
      },
    ],
  },
  faq: {
    heading: "Manufacturing funding questions",
    items: [
      {
        question: "What financing do manufacturers usually qualify for?",
        answer:
          "Manufacturers typically qualify for equipment financing, a business line of credit for materials and invoice financing for large customer orders. Established shops are strong SBA 7(a) and commercial real estate candidates. FundLine shops one application to the lenders we work with that fund manufacturing.",
      },
      {
        question: "Can we finance against purchase orders, not just invoices?",
        answer:
          "Yes. Purchase-order funding pays your suppliers for the materials needed to fill a confirmed order and is repaid when the customer pays. Invoice financing then covers the gap after shipment. Several lenders we work with do both.",
      },
      {
        question: "Do you finance used and refurbished machinery?",
        answer:
          "Most equipment lenders do, with terms that depend on the age and condition of the machine. The equipment secures the loan, and rigging, installation and training costs can often be rolled in.",
      },
      {
        question: "How much do manufacturers typically borrow?",
        answer:
          "Equipment loans match the machine, commonly $75K to $1M. Material lines run $50K to $750K. PO and invoice funding are sized to the orders. Building purchases through commercial real estate loans run $500K to $5M through the lenders we work with.",
      },
      {
        question: "How fast can a manufacturer get funded?",
        answer:
          "The application takes about 15 minutes. Lines and invoice financing often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Equipment, SBA and real estate loans take longer for appraisals and documentation.",
      },
      {
        question: "Does customer concentration hurt our chances?",
        answer:
          "It is a factor lenders weigh, especially for invoice financing where the strength of the customer matters. A shop with two or three creditworthy customers can still qualify; the lender will focus on those customers' payment history.",
      },
      {
        question: "Can we finance a facility purchase or expansion?",
        answer:
          "Yes. Commercial real estate loans and SBA 504 loans finance owner-occupied buildings over 20 to 25 years, often with 10 to 15 percent down. Lenders want an appraisal, your financials and a plan for the space.",
      },
      {
        question: "Can equipment financing include tooling and fixtures?",
        answer:
          "Often. Dedicated tooling tied to a machine purchase can usually be included in the equipment loan. Consumable tooling and general shop supplies are funded from a line of credit instead.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, basic company details, a recent P&L and balance sheet for larger amounts, an equipment list and copies of major purchase orders. Machine requests need the builder or dealer quote.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "precision_manufacturing",
      heading: "Equipment financing",
      body: "Mills, presses and lasers on 60 to 84 months, new or refurbished, with rigging rolled in.",
      cta: { label: "Explore equipment financing", href: "/equipment-financing" },
      tone: "light",
    },
    {
      icon: "apartment",
      heading: "Commercial real estate",
      body: "Own the building next door on a 20- to 25-year loan at a payment close to your current rent.",
      cta: { label: "Explore commercial real estate loans", href: "/commercial-real-estate" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for manufacturers",
    sub: "How lenders read a job shop, and how to fund the next machine, the record order and the building.",
    cards: [
      {
        tag: "Guide",
        title: "Business financing, explained",
        body: "From a material line to a 25-year building loan, every product and where it fits a manufacturer.",
        href: "/guides/business-financing",
        icon: "account_balance",
      },
      {
        tag: "Blog",
        title: "A term loan for the next stage",
        body: "When a fixed payment on a machine or a facility beats drawing down the line.",
        href: "/blog/term-loan-next-stage",
        icon: "trending_up",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Compare an 84-month machine payment to the backlog it clears.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to fund",
    headingLine2: "the next machine?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: [
    ...STANDARD_FOOTNOTES,
    "Commercial real estate and SBA 504 loans require an appraisal and owner occupancy of at least 51 percent of the property. Down payments and terms are set by the lender.",
  ],
};

/* ------------------------------------------------------------------ */
/* Professional Services                                                */
/* ------------------------------------------------------------------ */

const PROFESSIONAL_SERVICES: DetailPageContent = {
  slug: "professional-services",
  kind: "industry",
  name: "Professional Services",
  icon: "work",
  art: `${INDUSTRY_ART}/professional-services.png`,
  meta: {
    title: "Funding for Professional Services Firms | FundLine Capital",
    description:
      "Lines of credit, invoice financing and acquisition loans for agencies, consultancies, law and accounting firms. One application, offers from lenders that understand billable hours and net-45 clients.",
  },
  breadcrumb: breadcrumb("Professional Services"),
  hero: {
    headingLine1: "Funding for firms,",
    headingLine2: "paced to client pay.",
    accentLine2: true,
    sub: "Payroll runs every two weeks and the client pays in 45, or 90 when their process allows. One application, shopped to the lenders we work with that fund firms with no hard assets, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 750000, step: 5000, initial: 120000, apr: 10.9, termMonths: 36 }),
  },
  stat: {
    value: "Net-90",
    label: "is what an enterprise client's process allows",
    blurb: "When a big account moves every vendor to 90 days, $180K of billed work sits in receivables for an extra 45. A line sized to your AR keeps payroll steady across the gap.",
  },
  features: {
    headingLine1: "Capital for payroll,",
    headingLine2: "receivables and the next partner",
    sub: "A firm's inventory is people and its balance sheet is receivables. Most working-capital products are unsecured or secured by those receivables, so no equipment is needed to qualify.",
    cards: [
      {
        icon: "credit_score",
        title: "A line for payroll timing",
        body: "Draw when a large client pays slowly and repay the week the invoice clears. Firms with steady billings qualify for lines from $25K to $500K, interest only on what is drawn.",
      },
      {
        icon: "receipt_long",
        title: "Cash against invoices and retainers",
        body: "Invoice financing advances most of an invoice to a creditworthy client within days. Recurring retainers strengthen the case for a larger line as well.",
      },
      {
        icon: "handshake",
        title: "Hires, offices and acquisitions",
        body: "A 24- to 36-month term loan funds a senior hire's first-year package; a 10-year SBA 7(a) loan finances buying a retiring competitor's book of business.",
      },
    ],
  },
  callout: {
    icon: "work",
    heading: "No hard assets? That is normal here",
    boldLead: "Lenders that fund firms focus on revenue consistency, client quality, time in business and the partners' credit profile, not on equipment you do not own.",
    body: "Bring an accounts receivable aging report and a summary of active retainers. Those two documents tell a lender more about an agency or a practice than anything else, and they are usually one export away.",
    cta: { label: "Read: getting ready to borrow", href: "/guides/getting-ready-to-borrow" },
  },
  steps: {
    heading: "How firms get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Firm details, three to six months of bank statements and, for larger amounts, a recent P&L, an AR aging report and a summary of active retainers.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund service firms and lay out the offers, including guarantee requirements and any covenants.",
      },
      {
        title: "Fund the engagement",
        body: "Accept the offer that fits. Lines and invoice financing can fund in as little as 24 hours; SBA loans for acquisitions take several weeks.",
      },
    ],
    mock: {
      businessName: "Northwind Creative Partners",
      availableLabel: "Available to draw",
      available: "$80,000",
      limit: "$200,000",
      balanceLabel: "Outstanding balance",
      balance: "$120,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Payroll, Sep 15", value: "$74,000" },
        { label: "Contractor invoices", value: "$46,000" },
        { label: "Next payment", value: "$4,460 on Oct 1" },
        { label: "Client invoice due", value: "$180,000 on Nov 2" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who knows",
    headingLine2: "billed versus collected.",
    body: "Our advisors have placed payroll lines, invoice advances and acquisition loans for agencies, consultancies, law practices and accounting firms. Bring your AR aging and your largest client's terms; we will tell you which products fit before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What firm owners say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Payroll steady through net-90",
        body: "Our largest client moved to 90 days. A $120K line covered three payrolls and we repaid it the week the invoice cleared.",
        author: "Natalie R.",
      },
      {
        title: "Senior hire, funded",
        body: "A 24-month term loan covered a partner-level hire's first-year package. The accounts they brought paid it back three times over.",
        author: "D. Castellano",
      },
      {
        title: "Bought a retiring competitor's book",
        body: "SBA 7(a), $250K, closed in seven weeks. Two staff joined at closing. The advisor knew exactly what the lender would ask for.",
        author: "Ken W.",
      },
      {
        title: "No assets, still approved",
        body: "A consultancy with laptops and lease. FundLine's lender underwrote on our retainers and AR aging. Line approved in four days.",
        author: "Farah H.",
      },
      {
        title: "Straight talk on guarantees",
        body: "Told us plainly which offers needed a personal guarantee and which did not. We chose with our eyes open.",
        author: "Owen B.",
      },
      {
        title: "Office move, one quarter",
        body: "Deposit, build-out and furniture in the same quarter as taxes. The line absorbed all of it. Repaid over six months.",
        author: "Lena T.",
      },
    ],
  },
  faq: {
    heading: "Professional services funding questions",
    items: [
      {
        question: "What financing do professional services firms usually qualify for?",
        answer:
          "Most firms start with a business line of credit for payroll timing and a business credit card for expenses. Firms with signed retainers add invoice financing and term loans for hiring and acquisitions. FundLine shops one application to the lenders we work with that fund service firms.",
      },
      {
        question: "We have no physical assets. Can we still borrow?",
        answer:
          "Yes. Most working-capital products are unsecured or secured by receivables, not equipment. Lenders focus on revenue consistency, client quality, time in business and the business owners' credit profile.",
      },
      {
        question: "Can we finance against retainers and unpaid invoices?",
        answer:
          "Invoice financing advances most of the value of invoices to creditworthy clients, which turns a 45- or 90-day wait into cash within days. Recurring retainers also strengthen your case for a larger line of credit.",
      },
      {
        question: "How much do firms typically borrow?",
        answer:
          "Payroll lines commonly run $25K to $500K depending on annual billings. Hiring and office term loans run $50K to $300K. Acquisitions of a book of business through SBA 7(a) run $150K to $2M through the lenders we work with.",
      },
      {
        question: "How fast can a firm get funded?",
        answer:
          "The application takes about 15 minutes. Lines of credit and invoice financing often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. SBA loans for acquisitions take several weeks.",
      },
      {
        question: "Can partners apply without personally guaranteeing the loan?",
        answer:
          "Most small-business products ask for a personal guarantee from business owners with a meaningful stake. Larger firms with strong financials sometimes qualify for guarantee-free products; each offer states its requirements before you accept, and we flag them.",
      },
      {
        question: "Can we finance an acquisition or a partner buyout?",
        answer:
          "Yes. SBA 7(a) loans and conventional term loans both fund buying a competitor's client list or buying out a departing partner, typically over 7 to 10 years. Lenders want the purchase agreement, the target's financials and a transition plan.",
      },
      {
        question: "Do trust or client escrow accounts count as revenue?",
        answer:
          "No. Lenders look at operating-account deposits and billed fees, not funds held in trust for clients. Keep the operating account clean and separate; it makes the underwriting faster.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, basic firm details and, for larger amounts, a recent P&L, an accounts receivable aging report and a summary of active retainers. Acquisition requests need the purchase agreement.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "credit_score",
      heading: "Business line of credit",
      body: "Keep payroll steady while a large client pays on its own schedule, and pay interest only on what you draw.",
      cta: { label: "Explore lines of credit", href: "/line-of-credit" },
      tone: "light",
    },
    {
      icon: "receipt_long",
      heading: "Invoice financing",
      body: "Turn a net-90 invoice to a creditworthy client into cash within days, and keep the relationship yours.",
      cta: { label: "Explore invoice financing", href: "/invoice-financing" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for firm owners",
    sub: "How lenders read a service business, and how to fund people and growth without pledging equipment you do not have.",
    cards: [
      {
        tag: "Guide",
        title: "Getting ready to borrow",
        body: "The checklist for a firm: statements, AR aging, retainers and what each tells a lender.",
        href: "/guides/getting-ready-to-borrow",
        icon: "description",
      },
      {
        tag: "Guide",
        title: "Building business credit",
        body: "How a firm with no assets builds the profile that qualifies for a larger unsecured line.",
        href: "/guides/business-credit",
        icon: "credit_score",
      },
      {
        tag: "Blog",
        title: "A funding guide for business owners",
        body: "The plain-language overview of every product, written for business owners who bill by the hour.",
        href: "/blog/funding-guide-for-owners",
        icon: "work",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to fund",
    headingLine2: "the next engagement?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: STANDARD_FOOTNOTES,
};

/* ------------------------------------------------------------------ */
/* Fintech                                                              */
/* ------------------------------------------------------------------ */

const FINTECH: DetailPageContent = {
  slug: "fintech",
  kind: "industry",
  name: "Fintech",
  icon: "account_balance_wallet",
  art: `${INDUSTRY_ART}/fintech.png`,
  meta: {
    title: "Funding for Fintech Companies | FundLine Capital",
    description:
      "Lines of credit, term loans and non-dilutive growth capital for payments and financial-software companies. One application, offers from lenders that understand licensing costs and take-rate revenue.",
  },
  breadcrumb: breadcrumb("Fintech"),
  hero: {
    headingLine1: "Funding for fintech,",
    headingLine2: "without dilution.",
    accentLine2: true,
    sub: "Licenses, audits and bank-partner reviews cost six figures before the first customer transacts. One application, shopped to the lenders we work with that read take rates and processed volume, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 2000000, step: 10000, initial: 350000, apr: 11.5, termMonths: 36 }),
  },
  stat: {
    value: "$350K",
    label: "to license across a dozen states",
    blurb: "Money-transmitter fees, bonds and legal work land before revenue from those states exists. A term loan sized to the licensing plan keeps the equity runway for the round that deserves it.",
  },
  features: {
    headingLine1: "Capital for compliance,",
    headingLine2: "runway and the enterprise launch",
    sub: "A payments or financial-software company earns on volume that lags the engineering and the regulatory work that unlock it. We match the product to that lag.",
    cards: [
      {
        icon: "verified_user",
        title: "Licensing and audits",
        body: "A 24- to 36-month term loan funds state licensing, an independent compliance review and a SOC 2 report on a fixed payment, before the revenue from those states arrives.",
      },
      {
        icon: "credit_score",
        title: "A line for launches",
        body: "Draw to staff a partner integration or a security review and repay from the first quarters of revenue share. Lines from $100K to $2M sized to volume and cash on hand.",
      },
      {
        icon: "savings",
        title: "Runway between rounds",
        body: "A right-sized growth loan adds six to nine months of runway on today's numbers, so the next equity round is raised on a bigger revenue figure and better terms.",
      },
    ],
  },
  callout: {
    icon: "lock",
    heading: "Watch for warrants and covenants",
    boldLead: "Debt should not reprice the company. Look for offers without warrants, and read the covenants for anything that could trip a future raise or a bank-partner change.",
    body: "Every offer's terms are disclosed before you accept, and we flag warrants, minimum-cash covenants and change-of-control clauses so you can compare on structure, not just rate.",
    cta: { label: "Read: what funding costs at each stage", href: "/blog/funding-cost-by-stage" },
  },
  steps: {
    heading: "How fintech companies get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, three to six months of bank statements, a recent P&L and copies of key partner or program agreements. A cap table helps for larger amounts.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund revenue-stage software companies and lay out the offers, including any warrants or covenants.",
      },
      {
        title: "Fund the launch",
        body: "Accept the offer that fits. Lines can fund in as little as 24 hours; larger growth loans take longer for diligence.",
      },
    ],
    mock: {
      businessName: "Kestrel Payments Inc.",
      availableLabel: "Available to draw",
      available: "$300,000",
      limit: "$500,000",
      balanceLabel: "Outstanding balance",
      balance: "$200,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Integration team, Q4", value: "$140,000" },
        { label: "Security review", value: "$60,000" },
        { label: "Next payment", value: "$7,150 on Oct 1" },
        { label: "Revenue share expected", value: "Dec 15" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who knows",
    headingLine2: "what an audit costs.",
    body: "Our advisors have placed licensing loans, launch lines and runway extensions for payments, lending-software and embedded-finance companies. Bring your volume, take rate and partner agreements; we will tell you which products fit before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What fintech founders say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Licensed in twelve states, no dilution",
        body: "A 36-month term loan covered $350K of licensing. We launched in twelve new states without touching the equity runway.",
        author: "Ravi P.",
      },
      {
        title: "Launch staffed before revenue share",
        body: "Drew $200K to staff a partner integration and repaid it from the first two quarters of revenue share. Line was ready in five days.",
        author: "Mia F.",
      },
      {
        title: "Seven more months of runway",
        body: "A $500K growth loan bought seven months. We raised the next round on a bigger number. No warrants, which mattered.",
        author: "J. Lindqvist",
      },
      {
        title: "They read take rate",
        body: "Banks looked at net revenue and shrugged. FundLine's lender read processed volume and take rate together and sized the line accordingly.",
        author: "Andre M.",
      },
      {
        title: "Flagged the covenant",
        body: "One offer had a minimum-cash covenant that would have bitten during our audit quarter. The advisor caught it. We took a different offer.",
        author: "Sofia K.",
      },
      {
        title: "Pre-profit and still funded",
        body: "Not profitable yet, but growing 12 percent a month. Options were narrower but real. Approved in a week.",
        author: "Ben Y.",
      },
    ],
  },
  faq: {
    heading: "Fintech funding questions",
    items: [
      {
        question: "What financing do fintech companies usually qualify for?",
        answer:
          "Companies with revenue typically qualify for a business line of credit, term loans and business credit cards. Companies with recurring or volume-based revenue often qualify for larger growth loans. FundLine shops one application to the lenders we work with that fund revenue-stage software companies.",
      },
      {
        question: "Does volume-based or take-rate revenue count?",
        answer:
          "Yes. Lenders look at processed volume, take rate, interchange share and bank deposits, along with signed partner agreements. Several lenders we work with specialize in venture-backed and revenue-stage companies.",
      },
      {
        question: "Can we borrow before we are profitable?",
        answer:
          "Often, yes. Lenders weigh cash on hand, runway, revenue growth and investor backing alongside profitability. Being pre-profit narrows the options and may reduce the amount, but rarely closes the door.",
      },
      {
        question: "How much do fintech companies typically borrow?",
        answer:
          "Launch lines commonly run $100K to $2M depending on volume and cash on hand. Licensing and compliance term loans run $150K to $750K. Growth loans for runway run $500K to $5M through the lenders we work with.",
      },
      {
        question: "Will debt complicate our next equity round?",
        answer:
          "Usually not. Investors commonly view a right-sized debt line as a sign of financial discipline. Look for offers without warrants or restrictive covenants; each offer's terms are disclosed before you accept and we flag anything unusual.",
      },
      {
        question: "How fast can a fintech get funded?",
        answer:
          "The application takes about 15 minutes. Lines of credit often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Larger growth loans take longer for diligence.",
      },
      {
        question: "Can we finance licensing, bonds and audit costs?",
        answer:
          "Yes. Working-capital products are use-agnostic, so state licensing fees, surety bonds, legal work, compliance reviews and SOC 2 audits all qualify. A term loan with a fixed payment usually fits a licensing plan best.",
      },
      {
        question: "Does holding customer funds affect our application?",
        answer:
          "Lenders will want to see customer funds held separately from operating cash, in line with your licensing and bank-partner requirements. Keep the operating account clean; underwriting is faster when the two are clearly separated.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, basic company details, a recent P&L, your cap table for larger amounts and copies of key partner, program or sponsor-bank agreements. A volume and take-rate summary helps.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "payments",
      heading: "Term loans",
      body: "A fixed payment over 24 to 36 months for licensing, audits and the compliance work that precedes revenue.",
      cta: { label: "Explore term loans", href: "/term-loans" },
      tone: "light",
    },
    {
      icon: "credit_score",
      heading: "Business line of credit",
      body: "Draw to staff a launch, repay from revenue share, and keep the equity runway for the round that deserves it.",
      cta: { label: "Explore lines of credit", href: "/line-of-credit" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for fintech founders",
    sub: "How lenders read a payments company, and how to fund compliance and growth without repricing the cap table.",
    cards: [
      {
        tag: "Blog",
        title: "What funding costs at each stage",
        body: "Seed to Series B: which debt products open up and what they cost as volume grows.",
        href: "/blog/funding-cost-by-stage",
        icon: "trending_up",
      },
      {
        tag: "Guide",
        title: "Getting ready to borrow",
        body: "The checklist for a fintech: statements, partner agreements, volume summary and cap table.",
        href: "/guides/getting-ready-to-borrow",
        icon: "description",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Model a licensing term loan against the revenue the new states will bring.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to launch",
    headingLine2: "without the dilution?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: STANDARD_FOOTNOTES,
};

/* ------------------------------------------------------------------ */
/* Marketplaces                                                         */
/* ------------------------------------------------------------------ */

const MARKETPLACES: DetailPageContent = {
  slug: "marketplaces",
  kind: "industry",
  name: "Marketplaces",
  icon: "storefront",
  art: `${INDUSTRY_ART}/marketplaces.png`,
  meta: {
    title: "Funding for Marketplaces | FundLine Capital",
    description:
      "Lines of credit, term loans and growth capital for two-sided marketplaces. One application, offers from lenders that understand gross merchandise volume, take rates and seller payouts.",
  },
  breadcrumb: breadcrumb("Marketplaces"),
  hero: {
    headingLine1: "Funding for markets,",
    headingLine2: "built for both sides.",
    accentLine2: true,
    sub: "Sellers are paid on delivery and buyers pay on card settlement, and the gap between them grows with every good month. One application, shopped to the lenders we work with that read GMV and take rate, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 1500000, step: 10000, initial: 250000, apr: 11.9, termMonths: 36 }),
  },
  stat: {
    value: "$90K",
    label: "a week of instant payouts ahead of settlement",
    blurb: "When volume doubles, the float gap doubles with it. A revolving line drawn and repaid weekly closes it without slowing seller payouts, and you pay interest only on the days the balance is out.",
  },
  features: {
    headingLine1: "Capital for liquidity,",
    headingLine2: "payouts and the next city",
    sub: "A two-sided business spends on supply before demand arrives and pays sellers before buyers settle. Every product we place is chosen around that flywheel.",
    cards: [
      {
        icon: "sync",
        title: "A line for the payout gap",
        body: "Draw to fund instant seller payouts, repay as card settlements land. Lines from $100K to $1.5M sized to weekly GMV, drawn and repaid on a weekly cycle.",
      },
      {
        icon: "storefront",
        title: "Term loans for new markets",
        body: "A 36-month growth loan funds recruiting sellers, seeding demand and a local team in a third metro, before the first transaction there.",
      },
      {
        icon: "trending_up",
        title: "Working capital for buyer acquisition",
        body: "When a referral program converts at twice the usual rate, a short-term loan extends the incentive budget through the season and is repaid from second-purchase revenue.",
      },
    ],
  },
  callout: {
    icon: "calculate",
    heading: "Show what you keep from each transaction",
    boldLead: "Lenders read gross merchandise volume, take rate and net revenue together. A clear breakdown of what the business keeps per transaction is the strongest page in the application.",
    body: "Bring a GMV and take-rate summary, processor statements and repeat-purchase trends by cohort. A marketplace that can show its unit economics on one page gets sized on the whole business, not just the net line.",
    cta: { label: "Read: getting ready to borrow", href: "/guides/getting-ready-to-borrow" },
  },
  steps: {
    heading: "How marketplaces get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, three to six months of bank statements, a recent P&L, a GMV and take-rate summary and processor statements for larger amounts.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that fund two-sided businesses and lay out the offers, including draw cycles for a payout line and any covenants.",
      },
      {
        title: "Fund the flywheel",
        body: "Accept the offer that fits. Lines can fund in as little as 24 hours; larger growth loans take longer for diligence.",
      },
    ],
    mock: {
      businessName: "Porchlight Local Services",
      availableLabel: "Available to draw",
      available: "$160,000",
      limit: "$250,000",
      balanceLabel: "Outstanding balance",
      balance: "$90,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Seller payouts, week 37", value: "$90,000" },
        { label: "Card settlements expected", value: "$94,600 on Sep 19" },
        { label: "Next payment", value: "$1,180 on Sep 19" },
        { label: "Illustrative rate", value: "11.9% APR" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who reads",
    headingLine2: "GMV and take rate.",
    body: "Our advisors have placed payout lines, city-launch loans and buyer-acquisition capital for services, goods and B2B marketplaces. Bring your take rate and your weekly payout number; we will tell you which products fit before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What marketplace founders say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Payouts smoothed, weekly",
        body: "A $250K line for instant seller payouts, repaid every week as settlements land. Sellers get paid faster and we sleep.",
        author: "Isabel N.",
      },
      {
        title: "Third city, launched",
        body: "A $400K growth loan funded 200 sellers, demand seeding and a local team. The new metro hit breakeven in nine months.",
        author: "Kwame A.",
      },
      {
        title: "Referral budget through the holidays",
        body: "A short-term loan extended a $60K referral budget. The buyers it acquired repaid it in second-purchase revenue by January.",
        author: "T. Halvorsen",
      },
      {
        title: "Sized on GMV, not net",
        body: "Our bank saw a thin net line. FundLine's lender saw GMV and take rate together and offered four times what the bank did.",
        author: "Lucia B.",
      },
      {
        title: "Enterprise catalog, staffed",
        body: "A large brand wanted to list its full catalog. The line covered integration and a category team before the listings went live.",
        author: "Noah S.",
      },
      {
        title: "Honest about pre-profit options",
        body: "We are not profitable and the advisor said so plainly: fewer options, smaller amounts, still real. Approved in six days.",
        author: "Emma C.",
      },
    ],
  },
  faq: {
    heading: "Marketplace funding questions",
    items: [
      {
        question: "What financing do marketplaces usually qualify for?",
        answer:
          "Most start with a business line of credit for payout timing and a business credit card for marketing spend. Businesses with a track record add term loans for launches and growth. FundLine shops one application to the lenders we work with that fund two-sided businesses.",
      },
      {
        question: "Do lenders look at GMV or net revenue?",
        answer:
          "Both. Lenders read gross merchandise volume, take rate and net revenue together, along with bank deposits and repeat-purchase trends. A clear breakdown of what you keep from each transaction strengthens the application.",
      },
      {
        question: "Can we fund seller payouts with borrowed money?",
        answer:
          "Yes. A revolving line of credit is commonly used to bridge the gap between paying sellers and collecting from buyers. You draw and repay weekly, and pay interest only on the days the balance is outstanding.",
      },
      {
        question: "How much do marketplaces typically borrow?",
        answer:
          "Payout lines commonly run $100K to $1.5M sized to weekly GMV. City-launch and growth term loans run $250K to $2M. Short-term loans for acquisition campaigns run $25K to $250K through the lenders we work with.",
      },
      {
        question: "Do we need to be profitable to qualify?",
        answer:
          "No. Many marketplaces invest ahead of profitability. Lenders weigh cash on hand, revenue growth, unit economics and investor backing. Being pre-profit narrows the options but rarely closes them.",
      },
      {
        question: "How fast can a marketplace get funded?",
        answer:
          "The application takes about 15 minutes. Lines of credit often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Larger growth loans take longer for diligence.",
      },
      {
        question: "Do funds held for sellers count as our cash?",
        answer:
          "No, and lenders will want to see them kept separate from operating cash. A clean split between seller funds and the operating account speeds underwriting and avoids questions about your true cash position.",
      },
      {
        question: "Can we finance an enterprise integration before it produces revenue?",
        answer:
          "Yes. A line of credit or a short term loan commonly funds the integration team and onboarding for a large catalog partner, repaid from the transaction revenue once listings are live. Bring the signed partner agreement.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, basic company details, a recent P&L, a GMV and take-rate summary and processor statements for larger amounts. Cohort retention data helps for growth loans.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "credit_score",
      heading: "Business line of credit",
      body: "Draw for seller payouts, repay as settlements land, weekly, with interest only on the days the balance is out.",
      cta: { label: "Explore lines of credit", href: "/line-of-credit" },
      tone: "light",
    },
    {
      icon: "payments",
      heading: "Term loans",
      body: "A fixed payment over 36 months for a new-city launch or a growth push, sized to GMV rather than the net line.",
      cta: { label: "Explore term loans", href: "/term-loans" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for marketplace founders",
    sub: "How lenders read a two-sided business, and how to fund liquidity and growth on the right terms.",
    cards: [
      {
        tag: "Guide",
        title: "Getting ready to borrow",
        body: "The checklist for a marketplace: statements, GMV summary, processor reports and cohorts.",
        href: "/guides/getting-ready-to-borrow",
        icon: "description",
      },
      {
        tag: "Blog",
        title: "What funding costs at each stage",
        body: "Which debt products open up as GMV grows, and what they cost.",
        href: "/blog/funding-cost-by-stage",
        icon: "trending_up",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Model a weekly payout line against your settlement cycle before you apply.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to fund",
    headingLine2: "both sides?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: STANDARD_FOOTNOTES,
};

/* ------------------------------------------------------------------ */
/* SaaS                                                                 */
/* ------------------------------------------------------------------ */

const SAAS: DetailPageContent = {
  slug: "saas",
  kind: "industry",
  name: "SaaS",
  icon: "cloud",
  art: `${INDUSTRY_ART}/saas.png`,
  meta: {
    title: "Funding for SaaS Companies | FundLine Capital",
    description:
      "Lines of credit, term loans and invoice financing for subscription software companies. One application, offers from lenders that underwrite on recurring revenue.",
  },
  breadcrumb: breadcrumb("SaaS"),
  hero: {
    headingLine1: "Funding for SaaS,",
    headingLine2: "priced on revenue.",
    accentLine2: true,
    sub: "A new customer costs a year of subscription to win and pays it back over eighteen months. One application, shopped to the lenders we work with that read ARR, churn and net retention, with funding in as little as 24 hours.¹ No impact to your credit score to apply.² Amounts from $5K to $5M.³",
    cta: { label: "Apply now", href: APPLY },
    fineprint: FINEPRINT,
    estimator: estimator({ max: 2000000, step: 10000, initial: 300000, apr: 11.5, termMonths: 36 }),
  },
  stat: {
    value: "18 mo",
    label: "typical payback on a new customer",
    blurb: "Acquisition is paid up front and revenue arrives monthly. A facility sized to ARR funds the gap so growth is capped by the market, not by cash in the bank this quarter.",
  },
  features: {
    headingLine1: "Capital for the ramp,",
    headingLine2: "the enterprise deal and the runway",
    sub: "Subscription businesses have the most predictable revenue in software, and several lenders we work with size an offer as a multiple of monthly recurring revenue.",
    cards: [
      {
        icon: "trending_up",
        title: "Term loans for sales hiring",
        body: "Four account executives take two quarters to ramp. A 36-month term loan funds their fully loaded cost until bookings exceed the payment, without a bridge round.",
      },
      {
        icon: "receipt_long",
        title: "Cash against annual invoices",
        body: "Invoice financing advances up to 85 percent of a signed annual invoice within days, so a $240K enterprise deal on net-60 staffs its own onboarding team.",
      },
      {
        icon: "savings",
        title: "Runway on today's ARR",
        body: "A revenue-based line or growth loan adds six to nine months of runway on current ARR, so the next equity round is raised from strength and at a higher number.",
      },
    ],
  },
  callout: {
    icon: "cloud",
    heading: "Lead with ARR, retention and margin",
    boldLead: "Lenders that underwrite subscription businesses look at annual recurring revenue, growth rate, gross and net retention, gross margin and cash on hand, in roughly that order.",
    body: "Bring an ARR and churn summary straight from your billing tool and a cap table for larger amounts. Signed annual contracts that have not yet been paid count too; they strengthen the case for a larger line and can be advanced against directly.",
    cta: { label: "Read: getting ready to borrow", href: "/guides/getting-ready-to-borrow" },
  },
  steps: {
    heading: "How SaaS companies get funded with FundLine",
    items: [
      {
        title: "Apply once",
        body: "About 15 minutes. Company details, three to six months of bank statements, a recent P&L, an ARR and churn summary and your cap table for larger amounts. Connect your billing tool to speed it up.",
      },
      {
        title: "Compare offers",
        body: "We shop the application to the lenders we work with that underwrite on recurring revenue and lay out the offers, including any warrants, covenants or MRR multiples.",
      },
      {
        title: "Fund the ramp",
        body: "Accept the offer that fits. Lines and invoice financing can fund in as little as 24 hours; larger growth loans take longer for diligence.",
      },
    ],
    mock: {
      businessName: "Tidewater Analytics",
      availableLabel: "Available to draw",
      available: "$420,000",
      limit: "$600,000",
      balanceLabel: "Outstanding balance",
      balance: "$180,000",
      primaryAction: "Draw funds",
      rows: [
        { label: "Sales hires, Q4 ramp", value: "$120,000" },
        { label: "Onboarding team, enterprise", value: "$60,000" },
        { label: "Next payment", value: "$5,940 on Oct 1" },
        { label: "ARR at last close", value: "$2.4M" },
      ],
    },
  },
  support: {
    headingLine1: "Talk to someone who reads",
    headingLine2: "net retention first.",
    body: "Our advisors have placed hiring loans, annual-invoice advances and runway lines for subscription companies from $500K to $20M in ARR. Bring your ARR, churn and margin; we will tell you which products fit before you apply.",
    link: { label: "Apply now", href: BOOK_A_CALL },
  },
  reviews: {
    heading: "What SaaS founders say",
    ...REVIEW_SCORE,
    items: [
      {
        title: "Sales team funded, bookings caught up",
        body: "A 36-month term loan covered $300K of sales hiring. By the third quarter the new team's bookings exceeded the payment.",
        author: "Olivia G.",
      },
      {
        title: "Enterprise invoice, cash in days",
        body: "A $240K annual contract on net-60. Invoice financing advanced 85 percent in three days and the onboarding team was staffed on day one.",
        author: "Deepak R.",
      },
      {
        title: "Eight months of runway on ARR",
        body: "A $600K revenue-based line on $2.4M ARR. We raised the next round at a higher valuation and never touched the line's covenants.",
        author: "H. Brennan",
      },
      {
        title: "Sized off MRR, not profit",
        body: "Banks wanted two years of profit. FundLine's lender sized the line as a multiple of MRR and asked for retention data instead.",
        author: "Carla M.",
      },
      {
        title: "Second product, built",
        body: "An eight-month build funded before a single customer paid for it. Net retention is up nine points since launch.",
        author: "Jonas W.",
      },
      {
        title: "Churn dip handled calmly",
        body: "ARR dropped 8 percent when a big customer consolidated. The advisor helped us right-size the request instead of pulling it.",
        author: "Priyanka S.",
      },
    ],
  },
  faq: {
    heading: "SaaS funding questions",
    items: [
      {
        question: "What financing do SaaS companies usually qualify for?",
        answer:
          "Subscription companies with recurring revenue typically qualify for a business line of credit, term loans and revenue-based growth capital, plus a business credit card for tooling and cloud spend. FundLine shops one application to the lenders we work with that underwrite on recurring revenue.",
      },
      {
        question: "How do lenders evaluate a subscription business?",
        answer:
          "They look at annual recurring revenue, growth rate, gross and net retention, gross margin and cash on hand. Several lenders we work with underwrite specifically on ARR and can size an offer as a multiple of monthly recurring revenue.",
      },
      {
        question: "Can we borrow against annual contracts that have not been paid yet?",
        answer:
          "Yes. Invoice financing advances against signed annual invoices to creditworthy customers, and signed ARR strengthens your case for a larger line of credit. Both turn booked revenue into cash without waiting on the customer's payment cycle.",
      },
      {
        question: "How much do SaaS companies typically borrow?",
        answer:
          "Lines and revenue-based facilities commonly run three to six times MRR, so $150K to $2M for companies between $500K and $5M in ARR. Hiring and product term loans run $100K to $1M. Larger growth loans are available to companies with strong retention through the lenders we work with.",
      },
      {
        question: "Do we need to be profitable to get funding?",
        answer:
          "No. Many SaaS companies invest ahead of profitability. Lenders weigh runway, growth efficiency, retention and investor backing alongside profit. Being pre-profit narrows the options but rarely closes them.",
      },
      {
        question: "How fast can a SaaS company get funded?",
        answer:
          "The application takes about 15 minutes. Lines of credit often return offers within a couple of days, and many lenders fund in as little as 24 hours after you accept. Larger growth loans take longer for diligence.",
      },
      {
        question: "What happens to the line if churn rises?",
        answer:
          "Revenue-based lines are typically resized as ARR moves, up or down, at each reporting period. A churn dip may lower the available amount but rarely calls the loan. Read the resizing terms before you accept; we flag them.",
      },
      {
        question: "Will debt complicate our next equity round?",
        answer:
          "Usually not. Investors commonly view a right-sized line as a sign of financial discipline. Look for offers without warrants or restrictive covenants; each offer's terms are disclosed before you accept.",
      },
      {
        question: "What documents should we have ready?",
        answer:
          "Three to six months of business bank statements, basic company details, a recent P&L, an ARR and churn summary from your billing tool and your cap table for larger amounts. Copies of large annual contracts help for invoice financing.",
      },
    ],
  },
  ctaCards: [
    {
      icon: "payments",
      heading: "Term loans",
      body: "A fixed payment over 24 to 36 months for a sales ramp or a product build, before the bookings arrive.",
      cta: { label: "Explore term loans", href: "/term-loans" },
      tone: "light",
    },
    {
      icon: "receipt_long",
      heading: "Invoice financing",
      body: "Advance up to 85 percent of a signed annual invoice within days so the onboarding team is staffed before the customer pays.",
      cta: { label: "Explore invoice financing", href: "/invoice-financing" },
      tone: "periwinkle",
    },
  ],
  guides: {
    heading: "Guides for SaaS founders",
    sub: "How lenders read a subscription business, and how to fund the ramp without giving up the cap table.",
    cards: [
      {
        tag: "Blog",
        title: "What funding costs at each stage",
        body: "Seed to Series B: which debt products open up and what they cost as ARR grows.",
        href: "/blog/funding-cost-by-stage",
        icon: "trending_up",
      },
      {
        tag: "Blog",
        title: "A term loan for growing companies",
        body: "When a fixed payment on a hiring plan beats drawing down a revenue-based line.",
        href: "/blog/term-loan-for-growing-companies",
        icon: "payments",
      },
      {
        tag: "Tool",
        title: "Payment calculators",
        body: "Model a hiring loan against the bookings the new team will produce.",
        href: "/calculators",
        icon: "calculate",
      },
    ],
  },
  closing: {
    headingLine1: "Ready to fund",
    headingLine2: "the next cohort?",
    cta: { label: "Apply now", href: APPLY },
    note: "One 15-minute application. No impact to your credit score to apply.",
  },
  footnotes: STANDARD_FOOTNOTES,
};

/* ------------------------------------------------------------------ */
/* Exports                                                              */
/* ------------------------------------------------------------------ */

export const INDUSTRY_PAGES: DetailPageContent[] = [
  AI,
  CONSTRUCTION,
  HEALTHCARE,
  RETAIL,
  RESTAURANTS,
  TRUCKING,
  ECOMMERCE,
  MANUFACTURING,
  PROFESSIONAL_SERVICES,
  FINTECH,
  MARKETPLACES,
  SAAS,
];

export const INDUSTRY_SLUGS: string[] = INDUSTRY_PAGES.map((page) => page.slug);

/** Look up an industry page by route param; `undefined` for unknown slugs. */
export function getIndustryPage(slug: string): DetailPageContent | undefined {
  return INDUSTRY_PAGES.find((page) => page.slug === slug);
}
