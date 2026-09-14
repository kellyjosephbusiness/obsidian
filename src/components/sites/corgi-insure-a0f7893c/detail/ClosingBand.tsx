import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { Frame, Sup } from "./frame";

/** Navy closing band: two-line heading left, white CTA + note right. */
export function ClosingBand({ closing }: { closing: DetailPageContent["closing"] }) {
  return (
    <Frame tone="navy" inner="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] md:gap-12">
      <h2 className="font-mono font-medium text-white text-[36px] leading-[1.02] tracking-[-0.03em] md:text-[52px]">
        {closing.headingLine1}
        <br />
        {closing.headingLine2}
      </h2>
      <div className="flex flex-col items-start gap-5">
        <PressableButton variant="white" size="large" href={closing.cta.href} faceClassName="px-8 py-3.5 text-[18px] leading-[1.2] tracking-[-0.27px]">
          {closing.cta.label}
        </PressableButton>
        <p className="text-[16px] leading-[1.5] tracking-[-0.24px] text-white/85 md:text-[18px]">
          <Sup text={closing.note} />
        </p>
      </div>
    </Frame>
  );
}
