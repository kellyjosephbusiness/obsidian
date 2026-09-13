import type { ReactNode } from "react";
import { SiteFooter, type FooterCta } from "../root-8a5edab2/SiteFooter";
import { SiteHeader, type HeaderActions } from "../root-8a5edab2/SiteHeader";

interface SiteShellProps {
  children: ReactNode;
  footerCta?: FooterCta;
  headerActions?: HeaderActions;
}

/** The standard page shell from `src/app/page.tsx`: skip link → fixed header → main → footer. */
export function SiteShell({ children, footerCta, headerActions }: SiteShellProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#191919] focus:shadow-[0_0_24px_0_rgba(25,25,25,0.2)]"
      >
        Skip to main content
      </a>
      <SiteHeader actions={headerActions} />
      <div id="site-content-shell" className="flex min-h-screen flex-1 flex-col bg-background">
        <main id="main-content" className="relative z-0 flex-grow">
          <div className="flex min-h-screen flex-col overflow-clip bg-background text-foreground">{children}</div>
        </main>
        <SiteFooter cta={footerCta} />
      </div>
    </>
  );
}
