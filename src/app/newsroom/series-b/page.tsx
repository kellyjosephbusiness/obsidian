import type { Metadata } from "next";
import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";
import { LatestArticles } from "@/components/sites/corgi-insure-a0f7893c/press-releases--series-b-f1aae1d8/LatestArticles";
import { PressArticle } from "@/components/sites/corgi-insure-a0f7893c/press-releases--series-b-f1aae1d8/PressArticle";
import { PressBreadcrumb } from "@/components/sites/corgi-insure-a0f7893c/press-releases--series-b-f1aae1d8/PressBreadcrumb";
import { PressByline } from "@/components/sites/corgi-insure-a0f7893c/press-releases--series-b-f1aae1d8/PressByline";
import { PressHero } from "@/components/sites/corgi-insure-a0f7893c/press-releases--series-b-f1aae1d8/PressHero";

export const metadata: Metadata = {
  title: "FundLine Capital Raises $160M Series B | Newsroom",
  description:
    "New funding values FundLine Capital at $1.3B and supports expansion of its small-business funding brokerage.",
};

/**
 * Clone of corgi.insure/press-releases/series-b, rebranded to FundLine Capital:
 * breadcrumb → hero → byline → article (sticky TOC / body / sticky rail) → latest articles → footer.
 */
export default function SeriesBPressRelease() {
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
          <div className="flex w-full flex-col bg-background text-foreground">
            <PressBreadcrumb />
            <PressHero />
            <PressByline />
            <PressArticle />
            <LatestArticles />
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
