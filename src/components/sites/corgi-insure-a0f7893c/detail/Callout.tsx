import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { DetailCallout } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { Frame } from "./frame";

/** Bordered callout band: icon, heading, bold lead + body, outline button. */
export function Callout({ callout }: { callout: DetailCallout }) {
  return (
    <Frame className="!pt-0">
      <div className="flex flex-col items-start gap-6 rounded-[24px] border-[3px] border-[#c5d1f0] bg-white p-6 md:flex-row md:items-center md:gap-8 md:p-10">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#dde4f6] text-[#1e3a8a]">
          <MaterialIcon name={callout.icon} size={40} />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="font-mono text-[26px] font-medium leading-[1.05] tracking-[-0.03em] text-[#191919] md:text-[32px]">{callout.heading}</h2>
          <p className="text-[16px] leading-[1.5] tracking-[-0.24px] text-[#4a4a4a] md:text-[18px]">
            <strong className="font-semibold text-[#191919]">{callout.boldLead}</strong> {callout.body}
          </p>
        </div>
        <PressableButton variant="white" size="small" href={callout.cta.href} className="shrink-0">
          {callout.cta.label}
        </PressableButton>
      </div>
    </Frame>
  );
}
