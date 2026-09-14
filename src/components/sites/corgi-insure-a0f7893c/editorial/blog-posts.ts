import type { EditorialArticle } from "./types";
import { BYLINES } from "./constants";

/**
 * FundLine blog posts. Original small-business lending content; every figure, rate and timeline is an
 * illustrative placeholder, not an offer. Dates and read times for the four August posts match the
 * cards the press release already links to.
 */
export const BLOG_POSTS: EditorialArticle[] = [
  {
    slug: "marketplace-vs-bank",
    kind: "blog",
    title: "Working With a Funding Broker vs. Banks: What Actually Changes for Owners",
    excerpt: "A bank decides one file at a time. A broker shops one application to the lenders that fit. Here is what that means for speed, approval odds and cost.",
    date: "January 13th 2026",
    cardDate: "Jan. 13 2026",
    isoDate: "2026-01-13",
    readTime: "6 min read",
    ...BYLINES.maya,
    tags: ["Compare", "Getting started"],
    thumbnail: { stat: "75+", statLabel: "lenders in our network", footLead: "Compare:", footTail: " broker vs. bank", footTitle: "Broker" },
    inlineCtaAfter: "marketplace",
    related: ["/blog/funding-guide-for-owners", "/blog/which-online-lenders-still-fund-businesses-under-two-years-old", "/guides/business-financing"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "If you have ever walked into a branch with a folder of statements and walked out with \"we'll be in touch,\" you already know what this article is about. Banks are not bad at lending. They are slow at it, and they decline most small-business applications under $250,000 because a small file costs them about as much to process as a large one. A funding brokerage does not replace your bank. It changes how many answers you get, and how fast you get them.",
          },
        ],
      },
      {
        id: "bank",
        tocLabel: "How a bank decides",
        heading: "How a bank decides",
        paragraphs: [
          {
            text: "A bank works one file at a time. A relationship manager collects your documents, a credit analyst spreads two or three years of financials, and a committee that meets weekly makes the call. A realistic timeline is three to eight weeks, and the answer at the end is a single yes or no from a single institution.",
          },
          {
            text: "Banks also have a clear profile they prefer: three or more years in business, collateral they can value, a personal guarantee, and cash flow that covers the proposed payment at least 1.25 times over. If you fit that profile and can wait, a bank is usually the cheapest money available. If you do not, the process can quietly consume two months and end in a decline.",
          },
        ],
      },
      {
        id: "marketplace",
        tocLabel: "How a broker decides",
        heading: "How a broker decides",
        paragraphs: [
          {
            text: "With a broker, you complete one application. It captures the same facts every lender asks about: time in business, monthly revenue, industry, credit band, existing debt and recent bank activity. A funding team compares that profile against each lender's stated criteria, and only the lenders whose box you fit see the file.",
          },
          {
            text: "Several of them respond with offers, often within hours, and you compare them side by side. On FundLine that means one 15-minute application, a network of more than 75 lenders, and no impact to your credit score to see what you qualify for. The lender you accept is still the lender; the broker is the front door.",
          },
        ],
      },
      {
        id: "bank-wins",
        tocLabel: "Where the bank wins",
        heading: "Where the bank still wins",
        paragraphs: [
          { text: "Be honest about the trade. A bank or credit union will usually beat a broker-sourced offer on price when you qualify for it. Their term loans price close to prime plus one to three points, SBA 7(a) loans stretch to ten years, and commercial real estate almost always runs through a bank. A deposit relationship can also earn you goodwill on the next request." },
          { text: "If you have the profile and the time, there is nothing wrong with running a bank application in parallel. Just do not let it be your only application." },
        ],
      },
      {
        id: "marketplace-wins",
        tocLabel: "Where the broker wins",
        heading: "Where the broker wins",
        paragraphs: [
          { text: "Speed is the obvious one, but it is not the only one." },
        ],
        bullets: [
          "Fit for younger businesses: many network lenders fund at six to twelve months in business, where a bank starts at two or three years.",
          "Transparency: you see several offers at once, so a high rate has to justify itself against the offer next to it.",
          "A fallback: if the cheapest lender declines, you are not starting over. The next offer is already on the table.",
          "One set of documents: you explain your business once, not five times.",
        ],
      },
      {
        id: "cost",
        tocLabel: "Comparing cost",
        heading: "Cost: what to compare",
        paragraphs: [
          {
            text: "Compare total cost of capital or APR, never a headline rate. A short-term product quoted as a 1.2 factor rate on $100,000 costs $20,000 over its life no matter how fast you repay it. An 18% APR term loan on the same amount over twelve months costs roughly $10,000 in interest because the balance falls every month. Add origination fees, draw fees and any prepayment terms, and ask every lender for the same three numbers: total payback, APR and payment frequency.",
          },
        ],
      },
      {
        id: "both",
        tocLabel: "Running both",
        heading: "A practical way to run both",
        paragraphs: [
          { text: "Apply through the broker first; it takes fifteen minutes and tells you where you stand today. Keep the bank conversation going if you have the runway. Accept the broker's offer when timing demands it, and if the bank comes back cheaper later, most term loans can be refinanced without a penalty. The goal is not to pick a side. It is to never be waiting on a single answer." },
        ],
      },
    ],
  },
  {
    slug: "funding-cost-by-stage",
    kind: "blog",
    title: "How Much Does Business Funding Really Cost by Stage?",
    excerpt: "The cost of capital tracks the risk a lender sees, and that risk changes as a business matures. Typical ranges from year one to year five and beyond.",
    date: "February 10th 2026",
    cardDate: "Feb. 10 2026",
    isoDate: "2026-02-10",
    readTime: "7 min read",
    ...BYLINES.daniel,
    tags: ["Cost"],
    thumbnail: { stat: "8–35%", statLabel: "typical APR range across stages", footLead: "Cost guide:", footTail: " by business stage", footTitle: "Funding cost" },
    inlineCtaAfter: "two-to-five",
    related: ["/blog/term-loan-next-stage", "/guides/business-credit", "/blog/marketplace-vs-bank"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "Owners ask us one question more than any other: what should this cost? The honest answer is that the price of capital is mostly a function of the risk a lender can see, and what a lender can see changes with every year you stay in business. The ranges below are illustrative, not offers, but they will tell you whether an offer in front of you is in the neighborhood or out of line.",
          },
        ],
      },
      {
        id: "under-one",
        tocLabel: "Under one year",
        heading: "Under one year in business",
        paragraphs: [
          { text: "With less than twelve months of history, most decisions lean on the owner's personal credit and on whatever the money is buying. The realistic menu:" },
        ],
        bullets: [
          "Business credit cards: 18% to 30% APR, useful for small recurring purchases and for starting a business credit file.",
          "Revenue-based advances: quoted as a factor rate of roughly 1.15 to 1.40, repaid daily or weekly from sales.",
          "Equipment financing secured by the asset itself: 8% to 20%, because the lender can recover the equipment.",
          "Microloans from community lenders: typically under $50,000, 8% to 15%, slower but coachable.",
        ],
      },
      {
        id: "one-to-two",
        tocLabel: "One to two years",
        heading: "One to two years",
        paragraphs: [
          {
            text: "Once you cross a year, cash-flow lenders start looking at six to twelve months of deposits rather than your personal score alone. Short-term term loans of 12 to 24 months land between 12% and 30% APR. Lines of credit up to about $100,000 run 10% to 25%. Invoice financing prices at 1% to 3% of the invoice for each 30 days outstanding, which is cheap for fast-paying customers and expensive for slow ones.",
          },
        ],
      },
      {
        id: "two-to-five",
        tocLabel: "Two to five years",
        heading: "Two to five years",
        paragraphs: [
          {
            text: "This is where the menu widens. Bank and credit-union term loans come in at 8% to 14%. SBA 7(a) loans price at prime plus 2.25 to 3.5 points with terms up to ten years, at the cost of a slower process. Lines of credit reach $250,000, equipment financing drops to 6% to 12%, and lenders start asking for tax returns and a profit-and-loss statement alongside your bank statements.",
          },
        ],
      },
      {
        id: "five-plus",
        tocLabel: "Five years and beyond",
        heading: "Five years and beyond",
        paragraphs: [
          {
            text: "Past five years, age stops mattering and leverage takes over. Lenders look at debt-service coverage, the ratio of your operating cash flow to your total loan payments, and price accordingly. Commercial real estate, larger SBA loans and seven-figure lines all become available, usually at 7% to 11%. An owner with strong coverage and clean statements at this stage should rarely pay more than a bank would charge.",
          },
        ],
      },
      {
        id: "fees",
        tocLabel: "Fees that matter",
        heading: "The fees that move the number",
        paragraphs: [
          { text: "Rate is only part of the cost. Watch for origination fees of 1% to 5% taken from the funded amount, draw fees on lines of credit, prepayment penalties on short-term products, and payment frequency. A daily-pay loan quoted at a low factor can carry a higher effective APR than a monthly-pay loan with a higher headline rate. Ask for total payback and APR on every offer so they compare cleanly." },
        ],
      },
      {
        id: "lower",
        tocLabel: "Lowering your cost",
        heading: "How to lower your cost at any stage",
        paragraphs: [
          { text: "A few moves shift pricing regardless of age: pay revolving balances down before you apply, show at least three months of stable or rising deposits, keep negative-balance days at zero, and right-size the request to what the cash flow supports. Then compare several offers at once. Nothing lowers a rate faster than a competing offer on the same screen." },
        ],
      },
    ],
  },
  {
    slug: "funding-guide-for-owners",
    kind: "blog",
    title: "Small Business Funding Guide for Owners",
    excerpt: "A short map of the whole process: which product fits which job, what lenders look at, how to apply once instead of five times, and how to read an offer.",
    date: "March 3rd 2026",
    cardDate: "Mar. 3 2026",
    isoDate: "2026-03-03",
    readTime: "8 min read",
    ...BYLINES.jordan,
    tags: ["Getting started"],
    thumbnail: { stat: "15 min", statLabel: "to complete one application", footLead: "Guide:", footTail: " funding basics for owners", footTitle: "Owner's guide" },
    inlineCtaAfter: "apply-once",
    related: ["/guides/business-financing", "/guides/getting-ready-to-borrow", "/blog/marketplace-vs-bank"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "Most owners borrow two or three times over the life of a business and never get comfortable with it. This guide is the map we wish someone had handed us: what the money is for, which product does that job, what a lender will check, and how to read the offer that comes back. Bookmark it and come back the next time you need capital.",
          },
        ],
      },
      {
        id: "job",
        tocLabel: "Start with the job",
        heading: "Start with the job the money has to do",
        paragraphs: [
          { text: "Before you compare products, name the job. Almost every request falls into one of five buckets, and each bucket points at a different product." },
        ],
        bullets: [
          "Smoothing cash flow between payables and receivables: a line of credit.",
          "A one-time investment with a payback, like a second location or a big inventory buy: a term loan.",
          "Buying a vehicle or machine: equipment financing, secured by the asset.",
          "Waiting on slow-paying customers: invoice financing.",
          "A long-term expansion or property purchase: an SBA loan or commercial real estate loan.",
        ],
      },
      {
        id: "products",
        tocLabel: "The eight products",
        heading: "Know the eight products",
        paragraphs: [
          { text: "Term loans give you a lump sum repaid on a fixed schedule. Lines of credit let you draw and repay repeatedly up to a limit and pay interest only on what you use. SBA loans are bank loans with a government guarantee, which means long terms and low rates in exchange for paperwork. Equipment financing uses the purchase as collateral. Invoice financing advances most of an unpaid invoice today. A merchant cash advance sells a slice of future card sales for cash now. Commercial real estate loans buy or refinance property. Business credit cards handle small, frequent spend and build your credit file." },
        ],
      },
      {
        id: "lenders-check",
        tocLabel: "What lenders check",
        heading: "What lenders look at",
        paragraphs: [
          { text: "Every lender weighs the same six things in different proportions: time in business, monthly revenue, personal and business credit, industry, existing debt, and the story your bank statements tell. Six months in business and $10,000 a month in deposits opens the door with many online lenders. Two years and $25,000 a month opens most of them. Banks want more history, more documents and usually collateral." },
        ],
      },
      {
        id: "apply-once",
        tocLabel: "Apply once",
        heading: "How to apply once instead of five times",
        paragraphs: [
          { text: "Applying to lenders one at a time means re-entering the same facts, uploading the same statements and answering the same calls five times over, with a hard credit pull at the end of each. A broker collects the application once, matches it to the lenders whose criteria you fit, and returns their offers together. Checking eligibility on FundLine does not affect your credit score; a hard inquiry only happens when you accept an offer and the lender finalizes it." },
        ],
      },
      {
        id: "read-offer",
        tocLabel: "Reading an offer",
        heading: "Reading an offer",
        paragraphs: [
          { text: "Every offer should answer eight questions before you sign. Amount funded, after any origination fee. Term. APR, not just a rate or a factor. Payment amount and frequency. Total payback. Fees, including draw and late fees. Prepayment terms, including whether early payoff saves you interest. And what secures the loan: a personal guarantee, a blanket lien, or a specific asset. If an offer will not put those in writing, keep comparing." },
        ],
      },
      {
        id: "after",
        tocLabel: "After funding",
        heading: "After funding",
        paragraphs: [
          { text: "Put every payment date on the calendar, keep the funds in the business account they landed in, and track what the money bought against the payback you expected. A clean repayment history is the cheapest thing you will ever do for your next round of funding: the lender who funded you this year will usually offer more, for less, next year." },
        ],
      },
    ],
  },
  {
    slug: "term-loan-for-growing-companies",
    kind: "blog",
    title: "Term Loan Built for Growing Companies",
    excerpt: "A lump sum, a fixed schedule and a known total cost. When a term loan fits a growing business, how the numbers work, and the mistakes to avoid.",
    date: "March 24th 2026",
    cardDate: "Mar. 24 2026",
    isoDate: "2026-03-24",
    readTime: "5 min read",
    ...BYLINES.tom,
    tags: ["Term loans"],
    thumbnail: { stat: "$5K–$5M", statLabel: "term loan range in our network", footLead: "Product:", footTail: " term loans for growth", footTitle: "Term loan" },
    inlineCtaAfter: "numbers",
    related: ["/blog/term-loan-next-stage", "/blog/line-of-credit-vs-term-loan-seasonal-cash-flow", "/blog/funding-cost-by-stage"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "A term loan is the plainest financing there is: a lump sum today, repaid on a fixed schedule over a set term, with a total cost you know before you sign. For a company that is growing, that predictability is the whole point. You make one investment, you know what it costs, and you can measure whether it paid off.",
          },
        ],
      },
      {
        id: "fit",
        tocLabel: "When it fits",
        heading: "When a term loan fits",
        paragraphs: [
          { text: "A term loan is built for a one-time investment with a payback you can estimate: a second location, a hire you need before the revenue arrives, a bulk inventory purchase at a discount, a renovation, or a fleet vehicle when equipment financing does not fit. The test is simple. If you can describe what the money buys and roughly when it earns itself back, a term loan is the right shape. If the need is recurring and unpredictable, look at a line of credit instead." },
        ],
      },
      {
        id: "numbers",
        tocLabel: "How the numbers work",
        heading: "How the numbers work",
        paragraphs: [
          {
            text: "Four numbers define a term loan: amount, term, rate and payment. A $150,000 loan over 36 months at a 12% APR costs about $4,982 a month and roughly $29,300 in total interest. Stretch the same loan to 60 months and the payment falls to about $3,337, but total interest rises to roughly $50,200. Shorter terms cost less overall and more per month; longer terms do the opposite. Pick the term that matches how fast the investment pays back, not the lowest payment you can find.",
          },
        ],
      },
      {
        id: "mistakes",
        tocLabel: "Common mistakes",
        heading: "What growing companies get wrong",
        paragraphs: [{ text: "We see the same four mistakes in applications every week." }],
        bullets: [
          "Borrowing a lump sum for recurring expenses like payroll gaps, which a line of credit handles far more cheaply.",
          "Ignoring payment frequency. A weekly-pay loan and a monthly-pay loan with the same APR feel very different on a tight month.",
          "Choosing the longest term to minimize the payment, then paying for equipment long after it is replaced.",
          "Under-borrowing to keep the number small, then coming back three months later for a second, more expensive loan.",
        ],
      },
      {
        id: "qualify",
        tocLabel: "How to qualify",
        heading: "How to qualify",
        paragraphs: [
          { text: "Across the FundLine network, term loans typically start at one year in business, about $10,000 in monthly revenue and a personal credit score around 600. Better profiles unlock longer terms and lower rates. Lenders will want three to six months of business bank statements, and for larger amounts, a recent profit-and-loss statement and last year's tax return. Applying takes about fifteen minutes and does not affect your credit score." },
        ],
      },
      {
        id: "alternatives",
        tocLabel: "Alternatives",
        heading: "Term loan vs. the alternatives",
        paragraphs: [
          { text: "If the purchase is a specific piece of equipment, equipment financing is usually cheaper because the asset secures the loan. If you can wait sixty days and want the lowest rate over the longest term, an SBA 7(a) loan is worth the paperwork. If you need flexibility more than a lump sum, a line of credit wins. When the job is a defined investment with a defined payback, the term loan is still the tool built for it." },
        ],
      },
    ],
  },
  {
    slug: "term-loan-next-stage",
    kind: "blog",
    title: "5 Ways a Term Loan Secures Your Company's Next Stage",
    excerpt: "Inventory ahead of a peak season, a second location, hiring before the revenue, refinancing daily-pay debt, funding a contract you already won.",
    date: "April 21st 2026",
    cardDate: "Apr. 21 2026",
    isoDate: "2026-04-21",
    readTime: "5 min read",
    ...BYLINES.maya,
    tags: ["Term loans"],
    thumbnail: { stat: "5", statLabel: "ways owners use a term loan", footLead: "Playbook:", footTail: " reaching the next stage", footTitle: "Next stage" },
    inlineCtaAfter: "refinance",
    related: ["/blog/term-loan-for-growing-companies", "/blog/funding-cost-by-stage", "/guides/getting-ready-to-borrow"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "Growth rarely fails for lack of ideas. It fails for lack of timing: the inventory that had to be bought in August, the lease that had to be signed in March, the hire that had to start before the contract did. A term loan is a way to buy timing. Here are the five uses we see pay off most often, with the numbers owners actually run.",
          },
        ],
      },
      {
        id: "inventory",
        tocLabel: "1. Inventory",
        heading: "1. Lock in inventory before a peak season",
        paragraphs: [
          { text: "Suppliers reward early, large orders with discounts of 5% to 15%. If your busy season starts in November and the deposit is due in August, a six- or nine-month term loan bridges the gap. A $60,000 order at a 10% early discount saves $6,000; a nine-month loan on that amount at 14% APR costs roughly $3,200 in interest. The math works when the discount plus the margin on the extra stock exceeds the cost of the loan." },
        ],
      },
      {
        id: "location",
        tocLabel: "2. Second location",
        heading: "2. Open the second location",
        paragraphs: [
          { text: "A second site needs a deposit, build-out, equipment and three to six months of operating cushion before it carries itself. That is a defined investment with an estimable payback, which is exactly what a 36- to 60-month term loan is built for. Borrow the full amount up front so the new location never starves the first one." },
        ],
      },
      {
        id: "hiring",
        tocLabel: "3. Hiring ahead",
        heading: "3. Hire ahead of revenue",
        paragraphs: [
          { text: "Service businesses grow by adding people before the billable work fully arrives. A term loan sized to cover four to six months of a new hire's fully loaded cost lets you say yes to the contract that requires them. Keep the term short, twelve to eighteen months, so the loan is gone before the next hiring round." },
        ],
      },
      {
        id: "refinance",
        tocLabel: "4. Refinance",
        heading: "4. Refinance expensive daily-pay debt",
        paragraphs: [
          { text: "Many owners carry an advance repaid daily from card sales at an effective APR of 40% or more. Replacing it with a monthly-pay term loan at 12% to 20% can cut the cost of that debt by more than half and free up daily cash flow immediately. Ask the current lender for a payoff letter, then apply for a term loan large enough to clear it with a small cushion." },
        ],
      },
      {
        id: "contract",
        tocLabel: "5. Fund a contract",
        heading: "5. Fund a contract you have already won",
        paragraphs: [
          { text: "Winning a large order is a cash-flow problem disguised as good news: materials and labor go out for weeks before the invoice is paid. A term loan sized to the cost of delivery, with a term that ends just after the customer's payment terms, turns the contract into profit instead of a liquidity crisis." },
        ],
      },
      {
        id: "amount",
        tocLabel: "Sizing the amount",
        heading: "How to decide the amount",
        paragraphs: [
          { text: "Add up the actual cost of the project, add 10% to 15% for the things you have not thought of, and check that the monthly payment stays under about 10% of your average monthly deposits. Lenders check that coverage too, so an application that respects it moves faster." },
        ],
      },
      {
        id: "before-sign",
        tocLabel: "Before you sign",
        heading: "Before you sign",
        paragraphs: [
          { text: "Get every offer in APR and total payback, confirm the payment frequency, and read the prepayment terms. Then compare at least three. On FundLine one application returns offers from multiple lenders, so the comparison is built in." },
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-bank-statements-for-a-faster-credit-decision",
    kind: "blog",
    title: "How to Prepare Bank Statements for a Faster Credit Decision",
    excerpt: "Lenders are moving to cash-flow-based decisions, with median approval times falling to under 48 hours for well-prepared applications.",
    date: "May 12th 2026",
    cardDate: "May 12 2026",
    isoDate: "2026-05-12",
    readTime: "6 min read",
    ...BYLINES.daniel,
    tags: ["Eligibility", "Speed"],
    thumbnail: { stat: "48 hrs", statLabel: "median decision, well-prepared files", footLead: "Checklist:", footTail: " bank statements", footTitle: "Faster decision" },
    inlineCtaAfter: "cleanup",
    related: ["/guides/getting-ready-to-borrow", "/blog/where-owners-can-accept-a-funding-offer-the-same-day", "/guides/business-credit"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "Lenders are moving to cash-flow-based decisions. Where a credit analyst once started with tax returns, most online lenders and a growing number of banks now start with your last three to six months of business bank statements, and the median decision time for a well-prepared file has fallen under 48 hours. The statements are the application. Here is how to make them say the right things.",
          },
        ],
      },
      {
        id: "why",
        tocLabel: "Why statements",
        heading: "Why statements matter more than tax returns now",
        paragraphs: [
          { text: "A tax return describes the business you had last year, prepared to minimize taxable income. A bank statement describes the business you have this month, with nothing to optimize. Deposits show real revenue, balances show real cushion, and the pattern of payments shows every obligation you already carry. For a lender deciding on a twelve-month loan, that is the more useful document, and it is one you can improve in weeks rather than years." },
        ],
      },
      {
        id: "reads",
        tocLabel: "What analysts read",
        heading: "What a credit analyst reads in your statements",
        paragraphs: [{ text: "Most cash-flow models pull the same handful of signals from each month." }],
        bullets: [
          "Total deposits and how many separate deposits made them up. Many small deposits read as healthy; one large transfer reads as a loan.",
          "Average daily balance, and the lowest balance of the month.",
          "Negative-balance days, overdrafts and returned items. A single month with several is the most common reason for a decline.",
          "Existing loan and advance payments, which reveal debt you may not have listed.",
          "Transfers between accounts, which can inflate revenue if they are not identified.",
        ],
      },
      {
        id: "cleanup",
        tocLabel: "The 90-day cleanup",
        heading: "The 90-day cleanup",
        paragraphs: [{ text: "If you can plan ninety days ahead of applying, do these in order." }],
        bullets: [
          "Run every dollar of revenue through one business checking account. Stop depositing to personal accounts.",
          "Keep a floor balance. Even a few thousand dollars that never moves eliminates negative days.",
          "Pay off or consolidate small advances so their daily debits disappear from the statement.",
          "Label large transfers in the memo field: \"owner contribution\" or \"savings transfer,\" so an analyst does not have to guess.",
          "Stop bouncing anything. Set up low-balance alerts if you have to.",
        ],
      },
      {
        id: "package",
        tocLabel: "Packaging them",
        heading: "How to package them",
        paragraphs: [
          { text: "Send the full statement, every page, for the last three to six months as downloaded from your bank, not screenshots. Include every business account that receives revenue. Faster still, connect the account read-only during the application; on FundLine a bank connection replaces the upload entirely and lets lenders decide the same day. Keep a recent profit-and-loss statement and last year's return ready for lenders that ask for more, but do not lead with them." },
        ],
      },
      {
        id: "red-flags",
        tocLabel: "Red flags",
        heading: "Red flags that slow decisions",
        paragraphs: [
          { text: "Missing pages, statements older than 60 days, a personal account mixed in with business revenue, an undisclosed advance showing up as daily debits, and a deposit spike that does not match your stated revenue. None of these are automatic declines. Each of them turns a same-day decision into a week of follow-up questions." },
        ],
      },
      {
        id: "next",
        tocLabel: "Next step",
        heading: "Next step",
        paragraphs: [
          { text: "Pull last month's statement and read it the way an analyst would. If the five signals above look clean, apply now. If not, ninety days of discipline is worth several points of APR and a much faster answer." },
        ],
      },
    ],
  },
  {
    slug: "line-of-credit-vs-term-loan-seasonal-cash-flow",
    kind: "blog",
    title: "Line of Credit vs. Term Loan: Which Fits Seasonal Cash Flow Without Broker Calls?",
    excerpt: "Owners who need working capital do not have time for a slow bank process disguised as an online form.",
    date: "June 16th 2026",
    cardDate: "Jun. 16 2026",
    isoDate: "2026-06-16",
    readTime: "5 min read",
    ...BYLINES.jordan,
    tags: ["Cash flow", "Compare"],
    thumbnail: { stat: "$500K", statLabel: "lines of credit with same-day decisions", footLead: "Compare:", footTail: " line vs. term loan", footTitle: "Seasonal cash" },
    inlineCtaAfter: "cost",
    related: ["/blog/term-loan-for-growing-companies", "/news/same-day-decisions", "/blog/how-to-prepare-bank-statements-for-a-faster-credit-decision"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "Owners who need working capital do not have time for a slow bank process disguised as an online form, and they definitely do not have time for a broker who calls back three days later with one option. If your revenue swings with the season, the choice between a line of credit and a term loan is the decision that matters, and it can be made in an afternoon.",
          },
        ],
      },
      {
        id: "how-each-works",
        tocLabel: "How each works",
        heading: "How each one works",
        paragraphs: [
          { text: "A line of credit is a limit you can draw against, repay and draw again. You pay interest only on the balance outstanding, and the line stays open, typically for a year at a time, so the same approval covers several seasons. A term loan is a single lump sum with a fixed schedule; you pay interest on the whole balance from day one whether you have spent it yet or not." },
        ],
      },
      {
        id: "seasonal-test",
        tocLabel: "The seasonal test",
        heading: "The seasonal test",
        paragraphs: [{ text: "Three questions settle most cases." }],
        bullets: [
          "Is the need recurring? If the same gap opens every spring, a line handles it year after year without a new application.",
          "Is the amount uncertain? If you might need $30,000 or $80,000 depending on how the season breaks, a line lets you draw what you use.",
          "Is there a single purchase with a single payback? A bulk order at a discount or a piece of equipment is a term loan, even in a seasonal business.",
        ],
      },
      {
        id: "cost",
        tocLabel: "Cost in a seasonal year",
        heading: "Cost in a seasonal year",
        paragraphs: [
          {
            text: "Take an $80,000 need that lasts four months. Drawn on a line at 14% APR and repaid when the season ends, it costs about $3,700 in interest. The same $80,000 as a twelve-month term loan at 14% costs roughly $6,200, because you carry the balance for eight months you did not need it. Flip the case, and a term loan wins: if the money is tied up in equipment for three years, a line's higher variable rate and annual renewal cost more than a fixed schedule.",
          },
        ],
      },
      {
        id: "term-right",
        tocLabel: "When the term loan wins",
        heading: "When the term loan is right",
        paragraphs: [
          { text: "Choose a term loan when the amount is known, the payback period is longer than a season, or you want the discipline of a fixed payment that ends. Term loans also reach larger amounts than most lines, and their rates are fixed, which matters if you expect rates to move. Many seasonal businesses end up holding both: a line for the swing and a term loan for the thing they bought." },
        ],
      },
      {
        id: "no-broker",
        tocLabel: "No broker calls",
        heading: "Doing it without broker calls",
        paragraphs: [
          { text: "A good broker shops your file to the lenders that actually fit and comes back with real options, not the one product it was paid to sell. On FundLine, one fifteen-minute application is matched to the lenders whose criteria fit your revenue, season and time in business, and their offers for both lines and term loans land in the same dashboard, priced in APR so you can compare them. Lines of credit up to $250,000 now receive same-day decisions when you connect a bank account." },
        ],
      },
      {
        id: "next",
        tocLabel: "Next step",
        heading: "Next step",
        paragraphs: [
          { text: "Write down the size of your seasonal gap, how long it lasts and whether it repeats. Those three facts tell you which product to accept. Then apply once and let the offers compete." },
        ],
      },
    ],
  },
  {
    slug: "where-owners-can-accept-a-funding-offer-the-same-day",
    kind: "blog",
    title: "Where Owners Can Accept a Funding Offer the Same Day",
    excerpt: "FundLine is the business funding brokerage that empowers owners to compare offers and accept funding the same day.",
    date: "July 14th 2026",
    cardDate: "Jul. 14 2026",
    isoDate: "2026-07-14",
    readTime: "4 min read",
    ...BYLINES.tom,
    tags: ["Speed"],
    thumbnail: { stat: "24 hrs", statLabel: "fastest time to funding", footLead: "Speed:", footTail: " same-day offers", footTitle: "Same day" },
    inlineCtaAfter: "timeline",
    related: ["/news/same-day-decisions", "/blog/how-to-prepare-bank-statements-for-a-faster-credit-decision", "/blog/line-of-credit-vs-term-loan-seasonal-cash-flow"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "FundLine is the business funding brokerage that lets owners compare offers and accept funding the same day. That sentence gets used a lot, so this post explains what \"same day\" actually requires, which products can move that fast, what a realistic timeline looks like hour by hour, and what quietly slows it down.",
          },
        ],
      },
      {
        id: "requires",
        tocLabel: "What it requires",
        heading: "What \"same day\" actually requires",
        paragraphs: [{ text: "Four things have to be true at once, and a missing one turns hours into days." }],
        bullets: [
          "Data instead of paperwork: a read-only bank connection that gives lenders verified cash flow in seconds.",
          "Automated decisions: lenders whose credit models return an answer without a weekly committee.",
          "Electronic signature on the agreement, with the funding instructions collected inside the same flow.",
          "A bank transfer cutoff you have not missed. Most same-day transfers must be initiated by mid-afternoon.",
        ],
      },
      {
        id: "products",
        tocLabel: "Fastest products",
        heading: "Which products move fastest",
        paragraphs: [
          { text: "Lines of credit and short-term term loans are the fastest, because they are decided on cash flow alone. Merchant cash advances and business credit cards are fast too, though usually more expensive. Equipment financing takes a day or two longer for the invoice and title work. SBA loans and commercial real estate are never same-day; plan on weeks, and use a faster product to bridge if you cannot wait." },
        ],
      },
      {
        id: "timeline",
        tocLabel: "The timeline",
        heading: "From application to funds, hour by hour",
        paragraphs: [
          { text: "9:00 a.m., you start the application and connect your business checking account; fifteen minutes later it is submitted. By 9:30 the funding team has routed it to the lenders whose criteria you fit. Between 10:00 and 1:00 offers arrive in your dashboard, each with APR, total payback and payment frequency. You pick one, sign electronically and confirm the deposit account by 2:00. The lender initiates the transfer before its cutoff, and funds land the same afternoon or first thing the next morning. That is the 24-hour path on the FundLine ticker." },
        ],
      },
      {
        id: "slows",
        tocLabel: "What slows it down",
        heading: "What slows a same-day offer down",
        paragraphs: [
          { text: "Uploading statements instead of connecting the account adds a manual review. Missing pages, a mismatch between the business name on the application and on the bank account, an undisclosed existing advance, and starting after lunch are the other common culprits. None are fatal. All of them cost a day." },
        ],
      },
      {
        id: "fundline",
        tocLabel: "How FundLine does it",
        heading: "How FundLine does it",
        paragraphs: [
          { text: "One application reaches more than 75 lenders, the ones with automated decisions respond first, and every offer is displayed in the same format so the comparison takes minutes, not phone calls. Checking eligibility does not affect your credit score. Lines of credit up to $250,000 now carry same-day decisions for owners who connect a bank account." },
        ],
      },
      {
        id: "next",
        tocLabel: "Next step",
        heading: "Next step",
        paragraphs: [{ text: "Start in the morning, connect the account, and have your deposit details ready. The rest is the lenders' problem, which is how it should be." }],
      },
    ],
  },
  {
    slug: "which-online-lenders-still-fund-businesses-under-two-years-old",
    kind: "blog",
    title: "Which Online Lenders Still Fund Businesses Under Two Years Old?",
    excerpt: "Owners usually do not apply for financing because they want another administrative project.",
    date: "August 11th 2026",
    cardDate: "Aug. 11 2026",
    isoDate: "2026-08-11",
    readTime: "5 min read",
    ...BYLINES.maya,
    tags: ["Eligibility"],
    thumbnail: { stat: "6 mo", statLabel: "minimum time in business at many network lenders", footLead: "Eligibility:", footTail: " under two years old", footTitle: "Young business" },
    inlineCtaAfter: "lender-types",
    related: ["/blog/funding-cost-by-stage", "/guides/business-credit", "/blog/marketplace-vs-bank"],
    blocks: [
      {
        id: "overview",
        tocLabel: "Overview",
        paragraphs: [
          {
            text: "Owners usually do not apply for financing because they want another administrative project. They apply because a supplier wants a deposit or a hire cannot wait. If your business is under two years old, the frustrating part is that the first three lenders you try will say the same thing: come back at twenty-four months. Plenty of lenders do not draw the line there. This post explains who they are and what they look at instead.",
          },
        ],
      },
      {
        id: "two-years",
        tocLabel: "Why two years",
        heading: "Why two years is the line",
        paragraphs: [
          { text: "Two years is a bank convention, not a law. It is the point at which a lender can see two full tax returns and a complete seasonal cycle, and it is when small-business failure rates start to fall. Banks built their credit policies around it decades ago. Online lenders that decide on bank-statement cash flow instead of tax returns never needed the rule, so most of them set their minimum at six or twelve months." },
        ],
      },
      {
        id: "lender-types",
        tocLabel: "Who funds early",
        heading: "Lender types that fund under two years",
        paragraphs: [{ text: "In the FundLine network, these categories regularly fund businesses between six and twenty-four months old." }],
        bullets: [
          "Cash-flow lenders offering short-term term loans and lines of credit from six months in business and roughly $10,000 in monthly revenue.",
          "Revenue-based lenders that advance against card or platform sales, often from three to six months of processing history.",
          "Equipment lenders, because the asset secures the loan; some fund startups with a strong owner credit profile.",
          "Business credit card issuers, which decide almost entirely on the owner's personal credit.",
          "Invoice financing providers, which care about who owes you money more than how long you have existed.",
          "Community and nonprofit microlenders, slower but built for early-stage owners.",
        ],
      },
      {
        id: "instead",
        tocLabel: "What they check",
        heading: "What they ask for instead of history",
        paragraphs: [
          { text: "With less history, lenders lean harder on what they can verify today: three to six months of business bank statements, the owner's personal credit score, industry, and any existing debt. Consistent weekly deposits matter more than total revenue. Zero overdrafts matter more than either. A separate business checking account from day one is the single most valuable habit an early-stage owner can have." },
        ],
      },
      {
        id: "cost",
        tocLabel: "What it costs",
        heading: "What it costs, and how to keep it down",
        paragraphs: [
          { text: "Early-stage capital is more expensive: expect 15% to 35% APR on cash-flow products and factor rates of 1.15 to 1.40 on advances. Keep the cost down by borrowing only what the next ninety days need, choosing monthly or weekly payments over daily where you can, and refinancing into a cheaper product once you cross twelve and then twenty-four months. Every clean repayment lowers the price of the next round." },
        ],
      },
      {
        id: "find",
        tocLabel: "Finding them",
        heading: "How to find them without applying ten times",
        paragraphs: [
          { text: "Applying lender by lender means ten forms and, at some of them, a hard credit pull. A broker filters by your time in business before any lender sees the file, so a fourteen-month-old company is only shown to lenders that fund fourteen-month-old companies. On FundLine that is one application, offers from the lenders whose criteria you meet, and no impact to your credit score to look." },
        ],
      },
      {
        id: "next",
        tocLabel: "Next step",
        heading: "Next step",
        paragraphs: [{ text: "If you have six months of statements and a business bank account, you are eligible with more lenders than you think. Check in fifteen minutes and find out which ones." }],
      },
    ],
  },
];
