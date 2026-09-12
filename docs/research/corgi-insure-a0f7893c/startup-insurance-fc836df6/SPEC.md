# SPEC — `/startup-loans` (source: https://www.corgi.insure/startup-insurance, page-key `startup-insurance-fc836df6`)

Source: 1440×8169. Trees/copy/assets/behaviors here; screenshots in `docs/design-references/corgi-insure-a0f7893c/startup-insurance-fc836df6/`.

## FundLine framing
**"Startup Funding That Moves at Your Pace"** — funding packages for businesses under two years old; each stage explains what the package is for and lists what it funds.

## Sections
1. **Hero** [0,44,1440,491] left-aligned in a 1200px container with a soft grey cloud/gradient image on the right (manifest: hero cloud webp — keep). Breadcrumb "Home / Startup Loans" (14px, above H1 — check tree). H1 60px "Startup Insurance That / Moves at Your Pace" → "Startup Funding That / Moves at Your Pace"; sub → "Your business needs the right capital at every growth stage. Apply in minutes and see real offers instantly."; primary small "Get startup funding" → `/apply?package=starting`.
2. **Packages** [536–2875] "Scalable Startup Insurance Packages & Customizable Coverage Solutions" → **"Scalable Startup Funding Packages & / Customizable Financing Solutions"**, sub "Pre-set capital for every stage. Or build your own custom package." Then **four alternating rows** (1200px container, rails): each row = a text block (label "Best for:" bold + paragraph 16px #4a4a4a) and a **package card** (same card anatomy as `CoveragePackageGrid`'s header: 160px header with art + title 32px + description, body with primary button "Check eligibility" + icon, then a **checklist table** "What you're protected from | Policy" → "What it funds | Product": rows with `check` icon, description, and a pill chip). Rows alternate text-left/card-right and card-left/text-right; the Custom row's card lists pills without checklist ("Choose your products"). Package copy: Pre-Seed & Seed → "Just Starting" (Best for: pre-revenue or first-year businesses that need working capital to hire or lease space…), Series A → "Growing", Growth Stage → "Established", Custom Package. Pills: reuse home `POLICY_PILLS` labels.
3. **Essential products** [2875–5138] "Essential Coverages for All Growth Stages" → **"Essential Funding for All Growth Stages"**, sub "We make sure your growing business is funded from every angle." Two labelled groups: "INSTANT COVERAGE" → "INSTANT OFFERS": the 8 product cards but in the **list variant** (hairline grid, badge "Fast decision", title, description, "Learn more" link — read the tree: it is a 3-col grid of borderless cells with hairlines, not the rounded cards) + centered primary button "Get funded instantly"; "SPECIALIZED COVERAGES" → "SPECIALTY FINANCING": 12 cells with "1-14 days to fund" chip + title + description (use home `SPECIALIZED_COVERAGES`) + white button "Choose your specialty products" → `/loan-types#all-financing`.
4. **Why startups choose** [0,5138,1440,391] "Why Startups Choose Corgi" → "Why Startups Choose FundLine": three dark cards (`bg-[#191919] rounded-[24px]`, icon tile colored: `verified_user` blue/purple/green — read tree) titles "Comprehensive Coverage / Fast Setup / Founders Focused" → "Every Product, One Application" / "Fast Decisions" / "Founder Focused".
5. **FAQ** [0,5528,1440,706] → `<FaqSection items={STARTUP_FAQ} />` (7 items: "What funding does a startup qualify for?", "How much does startup funding cost?", "When should a startup apply?", "Do I need revenue before applying?", "How quickly can I get funded?", "What makes FundLine different from a bank?", "Does applying affect my credit?").
6. `<SiteFooter />`.

## Behaviors
No time/scroll-driven behavior beyond the shared FAQ accordion and pressable buttons; pill chips have hover rotate/tint (same classes as `CoveragePackageGrid`'s `PolicyChip`); hover states on "Learn more" links (primary underline).

## Files
- `src/app/startup-loans/page.tsx` (metadata "Startup Loans & Funding Packages | FundLine Capital").
- Components in `src/components/sites/corgi-insure-a0f7893c/startup-insurance-fc836df6/`: `data.ts`, `StartupHero.tsx`, `StagePackages.tsx`, `EssentialProducts.tsx`, `WhyFundLine.tsx`. Types `src/types/sites/corgi-insure-a0f7893c/startup-loans.ts`.
