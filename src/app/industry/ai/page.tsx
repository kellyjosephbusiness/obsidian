import type { Metadata } from "next";
import { AI_FAQ, AI_META, AI_PACKAGES, AI_PACKAGES_HEADER, AI_PRODUCTS_HEADER } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/data";
import { FundingMoments } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/FundingMoments";
import { IndustryChips } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/IndustryChips";
import { IndustryHero } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/IndustryHero";
import { ScenariosSection } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/ScenariosSection";
import { WhySection } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/WhySection";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { JourneySection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/JourneySection";
import { PoliciesSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/PoliciesSection";
import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";

export const metadata: Metadata = {
  title: AI_META.title,
  description: AI_META.description,
};

/**
 * Clone of https://www.corgi.insure/ai, rebranded to FundLine Capital funding for AI companies.
 * Section order mirrors the live DOM: hero → why → funding moments → packages → products →
 * scenarios → industries → FAQ → footer.
 */
export default function IndustryAiPage() {
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
          <div className="flex min-h-screen flex-col overflow-clip bg-background text-foreground">
            <IndustryHero />
            <WhySection />
            <FundingMoments />
            <JourneySection heading={AI_PACKAGES_HEADER.heading} sub={AI_PACKAGES_HEADER.sub} packages={AI_PACKAGES} />
            <PoliciesSection heading={AI_PRODUCTS_HEADER.heading} sub={AI_PRODUCTS_HEADER.sub} cta={AI_PRODUCTS_HEADER.cta} dataTrack="cta-ai-products" />
            <ScenariosSection />
            <IndustryChips />
            <FaqSection items={AI_FAQ} />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
