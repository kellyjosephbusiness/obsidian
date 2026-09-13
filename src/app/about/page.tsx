import type { Metadata } from "next";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/company/CtaBand";
import { ABOUT_CTA, ABOUT_HERO, ABOUT_META, ABOUT_STATS_HEADING, ABOUT_VALUES, ABOUT_VALUES_HEADER, LEADERS, LEADERSHIP_HEADER } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { IconCardGrid } from "@/components/sites/corgi-insure-a0f7893c/company/IconCardGrid";
import { LeadershipGrid } from "@/components/sites/corgi-insure-a0f7893c/company/LeadershipGrid";
import { MissionSection } from "@/components/sites/corgi-insure-a0f7893c/company/MissionSection";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/company/PageHero";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { SectionFrame } from "@/components/sites/corgi-insure-a0f7893c/company/SectionFrame";
import { StatsBand } from "@/components/sites/corgi-insure-a0f7893c/company/StatsBand";

export const metadata: Metadata = { title: ABOUT_META.title, description: ABOUT_META.description };

/** /about — hero → mission → stats band → leadership → values → CTA → footer. */
export default function AboutPage() {
  return (
    <PageShell>
      <PageHero content={ABOUT_HERO} dataTrack="cta-about-hero" />
      <MissionSection />
      <StatsBand headingLine1={ABOUT_STATS_HEADING.line1} headingLine2={ABOUT_STATS_HEADING.line2} />
      <SectionFrame id="leadership" heading={LEADERSHIP_HEADER.heading} sub={LEADERSHIP_HEADER.sub}>
        <LeadershipGrid leaders={LEADERS} />
      </SectionFrame>
      <SectionFrame heading={ABOUT_VALUES_HEADER.heading} sub={ABOUT_VALUES_HEADER.sub}>
        <IconCardGrid items={ABOUT_VALUES} columns={4} />
      </SectionFrame>
      <CtaBand content={ABOUT_CTA} dataTrack="cta-about" />
    </PageShell>
  );
}
