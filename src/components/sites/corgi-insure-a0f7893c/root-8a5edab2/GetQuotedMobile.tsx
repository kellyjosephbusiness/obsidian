"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { CursorChip } from "@/components/sites/corgi-insure-a0f7893c/shared/CursorChip";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { EstimateBubble, FinancialFormMock } from "./FinancialFormMock";
import { DemoBody, TryMeIcon, useDemoBubble, useTryMeChip } from "./GetQuotedSection";
import { GET_QUOTED } from "./data";

/**
 * "Get Quoted Instantly or Book a Demo With a Specialist" — stacked mobile/tablet variant
 * (`lg:hidden`). Reproduced 1:1 from the site's compiled source (27stt6lyy-y9_.js: `j` text
 * block, `N` self-serve card, `C` demo card, and the `lg:hidden` section markup).
 */

const { selfServe, demo, images } = GET_QUOTED;

/* ------------------------------------------------------------------ */
/* Text block (`j`)                                                     */
/* ------------------------------------------------------------------ */

interface TextBlockProps {
  heading: string;
  body: ReactNode;
  bestFor: string;
}

function TextBlock({ heading, body, bestFor }: TextBlockProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-9 p-4 md:px-6 md:py-8 lg:py-0">
      <div className="flex w-full flex-col gap-3 lg:max-w-[480px]">
        <h3 className="font-bold text-[18px] md:text-[20px] leading-none tracking-[-0.032em] text-[#191919]">{heading}</h3>
        <p className="text-body text-[#4a4a4a]">{body}</p>
      </div>
      <div className="flex w-full flex-col gap-3 lg:max-w-[480px]">
        <p className="text-body font-medium text-[#191919]">{selfServe.bestForLabel}</p>
        <p className="text-body text-[#4a4a4a]">{bestFor}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Self-serve card (`N`)                                                */
/* ------------------------------------------------------------------ */

interface CardProps {
  hideFooter?: boolean;
}

export function SelfServeCard({ hideFooter = false }: CardProps) {
  const chip = useTryMeChip();
  return (
    <div className="@container relative flex flex-col overflow-clip rounded-[24px] border border-[#e1e1e1]">
      <div className="relative aspect-[800/465] overflow-clip bg-[#ff7d33] p-[1.09cqw]">
        <div
          {...chip.handlers}
          className="@container absolute left-1/2 top-[9.7%] aspect-[701/778] w-[87.625%] -translate-x-1/2 rounded-[1.63cqw] bg-[#f9f9f9] shadow-[0_0_1.63cqw_rgba(25,25,25,0.5)]"
        >
          <FinancialFormMock cursorExitProgress={0} />
        </div>
      </div>
      {!hideFooter && (
        <div className="border-t border-[#e1e1e1] bg-white p-3">
          <PressableButton
            className="w-full"
            dataTrack="cta-homepage-self-serve"
            faceClassName="w-full gap-1 text-body"
            href={selfServe.cta.href}
            size="small"
            variant="orange"
          >
            {selfServe.cta.label}
            <MaterialIcon name={selfServe.cta.icon} size={16} />
          </PressableButton>
        </div>
      )}
      <CursorChip open={chip.open} chipRef={chip.chipRef} icon={<TryMeIcon />} label="Try me!" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Demo card (`C`)                                                      */
/* ------------------------------------------------------------------ */

export function DemoCard({ hideFooter = false }: CardProps) {
  const { text, formProps } = useDemoBubble();
  const chip = useTryMeChip();
  const dogEntryProgress = 1;
  return (
    <div className="@container relative flex flex-col overflow-clip rounded-[24px] border border-[#e1e1e1]">
      <div className="@container relative aspect-[800/465] overflow-clip bg-[#dddddd] p-[1.09cqw]">
        <div
          {...chip.handlers}
          className="@container absolute left-[3.25%] top-[8.46%] aspect-[575/699] w-[71.875%] rounded-[1.63cqw] bg-[#f9f9f9] shadow-[0_0_1.09cqw_rgba(25,25,25,0.2)]"
        >
          <FinancialFormMock {...formProps} />
        </div>
        <div
          className="pointer-events-none absolute bottom-[-7.71%] right-[-11.875%] aspect-[311/316] w-[38.875%]"
          style={{ transform: `translateX(${(1 - dogEntryProgress) * 100}%)`, opacity: dogEntryProgress }}
        >
          <Image alt="Funding specialist on the phone" src={images.corgiPhone} fill className="object-contain" sizes="(max-width: 1024px) 50vw, 640px" quality={75} />
        </div>
        <EstimateBubble text={text} entryProgress={dogEntryProgress} />
      </div>
      {!hideFooter && (
        <div className="border-t border-[#e1e1e1] bg-white p-3">
          <PressableButton
            className="w-full"
            dataTrack="cta-homepage-book-demo"
            faceClassName="w-full gap-1 text-body"
            href={demo.cta.href}
            size="small"
            variant="black"
          >
            {demo.cta.label}
            <MaterialIcon name={demo.cta.icon} size={16} />
          </PressableButton>
        </div>
      )}
      <CursorChip open={chip.open} chipRef={chip.chipRef} icon={<TryMeIcon />} label="Try me!" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                              */
/* ------------------------------------------------------------------ */

function Hairlines() {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />
    </>
  );
}

export function GetQuotedMobile() {
  return (
    <section className="relative overflow-clip border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:hidden">
      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-4 md:gap-6">
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -top-16 left-0 w-px bg-[#e1e1e1] md:-bottom-20 md:-top-20" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -top-16 right-0 w-px bg-[#e1e1e1] md:-bottom-20 md:-top-20" />

        <div className="flex flex-col px-4 md:px-6">
          <h2 className="font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">
            {GET_QUOTED.headingA}
            {GET_QUOTED.headingJoin}
            {GET_QUOTED.headingB}
          </h2>
        </div>

        <div className="relative flex flex-col">
          <Hairlines />

          <div className="grid grid-cols-1 items-center">
            <div>
              <TextBlock heading={selfServe.heading} body={selfServe.body} bestFor={selfServe.bestFor} />
            </div>
            <div>
              <SelfServeCard />
            </div>
          </div>

          <div className="relative py-8">
            <Hairlines />
          </div>

          <div className="grid grid-cols-1 items-center">
            <div>
              <TextBlock heading={demo.heading} body={<DemoBody />} bestFor={demo.bestFor} />
            </div>
            <div>
              <DemoCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
