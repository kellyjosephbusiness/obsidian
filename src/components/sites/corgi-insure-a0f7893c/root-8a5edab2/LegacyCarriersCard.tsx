import type { CSSProperties } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { ADVANTAGE } from "./data";

// Fixed design canvas (724×322) scaled to the panel width with origin top-left.
const CANVAS_W = 724;
const CANVAS_H = 322;

/** Ring-pulse timing per chip (duration s / negative delay s), same for both marquee copies. */
const PULSE_TIMINGS: ReadonlyArray<{ duration: number; delay: number }> = [
  { duration: 1.7, delay: -0.2 },
  { duration: 2.4, delay: -0.8 },
  { duration: 3.1, delay: -1.5 },
  { duration: 2.2, delay: -0.5 },
];

/**
 * Pure-CSS scale: `tan(atan2(100cqw, 724px))` divides the container width by the
 * canvas width into a unitless number (0.8895 at 644px, 0.4945 at 358px) without JS.
 */
const CANVAS_STYLE: CSSProperties = {
  width: CANVAS_W,
  height: CANVAS_H,
  transform: `scale(tan(atan2(100cqw, ${CANVAS_W}px)))`,
};

function ChipRow({ copy }: { copy: number }) {
  return (
    <>
      {ADVANTAGE.legacy.chips.map((chip, i) => {
        const timing = PULSE_TIMINGS[i % PULSE_TIMINGS.length];
        const pulse: CSSProperties = {
          ["--pulse" as string]: `pill-ring-pulse ${timing.duration}s ease-in-out ${timing.delay}s infinite`,
        };
        return (
          <div key={`${copy}-${chip.label}`} className="contents">
            <div
              className="flex shrink-0 items-center gap-3 rounded-[8px] border-2 border-[#d9c2c2] bg-[#f8f2f2] p-4 shadow-[0_0_0_4px_#ecdcdc] motion-safe:[animation:var(--pulse)]"
              style={pulse}
            >
              <MaterialIcon name={chip.icon} size={24} className="shrink-0 text-[#8a4b4b]" />
              <span className="whitespace-nowrap font-mono font-normal text-[24px] text-[#8a4b4b] leading-none tracking-[-0.032em]">
                {chip.label}
              </span>
            </div>
            <div className="h-0.5 w-6 shrink-0 bg-[#d9c2c2]" />
          </div>
        );
      })}
    </>
  );
}

/**
 * Left-hand white card of "Our unique advantage": a scrolling marquee of
 * muted grey-red "old way" chips with pulsing rings above two stacked
 * loan-agreement papers, plus the title/description block.
 */
export function LegacyCarriersCard() {
  const { certificateTitle, title, description } = ADVANTAGE.legacy;

  return (
    <div className="flex flex-col overflow-hidden rounded-[8px] bg-white">
      <div className="@container relative aspect-[724/322] overflow-hidden rounded-[8px] bg-[#f6f6f6] shadow-[0_8px_28px_0_rgba(0,0,0,0.4)]">
        <div className="absolute top-0 left-0 h-[322px] w-[724px] origin-top-left" style={CANVAS_STYLE}>
          {/* Chip marquee row */}
          <div className="absolute top-[57px] right-0 left-0 overflow-x-clip">
            <div className="flex w-max items-center gap-2 py-2 motion-safe:animate-[marquee-left_24s_linear_infinite]">
              <ChipRow copy={0} />
              <ChipRow copy={1} />
            </div>
          </div>

          {/* Certificate papers */}
          <div className="-rotate-[3.96deg] absolute top-[167px] left-[180px] h-[194px] w-[340px] bg-white shadow-[0_0_16px_0_rgba(25,25,25,0.25)]" />
          <div className="absolute top-[179px] left-[205px] flex h-[182px] w-[340px] flex-col gap-2.5 overflow-hidden bg-white p-6 shadow-[0_0_16px_0_rgba(25,25,25,0.25)]">
            <p className="text-left font-medium text-[#b2b2b2] text-[24px] leading-none tracking-[-0.032em]">
              {certificateTitle}
            </p>
            <div className="h-px w-full bg-[#e5e5e5]" />
            <div className="flex gap-2.5">
              <div className="h-[25px] w-[239px] bg-[#ddd]" />
              <div className="h-[25px] flex-1 bg-[#ddd]" />
            </div>
            <div className="flex gap-2.5">
              <div className="h-[11px] flex-1 bg-[#ddd]" />
              <div className="h-[11px] w-[111px] bg-[#ddd]" />
            </div>
            <div className="h-[11px] w-full bg-[#ddd]" />
            <div className="h-[11px] w-full bg-[#ddd]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-3 md:p-5">
        <h3 className="font-bold font-sans text-[18px] md:text-[20px] text-[#4a4a4a] leading-none tracking-[-0.032em]">
          {title}
        </h3>
        <p className="font-sans text-[14px] md:text-[16px] text-[#4a4a4a] leading-[1.2] tracking-[-0.015em]">
          {description}
        </p>
      </div>
    </div>
  );
}
