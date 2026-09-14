import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data";
import { SiteFooter } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";

export const metadata: Metadata = { title: "Page coming soon | FundLine Capital" };

const SHORTCUTS = [
  { label: "Term loans", href: "/term-loans" },
  { label: "Startup loans", href: "/startup-loans" },
  { label: "Funding for AI companies", href: "/industry/ai" },
  { label: "Line of credit", href: "/line-of-credit" },
  { label: "Newsroom", href: "/newsroom" },
];

/** Branded fallback for routes that are linked but not built yet. */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <div id="site-content-shell" className="flex min-h-screen flex-1 flex-col bg-background">
        <main id="main-content" className="relative z-0 flex-grow">
          <section className="relative flex min-h-[70vh] items-center border-b border-[#e1e1e1] px-4 pt-[160px] pb-16 md:px-6 lg:px-16">
            <div className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-8 text-center">
              <span className="rounded-[4px] border border-[#e1e1e1] bg-white px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#4a4a4a]">Coming soon</span>
              <h1 className="font-mono font-medium text-[#191919] text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] tracking-[var(--h1-tracking)]">
                This page is still being built.
              </h1>
              <p className="text-body-large text-[#4a4a4a]">
                We are rolling FundLine Capital out one section at a time. In the meantime you can start an application or jump to one of the pages that is ready.
              </p>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row">
                <PressableButton variant="primary" size="large" href={LINKS.apply}>
                  Apply now
                </PressableButton>
                <PressableButton variant="white" size="large" href="/">
                  Back to home
                </PressableButton>
              </div>
              <nav aria-label="Available pages" className="flex flex-wrap justify-center gap-2 pt-4">
                {SHORTCUTS.map((s) => (
                  <Link key={s.href} href={s.href} className="rounded-[4px] border border-[#e1e1e1] bg-white px-4 py-2 text-[14px] font-medium text-[#191919] transition-colors hover:border-[#1e3a8a] hover:text-[#1e3a8a]">
                    {s.label}
                  </Link>
                ))}
              </nav>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
