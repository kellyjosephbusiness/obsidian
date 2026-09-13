import type { Metadata } from "next";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/company/CtaBand";
import { CUSTOMER_STORIES, STORIES_CTA, STORIES_GRID_HEADER, STORIES_HERO, STORIES_META } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/company/PageHero";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { SectionFrame } from "@/components/sites/corgi-insure-a0f7893c/company/SectionFrame";
import { StoryCards } from "@/components/sites/corgi-insure-a0f7893c/company/StoryCards";

export const metadata: Metadata = { title: STORIES_META.title, description: STORIES_META.description };

/** /customer-stories — hero → filterable story cards → CTA → footer. */
export default function CustomerStoriesPage() {
  return (
    <PageShell>
      <PageHero content={STORIES_HERO} dataTrack="cta-stories-hero" />
      <SectionFrame heading={STORIES_GRID_HEADER.heading} sub={STORIES_GRID_HEADER.sub}>
        <StoryCards stories={CUSTOMER_STORIES} />
      </SectionFrame>
      <CtaBand content={STORIES_CTA} dataTrack="cta-stories" />
    </PageShell>
  );
}
