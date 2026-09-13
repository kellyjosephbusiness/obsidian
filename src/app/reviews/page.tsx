import type { Metadata } from "next";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/company/CtaBand";
import { RATING_SUMMARY, REVIEW_ENTRIES, REVIEWS_CTA, REVIEWS_GRID_HEADER, REVIEWS_HERO, REVIEWS_META } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/company/PageHero";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { RatingSummary, ReviewsGrid } from "@/components/sites/corgi-insure-a0f7893c/company/ReviewsGrid";
import { SectionFrame } from "@/components/sites/corgi-insure-a0f7893c/company/SectionFrame";

export const metadata: Metadata = { title: REVIEWS_META.title, description: REVIEWS_META.description };

/** /reviews — hero → rating summary → 12-review grid → CTA → footer. */
export default function ReviewsPage() {
  return (
    <PageShell>
      <PageHero content={REVIEWS_HERO} dataTrack="cta-reviews-hero" />
      <SectionFrame width={1200}>
        <RatingSummary content={RATING_SUMMARY} />
      </SectionFrame>
      <SectionFrame heading={REVIEWS_GRID_HEADER.heading} sub={REVIEWS_GRID_HEADER.sub}>
        <ReviewsGrid reviews={REVIEW_ENTRIES} />
      </SectionFrame>
      <CtaBand content={REVIEWS_CTA} dataTrack="cta-reviews" />
    </PageShell>
  );
}
