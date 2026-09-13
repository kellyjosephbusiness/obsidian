import type { Metadata } from "next";
import { ArticleIndex } from "@/components/sites/corgi-insure-a0f7893c/editorial/ArticleIndex";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/editorial/CtaBand";
import { EditorialShell } from "@/components/sites/corgi-insure-a0f7893c/editorial/EditorialShell";
import { IndexHero } from "@/components/sites/corgi-insure-a0f7893c/editorial/IndexHero";
import { BLOG_INDEX, INDEX_CTA, INDEX_LABELS, articlesOfKind, tagsOfKind, toTaggedCard } from "@/components/sites/corgi-insure-a0f7893c/editorial/data";

export const metadata: Metadata = {
  title: "Blog | FundLine Capital",
  description: BLOG_INDEX.sub,
};

/** Blog index: hero heading → tag filter → "Latest articles" grid → CTA → footer. */
export default function BlogIndexPage() {
  return (
    <EditorialShell>
      <IndexHero {...BLOG_INDEX} />
      <ArticleIndex label={INDEX_LABELS.blog} articles={articlesOfKind("blog").map(toTaggedCard)} tags={tagsOfKind("blog")} />
      <CtaBand {...INDEX_CTA} />
    </EditorialShell>
  );
}
