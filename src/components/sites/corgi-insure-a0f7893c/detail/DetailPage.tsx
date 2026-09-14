import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";
import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { Callout } from "./Callout";
import { ClosingBand } from "./ClosingBand";
import { CtaCards } from "./CtaCards";
import { DetailFaq } from "./DetailFaq";
import { DetailHero } from "./DetailHero";
import { FeatureCards } from "./FeatureCards";
import { Footnotes } from "./Footnotes";
import { GuidesBand } from "./GuidesBand";
import { ReviewsCarousel } from "./ReviewsCarousel";
import { StatBand } from "./StatBand";
import { StepsSection } from "./StepsSection";
import { SupportSection } from "./SupportSection";

/**
 * Loan-product / industry page. Owner reviews sit directly under the three feature cards so the
 * proof lands early: hero → stat band → feature cards → reviews → callout → steps → support →
 * FAQ → CTA cards → guides → closing → footnotes. Section tones alternate tint/white/grey down
 * the page, so re-ordering a section means re-checking its `Frame` tone.
 */
export function DetailPage({ page }: { page: DetailPageContent }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-[4px] focus:bg-white focus:px-4 focus:py-2 focus:text-[#191919] focus:shadow-[0_0_24px_0_rgba(25,25,25,0.2)]"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <div id="site-content-shell" className="flex min-h-screen flex-1 flex-col bg-background">
        <main id="main-content" className="relative z-0 flex-grow">
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <DetailHero page={page} />
            <StatBand stat={page.stat} />
            <FeatureCards features={page.features} />
            <ReviewsCarousel reviews={page.reviews} />
            <Callout callout={page.callout} />
            <StepsSection steps={page.steps} />
            <SupportSection support={page.support} />
            <DetailFaq faq={page.faq} />
            <CtaCards cards={page.ctaCards} />
            <GuidesBand guides={page.guides} />
            <ClosingBand closing={page.closing} />
            <Footnotes notes={page.footnotes} />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
