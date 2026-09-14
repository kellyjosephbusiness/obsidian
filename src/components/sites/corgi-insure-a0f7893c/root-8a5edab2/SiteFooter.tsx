import Image from "next/image";
import Link from "next/link";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import {
  DISCLAIMER_PARAGRAPHS,
  FOOTER_COLUMNS,
  FOOTER_CTA,
  FOOTER_IMAGES,
  FOOTER_LEGAL,
  FOOTER_SOCIAL,
  FOOTER_STATS,
} from "./data";
import { FundLineBadge } from "@/components/sites/corgi-insure-a0f7893c/shared/FundLineLogo";

/** Number of duplicated stat strips; `logo-scroll` translates the track by -25% (one copy). */
const STAT_COPIES = 4;

const isExternal = (href: string) => /^(https?:)?\/\//.test(href);

/**
 * Site footer: dark CTA band (5 corgis, heading, two pressable buttons), CSS press marquee,
 * 5-column link grid with hairline dividers, legal/social row, landscape illustration and the
 * black disclaimer block. Server component — the only motion is the CSS `logo-scroll` keyframe.
 */
export interface FooterCta {
  headingLine1: string;
  headingLine2: string;
  buttons: { insured: { label: string; href: string } };
}

export function SiteFooter({ cta = FOOTER_CTA }: { cta?: FooterCta } = {}) {
  return (
    <footer className="relative flex w-full flex-col bg-[#f6f6f6]">
      {/* 1. Dark CTA band */}
      <section className="relative w-full overflow-hidden border-t border-b border-[#585858] bg-[#313131] px-4 py-4 md:px-6 md:py-6 lg:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 bottom-0 left-[max(16px,calc((100%-1600px)/2))] w-px bg-[#585858] md:left-[max(24px,calc((100%-1600px)/2))] lg:left-[max(64px,calc((100%-1600px)/2))]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 bottom-0 right-[max(16px,calc((100%-1600px)/2))] w-px bg-[#585858] md:right-[max(24px,calc((100%-1600px)/2))] lg:right-[max(64px,calc((100%-1600px)/2))]"
        />
        <div className="relative mx-auto max-w-[1600px]">
          <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#585858]" />
          <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#585858]" />
          <div className="flex flex-col items-center gap-9 p-4 md:p-6 lg:p-16">
            <div className="flex flex-col items-center gap-12">
              <h2 className="text-center font-medium font-mono text-[length:var(--h2-font-size)] leading-none tracking-[-0.032em] text-white">
                {cta.headingLine1}
                <br />
                {cta.headingLine2}
              </h2>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
                <PressableButton variant="primary" size="large" href={cta.buttons.insured.href}>
                  {cta.buttons.insured.label}
                </PressableButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof-point marquee (replaces press logos) */}
      <div className="w-full overflow-hidden border-t border-b border-[#e1e1e1] py-8">
        <div className="flex w-max items-center gap-20 motion-safe:animate-[logo-scroll_40s_linear_infinite]">
          {Array.from({ length: STAT_COPIES }, (_, copy) => (
            <div key={copy} className="flex shrink-0 items-end gap-20" aria-hidden={copy > 0 || undefined}>
              {FOOTER_STATS.map((item) => (
                <div key={item.value} className="flex flex-col items-center gap-2">
                  <div className="flex items-baseline gap-2 whitespace-nowrap">
                    <span className="font-mono text-[28px] font-medium leading-none tracking-[-0.02em] text-[#191919]">{item.value}</span>
                    <span className="text-[15px] leading-none tracking-[-0.01em] text-[#606060]">{item.label}</span>
                  </div>
                  <span className="whitespace-nowrap font-mono text-[12px] leading-[1.3] text-[#5c5c5c] tracking-[-0.01em]">{item.caption}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Link grid, legal row and background illustration */}
      <div className="relative w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 bottom-0 left-[max(16px,calc((100%-1600px)/2))] z-0 w-px bg-[#e1e1e1] md:left-[max(24px,calc((100%-1600px)/2))] lg:left-[max(64px,calc((100%-1600px)/2))]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 bottom-0 right-[max(16px,calc((100%-1600px)/2))] z-0 w-px bg-[#e1e1e1] md:right-[max(24px,calc((100%-1600px)/2))] lg:right-[max(64px,calc((100%-1600px)/2))]"
        />
        <div className="border-b border-[#e1e1e1] px-4 md:px-6 lg:px-16">
          <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 divide-x divide-y divide-[#e1e1e1] sm:grid-cols-2 md:grid-cols-5">
            <div className="col-span-1 flex items-center justify-center p-6 sm:col-span-2 md:col-span-1">
              <FundLineBadge className="w-[168px]" />
            </div>
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col items-start gap-6 p-6">
                <p className="font-semibold text-[16px] leading-[1.2] tracking-[-0.24px] text-[#191919]">{column.title}</p>
                <nav aria-label={column.title} className="flex w-full flex-col items-stretch gap-1">
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex min-h-[44px] w-full cursor-pointer items-center rounded-lg p-2 text-[16px] leading-[1.2] tracking-[-0.24px] text-[#606060] transition-colors hover:bg-[#e8e8e8] hover:text-[#191919]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full px-4 py-6 md:px-6 lg:px-16">
          <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[16px] leading-[1.2] tracking-[-0.24px] text-[#4a4a4a]">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {FOOTER_LEGAL.map((link) => (
                <a key={link.href} href={link.href} className="inline-flex min-h-[44px] items-center hover:text-[#191919]">
                  {link.label}
                </a>
              ))}
            </div>
            <div aria-hidden className="hidden h-px w-12 bg-[#e1e1e1] md:block" />
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {FOOTER_SOCIAL.map((link) => {
                const external = isExternal(link.href);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center hover:text-[#191919]"
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div aria-hidden className="relative z-10 w-full overflow-hidden">
          <Image
            alt=""
            src={FOOTER_IMAGES.background}
            width={1440}
            height={534}
            sizes="100vw"
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>

      {/* 4. Disclaimer */}
      <div className="w-full bg-black p-8 text-sm text-stone-200">
        {DISCLAIMER_PARAGRAPHS.map((paragraph, index) => (
          <p key={index} className={index > 0 ? "mt-4" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>
    </footer>
  );
}
