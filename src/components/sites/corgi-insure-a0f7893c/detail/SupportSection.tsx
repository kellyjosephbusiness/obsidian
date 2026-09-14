import Link from "next/link";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { BODY, Frame, H2 } from "./frame";

/** "Expert support" — copy left, a tinted arch with a specialist illustration placeholder right. */
export function SupportSection({ support }: { support: DetailPageContent["support"] }) {
  return (
    <Frame inner="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col gap-6">
        <h2 className={H2}>
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
      <div className="relative mx-auto flex aspect-square w-full max-w-[460px] items-end justify-center overflow-hidden rounded-t-full bg-[#dde4f6]">
        <div className="mb-10 flex flex-col items-center gap-4">
          <div className="flex size-28 items-center justify-center rounded-full bg-white text-[#1e3a8a] shadow-[0_0_24px_0_rgba(25,25,25,0.08)]">
            <MaterialIcon name="support_agent" size={64} />
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#191919] shadow-[0_0_16px_0_rgba(25,25,25,0.08)]">Real people, any day of the week</div>
        </div>
      </div>
    </Frame>
  );
}
