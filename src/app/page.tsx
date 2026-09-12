import { AdvantageSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/AdvantageSection";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { GetQuotedMobile } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/GetQuotedMobile";
import { GetQuotedSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/GetQuotedSection";
import { HeroSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/HeroSection";
import { IntroSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/IntroSection";
import { JourneySection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/JourneySection";
import { PoliciesSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/PoliciesSection";
import { QuoteStripSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/QuoteStripSection";
import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";
import { TestimonialsSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/TestimonialsSection";

/**
 * Clone of https://corgi.insure/ (home). Section order and wrappers mirror the live DOM:
 * fixed header → #site-content-shell → main#main-content → sections → footer.
 */
export default function Home() {
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
            <HeroSection />
            <IntroSection />
            <QuoteStripSection />
            <JourneySection />
            <AdvantageSection />
            <GetQuotedSection />
            <GetQuotedMobile />
            <TestimonialsSection />
            <PoliciesSection />
            <FaqSection />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
