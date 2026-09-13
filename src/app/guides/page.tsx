import type { Metadata } from "next";
import { ArticleIndex } from "@/components/sites/corgi-insure-a0f7893c/editorial/ArticleIndex";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/editorial/CtaBand";
import { EditorialShell } from "@/components/sites/corgi-insure-a0f7893c/editorial/EditorialShell";
import { IndexHero } from "@/components/sites/corgi-insure-a0f7893c/editorial/IndexHero";
import { GUIDES_INDEX, INDEX_CTA, INDEX_LABELS, articlesOfKind, toTaggedCard } from "@/components/sites/corgi-insure-a0f7893c/editorial/data";

export const metadata: Metadata = {
  title: "Small Business Guides | FundLine Capital",
  description: GUIDES_INDEX.sub,
};

/** Guides index: hero heading → "All guides" grid (no tag filter; three guides) → CTA → footer. */
export default function GuidesIndexPage() {
  return (
    <EditorialShell>
      <IndexHero {...GUIDES_INDEX} />
      <ArticleIndex label={INDEX_LABELS.guides} articles={articlesOfKind("guide").map(toTaggedCard)} />
      <CtaBand {...INDEX_CTA} />
    </EditorialShell>
  );
}
