import type { Metadata } from "next";
import { CALCULATORS_FAQ, CALCULATORS_HERO, CALCULATORS_META } from "@/components/sites/corgi-insure-a0f7893c/products/data";
import { LoanCalculator } from "@/components/sites/corgi-insure-a0f7893c/products/LoanCalculator";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/products/PageHero";
import { QualifyEstimator } from "@/components/sites/corgi-insure-a0f7893c/products/QualifyEstimator";
import { SiteShell } from "@/components/sites/corgi-insure-a0f7893c/products/SiteShell";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";

export const metadata: Metadata = { title: CALCULATORS_META.title, description: CALCULATORS_META.description };

/** /calculators — hero → loan payment calculator (#payment) → qualification estimator (#qualify) → FAQ → footer. */
export default function CalculatorsPage() {
  return (
    <SiteShell>
      <PageHero content={CALCULATORS_HERO} dataTrack="cta-calculators-hero" />
      <LoanCalculator />
      <QualifyEstimator />
      <FaqSection items={CALCULATORS_FAQ} />
    </SiteShell>
  );
}
