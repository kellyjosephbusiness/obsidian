import type { Metadata } from "next";
import { BrokerHero } from "@/components/sites/corgi-insure-a0f7893c/for-brokers-4e828285/BrokerHero";
import { BROKER_FOOTER_CTA, BROKER_META, BROKER_NAV_ACTIONS, PRODUCTS_HEADING } from "@/components/sites/corgi-insure-a0f7893c/for-brokers-4e828285/data";
import { PartnerMarquee } from "@/components/sites/corgi-insure-a0f7893c/for-brokers-4e828285/PartnerMarquee";
import { WorkflowSentence } from "@/components/sites/corgi-insure-a0f7893c/for-brokers-4e828285/WorkflowSentence";
import { PoliciesSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/PoliciesSection";
import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";

export const metadata: Metadata = {
  title: BROKER_META.title,
  description: BROKER_META.description,
};

/**
 * Clone of https://www.corgi.insure/for-brokers rebranded to FundLine Capital. Section order mirrors
 * the live DOM: hero → partner marquee → workflow sentence → core products grid → footer.
 */
export default function ForBrokersPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#191919] focus:shadow-[0_0_24px_0_rgba(25,25,25,0.2)]"
      >
        Skip to main content
      </a>
      <SiteHeader actions={BROKER_NAV_ACTIONS} />
      <div id="site-content-shell" className="flex min-h-screen flex-1 flex-col bg-background">
        <main id="main-content" className="relative z-0 flex-grow">
          <div className="flex min-h-screen flex-col overflow-hidden bg-[#f6f6f6] text-[#191919]">
            <BrokerHero />
            <PartnerMarquee />
            <WorkflowSentence />
            <PoliciesSection heading={PRODUCTS_HEADING} sub="" cta={null} showMascots dataTrack="cta-brokers-products" />
          </div>
        </main>
        <SiteFooter cta={BROKER_FOOTER_CTA} />
      </div>
    </>
  );
}
