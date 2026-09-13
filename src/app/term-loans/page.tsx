import type { Metadata } from "next";
import { AddOnsSection } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/AddOnsSection";
import { AgreementAnatomy } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/AgreementAnatomy";
import { CompareSection } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/CompareSection";
import { ContinueReading } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/ContinueReading";
import { PRODUCTS_HEADER, TERM_FAQ, TERM_META } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/data";
import { GlossarySection } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/GlossarySection";
import { IndustryChips } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/IndustryChips";
import { PlainEnglishTable } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/PlainEnglishTable";
import { ProductHero } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/ProductHero";
import { PullQuoteBand } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/PullQuoteBand";
import { QualifyCards } from "@/components/sites/corgi-insure-a0f7893c/directors-and-officers-f2860438/QualifyCards";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { PoliciesSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/PoliciesSection";
import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";

export const metadata: Metadata = { title: TERM_META.title, description: TERM_META.description };

/**
 * Clone of https://www.corgi.insure/directors-and-officers, rebranded as the FundLine Capital
 * term-loan product page. Twelve sections in the source order, then the shared footer.
 */
export default function TermLoansPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#191919] focus:shadow-[0_0_24px_0_rgba(25,25,25,0.2)]"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <div id="site-content-shell" className="flex min-h-screen flex-1 flex-col bg-background">
        <main id="main-content" className="relative z-0 flex-grow">
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <ProductHero />
            <PullQuoteBand />
            <AgreementAnatomy />
            <PlainEnglishTable />
            <CompareSection />
            <QualifyCards />
            <AddOnsSection />
            <PoliciesSection heading={PRODUCTS_HEADER.heading} sub={PRODUCTS_HEADER.sub} cta={PRODUCTS_HEADER.cta} dataTrack="cta-term-loans-products" />
            <GlossarySection />
            <ContinueReading />
            <FaqSection items={TERM_FAQ} />
            <IndustryChips />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
