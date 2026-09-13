import type { Metadata } from "next";
import { ComparisonTable } from "@/components/sites/corgi-insure-a0f7893c/products/ComparisonTable";
import { LOAN_TYPES_FAQ, LOAN_TYPES_HERO, LOAN_TYPES_META, LOAN_TYPES_PRODUCTS_HEADER } from "@/components/sites/corgi-insure-a0f7893c/products/data";
import { LoanTypeDetails } from "@/components/sites/corgi-insure-a0f7893c/products/LoanTypeDetails";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/products/PageHero";
import { SiteShell } from "@/components/sites/corgi-insure-a0f7893c/products/SiteShell";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { JourneySection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/JourneySection";
import { PoliciesSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/PoliciesSection";

export const metadata: Metadata = { title: LOAN_TYPES_META.title, description: LOAN_TYPES_META.description };

/**
 * /loan-types — hero → all products (#all-financing) → stage packages → anchored product details
 * (#term-loans … #franchise-financing) → comparison table (#compare) → FAQ → footer.
 */
export default function LoanTypesPage() {
  return (
    <SiteShell>
      <PageHero content={LOAN_TYPES_HERO} dataTrack="cta-loan-types-hero" />
      <PoliciesSection id="all-financing" heading={LOAN_TYPES_PRODUCTS_HEADER.heading} sub={LOAN_TYPES_PRODUCTS_HEADER.sub} cta={null} dataTrack="cta-loan-types-products" />
      <JourneySection />
      <LoanTypeDetails />
      <ComparisonTable />
      <FaqSection items={LOAN_TYPES_FAQ} />
    </SiteShell>
  );
}
