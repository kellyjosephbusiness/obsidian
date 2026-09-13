import type { Metadata } from "next";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/company/CtaBand";
import { HOW_CTA, HOW_FAQ, HOW_HERO, HOW_META, HOW_STEPS, HOW_TIMELINE, HOW_TIMELINE_HEADER } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/company/PageHero";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { SectionFrame } from "@/components/sites/corgi-insure-a0f7893c/company/SectionFrame";
import { StepsSection } from "@/components/sites/corgi-insure-a0f7893c/company/StepsSection";
import { TimelineBand } from "@/components/sites/corgi-insure-a0f7893c/company/TimelineBand";

export const metadata: Metadata = { title: HOW_META.title, description: HOW_META.description };

/** /how-it-works — hero → four numbered steps → timeline band → FAQ → CTA → footer. */
export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHero content={HOW_HERO} dataTrack="cta-how-hero" />
      <SectionFrame heading="Four steps, one application" sub="Every step is online, and a specialist is one call away at each of them.">
        <StepsSection steps={HOW_STEPS} />
      </SectionFrame>
      <TimelineBand heading={HOW_TIMELINE_HEADER.heading} sub={HOW_TIMELINE_HEADER.sub} items={HOW_TIMELINE} />
      <FaqSection items={HOW_FAQ} />
      <CtaBand content={HOW_CTA} dataTrack="cta-how" />
    </PageShell>
  );
}
