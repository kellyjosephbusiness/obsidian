import type { Metadata } from "next";
import { ArticleGrid } from "@/components/sites/corgi-insure-a0f7893c/editorial/ArticleGrid";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/editorial/CtaBand";
import { EditorialShell } from "@/components/sites/corgi-insure-a0f7893c/editorial/EditorialShell";
import { IndexHero } from "@/components/sites/corgi-insure-a0f7893c/editorial/IndexHero";
import { PressContactCard } from "@/components/sites/corgi-insure-a0f7893c/editorial/PressContactCard";
import { INDEX_CTA, INDEX_LABELS, NEWSROOM_INDEX, SERIES_B_CARD, articlesOfKind, toCard } from "@/components/sites/corgi-insure-a0f7893c/editorial/data";

export const metadata: Metadata = {
  title: "Newsroom | FundLine Capital",
  description: NEWSROOM_INDEX.sub,
};

/** Newsroom index: hero → press-release grid (/news/same-day-decisions, /newsroom/series-b) → media contact → CTA → footer. */
export default function NewsroomPage() {
  const releases = [...articlesOfKind("news").map(toCard), SERIES_B_CARD];
  return (
    <EditorialShell>
      <IndexHero {...NEWSROOM_INDEX} />
      <ArticleGrid label={INDEX_LABELS.newsroom} articles={releases} />
      <PressContactCard />
      <CtaBand {...INDEX_CTA} />
    </EditorialShell>
  );
}
