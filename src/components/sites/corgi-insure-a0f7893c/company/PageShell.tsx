import type { ReactNode } from "react";
import type { HeaderActions } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";
import { SiteFooter, type FooterCta } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";

export interface PageShellProps {
  children: ReactNode;
  /** Header action (defaults to Apply now). */
  actions?: HeaderActions;
  /** Footer CTA band content (defaults to the home footer CTA). */
  footerCta?: FooterCta;
}

/**
 * The standard page shell from `src/app/page.tsx`: skip link → fixed header → #site-content-shell →
 * main#main-content → sections → footer. Every company/account route composes this.
 */
export function PageShell({ children, actions, footerCta }: PageShellProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-[8px] focus:bg-white focus:px-4 focus:py-2 focus:text-[#191919] focus:shadow-[0_0_24px_0_rgba(25,25,25,0.2)]"
      >
        Skip to main content
      </a>
      <SiteHeader actions={actions} />
      <div id="site-content-shell" className="flex min-h-screen flex-1 flex-col bg-background">
        <main id="main-content" className="relative z-0 flex-grow">
          <div className="flex min-h-screen flex-col overflow-clip bg-[#f6f6f6] text-[#191919]">{children}</div>
        </main>
        <SiteFooter cta={footerCta} />
      </div>
    </>
  );
}
