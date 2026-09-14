# Copy brief — FundLine detail pages (products and industries)

Fill `DetailPageContent` objects (see `src/types/sites/corgi-insure-a0f7893c/detail.ts`) for every page. The template renders them; you write data only.

Brand rules (non-negotiable): FundLine Capital is a **commercial loan broker / funding shop**, not a lender, marketplace, bank or fintech. We take one application and shop it to the lenders we work with that fit the business; we never say "sent to every lender", "75+ lenders at once", "matching engine", "AI", "platform", "marketplace". Numbers are fictional and modest: network of 75+ lenders, 4.8★ owner rating, 12,480 reviews, $1.2B+ matched, funding in as little as 24 hours, $5K–$5M range, no impact to credit score to apply. No insurance vocabulary. No real companies, banks, reviewers or investors. CTA labels are "Apply now" (never "Check eligibility"); `href` for apply is `/apply`, for a call `/book-a-call`.

Voice: direct, owner-to-owner, short sentences, concrete numbers. Structure per page (mirrors the reference page):
- `hero`: line 1 + line 2 (line 2 is the italic accent, e.g. "Grow with a business" / "line of credit."), `sub` of 2–3 sentences with footnote markers ¹ ² ³ that match `footnotes`, CTA "Apply now", `fineprint` ("FundLine Capital is a commercial loan broker, not a lender. Offers are made by the lenders we work with."), and an `estimator` (title "How much do you need?", label "Funding amount", min 5000, max 5000000 for most products, sensible step/initial, illustrative `apr` and `termMonths` for the product, CTA "Apply now" → `/apply`, note about the estimate being illustrative).
- `stat`: one big number (e.g. "$1.2B+", "12K+", "24 hrs") + label + a one-sentence blurb.
- `features`: two-line heading + sub + exactly 3 cards with a Material Symbols icon each.
- `callout`: icon + heading + bold lead + body + CTA (a related guide or product).
- `steps`: heading + exactly 3 steps (apply / compare offers / fund) + an app-mock dataset (business name like "Purple Peach Properties", available/limit, balance, primary action, 4 rows).
- `support`: two-line heading + body + link ("Book a call" → `/book-a-call`).
- `reviews`: heading + score "4.8" + "Excellent" + "Based on 12,480 reviews" + 6 short fictional reviews (title ≤ 6 words, body ≤ 160 chars, author first name or initials).
- `faq`: heading + 8–12 questions with 2–4 sentence answers, specific to the product or industry.
- `ctaCards`: exactly two — one "light", one "periwinkle" — pointing to two related pages.
- `guides`: heading + sub + 3 cards linking to existing routes (`/guides/business-financing`, `/guides/business-credit`, `/guides/getting-ready-to-borrow`, `/blog/...` slugs that exist, `/calculators`).
- `closing`: two-line heading + CTA + note.
- `footnotes`: the 3–4 disclosure lines referenced by the markers.

Breadcrumb: products → [Home "/", Products "/loan-types", <name>]; industries → [Home "/", Industries "/loan-types", <name>].
