import { FundingMoments } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/FundingMoments";
import { IndustryChips } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/IndustryChips";
import { WhySection } from "@/components/sites/corgi-insure-a0f7893c/ai-97ffa848/WhySection";
import { LINKS } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { JourneySection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/JourneySection";
import { PoliciesSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/PoliciesSection";
import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";
import { INDUSTRIES_CHIPS_HEADING, industryBreadcrumb, industryPackages, otherIndustryChips } from "./data";
import { IndustryIconHero } from "./IndustryIconHero";
import type { IndustryDefinition } from "./types";

/**
 * Industry page template. Section order mirrors `/industry/ai`:
 * hero → why → funding moments → packages → products → scenarios → other industries → FAQ → footer.
 */
export function IndustryPage({ industry }: { industry: IndustryDefinition }) {
  const anchors = industry.anchors ?? {};
  const moments = <FundingMoments heading={industry.momentsHeading} items={industry.moments} />;

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
            <IndustryIconHero
              content={{
                icon: industry.icon,
                headingLine1: industry.hero.headingLine1,
                headingLine2: industry.hero.headingLine2,
                sub: industry.hero.sub,
                cta: { label: "Apply now", href: LINKS.apply, icon: "arrow_forward" },
              }}
              breadcrumb={industryBreadcrumb(industry)}
              dataTrack={`cta-industry-${industry.slug}-hero`}
            />
            <WhySection content={industry.why} id={anchors.why} />
            {anchors.moments ? (
              <div id={anchors.moments} className="scroll-mt-28">
                {moments}
              </div>
            ) : (
              moments
            )}
            <JourneySection heading={`Funding Packages That Slot Perfectly Into ${industry.name}`} sub="" packages={industryPackages(industry.slug)} />
            <PoliciesSection
              id={anchors.products ?? "products"}
              heading={`Core Funding Products for ${industry.name}`}
              sub={industry.productsSub}
              cta={{ label: "Apply now", href: LINKS.apply }}
              dataTrack={`cta-${industry.slug}-products`}
            />
            <WhySection content={industry.scenarios} id={anchors.scenarios ?? "scenarios"} />
            <IndustryChips heading={INDUSTRIES_CHIPS_HEADING} chips={otherIndustryChips(industry.slug)} />
            <FaqSection items={industry.faq} />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
