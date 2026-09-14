import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";

/**
 * FundLine Capital — loan-product detail pages.
 * FundLine is a commercial loan broker, not a lender. Every number here is illustrative.
 */

const PRODUCT_ART = "/sites/corgi-insure-a0f7893c/root-8a5edab2/images/products";

const APPLY = { label: "Apply now", href: "/apply" } as const;
const BOOK_CALL = { label: "Apply now", href: "/apply" } as const;
const FINEPRINT =
  "FundLine Capital is a commercial loan broker, not a lender. Offers are made by the lenders we work with.";
const ESTIMATOR_NOTE =
  "Estimate only. Your rate, term and payment are set by the lender whose offer you accept.";
const REVIEWS_HEADER = {
  score: "4.8",
  scoreLabel: "Excellent",
  countLabel: "Based on 12,480 reviews",
} as const;

const productCrumb = (name: string) => [
  { label: "Home", href: "/" },
  { label: "Products", href: "/loan-types" },
  { label: name },
];

export const PRODUCT_PAGES: DetailPageContent[] = [
  // ---------------------------------------------------------------------------
  // Term Loans
  // ---------------------------------------------------------------------------
  {
    slug: "term-loans",
    kind: "product",
    name: "Term Loans",
    icon: "payments",
    art: `${PRODUCT_ART}/term-loan.png`,
    meta: {
      title: "Business Term Loans | FundLine Capital",
      description:
        "Term loans from $5K to $5M with fixed rates and terms of 6 to 60 months. One application, shopped by a broker to the lenders that fit your business.",
    },
    breadcrumb: productCrumb("Term Loans"),
    hero: {
      headingLine1: "Fund your business",
      headingLine2: "with a term loan.",
      accentLine2: true,
      sub: "Borrow $5K to $5M as one lump sum and repay it on a fixed schedule over 6 to 60 months.¹ Apply once with no impact to your credit score² and we shop it to the lenders that fit. Accepted offers can fund in as little as 24 hours.³",
      cta: APPLY,
      fineprint: FINEPRINT,
      estimator: {
        title: "How much do you need?",
        label: "Funding amount",
        min: 5000,
        max: 5000000,
        step: 5000,
        initial: 150000,
        apr: 9.99,
        termMonths: 36,
        cta: APPLY,
        note: ESTIMATOR_NOTE,
      },
    },
    stat: {
      value: "$1.2B+",
      label: "matched to small businesses",
      blurb: "Term loans are the most common product we place, from a $20K walk-in cooler to a $3M second plant.",
    },
    features: {
      headingLine1: "One lump sum.",
      headingLine2: "One predictable payment.",
      sub: "A term loan is the right tool when the project has a price tag. Here is what you get when we place one.",
      cards: [
        {
          icon: "lock",
          title: "Fixed rate, fixed schedule",
          body: "Your APR is locked for the life of the loan and every payment is printed in the agreement before you sign. No surprises in month 14.",
        },
        {
          icon: "schedule",
          title: "Terms from 6 to 60 months",
          body: "Short terms for inventory and marketing pushes. Longer terms for build-outs and acquisitions so the payment fits the ramp.",
        },
        {
          icon: "savings",
          title: "No prepayment penalty",
          body: "Most lenders we work with let you pay the balance early and stop interest that day. We flag the ones that don't before you accept.",
        },
      ],
    },
    callout: {
      icon: "calculate",
      heading: "Not sure a term loan is the fit?",
      boldLead: "Run the numbers first.",
      body: "Our payment calculator shows the monthly cost of any amount, rate and term side by side so you know what you're asking for before you apply.",
      cta: { label: "Try the calculator", href: "/calculators" },
    },
    steps: {
      heading: "How a term loan comes together",
      items: [
        {
          title: "Apply in 15 minutes",
          body: "Tell us the amount, what it funds and connect your business bank account. No documents to scan on day one.",
        },
        {
          title: "Compare real offers",
          body: "Your funding specialist shops the file to the lenders that fit and lays the offers out by APR, term and payment.",
        },
        {
          title: "Sign and fund",
          body: "Accept the offer you like, e-sign the agreement and the lender wires the full amount, often within 24 hours.",
        },
      ],
      mock: {
        businessName: "Harbor Lane Bakery",
        availableLabel: "Loan amount",
        available: "$150,000",
        limit: "36-month term",
        balanceLabel: "Remaining balance",
        balance: "$121,480",
        primaryAction: "Make a payment",
        rows: [
          { label: "Fixed APR", value: "9.99%" },
          { label: "Monthly payment", value: "$4,839" },
          { label: "Next payment", value: "Oct 1" },
          { label: "Payments made", value: "7 of 36" },
        ],
      },
    },
    support: {
      headingLine1: "A specialist who reads",
      headingLine2: "the offer with you.",
      body: "Every term loan we place comes with a named funding specialist. They explain origination fees, guarantees and liens in plain English and stay on the file until the wire lands.",
      link: BOOK_CALL,
    },
    reviews: {
      heading: "What business owners say about their term loans",
      ...REVIEWS_HEADER,
      items: [
        { title: "Second location, funded in a week", body: "We had a lease signed and no cash for the build-out. Three offers in four days, money in six. The new shop opened on schedule.", author: "Marisol" },
        { title: "Finally a fixed payment", body: "Refinanced a daily-debit advance into a 36-month term loan. Same debt, half the monthly outflow. I can breathe again.", author: "D. K." },
        { title: "They explained every fee", body: "My specialist walked me through the origination fee and the guarantee before I signed. Nobody at my bank ever did that.", author: "Tom" },
        { title: "Bought the competitor", body: "Needed $600K to acquire a rival shop. FundLine found a lender that priced it off the target's cash flow, not just mine.", author: "Priya" },
        { title: "No hard pull to apply", body: "I was nervous about my credit. Applying didn't touch it, and the lender only pulled when I accepted. Exactly as promised.", author: "Andre" },
        { title: "Paid it off early, no penalty", body: "A big contract came in and I cleared the balance in month 11. Interest stopped that day. Worth every minute of the application.", author: "L. M." },
      ],
    },
    faq: {
      heading: "Term loan questions, answered",
      items: [
        { question: "How much can I borrow with a term loan?", answer: "Term loans through the FundLine network run from $5,000 to $5,000,000. The amount a lender offers depends on your monthly revenue, time in business and credit profile. Most first-time borrowers land between $25K and $250K." },
        { question: "What terms and rates should I expect?", answer: "Terms run from 6 to 60 months. Fixed APRs in our network start around 7.99% for the strongest files and run higher for newer businesses or thinner credit. Every offer shows APR, so you compare on the same basis." },
        { question: "How fast can a term loan fund?", answer: "Most business owners see offers within one to three business days of applying. Once you accept and sign, many lenders wire the same or next business day. Larger loans over $500K can take a week while the lender verifies financials." },
        { question: "Who qualifies for a term loan?", answer: "Most programs want at least 12 months in business, $10,000 or more in average monthly revenue and a personal credit score of 600 or higher. Stronger numbers unlock lower rates and longer terms. Newer businesses are usually routed to a line of credit or starter program instead." },
        { question: "Does applying affect my credit score?", answer: "No. Submitting an application to FundLine does not affect your personal credit score. If you accept an offer, the lender may run a hard inquiry, which they disclose before you proceed." },
        { question: "What can I use a term loan for?", answer: "Anything with a known, one-time cost: a build-out, a large inventory order, new equipment, hiring ahead of a contract, an acquisition or refinancing an expensive advance. Lenders ask the purpose, but most do not restrict it." },
        { question: "Is there a prepayment penalty?", answer: "Most lenders we work with charge none, and interest stops accruing the day you pay the balance. A few programs charge a small fee in the first year. Your specialist flags it on the offer sheet so there are no surprises." },
        { question: "Will I need collateral or a personal guarantee?", answer: "Loans under about $250K are usually unsecured but carry a personal guarantee. Larger loans may require a UCC lien on business assets. Both are disclosed on the offer before you accept, and your specialist explains what each means." },
        { question: "What fees come with a term loan?", answer: "Expect an origination fee of 1% to 4% of principal, deducted from proceeds before funding. Some lenders add a small documentation fee. FundLine does not charge you an application fee; we are paid by the lender when a loan closes." },
        { question: "Is FundLine the lender?", answer: "No. FundLine Capital is a commercial loan broker. We take one application and shop it to the lenders we work with that fit your business. The lender you choose issues the agreement, funds the loan and services it." },
      ],
    },
    ctaCards: [
      {
        icon: "credit_score",
        heading: "Need flexibility instead of a lump sum?",
        body: "A business line of credit lets you draw what you need, when you need it, and pay interest only on what you use.",
        cta: { label: "Explore lines of credit", href: "/line-of-credit" },
        tone: "light",
      },
      {
        icon: "account_balance",
        heading: "Big project, longer runway?",
        body: "SBA loans stretch repayment to 10 or 25 years with government-backed rates for established businesses that can plan ahead.",
        cta: { label: "Explore SBA loans", href: "/sba-loans" },
        tone: "periwinkle",
      },
    ],
    guides: {
      heading: "Before you borrow",
      sub: "Short reads from the FundLine team on getting the best term loan offer.",
      cards: [
        { tag: "Guide", title: "Getting ready to borrow", body: "The six numbers lenders check first and how to clean them up before you apply.", href: "/guides/getting-ready-to-borrow", icon: "description" },
        { tag: "Blog", title: "Term loans for growing companies", body: "When a lump sum beats a revolving line, with three real-world scenarios.", href: "/blog/term-loan-for-growing-companies", icon: "trending_up" },
        { tag: "Tool", title: "Payment calculator", body: "See the monthly payment for any amount, APR and term before you apply.", href: "/calculators", icon: "calculate" },
      ],
    },
    closing: {
      headingLine1: "Ready to fund the plan?",
      headingLine2: "Apply once. We do the shopping.",
      cta: APPLY,
      note: "15-minute application. No impact to your credit score. Offers in as little as 24 hours.",
    },
    footnotes: [
      "¹ Amounts, terms and rates vary by lender and depend on your business's revenue, time in business and credit profile. Not every applicant will qualify for the maximum amount or the lowest rate.",
      "² Submitting an application to FundLine Capital does not affect your personal credit score. Accepting an offer may involve a hard credit inquiry by the lender, which is disclosed before you proceed.",
      "³ Funding speed depends on the lender, the loan amount and how quickly required documents are provided. Loans over $500,000 typically take longer.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Business Line of Credit
  // ---------------------------------------------------------------------------
  {
    slug: "line-of-credit",
    kind: "product",
    name: "Business Line of Credit",
    icon: "credit_score",
    art: `${PRODUCT_ART}/line-of-credit.png`,
    meta: {
      title: "Business Line of Credit | FundLine Capital",
      description:
        "Revolving business lines of credit from $5K to $500K. Draw what you need, pay interest only on what you use, and reuse the limit as you repay. One application, shopped by a broker.",
    },
    breadcrumb: productCrumb("Business Line of Credit"),
    hero: {
      headingLine1: "Grow your business",
      headingLine2: "with a line of credit.",
      accentLine2: true,
      sub: "Get a revolving limit from $5K to $500K and draw only what you need, when you need it.¹ Interest accrues on the outstanding balance, not the full limit.² Apply once with no impact to your credit score and see offers in as little as 24 hours.³",
      cta: APPLY,
      fineprint: FINEPRINT,
      estimator: {
        title: "How much do you need?",
        label: "Credit limit",
        min: 5000,
        max: 500000,
        step: 5000,
        initial: 50000,
        apr: 12.99,
        termMonths: 12,
        cta: APPLY,
        note: "Estimate assumes a full draw repaid over 12 months. Interest is charged only on what you draw.",
      },
    },
    stat: {
      value: "24 hrs",
      label: "fastest time to funding",
      blurb: "Lines of credit are the fastest product we place because lenders decide on bank data, not a stack of documents.",
    },
    features: {
      headingLine1: "Draw when you need it.",
      headingLine2: "Pay only for what you use.",
      sub: "A line of credit is the working-capital tool for businesses whose cash needs move around. Here is how the lines we place work.",
      cards: [
        {
          icon: "sync",
          title: "Revolving limit",
          body: "Draw, repay, draw again. As you pay down the balance the room comes back, so one approval covers a whole season of needs.",
        },
        {
          icon: "bolt",
          title: "Draws in minutes",
          body: "Once the line is open, most lenders send draws to your bank account the same day, some within the hour.",
        },
        {
          icon: "savings",
          title: "Interest on the balance only",
          body: "An unused line costs nothing with most lenders. You pay interest on what you've drawn, for the weeks it's outstanding.",
        },
      ],
    },
    callout: {
      icon: "trending_up",
      heading: "Line of credit or term loan?",
      boldLead: "Seasonal cash flow favors the line.",
      body: "If the need is recurring and the amount changes month to month, a line beats a lump sum. If it's one project with one price, a term loan is usually cheaper. Our guide walks through both.",
      cta: { label: "Read the comparison", href: "/blog/line-of-credit-vs-term-loan-seasonal-cash-flow" },
    },
    steps: {
      heading: "How your line gets opened",
      items: [
        {
          title: "Apply and connect your bank",
          body: "A 15-minute application plus a secure, read-only bank connection. That's usually all a line-of-credit lender needs to decide.",
        },
        {
          title: "Compare limits and rates",
          body: "Your funding specialist shops the file and shows each offer's limit, draw fee and APR so you can pick the line that fits.",
        },
        {
          title: "Open the line and draw",
          body: "E-sign, then draw what you need from the lender's dashboard. The rest of the limit waits for you.",
        },
      ],
      mock: {
        businessName: "Cedar & Sons Plumbing",
        availableLabel: "Available to draw",
        available: "$38,500",
        limit: "of $50,000 limit",
        balanceLabel: "Outstanding balance",
        balance: "$11,500",
        primaryAction: "Request a draw",
        rows: [
          { label: "APR", value: "12.99%" },
          { label: "Weekly payment", value: "$487" },
          { label: "Last draw", value: "$6,000 · Sep 4" },
          { label: "Draw fee", value: "1.5%" },
        ],
      },
    },
    support: {
      headingLine1: "Questions about draws,",
      headingLine2: "fees or limit increases?",
      body: "Your funding specialist stays on the file after the line opens. Need a higher limit in six months or a second line with a different lender? One call, not a new application from scratch.",
      link: BOOK_CALL,
    },
    reviews: {
      heading: "What business owners say about their lines",
      ...REVIEWS_HEADER,
      items: [
        { title: "Payroll never sweats now", body: "Our biggest customer pays net-60. The line covers payroll in the gap and I pay it back the day their check lands. Simple.", author: "Renee" },
        { title: "Open in two days", body: "Applied Tuesday afternoon, line open Thursday, first draw Thursday night. Three offers to pick from, all clear on fees.", author: "J. P." },
        { title: "Only pay for what I draw", body: "I keep a $75K line and use maybe $20K a few times a year. The unused part costs me nothing. Best safety net I've had.", author: "Omar" },
        { title: "Limit went up in six months", body: "Started at $30K. After six months of on-time payments my specialist got it bumped to $80K without a new application.", author: "Kayla" },
        { title: "Honest about the draw fee", body: "One offer had a lower APR but a bigger draw fee. My specialist showed me the all-in cost for how I'd actually use it. Picked the other.", author: "Marcus" },
        { title: "Seasonal business lifesaver", body: "Landscaping. Slow from November to March. The line carries us through and gets paid off by June every year.", author: "B. T." },
      ],
    },
    faq: {
      heading: "Line of credit questions, answered",
      items: [
        { question: "How big a line can I get?", answer: "Lines in our network run from $5,000 to $500,000. Most lenders set the limit at roughly one to two months of your average revenue. As you build payment history, many lenders raise the limit on request." },
        { question: "How is interest charged on a line of credit?", answer: "Interest accrues only on the amount you have drawn, for the time it is outstanding. Some lenders quote a simple weekly or monthly rate; every offer we show includes the equivalent APR so you can compare." },
        { question: "Are there fees for keeping the line open?", answer: "Many lenders charge nothing when the line sits unused. Some charge a draw fee of 1% to 2% per draw, and a few charge an annual or monthly maintenance fee. Your specialist lists every fee on the offer sheet." },
        { question: "How fast can I draw?", answer: "Once the line is open, draws typically arrive in your bank account the same business day. Several lenders in our network fund draws within the hour during business hours." },
        { question: "Who qualifies for a line of credit?", answer: "Most programs want six months in business, $8,000 or more in average monthly revenue and a personal credit score of 600 or higher. Lines are often the first product a younger business qualifies for." },
        { question: "Does applying affect my credit score?", answer: "No. Applying through FundLine does not affect your personal credit score. Accepting an offer may involve a hard credit inquiry by the lender, which is disclosed first." },
        { question: "What is the repayment schedule?", answer: "Each draw is repaid on a weekly or monthly schedule over 6 to 24 months, depending on the lender. Repaying early is allowed with most lenders and restores your available limit immediately." },
        { question: "Can my limit increase over time?", answer: "Yes. After three to six months of on-time payments, most lenders will review the line for an increase. Your funding specialist can request it for you without a new full application." },
        { question: "Is a line of credit secured?", answer: "Lines under about $150K are usually unsecured with a personal guarantee. Larger lines may carry a UCC lien on business assets. Both are disclosed before you accept." },
        { question: "Is FundLine the lender?", answer: "No. FundLine Capital is a commercial loan broker. We shop your application to the line-of-credit lenders we work with that fit your business; the lender you choose opens and services the line." },
      ],
    },
    ctaCards: [
      {
        icon: "payments",
        heading: "Have one project with a fixed price?",
        body: "A term loan gives you the full amount up front with a fixed rate and a fixed payment over 6 to 60 months.",
        cta: { label: "Explore term loans", href: "/term-loans" },
        tone: "light",
      },
      {
        icon: "credit_card",
        heading: "Everyday spending, separate from personal?",
        body: "A business credit card handles small purchases, earns rewards and builds your business credit file.",
        cta: { label: "Explore business credit cards", href: "/business-credit-card" },
        tone: "periwinkle",
      },
    ],
    guides: {
      heading: "Before you open a line",
      sub: "Short reads on using a line of credit well.",
      cards: [
        { tag: "Blog", title: "Line of credit vs. term loan", body: "Which one fits seasonal cash flow, with a month-by-month example.", href: "/blog/line-of-credit-vs-term-loan-seasonal-cash-flow", icon: "sync" },
        { tag: "Blog", title: "Prepare bank statements for a faster decision", body: "What line-of-credit lenders look for in 90 days of transactions.", href: "/blog/how-to-prepare-bank-statements-for-a-faster-credit-decision", icon: "description" },
        { tag: "Guide", title: "Building business credit", body: "How on-time line payments build a credit file that unlocks bigger limits.", href: "/guides/business-credit", icon: "credit_score" },
      ],
    },
    closing: {
      headingLine1: "Open your line",
      headingLine2: "before you need it.",
      cta: APPLY,
      note: "15-minute application. No impact to your credit score. Most lines open within 24 hours of acceptance.",
    },
    footnotes: [
      "¹ Credit limits vary by lender and depend on your business's revenue, time in business and credit profile. Not every applicant will qualify for the maximum limit.",
      "² Some lenders charge draw fees or maintenance fees in addition to interest. All fees are disclosed on the offer before you accept.",
      "³ Submitting an application to FundLine Capital does not affect your personal credit score. Funding speed depends on the lender and on how quickly the bank connection or documents are provided.",
    ],
  },

  // ---------------------------------------------------------------------------
  // SBA Loans
  // ---------------------------------------------------------------------------
  {
    slug: "sba-loans",
    kind: "product",
    name: "SBA Loans",
    icon: "account_balance",
    art: `${PRODUCT_ART}/sba-7a.png`,
    meta: {
      title: "SBA Loans | FundLine Capital",
      description:
        "SBA 7(a), 504 and Express loans from $25K to $5M with terms up to 25 years. FundLine prepares the package and shops it to SBA-preferred lenders that fit your business.",
    },
    breadcrumb: productCrumb("SBA Loans"),
    hero: {
      headingLine1: "Grow your business with",
      headingLine2: "long terms, low SBA rates.",
      accentLine2: true,
      sub: "SBA loans stretch repayment to 10 or 25 years at rates capped by the program, for amounts from $25K to $5M.¹ The paperwork is real, so we prepare the package and shop it to SBA-preferred lenders.² Applying does not affect your credit score.³",
      cta: APPLY,
      fineprint: FINEPRINT,
      estimator: {
        title: "How much do you need?",
        label: "Funding amount",
        min: 25000,
        max: 5000000,
        step: 25000,
        initial: 500000,
        apr: 8.5,
        termMonths: 120,
        cta: APPLY,
        note: "Estimate uses a 10-year term. Real estate purchases may qualify for up to 25 years.",
      },
    },
    stat: {
      value: "10–25 yrs",
      label: "repayment terms on SBA 7(a) and 504 loans",
      blurb: "Longer terms mean a $500K loan can carry a payment closer to a lease than a loan, which is why business owners wait for SBA.",
    },
    features: {
      headingLine1: "Worth the wait",
      headingLine2: "for the right project.",
      sub: "SBA loans trade speed for the best terms available to a small business. Here is what the programs we place look like.",
      cards: [
        {
          icon: "account_balance",
          title: "SBA 7(a)",
          body: "The general-purpose program: working capital, acquisitions, refinancing and real estate up to $5M with terms to 10 years, or 25 for property.",
        },
        {
          icon: "apartment",
          title: "SBA 504",
          body: "Fixed-rate financing for buildings and heavy equipment, typically 10% down, with a bank and a certified development company sharing the loan.",
        },
        {
          icon: "bolt",
          title: "SBA Express",
          body: "A streamlined review for amounts up to $500K when you want SBA terms without the full 7(a) timeline. Decisions in weeks, not months.",
        },
      ],
    },
    callout: {
      icon: "description",
      heading: "The SBA package, handled",
      boldLead: "We assemble it so the lender says yes faster.",
      body: "Three years of returns, a debt schedule, a projection and a personal financial statement. Your funding specialist collects and organizes the file so it lands lender-ready on the first pass.",
      cta: { label: "See what to prepare", href: "/guides/getting-ready-to-borrow" },
    },
    steps: {
      heading: "How an SBA loan comes together",
      items: [
        {
          title: "Apply and build the package",
          body: "Start with the 15-minute application. Your specialist then gathers the SBA forms and financials with you over a few days.",
        },
        {
          title: "Compare lender offers",
          body: "We shop the package to SBA-preferred lenders that fit your industry and size, then compare rate, term, fees and equity required.",
        },
        {
          title: "Close and fund",
          body: "Underwriting and closing typically take 30 to 90 days. Your specialist tracks every condition until funds are wired.",
        },
      ],
      mock: {
        businessName: "Ridgeview Dental Group",
        availableLabel: "Loan amount",
        available: "$500,000",
        limit: "SBA 7(a) · 120-month term",
        balanceLabel: "Remaining balance",
        balance: "$468,220",
        primaryAction: "View amortization",
        rows: [
          { label: "Rate", value: "Prime + 2.25%" },
          { label: "Monthly payment", value: "$6,199" },
          { label: "SBA guarantee fee", value: "Financed" },
          { label: "Funded", value: "Jun 12" },
        ],
      },
    },
    support: {
      headingLine1: "SBA is paperwork.",
      headingLine2: "We carry the folder.",
      body: "Business owners who go it alone often stall on forms and conditions. Your FundLine specialist has walked hundreds of SBA files through closing and knows what each lender wants to see.",
      link: BOOK_CALL,
    },
    reviews: {
      heading: "What business owners say about their SBA loans",
      ...REVIEWS_HEADER,
      items: [
        { title: "Bought our building", body: "SBA 504, 25-year term, 10% down. Our mortgage is less than the rent was. FundLine handled the two-lender structure entirely.", author: "Gloria" },
        { title: "Closed in 41 days", body: "Everyone told me SBA takes six months. My specialist had the package ready in a week and we funded in 41 days.", author: "R. S." },
        { title: "Acquisition done right", body: "Bought out my partner with a 7(a). The lender priced it off our cash flow and the 10-year term keeps the payment sane.", author: "Devin" },
        { title: "They knew which lender", body: "Two banks turned us down. FundLine sent the file to an SBA lender that does restaurants. Approved with a better rate.", author: "Nadia" },
        { title: "Express when we needed speed", body: "Needed $250K for a contract in six weeks. SBA Express through FundLine got us there with SBA terms.", author: "Wes" },
        { title: "Refinanced three loans into one", body: "Consolidated a term loan and two advances into a 7(a). Monthly outflow dropped by 60%. Should have done it a year ago.", author: "A. C." },
      ],
    },
    faq: {
      heading: "SBA loan questions, answered",
      items: [
        { question: "What is an SBA loan?", answer: "A loan made by a bank or licensed lender and partially guaranteed by the U.S. Small Business Administration. The guarantee lets lenders offer longer terms and lower rates than they otherwise would. The SBA does not lend directly, and neither does FundLine." },
        { question: "How much can I borrow?", answer: "SBA 7(a) loans go up to $5 million. SBA Express caps at $500,000. SBA 504 projects can exceed $5 million when the bank portion is counted. Most SBA loans we place fall between $150K and $2M." },
        { question: "What rates should I expect?", answer: "SBA 7(a) rates are capped by the program at prime plus a spread, typically 2.25% to 3% for larger loans. SBA 504 loans carry a fixed rate set at funding. Your offers show the exact rate and whether it is fixed or variable." },
        { question: "How long does an SBA loan take?", answer: "Plan on 30 to 90 days from complete package to funding for 7(a) and 504. SBA Express can close in two to four weeks. The biggest variable is how quickly the financial documents come together, which is where your specialist helps." },
        { question: "Who qualifies for an SBA loan?", answer: "Generally two or more years in business, a personal credit score of 650 or higher, positive cash flow and no recent bankruptcies or defaults on government debt. Some lenders will consider younger businesses with strong owner experience and a solid projection." },
        { question: "What documents will I need?", answer: "Three years of business and personal tax returns, a current profit-and-loss and balance sheet, a business debt schedule, a personal financial statement and SBA forms 1919 and 413. For acquisitions and real estate, add the purchase agreement. Your specialist provides the checklist." },
        { question: "Is a down payment required?", answer: "Often yes. Acquisitions and real estate typically require 10% equity injection. Working-capital 7(a) loans may require none. SBA 504 requires 10% down for most borrowers, 15% for special-purpose properties." },
        { question: "Does applying affect my credit score?", answer: "Applying through FundLine does not affect your personal credit score. SBA lenders run a hard inquiry during underwriting after you have chosen an offer, and they tell you before they do." },
        { question: "What are the fees?", answer: "The SBA charges a guarantee fee of roughly 2% to 3.5% of the guaranteed portion on loans over $1 million; smaller loans often have reduced or waived fees. Lenders may add packaging and closing costs. Fees can usually be financed into the loan." },
        { question: "Can I refinance existing debt with an SBA loan?", answer: "Yes. Refinancing high-cost advances or short-term loans into a 7(a) is one of the most common uses we place. The lender must see that the new loan improves your cash flow, which is usually easy to show." },
      ],
    },
    ctaCards: [
      {
        icon: "payments",
        heading: "Can't wait 60 days?",
        body: "A term loan funds in days instead of months. Many business owners take one now and refinance into SBA later.",
        cta: { label: "Explore term loans", href: "/term-loans" },
        tone: "light",
      },
      {
        icon: "apartment",
        heading: "Buying the building you work from?",
        body: "Commercial real estate loans, including SBA 504, finance the purchase with terms up to 25 years.",
        cta: { label: "Explore real estate loans", href: "/commercial-real-estate" },
        tone: "periwinkle",
      },
    ],
    guides: {
      heading: "Before you apply for SBA",
      sub: "Reads that shorten the timeline.",
      cards: [
        { tag: "Guide", title: "Getting ready to borrow", body: "The documents and ratios SBA lenders check, and how to get them in order.", href: "/guides/getting-ready-to-borrow", icon: "description" },
        { tag: "Guide", title: "Business financing, explained", body: "Where SBA fits next to term loans, lines and real estate financing.", href: "/guides/business-financing", icon: "account_balance" },
        { tag: "Blog", title: "How much funding really costs by stage", body: "Why SBA terms beat the sticker rate on faster products over 10 years.", href: "/blog/funding-cost-by-stage", icon: "calculate" },
      ],
    },
    closing: {
      headingLine1: "Start the SBA package.",
      headingLine2: "Weeks, not quarters.",
      cta: APPLY,
      note: "15-minute application. No impact to your credit score. A specialist assembles the SBA file with you.",
    },
    footnotes: [
      "¹ Maximum amounts and terms are set by SBA program rules and by the individual lender. Rates are capped by the SBA and vary with the prime rate; not every applicant will qualify for the lowest rate.",
      "² FundLine Capital is not affiliated with the U.S. Small Business Administration. SBA loans are made by participating lenders; the SBA guarantees a portion of the loan to the lender.",
      "³ Submitting an application to FundLine Capital does not affect your personal credit score. SBA lenders run a hard credit inquiry during underwriting after you have selected an offer.",
      "⁴ Closing timelines are typical ranges and are not guaranteed. They depend on the lender, the loan type and how quickly the required documents are provided.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Equipment Financing
  // ---------------------------------------------------------------------------
  {
    slug: "equipment-financing",
    kind: "product",
    name: "Equipment Financing",
    icon: "precision_manufacturing",
    art: `${PRODUCT_ART}/equipment-financing.png`,
    meta: {
      title: "Equipment Financing | FundLine Capital",
      description:
        "Finance trucks, machinery, kitchen and medical equipment from $5K to $5M with the equipment as collateral. Up to 100% financed, terms to 84 months. One application, shopped by a broker.",
    },
    breadcrumb: productCrumb("Equipment Financing"),
    hero: {
      headingLine1: "Fund the equipment",
      headingLine2: "your business runs on.",
      accentLine2: true,
      sub: "Finance up to 100% of the purchase price on new or used equipment from $5K to $5M, with terms from 12 to 84 months.¹ The equipment is the collateral, so approvals lean on the asset, not just your credit.² Apply with no impact to your credit score.³",
      cta: APPLY,
      fineprint: FINEPRINT,
      estimator: {
        title: "How much do you need?",
        label: "Equipment cost",
        min: 5000,
        max: 5000000,
        step: 5000,
        initial: 120000,
        apr: 8.99,
        termMonths: 60,
        cta: APPLY,
        note: ESTIMATOR_NOTE,
      },
    },
    stat: {
      value: "100%",
      label: "of the purchase price financed on most approvals",
      blurb: "Many lenders will fund the invoice in full, including delivery and installation, so the cash you have stays in the business.",
    },
    features: {
      headingLine1: "The asset carries",
      headingLine2: "the loan.",
      sub: "Equipment financing is secured by what you buy, which changes the math on approval, rate and speed.",
      cards: [
        {
          icon: "precision_manufacturing",
          title: "New or used, any category",
          body: "Trucks and trailers, CNC and packaging lines, ovens and walk-ins, dental and imaging, IT hardware. If it has an invoice, it can usually be financed.",
        },
        {
          icon: "schedule",
          title: "Terms matched to useful life",
          body: "12 to 84 months so the payment ends before the equipment does. Seasonal and deferred first-payment options with some lenders.",
        },
        {
          icon: "handshake",
          title: "Lender pays the vendor",
          body: "Once you accept, the lender pays your dealer or supplier directly. You take delivery and start the schedule; no cash out of your account.",
        },
      ],
    },
    callout: {
      icon: "calculate",
      heading: "Finance or lease?",
      boldLead: "Own it at the end, or hand it back.",
      body: "A loan builds equity in the machine and lets you write off depreciation. A lease keeps payments lower and swaps in newer gear at the end. Your specialist prices both so you can compare.",
      cta: { label: "Compare the numbers", href: "/calculators" },
    },
    steps: {
      heading: "How equipment financing comes together",
      items: [
        {
          title: "Apply with the quote",
          body: "Upload the vendor quote or invoice with the 15-minute application. For amounts under $250K that's often all the lender needs.",
        },
        {
          title: "Compare offers",
          body: "Your funding specialist shops it to lenders who know your equipment category and lays out rate, term, down payment and end-of-term options.",
        },
        {
          title: "Lender pays, you take delivery",
          body: "E-sign and the lender wires the vendor, often within 48 hours. Your first payment is usually 30 days after delivery.",
        },
      ],
      mock: {
        businessName: "Northgate Freight LLC",
        availableLabel: "Financed amount",
        available: "$120,000",
        limit: "2024 sleeper tractor · 60 months",
        balanceLabel: "Remaining balance",
        balance: "$104,310",
        primaryAction: "Make a payment",
        rows: [
          { label: "Fixed APR", value: "8.99%" },
          { label: "Monthly payment", value: "$2,490" },
          { label: "Down payment", value: "$0" },
          { label: "Payments made", value: "8 of 60" },
        ],
      },
    },
    support: {
      headingLine1: "Specialists who know",
      headingLine2: "your equipment.",
      body: "A tractor, a mill and an MRI are financed by different lenders on different terms. Your specialist routes the file to the ones who fund your category every week and negotiates like it.",
      link: BOOK_CALL,
    },
    reviews: {
      heading: "What business owners say about equipment financing",
      ...REVIEWS_HEADER,
      items: [
        { title: "Truck rolling in 3 days", body: "Sent the dealer quote Monday, lender paid the dealer Wednesday, driver was hauling Thursday. Zero down.", author: "Luis" },
        { title: "New oven, same cash on hand", body: "Financed a $48K deck oven at 100%. Kept my cash for the busy season instead of draining it on the purchase.", author: "H. N." },
        { title: "Used excavator, no problem", body: "Bank wouldn't touch a 2016 machine. FundLine found a lender who does used heavy equipment. 48 months, fair rate.", author: "Colton" },
        { title: "Dental chairs and imaging", body: "Two chairs and a panoramic unit on one 72-month schedule. Payment is less than the extra revenue in month one.", author: "Dr. Sana" },
        { title: "They priced a lease too", body: "I wanted to own it; my specialist showed me both anyway. The loan won on total cost. Appreciated the transparency.", author: "Frank" },
        { title: "Whole CNC line funded", body: "$640K for three machines plus install. One application, one lender, one payment. The plant is running two shifts now.", author: "M. R." },
      ],
    },
    faq: {
      heading: "Equipment financing questions, answered",
      items: [
        { question: "What equipment can be financed?", answer: "Almost anything with a commercial purpose and an invoice: commercial vehicles and trailers, construction and agricultural machinery, manufacturing and packaging lines, restaurant equipment, medical and dental equipment, IT hardware and software bundles. New and used both qualify with most lenders." },
        { question: "How much can I finance?", answer: "From $5,000 to $5,000,000 per transaction. Most lenders fund up to 100% of the invoice, and many include delivery, installation and training in the financed amount. Larger or specialized assets may require 10% to 20% down." },
        { question: "What terms and rates should I expect?", answer: "Terms run from 12 to 84 months and are usually matched to the useful life of the equipment. Fixed APRs in our network start around 6.99% for strong credit on new equipment and run higher for used equipment or younger businesses." },
        { question: "How fast does equipment financing fund?", answer: "Transactions under $250K with a clean vendor quote often fund within 48 hours of acceptance. Larger or multi-asset deals take three to ten business days while the lender verifies the vendor and the equipment." },
        { question: "Who qualifies?", answer: "Equipment lenders lean on the asset, so requirements are lighter than for unsecured loans: typically six months or more in business, a personal credit score of 600 or higher and enough revenue to cover the payment. Startups can qualify with a larger down payment." },
        { question: "Does applying affect my credit score?", answer: "No. Submitting an application to FundLine does not affect your personal credit score. The lender may run a hard inquiry once you accept an offer, which they disclose in advance." },
        { question: "Is a down payment required?", answer: "Often not. Most approvals for standard equipment finance 100% of the cost. Used equipment, specialized assets or newer businesses may require 10% to 20% down. Your offers state the down payment clearly." },
        { question: "Can I finance used equipment?", answer: "Yes. Many lenders we work with finance used trucks, machinery and medical equipment up to about ten years old, sometimes older for heavy equipment. Expect a slightly shorter term and a somewhat higher rate than for new." },
        { question: "What is the difference between an equipment loan and a lease?", answer: "With a loan you own the equipment from day one and it comes off the schedule when paid. With a lease the lender owns it, payments are often lower, and at the end you buy it for a set amount, return it or upgrade. Your specialist can price both." },
        { question: "Is FundLine the lender?", answer: "No. FundLine Capital is a commercial loan broker. We shop your application to the equipment lenders we work with that fit your asset and industry; the lender you choose funds the purchase and holds the lien." },
      ],
    },
    ctaCards: [
      {
        icon: "credit_score",
        heading: "Need cash for parts, fuel and crews too?",
        body: "Pair the equipment loan with a line of credit for the working capital the new machine will need.",
        cta: { label: "Explore lines of credit", href: "/line-of-credit" },
        tone: "light",
      },
      {
        icon: "account_balance",
        heading: "Financing a major plant expansion?",
        body: "SBA 504 loans cover heavy equipment and buildings together with fixed rates and terms up to 25 years.",
        cta: { label: "Explore SBA loans", href: "/sba-loans" },
        tone: "periwinkle",
      },
    ],
    guides: {
      heading: "Before you buy the equipment",
      sub: "Short reads on financing assets well.",
      cards: [
        { tag: "Guide", title: "Business financing, explained", body: "Where equipment loans fit next to term loans and lines of credit.", href: "/guides/business-financing", icon: "precision_manufacturing" },
        { tag: "Blog", title: "Which lenders fund businesses under two years old", body: "Equipment financing is often the first yes for a young company.", href: "/blog/which-online-lenders-still-fund-businesses-under-two-years-old", icon: "storefront" },
        { tag: "Tool", title: "Payment calculator", body: "See the monthly payment for any equipment cost, rate and term.", href: "/calculators", icon: "calculate" },
      ],
    },
    closing: {
      headingLine1: "Got the quote?",
      headingLine2: "Let's get it funded.",
      cta: APPLY,
      note: "15-minute application. No impact to your credit score. Many purchases funded within 48 hours.",
    },
    footnotes: [
      "¹ Financed amounts, terms and rates vary by lender and depend on the equipment type, age and condition as well as your business's revenue, time in business and credit profile.",
      "² The financed equipment serves as collateral. Some lenders also require a personal guarantee, disclosed before you accept an offer.",
      "³ Submitting an application to FundLine Capital does not affect your personal credit score. Accepting an offer may involve a hard credit inquiry by the lender.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Invoice Financing
  // ---------------------------------------------------------------------------
  {
    slug: "invoice-financing",
    kind: "product",
    name: "Invoice Financing",
    icon: "receipt_long",
    art: `${PRODUCT_ART}/invoice-financing.png`,
    meta: {
      title: "Invoice Financing | FundLine Capital",
      description:
        "Advance up to 90% of unpaid B2B invoices within 24 hours. Facilities from $5K to $5M with fees from 1% per month. One application, shopped by a broker to the funders that fit your industry.",
    },
    breadcrumb: productCrumb("Invoice Financing"),
    hero: {
      headingLine1: "Stop waiting on net-60",
      headingLine2: "customers to get paid.",
      accentLine2: true,
      sub: "Advance up to 90% of an unpaid invoice within 24 hours and get the rest, less a fee, when your customer pays.¹ Facilities from $5K to $5M, sized to your receivables rather than your credit score.² Apply with no impact to your credit.³",
      cta: APPLY,
      fineprint: FINEPRINT,
      estimator: {
        title: "How much do you need?",
        label: "Invoice amount",
        min: 5000,
        max: 5000000,
        step: 5000,
        initial: 75000,
        apr: 14.5,
        termMonths: 3,
        cta: APPLY,
        note: "Estimate assumes a 90-day invoice. Most funders quote a fee per 30 days outstanding rather than an APR.",
      },
    },
    stat: {
      value: "90%",
      label: "of the invoice value advanced up front",
      blurb: "The remaining 10%, less the funder's fee, is released the day your customer pays the invoice.",
    },
    features: {
      headingLine1: "Your receivables,",
      headingLine2: "paid on your schedule.",
      sub: "Invoice financing turns the money you've already earned into cash you can use now. Here is how the facilities we place work.",
      cards: [
        {
          icon: "bolt",
          title: "Advances in 24 hours",
          body: "Upload the invoice, get up to 90% wired the next business day. Recurring invoices to the same customers fund even faster.",
        },
        {
          icon: "verified_user",
          title: "Approval on your customers' credit",
          body: "Funders underwrite the businesses that owe you, not just your file. Strong customers mean higher advances and lower fees.",
        },
        {
          icon: "sync",
          title: "Grows with your sales",
          body: "The facility limit rises as your invoicing does. Land a bigger contract and the funding for it comes along.",
        },
      ],
    },
    callout: {
      icon: "receipt_long",
      heading: "Financing or factoring?",
      boldLead: "Who collects from your customer matters.",
      body: "With invoice financing you keep collecting and your customer never knows. With factoring the funder buys the invoice and collects directly, often at a lower fee. We place both and explain the trade-off.",
      cta: { label: "Read the financing guide", href: "/guides/business-financing" },
    },
    steps: {
      heading: "How invoice financing comes together",
      items: [
        {
          title: "Apply and share your aging report",
          body: "The 15-minute application plus a receivables aging report from your accounting software. That shows funders what they're advancing against.",
        },
        {
          title: "Compare advance rates and fees",
          body: "Your funding specialist shops the file to funders who know your industry and compares advance rate, fee per 30 days and any minimums.",
        },
        {
          title: "Upload invoices, get funded",
          body: "Once the facility is open, submit invoices as you issue them. Advances land the next business day; the balance follows when the customer pays.",
        },
      ],
      mock: {
        businessName: "Brightline Staffing Co.",
        availableLabel: "Available to advance",
        available: "$142,000",
        limit: "of $250,000 facility",
        balanceLabel: "Advanced, awaiting payment",
        balance: "$108,000",
        primaryAction: "Upload an invoice",
        rows: [
          { label: "Advance rate", value: "90%" },
          { label: "Fee per 30 days", value: "1.5%" },
          { label: "Invoices open", value: "14" },
          { label: "Next customer payment", value: "Sep 22 · $31,200" },
        ],
      },
    },
    support: {
      headingLine1: "Funders who know",
      headingLine2: "your customers' habits.",
      body: "Staffing, freight, wholesale and government contractors all get paid differently. Your specialist matches you with funders who already advance against those customers and understand their pay cycles.",
      link: BOOK_CALL,
    },
    reviews: {
      heading: "What business owners say about invoice financing",
      ...REVIEWS_HEADER,
      items: [
        { title: "Payroll every Friday, no stress", body: "We staff 60 temps and bill net-45. Advances hit Thursday, payroll clears Friday. The facility scaled with us from $80K to $300K.", author: "Teresa" },
        { title: "Government contract, finally workable", body: "Net-90 from a state agency was killing us. Now we advance 85% the week we invoice. Growth stopped being a cash problem.", author: "K. O." },
        { title: "Customers never knew", body: "I was worried about factoring. FundLine placed a financing line instead; I still collect, nobody's the wiser.", author: "Jamal" },
        { title: "Fee was clear and fair", body: "1.4% per 30 days on a $40K invoice paid in 35 days. Cost me about $650 to get paid five weeks early. Easy math.", author: "Ivy" },
        { title: "Took the big order", body: "A retailer placed a $200K order I couldn't float. Advanced the invoice, bought the goods, delivered on time. Repeat order came in.", author: "S. W." },
        { title: "Set up in three days", body: "Sent the aging report Monday, facility open Wednesday, first advance Thursday. Faster than my bank returned my call.", author: "Noah" },
      ],
    },
    faq: {
      heading: "Invoice financing questions, answered",
      items: [
        { question: "How does invoice financing work?", answer: "You issue an invoice to a business customer as usual and upload it to the funder. The funder advances 80% to 90% of its value within a day. When your customer pays, the funder releases the remainder minus a fee based on how long the invoice was outstanding." },
        { question: "How much can I advance?", answer: "Facilities run from $5,000 to $5,000,000 and are sized to your outstanding receivables. A business invoicing $100K a month with net-45 terms might open a $150K facility. Limits grow as invoicing grows." },
        { question: "What does invoice financing cost?", answer: "Funders in our network charge roughly 1% to 3% of the invoice value per 30 days outstanding, depending on your customers' credit and invoice volume. A $50K invoice paid in 45 days at 1.5% per 30 days costs about $1,125. Every offer shows the equivalent APR too." },
        { question: "How fast can I get funded?", answer: "Opening a facility takes two to five business days after we receive your aging report. Once open, individual advances land the next business day, and some funders wire the same day for repeat customers." },
        { question: "Who qualifies for invoice financing?", answer: "Businesses that invoice other businesses or government agencies on terms of 30 to 90 days. Funders care most about your customers' creditworthiness and your invoicing history. Personal credit and time in business matter less than with other products." },
        { question: "Does applying affect my credit score?", answer: "No. Applying through FundLine does not affect your personal credit score. Invoice funders focus on your receivables and typically run only a soft inquiry on you." },
        { question: "Will my customers know?", answer: "With invoice financing, no: you keep collecting and remit when paid. With factoring, the funder buys the invoice and collects directly, so your customer receives a notice of assignment. Your specialist places whichever you prefer." },
        { question: "What is the difference between invoice financing and factoring?", answer: "Financing is a loan against your invoices; you stay in control of collections. Factoring is a sale of the invoice; the factor collects and often assumes the risk of non-payment. Factoring fees are usually a bit lower for that reason." },
        { question: "What happens if my customer doesn't pay?", answer: "Under a recourse facility, the most common type, you repay the advance or swap in another invoice after a set period, usually 90 days. Non-recourse facilities shift that risk to the funder at a higher fee. Your offer states which type it is." },
        { question: "Can I choose which invoices to finance?", answer: "Yes, with most funders. Spot financing lets you advance a single large invoice; whole-ledger facilities advance everything and carry lower fees. Your specialist explains the minimums, if any, on each offer." },
      ],
    },
    ctaCards: [
      {
        icon: "credit_score",
        heading: "Need cash that isn't tied to invoices?",
        body: "A business line of credit covers rent, marketing and payroll gaps that receivables can't.",
        cta: { label: "Explore lines of credit", href: "/line-of-credit" },
        tone: "light",
      },
      {
        icon: "point_of_sale",
        heading: "Sell to consumers instead of businesses?",
        body: "A merchant cash advance is repaid from card sales, so it fits retail and restaurants the way invoices fit B2B.",
        cta: { label: "Explore merchant cash advances", href: "/merchant-cash-advance" },
        tone: "periwinkle",
      },
    ],
    guides: {
      heading: "Before you finance invoices",
      sub: "Short reads on receivables and cash flow.",
      cards: [
        { tag: "Guide", title: "Business financing, explained", body: "Invoice financing, factoring and where each fits in a cash-flow plan.", href: "/guides/business-financing", icon: "receipt_long" },
        { tag: "Blog", title: "Same-day funding offers", body: "Which products fund fastest and what to have ready before you apply.", href: "/blog/where-owners-can-accept-a-funding-offer-the-same-day", icon: "bolt" },
        { tag: "Guide", title: "Getting ready to borrow", body: "How to pull an aging report and the other numbers funders ask for.", href: "/guides/getting-ready-to-borrow", icon: "description" },
      ],
    },
    closing: {
      headingLine1: "Your invoices are money.",
      headingLine2: "Use them now.",
      cta: APPLY,
      note: "15-minute application. No impact to your credit score. Advances in as little as 24 hours once your facility is open.",
    },
    footnotes: [
      "¹ Advance rates, fees and facility limits vary by funder and depend on your customers' creditworthiness, invoice volume and industry. Not every applicant will qualify for the maximum advance rate.",
      "² Most invoice-financing facilities are recourse facilities: if a customer does not pay within the agreed period, you are responsible for repaying the advance.",
      "³ Submitting an application to FundLine Capital does not affect your personal credit score. Funders may run a soft credit inquiry and will disclose any hard inquiry before it occurs.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Merchant Cash Advance
  // ---------------------------------------------------------------------------
  {
    slug: "merchant-cash-advance",
    kind: "product",
    name: "Merchant Cash Advance",
    icon: "point_of_sale",
    art: `${PRODUCT_ART}/merchant-cash-advance.png`,
    meta: {
      title: "Merchant Cash Advance | FundLine Capital",
      description:
        "Merchant cash advances from $5K to $500K, repaid as a percentage of daily card sales. Approvals on revenue, funding in 24 hours. FundLine shops your file and shows the APR next to the factor rate.",
    },
    breadcrumb: productCrumb("Merchant Cash Advance"),
    hero: {
      headingLine1: "Funding that follows",
      headingLine2: "your card sales.",
      accentLine2: true,
      sub: "Get $5K to $500K against future card sales and repay a fixed percentage of each day's revenue, so slow days cost less.¹ Approvals lean on sales volume, not credit, and funds can land in 24 hours.² We show every offer's APR next to its factor rate.³",
      cta: APPLY,
      fineprint: FINEPRINT,
      estimator: {
        title: "How much do you need?",
        label: "Advance amount",
        min: 5000,
        max: 500000,
        step: 5000,
        initial: 40000,
        apr: 29.9,
        termMonths: 9,
        cta: APPLY,
        note: "Estimate assumes repayment over 9 months. Actual repayment follows your daily card sales, so the timeline varies.",
      },
    },
    stat: {
      value: "24 hrs",
      label: "fastest time to funding",
      blurb: "Advances are the fastest capital we place, which is why restaurants and retailers reach for them ahead of a busy weekend.",
    },
    features: {
      headingLine1: "Fast when it has to be.",
      headingLine2: "Honest about the cost.",
      sub: "An advance is a tool for short, high-return needs. Here is how the ones we place work, and how we keep the cost visible.",
      cards: [
        {
          icon: "point_of_sale",
          title: "Repaid from daily sales",
          body: "A set holdback, typically 8% to 15% of card receipts, comes off each day's deposits. Sell less, pay less that day.",
        },
        {
          icon: "trending_up",
          title: "Approved on revenue",
          body: "Funders look at three to six months of card processing and bank deposits. Credit scores in the 500s can still qualify.",
        },
        {
          icon: "calculate",
          title: "Factor rate and APR, side by side",
          body: "A 1.25 factor rate sounds small. We show the APR it implies at your sales pace so you compare it fairly with a loan or line.",
        },
      ],
    },
    callout: {
      icon: "sync",
      heading: "Already carrying an advance?",
      boldLead: "Refinancing may cut the daily hit in half.",
      body: "Many business owners with six months of on-time advance payments now qualify for a term loan or line of credit at a fraction of the cost. Your specialist will tell you if you're one of them before placing another advance.",
      cta: { label: "See how refinancing works", href: "/term-loans" },
    },
    steps: {
      heading: "How a merchant cash advance comes together",
      items: [
        {
          title: "Apply and connect your processor",
          body: "The 15-minute application plus a read-only look at your card-processing and bank history. Most funders decide on that alone.",
        },
        {
          title: "Compare the real cost",
          body: "Your funding specialist shops the file and shows each offer's factor rate, holdback, estimated payback time and APR on one sheet.",
        },
        {
          title: "Accept and fund",
          body: "E-sign and funds are wired, often the same or next business day. Holdback starts with your next batch of card sales.",
        },
      ],
      mock: {
        businessName: "Sunset Taqueria",
        availableLabel: "Advance amount",
        available: "$40,000",
        limit: "1.24 factor · $49,600 payback",
        balanceLabel: "Remaining payback",
        balance: "$27,880",
        primaryAction: "View daily remittances",
        rows: [
          { label: "Holdback", value: "10% of card sales" },
          { label: "Yesterday's remittance", value: "$212" },
          { label: "Est. payoff", value: "Jan 2027" },
          { label: "Equivalent APR", value: "31.4%" },
        ],
      },
    },
    support: {
      headingLine1: "A straight answer on",
      headingLine2: "whether an advance fits.",
      body: "Advances are expensive capital. Your specialist will tell you when a line of credit or term loan would serve you better, and only place an advance when speed or approval odds make it the right call.",
      link: BOOK_CALL,
    },
    reviews: {
      heading: "What business owners say about their advances",
      ...REVIEWS_HEADER,
      items: [
        { title: "Funded before the weekend", body: "Walk-in freezer died Wednesday. Applied that afternoon, $25K in the account Thursday, new unit installed Friday. Saved the weekend.", author: "Marco" },
        { title: "They showed me the APR", body: "Every other broker talked factor rates. FundLine put the APR right next to it. I still took the advance, but I knew the cost.", author: "C. D." },
        { title: "Slow Mondays cost less", body: "Repayment moves with my sales. A slow week means a smaller remittance. That flexibility is why I chose this over a fixed loan.", author: "Elena" },
        { title: "Approved with a 580", body: "Two lenders declined me on credit. The advance funder looked at my card sales and said yes the same day.", author: "Ray" },
        { title: "Refinanced into a real loan", body: "After eight months of on-time remittances, my specialist moved me to a term loan at a third of the cost. Exactly the plan she laid out.", author: "Yuki" },
        { title: "Inventory for the holiday rush", body: "$60K in October for stock, paid back by January from the sales it made. Fast, clear, done.", author: "P. G." },
      ],
    },
    faq: {
      heading: "Merchant cash advance questions, answered",
      items: [
        { question: "What is a merchant cash advance?", answer: "A purchase of a portion of your future card sales at a discount. The funder gives you a lump sum today and collects a fixed percentage of your daily card receipts until an agreed total, the payback amount, is reached. It is technically not a loan, which is why the terms differ." },
        { question: "How much can I get?", answer: "Advances in our network run from $5,000 to $500,000. Funders typically offer 70% to 120% of your average monthly card sales. A restaurant processing $60K a month might see offers between $40K and $70K." },
        { question: "What is a factor rate?", answer: "The multiplier that sets your payback amount. A $40,000 advance at a 1.24 factor rate means you repay $49,600 regardless of how fast you pay. Because there is no interest clock, paying faster does not lower the cost, which is why the equivalent APR can be high." },
        { question: "What does an advance really cost?", answer: "Factor rates in our network range from about 1.15 to 1.45. Depending on how quickly your sales repay it, that works out to an equivalent APR anywhere from roughly 25% to over 80%. We calculate and show the APR on every offer so the comparison is honest." },
        { question: "How fast can I get funded?", answer: "Most advances fund within 24 hours of acceptance, and same-day wires are common for applications completed before noon. Opening the file usually takes a few hours once your processor and bank history are connected." },
        { question: "Who qualifies?", answer: "Businesses with at least three to six months of card sales, typically $10,000 or more a month, and no open bankruptcies. Personal credit scores as low as 500 can qualify because funders underwrite the sales, not the score." },
        { question: "How is an advance repaid?", answer: "Through a holdback: a fixed percentage of each day's card sales, usually 8% to 15%, is remitted to the funder automatically by your processor or by daily ACH. Sell less, remit less that day. Payoff typically lands between four and twelve months." },
        { question: "Does applying affect my credit score?", answer: "No. Applying through FundLine does not affect your personal credit score. Most advance funders run only a soft inquiry, and they disclose any hard pull before it happens." },
        { question: "Is there a prepayment discount?", answer: "Some funders offer a small discount on the payback amount if you settle early, often within the first 30 to 60 days. Many do not. Your specialist notes it on each offer so you can factor it in." },
        { question: "Should I take an advance or something else?", answer: "If you qualify for a line of credit or term loan, those almost always cost less. An advance makes sense when you need money in a day, when credit blocks other products, or when the return on the spend clearly beats the cost. Your specialist will tell you which applies." },
        { question: "Can I have more than one advance at a time?", answer: "Stacking advances is possible but we advise against it: multiple daily holdbacks can quickly exceed what your sales can support. If you already carry one, ask about refinancing into a single product instead." },
      ],
    },
    ctaCards: [
      {
        icon: "credit_score",
        heading: "Qualify for something cheaper?",
        body: "A business line of credit gives you fast draws with interest only on what you use, at a fraction of an advance's cost.",
        cta: { label: "Explore lines of credit", href: "/line-of-credit" },
        tone: "light",
      },
      {
        icon: "receipt_long",
        heading: "Bill other businesses instead of card customers?",
        body: "Invoice financing advances your unpaid B2B invoices at a lower cost than a merchant cash advance.",
        cta: { label: "Explore invoice financing", href: "/invoice-financing" },
        tone: "periwinkle",
      },
    ],
    guides: {
      heading: "Before you take an advance",
      sub: "Short reads on cost, timing and alternatives.",
      cards: [
        { tag: "Blog", title: "How much funding really costs by stage", body: "Factor rates, APRs and why the cheapest-looking offer often isn't.", href: "/blog/funding-cost-by-stage", icon: "calculate" },
        { tag: "Blog", title: "Same-day funding offers", body: "Which products fund in 24 hours and what to have ready.", href: "/blog/where-owners-can-accept-a-funding-offer-the-same-day", icon: "bolt" },
        { tag: "Guide", title: "Building business credit", body: "How to graduate from advances to lines and term loans over 12 months.", href: "/guides/business-credit", icon: "credit_score" },
      ],
    },
    closing: {
      headingLine1: "Need it by tomorrow?",
      headingLine2: "Apply now and see the real cost.",
      cta: APPLY,
      note: "15-minute application. No impact to your credit score. Most advances fund within 24 hours.",
    },
    footnotes: [
      "¹ A merchant cash advance is a purchase of future receivables, not a loan. Advance amounts, factor rates and holdback percentages vary by funder and depend on your card-sales history and industry.",
      "² Funding speed depends on the funder and on how quickly your card-processing and bank data are connected. Same-day funding is not guaranteed.",
      "³ Equivalent APRs are estimates based on your average daily sales and will be higher if the advance is repaid faster or lower if repaid more slowly. Submitting an application to FundLine Capital does not affect your personal credit score.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Commercial Real Estate Loans
  // ---------------------------------------------------------------------------
  {
    slug: "commercial-real-estate",
    kind: "product",
    name: "Commercial Real Estate Loans",
    icon: "apartment",
    art: `${PRODUCT_ART}/commercial-real-estate.png`,
    meta: {
      title: "Commercial Real Estate Loans | FundLine Capital",
      description:
        "Buy, build or refinance the property your business runs from. Commercial real estate loans from $100K to $5M with terms up to 25 years, including SBA 504 and conventional options. One application, shopped by a broker.",
    },
    breadcrumb: productCrumb("Commercial Real Estate Loans"),
    hero: {
      headingLine1: "Buy the building",
      headingLine2: "your business works in.",
      accentLine2: true,
      sub: "Finance the purchase, construction or refinance of owner-occupied commercial property from $100K to $5M with terms up to 25 years.¹ Conventional, SBA 504 and bridge options, shopped to lenders that fit the property and your business.² Applying does not affect your credit score.³",
      cta: APPLY,
      fineprint: FINEPRINT,
      estimator: {
        title: "How much do you need?",
        label: "Loan amount",
        min: 100000,
        max: 5000000,
        step: 25000,
        initial: 750000,
        apr: 7.25,
        termMonths: 240,
        cta: APPLY,
        note: "Estimate uses a 20-year amortization. Down payment, rate type and term are set by the lender whose offer you accept.",
      },
    },
    stat: {
      value: "10%",
      label: "down on most owner-occupied purchases through SBA 504",
      blurb: "Conventional commercial mortgages usually want 20% to 30% down. SBA-backed structures cut that in half for qualifying business owners.",
    },
    features: {
      headingLine1: "Rent becomes equity.",
      headingLine2: "Payments stay predictable.",
      sub: "A commercial mortgage is the largest loan most business owners will take. Here is how we structure the ones we place.",
      cards: [
        {
          icon: "apartment",
          title: "Purchase, build or refinance",
          body: "Retail, office, warehouse, medical, restaurant and mixed-use property your business occupies at least 51% of. Ground-up construction with select lenders.",
        },
        {
          icon: "lock",
          title: "Fixed rates up to 25 years",
          body: "Conventional loans typically fix for 5 to 10 years on a 20- or 25-year amortization. SBA 504 fixes the full term. We show both.",
        },
        {
          icon: "handshake",
          title: "Lenders who know the asset",
          body: "Local banks, credit unions and national commercial lenders each price property differently. Your specialist sends the file where it fits.",
        },
      ],
    },
    callout: {
      icon: "account_balance",
      heading: "Conventional or SBA 504?",
      boldLead: "Less down, longer term, more paperwork.",
      body: "SBA 504 pairs a bank first mortgage with a fixed-rate SBA second, letting you buy with 10% down and fix the rate for 25 years. Conventional closes faster with fewer forms but needs more equity. We price both on every file.",
      cta: { label: "Compare SBA options", href: "/sba-loans" },
    },
    steps: {
      heading: "How a commercial real estate loan comes together",
      items: [
        {
          title: "Apply with the property details",
          body: "The 15-minute application plus the address, purchase price or payoff and your most recent financials. A specialist builds the full package with you.",
        },
        {
          title: "Compare structures and rates",
          body: "Your specialist shops the file and compares conventional, SBA 504 and bridge offers by down payment, rate, fixed period and closing costs.",
        },
        {
          title: "Appraisal, underwriting, close",
          body: "The lender orders the appraisal and environmental review. Typical closings run 45 to 90 days; your specialist tracks every condition.",
        },
      ],
      mock: {
        businessName: "Willow Creek Veterinary",
        availableLabel: "Loan amount",
        available: "$750,000",
        limit: "Owner-occupied clinic · 240 months",
        balanceLabel: "Remaining balance",
        balance: "$731,540",
        primaryAction: "View amortization",
        rows: [
          { label: "Rate", value: "7.25% fixed 10 yrs" },
          { label: "Monthly payment", value: "$5,928" },
          { label: "Down payment", value: "15%" },
          { label: "Closed", value: "May 30" },
        ],
      },
    },
    support: {
      headingLine1: "A specialist for",
      headingLine2: "the biggest loan you'll take.",
      body: "Appraisals, environmental reports, title, lease-up assumptions and lender conditions: a commercial mortgage has dozens of moving pieces. Your FundLine specialist has closed them before and keeps yours on schedule.",
      link: BOOK_CALL,
    },
    reviews: {
      heading: "What business owners say about their property loans",
      ...REVIEWS_HEADER,
      items: [
        { title: "Bought the shop we rented", body: "Fifteen years of rent and the landlord wanted to sell. SBA 504 through FundLine, 10% down, closed in 68 days. Payment is less than rent.", author: "Ernesto" },
        { title: "Refinanced at a better rate", body: "Our old commercial mortgage reset higher. FundLine found a credit union that refinanced us a full point lower with a 10-year fix.", author: "L. B." },
        { title: "Warehouse for the fleet", body: "Needed 12,000 square feet with a yard. Conventional loan, 20% down, closed in six weeks. Trucks are parked at our own place now.", author: "Dana" },
        { title: "Clinic build-out included", body: "The loan covered the purchase and the tenant improvements in one structure. My specialist knew which lender would do both.", author: "Dr. Patel" },
        { title: "Bridge loan saved the deal", body: "Seller wouldn't wait for SBA. FundLine placed a bridge loan to close in three weeks, then refinanced into 504 four months later.", author: "Kwame" },
        { title: "Every fee explained", body: "Appraisal, environmental, origination, SBA fees. My specialist gave me the full closing-cost estimate up front. Nothing surprised me at the table.", author: "M. J." },
      ],
    },
    faq: {
      heading: "Commercial real estate loan questions, answered",
      items: [
        { question: "What properties can be financed?", answer: "Owner-occupied commercial property: retail, office, industrial, warehouse, medical and dental, restaurant, hospitality and mixed-use buildings where your business occupies at least 51% of the space. Investment property with no owner occupancy is placed with a smaller set of lenders on different terms." },
        { question: "How much can I borrow?", answer: "Loans in our network run from $100,000 to $5,000,000. Conventional lenders typically finance 70% to 80% of the appraised value. SBA 504 structures can reach 90% for qualifying owner-occupied purchases." },
        { question: "What down payment is required?", answer: "Conventional commercial mortgages usually require 20% to 30% down. SBA 504 and SBA 7(a) real estate loans typically require 10%, or 15% for special-purpose properties like hotels and gas stations. Refinances are sized to the property's current appraised value." },
        { question: "What rates and terms should I expect?", answer: "Conventional rates in our network start around 6.75% and are commonly fixed for 5 to 10 years on a 20- or 25-year amortization. SBA 504 loans fix the rate for the full 20 or 25 years. Bridge loans run shorter and higher, typically 12 to 36 months." },
        { question: "How long does closing take?", answer: "Conventional loans usually close in 45 to 60 days; SBA 504 in 60 to 90 days because of the two-lender structure. The appraisal is often the longest single step. Bridge loans can close in two to three weeks when speed is essential." },
        { question: "Who qualifies?", answer: "Most lenders want two or more years in business, a personal credit score of 660 or higher, and cash flow that covers the new payment by at least 1.25 times. Owner-occupied property and a solid down payment carry a lot of weight." },
        { question: "Does applying affect my credit score?", answer: "Applying through FundLine does not affect your personal credit score. Commercial mortgage lenders run a hard inquiry during underwriting once you have selected an offer, and they tell you before they do." },
        { question: "Can I finance construction or renovation?", answer: "Yes. Select lenders in our network fund ground-up construction and major renovations on owner-occupied property, usually as a construction loan that converts to a permanent mortgage at completion. SBA 504 can include construction and improvement costs." },
        { question: "What closing costs should I budget?", answer: "Plan on 2% to 4% of the loan amount: appraisal, environmental report, title and escrow, lender origination and, on SBA loans, the guarantee and CDC fees. Your specialist provides an itemized estimate before you commit." },
        { question: "Can I refinance an existing commercial mortgage?", answer: "Yes. Common reasons are a rate reset, a balloon coming due, or pulling equity out for expansion. Lenders size the new loan to the current appraised value and your cash flow. Your specialist compares the refinance against keeping the current loan." },
      ],
    },
    ctaCards: [
      {
        icon: "account_balance",
        heading: "Want the lowest down payment?",
        body: "SBA 504 and 7(a) loans finance up to 90% of an owner-occupied purchase with fixed rates for up to 25 years.",
        cta: { label: "Explore SBA loans", href: "/sba-loans" },
        tone: "light",
      },
      {
        icon: "precision_manufacturing",
        heading: "Outfitting the new space?",
        body: "Equipment financing covers the machinery, kitchen or medical equipment that goes inside the building.",
        cta: { label: "Explore equipment financing", href: "/equipment-financing" },
        tone: "periwinkle",
      },
    ],
    guides: {
      heading: "Before you buy the building",
      sub: "Short reads on preparing for a commercial mortgage.",
      cards: [
        { tag: "Guide", title: "Getting ready to borrow", body: "The financial statements and ratios property lenders check first.", href: "/guides/getting-ready-to-borrow", icon: "description" },
        { tag: "Guide", title: "Business financing, explained", body: "How real estate loans fit with SBA, term loans and working capital.", href: "/guides/business-financing", icon: "apartment" },
        { tag: "Tool", title: "Payment calculator", body: "Model a 20- or 25-year amortization at any rate and compare it with rent.", href: "/calculators", icon: "calculate" },
      ],
    },
    closing: {
      headingLine1: "Stop paying someone else's mortgage.",
      headingLine2: "Start building equity.",
      cta: APPLY,
      note: "15-minute application. No impact to your credit score. A specialist builds the full package with you.",
    },
    footnotes: [
      "¹ Loan amounts, loan-to-value ratios, rates and terms vary by lender and depend on the property type, appraised value, occupancy and your business's cash flow and credit profile.",
      "² SBA 504 and 7(a) real estate loans are made by participating lenders under U.S. Small Business Administration programs. FundLine Capital is not affiliated with the SBA.",
      "³ Submitting an application to FundLine Capital does not affect your personal credit score. Lenders run a hard credit inquiry during underwriting after you have selected an offer.",
      "⁴ Closing timelines are typical ranges and are not guaranteed. Appraisal, environmental review and title work can extend them.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Business Credit Card
  // ---------------------------------------------------------------------------
  {
    slug: "business-credit-card",
    kind: "product",
    name: "Business Credit Card",
    icon: "credit_card",
    art: `${PRODUCT_ART}/business-credit-card.png`,
    meta: {
      title: "Business Credit Cards | FundLine Capital",
      description:
        "Business credit cards with limits from $5K to $100K, 0% intro APR offers and rewards on everyday spend. FundLine matches you with card issuers that fit your revenue and credit. No impact to your credit score to apply.",
    },
    breadcrumb: productCrumb("Business Credit Card"),
    hero: {
      headingLine1: "Everyday spending that",
      headingLine2: "builds business credit.",
      accentLine2: true,
      sub: "Get a business credit card with a limit from $5K to $100K, separate from your personal accounts, with rewards on the spending you already do.¹ Many issuers we work with offer 0% intro APR for 9 to 12 months.² Apply once, no impact to your credit score, and compare card offers side by side.³",
      cta: APPLY,
      fineprint: FINEPRINT,
      estimator: {
        title: "How much do you need?",
        label: "Credit limit",
        min: 5000,
        max: 100000,
        step: 1000,
        initial: 15000,
        apr: 18.99,
        termMonths: 12,
        cta: APPLY,
        note: "Estimate assumes a full balance repaid over 12 months at the standard APR. Balances paid in full each month accrue no interest.",
      },
    },
    stat: {
      value: "0%",
      label: "intro APR for 9 to 12 months on many cards we place",
      blurb: "Pay for the new laptops or the trade-show booth over the year with no interest, then keep the card for everyday spend.",
    },
    features: {
      headingLine1: "Separate the business.",
      headingLine2: "Earn on every purchase.",
      sub: "A business credit card is often the first credit line a company opens. Here is what the cards we match you with deliver.",
      cards: [
        {
          icon: "credit_score",
          title: "Builds your business credit file",
          body: "Issuers report to the business credit bureaus. Twelve months of on-time payments opens doors to bigger lines and better term-loan rates.",
        },
        {
          icon: "savings",
          title: "Rewards on real spend",
          body: "1% to 3% back on fuel, software, shipping and advertising, or points you can put toward travel. We show the reward structure on each offer.",
        },
        {
          icon: "verified_user",
          title: "Employee cards with controls",
          body: "Issue cards to staff with per-card limits and category blocks. Expenses land in one statement that syncs with your accounting software.",
        },
      ],
    },
    callout: {
      icon: "credit_score",
      heading: "Card first, then everything else",
      boldLead: "Business credit starts with a paid-on-time card.",
      body: "Lenders look at your business credit file before they look at your bank statements. A card you pay in full each month is the fastest way to build one from nothing. Our guide shows the 12-month path.",
      cta: { label: "Read the business credit guide", href: "/guides/business-credit" },
    },
    steps: {
      heading: "How your business card comes together",
      items: [
        {
          title: "Apply once",
          body: "The same 15-minute application. Tell us your revenue, monthly spend and whether you carry a balance or pay in full.",
        },
        {
          title: "Compare card offers",
          body: "Your funding specialist shows the issuers that fit: limit, intro APR, ongoing APR, annual fee and rewards on one sheet.",
        },
        {
          title: "Get approved and start spending",
          body: "Most issuers decide within minutes to two days. Virtual card numbers are often available immediately; the physical card ships in a week.",
        },
      ],
      mock: {
        businessName: "Meadow & Pine Design Studio",
        availableLabel: "Available credit",
        available: "$11,240",
        limit: "of $15,000 limit",
        balanceLabel: "Current balance",
        balance: "$3,760",
        primaryAction: "Pay statement balance",
        rows: [
          { label: "Intro APR", value: "0% until Aug 2027" },
          { label: "Rewards earned", value: "$184 this year" },
          { label: "Statement due", value: "Oct 4" },
          { label: "Employee cards", value: "3 active" },
        ],
      },
    },
    support: {
      headingLine1: "Not sure which card",
      headingLine2: "fits how you spend?",
      body: "A card that rewards fuel is wasted on a software company. Your specialist matches the reward structure and APR to how your business actually spends and whether you carry a balance.",
      link: BOOK_CALL,
    },
    reviews: {
      heading: "What business owners say about their business cards",
      ...REVIEWS_HEADER,
      items: [
        { title: "First credit for my LLC", body: "Eight months in business, no business credit. FundLine matched me with an issuer that approved a $10K limit. Now I have a file.", author: "Alicia" },
        { title: "0% got us through the build", body: "Put $30K of fixtures on a 12-month 0% card and paid it off from the store's first year. No interest, no term loan.", author: "J. R." },
        { title: "Finally separate from personal", body: "Stopped mixing business and personal spending. Tax time went from a nightmare to an afternoon.", author: "Ben" },
        { title: "Employee cards with limits", body: "Four techs, four cards, $500 a week each, fuel and parts only. The controls saved me from a lot of receipts.", author: "Sofia" },
        { title: "Rewards on ad spend", body: "We spend $8K a month on ads. The 2% card my specialist picked pays for our software subscriptions every year.", author: "T. H." },
        { title: "Approved in ten minutes", body: "Application in, offer in, virtual card ready before lunch. Bought the conference tickets that afternoon.", author: "Grace" },
      ],
    },
    faq: {
      heading: "Business credit card questions, answered",
      items: [
        { question: "What limit can I expect?", answer: "Business card limits in our network run from $5,000 to $100,000. Issuers set the limit from your revenue, personal credit and existing debt. Most first cards land between $5K and $25K and can be raised after six months of on-time payments." },
        { question: "What APR will I pay?", answer: "Many issuers we work with offer 0% intro APR on purchases for 9 to 12 months. After that, standard variable APRs range from about 17% to 27% depending on your credit. If you pay the statement balance in full each month, you pay no interest at all." },
        { question: "Do I need an established business?", answer: "No. Business credit cards are available to sole proprietors, new LLCs and corporations. Issuers rely mostly on your personal credit for a first card, typically a score of 670 or higher, along with any revenue you can show." },
        { question: "Does applying affect my credit score?", answer: "Applying through FundLine does not affect your personal credit score. When you choose a card and submit to the issuer, they run a hard inquiry, which they disclose first. One inquiry has a small, temporary effect." },
        { question: "Will the card report to my personal credit?", answer: "Most issuers report to the business credit bureaus. Some also report to your personal file, especially if the account becomes delinquent. Your specialist notes each issuer's reporting practice so you can choose knowingly." },
        { question: "What rewards are available?", answer: "Flat-rate cards pay 1.5% to 2% on everything. Category cards pay up to 3% or 5% on fuel, shipping, software, advertising or travel. Some cards pay points instead of cash. We match the structure to where your business spends most." },
        { question: "Is there an annual fee?", answer: "Many business cards have none. Higher-tier rewards cards charge $95 to $395 a year in exchange for richer earning and travel benefits. Your offers show the fee alongside the rewards so you can judge whether it pays for itself." },
        { question: "Can I get cards for my employees?", answer: "Yes. Most issuers provide additional cards at no charge with per-card spending limits, category restrictions and real-time alerts. All spend rolls into one statement and can sync to QuickBooks-style accounting software." },
        { question: "Is a business credit card a good way to fund a business?", answer: "For small, recurring purchases and short-term needs under a 0% intro period, yes. For a large one-time investment or ongoing working capital, a term loan or line of credit is almost always cheaper once the intro period ends." },
        { question: "How does a business card build my business credit?", answer: "Issuers report your limit, balance and payment history to business bureaus each month. Paying on time and keeping the balance under 30% of the limit builds a file that lenders check when you apply for lines and term loans later." },
      ],
    },
    ctaCards: [
      {
        icon: "credit_score",
        heading: "Need more room than a card?",
        body: "A business line of credit offers limits up to $500K with lower ongoing rates for larger working-capital needs.",
        cta: { label: "Explore lines of credit", href: "/line-of-credit" },
        tone: "light",
      },
      {
        icon: "payments",
        heading: "Planning a bigger investment?",
        body: "A term loan funds a build-out, acquisition or large order with a fixed rate and a predictable monthly payment.",
        cta: { label: "Explore term loans", href: "/term-loans" },
        tone: "periwinkle",
      },
    ],
    guides: {
      heading: "Before you pick a card",
      sub: "Short reads on credit and everyday spend.",
      cards: [
        { tag: "Guide", title: "Building business credit", body: "The 12-month path from first card to term-loan approval.", href: "/guides/business-credit", icon: "credit_score" },
        { tag: "Guide", title: "Business financing, explained", body: "When a card is the right tool and when it isn't.", href: "/guides/business-financing", icon: "credit_card" },
        { tag: "Blog", title: "Which lenders fund businesses under two years old", body: "Cards and other first-yes products for young companies.", href: "/blog/which-online-lenders-still-fund-businesses-under-two-years-old", icon: "storefront" },
      ],
    },
    closing: {
      headingLine1: "Open the card.",
      headingLine2: "Start the credit file.",
      cta: APPLY,
      note: "15-minute application. No impact to your credit score to compare offers. Many issuers decide within minutes.",
    },
    footnotes: [
      "¹ Credit limits, rewards and fees vary by issuer and depend on your personal credit, business revenue and existing obligations. Not every applicant will qualify for the highest limit.",
      "² Introductory APR offers apply for a limited period and only to new purchases unless the issuer states otherwise; the standard variable APR applies afterward. Offers are subject to change by the issuer.",
      "³ Submitting an application to FundLine Capital does not affect your personal credit score. Submitting a card application to an issuer results in a hard credit inquiry, which the issuer discloses before you proceed.",
    ],
  },
];

export const PRODUCT_SLUGS: string[] = PRODUCT_PAGES.map((page) => page.slug);

export function getProductPage(slug: string): DetailPageContent | undefined {
  return PRODUCT_PAGES.find((page) => page.slug === slug);
}
