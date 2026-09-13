import type { Metadata } from "next";
import {
  FOOTER_CTA_LENDERS,
  FOR_LENDERS_FAQ,
  FOR_LENDERS_HERO,
  FOR_LENDERS_META,
  LENDER_STATS,
  LENDER_STATS_HEADER,
  LENDER_VALUE_CARDS,
  LENDER_VALUE_HEADER,
  MATCHING_HEADER,
  MATCHING_STEPS,
} from "@/components/sites/corgi-insure-a0f7893c/products/data";
import { IconCardGrid } from "@/components/sites/corgi-insure-a0f7893c/products/IconCardGrid";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/products/PageHero";
import { PartnerForm } from "@/components/sites/corgi-insure-a0f7893c/products/PartnerForm";
import { SiteShell } from "@/components/sites/corgi-insure-a0f7893c/products/SiteShell";
import { StatsBand } from "@/components/sites/corgi-insure-a0f7893c/products/StatsBand";
import { StepsSection } from "@/components/sites/corgi-insure-a0f7893c/products/StepsSection";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";

export const metadata: Metadata = { title: FOR_LENDERS_META.title, description: FOR_LENDERS_META.description };

/** /for-lenders — hero → value props by lender type → how matching works → stats → partner form → FAQ → footer. */
export default function ForLendersPage() {
  return (
    <SiteShell footerCta={FOOTER_CTA_LENDERS}>
      <PageHero content={FOR_LENDERS_HERO} dataTrack="cta-for-lenders-hero" />
      <IconCardGrid id="value" heading={LENDER_VALUE_HEADER.heading} sub={LENDER_VALUE_HEADER.sub} cards={LENDER_VALUE_CARDS} />
      <StepsSection id="matching" heading={MATCHING_HEADER.heading} sub={MATCHING_HEADER.sub} items={MATCHING_STEPS} />
      <StatsBand heading={LENDER_STATS_HEADER.heading} stats={LENDER_STATS} />
      <PartnerForm />
      <FaqSection items={FOR_LENDERS_FAQ} />
    </SiteShell>
  );
}
