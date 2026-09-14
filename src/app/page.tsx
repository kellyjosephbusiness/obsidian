import { BlogTeaserSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/BlogTeaserSection";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { GetQuotedSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/GetQuotedSection";
import { HeroSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/HeroSection";
import { JourneySection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/JourneySection";
import { PoliciesSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/PoliciesSection";
import { ProcessSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/ProcessSection";
import { RatesSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/RatesSection";
import { ReviewsSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/ReviewsSection";
import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";

/**
 * FundLine Capital home page. Layout and wrappers mirror the corgi.insure clone:
 * fixed header → #site-content-shell → main#main-content → sections → footer.
 */
export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-[8px] focus:bg-white focus:px-4 focus:py-2 focus:text-[#191919] focus:shadow-[0_0_24px_0_rgba(25,25,25,0.2)]"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <div id="site-content-shell" className="flex min-h-screen flex-1 flex-col bg-background">
        <main id="main-content" className="relative z-0 flex-grow">
          <div className="flex min-h-screen flex-col overflow-clip bg-background text-foreground">
            <HeroSection />
            <ReviewsSection />
            <JourneySection />
            <ProcessSection />
            <GetQuotedSection />
            <PoliciesSection />
            <RatesSection />
            <BlogTeaserSection />
            <FaqSection />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
