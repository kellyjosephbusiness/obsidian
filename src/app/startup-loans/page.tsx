import type { Metadata } from "next";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";
import { STARTUP_FAQ, STARTUP_META } from "@/components/sites/corgi-insure-a0f7893c/startup-insurance-fc836df6/data";
import { EssentialProducts } from "@/components/sites/corgi-insure-a0f7893c/startup-insurance-fc836df6/EssentialProducts";
import { StagePackages } from "@/components/sites/corgi-insure-a0f7893c/startup-insurance-fc836df6/StagePackages";
import { StartupHero } from "@/components/sites/corgi-insure-a0f7893c/startup-insurance-fc836df6/StartupHero";
import { WhyFundLine } from "@/components/sites/corgi-insure-a0f7893c/startup-insurance-fc836df6/WhyFundLine";

export const metadata: Metadata = {
  title: STARTUP_META.title,
  description: STARTUP_META.description,
};

/**
 * Clone of https://www.corgi.insure/startup-insurance, rebranded to FundLine Capital startup
 * funding packages. Section order mirrors the live DOM: breadcrumb + hero → stage packages →
 * essential products (instant offers + specialty) → why FundLine → FAQ → footer.
 */
export default function StartupLoansPage() {
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
            <StartupHero />
            <StagePackages />
            <EssentialProducts />
            <WhyFundLine />
            <FaqSection items={STARTUP_FAQ} />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
