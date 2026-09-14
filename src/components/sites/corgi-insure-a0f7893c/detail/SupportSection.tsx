import Link from "next/link";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { StippleGlyph } from "@/components/sites/corgi-insure-a0f7893c/shared/StippleGlyph";
import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { cn } from "@/lib/utils";
import { BODY, Frame, H2 } from "./frame";

/** "Expert support" — copy left, a tinted arch with a specialist illustration placeholder right. */
export function SupportSection({ support }: { support: DetailPageContent["support"] }) {
  return (
    <Frame inner="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16">
      <div className="flex flex-col gap-6">
        {/* The text sits in a part-width column, so the display size steps down where it is
            narrowest (`lg`) and returns at `xl`; balanced wrapping keeps both lines even. */}
        <h2 className={cn(H2, "text-balance lg:text-[40px] xl:text-[48px]")}>
          {support.headingLine1}
          <br />
          {support.headingLine2}
        </h2>
        <p className={BODY}>{support.body}</p>
        <Link href={support.link.href} className="inline-flex w-fit items-center gap-1 text-[16px] font-medium text-[#1e3a8a] hover:underline md:text-[18px]">
          {support.link.label}
          <MaterialIcon name="arrow_forward" size={20} />
        </Link>
      </div>
      <div className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center overflow-hidden rounded-[8px] bg-[#dde4f6]">
        <div className="flex flex-col items-center gap-5">
          <div className="flex size-40 items-center justify-center rounded-[8px] bg-white text-[#1e3a8a] shadow-[0_0_24px_0_rgba(25,25,25,0.08)]">
            <StippleGlyph name="handshake" size={120} />
          </div>
          <div className="rounded-[4px] bg-white px-4 py-2 text-[14px] font-medium text-[#191919] shadow-[0_0_16px_0_rgba(25,25,25,0.08)]">Real people, any day of the week</div>
        </div>
      </div>
    </Frame>
  );
}
