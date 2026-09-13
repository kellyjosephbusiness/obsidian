import Link from "next/link";
import { ArrowLeftIcon } from "@/components/sites/corgi-insure-a0f7893c/press-releases--series-b-f1aae1d8/icons";
import { FundLineMark } from "@/components/sites/corgi-insure-a0f7893c/shared/FundLineLogo";
import type { ArticleThumbnail } from "./types";

/**
 * Dark thumbnail card, same geometry as the press-release `ThumbnailCard` (519/264 aspect, every size in
 * container-query units of the card width) but driven by props so each article gets its own figure.
 */
function ThumbnailCard({ thumbnail }: { thumbnail: ArticleThumbnail }) {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-[#191919] lg:justify-self-end">
      <div className="@container relative aspect-[519/264] w-full overflow-hidden rounded-[24px] outline outline-1 outline-black/10">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-[2cqw] size-[60cqw] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,117,196,0.7)_0%,rgba(30,58,138,0.3)_40%,rgba(25,25,25,0)_70%)]"
        />
        <FundLineMark variant="white" className="absolute top-1/2 right-[16cqw] size-[23cqw] -translate-y-1/2 drop-shadow-[0_2cqw_6cqw_rgba(0,0,0,0.45)]" />

        <div className="absolute top-[4cqw] left-[3cqw] flex max-w-[62cqw] flex-col">
          <span className="font-mono text-[10.8cqw] leading-none font-medium tracking-[-0.03em] text-white">{thumbnail.stat}</span>
          <span className="mt-[2.4cqw] ml-[1cqw] text-[2.4cqw] leading-none tracking-[-0.01em] text-[#a3a3a3]">{thumbnail.statLabel}</span>
        </div>

        <div className="absolute bottom-[3.2cqw] left-[3cqw] flex max-w-[62cqw] flex-col">
          <span className="text-[2.4cqw] leading-none tracking-[-0.01em] text-[#d6d6d6]">
            <strong className="font-bold text-white">{thumbnail.footLead}</strong>
            {thumbnail.footTail}
          </span>
          <span className="mt-[1.6cqw] font-mono text-[7.8cqw] leading-none font-medium tracking-[-0.02em] text-white uppercase">
            {thumbnail.footTitle}
          </span>
        </div>
      </div>
    </div>
  );
}

export interface ArticleHeroProps {
  backLabel: string;
  backHref: string;
  title: string;
  thumbnail: ArticleThumbnail;
}

/** Hero: back link + H1 / thumbnail grid (`pt-[170px]` clears the fixed announcement bar + nav), as on the press release. */
export function ArticleHero({ backLabel, backHref, title, thumbnail }: ArticleHeroProps) {
  return (
    <section className="w-full px-4 pt-[170px] pb-16 md:px-6 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1136px] flex-col gap-9">
        <div>
          <Link href={backHref} className="inline-flex items-center gap-1 text-body font-medium tracking-tight text-[#191919] hover:text-[#1e3a8a]">
            <ArrowLeftIcon className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>
        <div className="grid w-full gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-center">
          <h1 className="font-mono text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] font-medium tracking-[var(--h1-tracking)] text-[#191919]">
            {title}
          </h1>
          <ThumbnailCard thumbnail={thumbnail} />
        </div>
      </div>
    </section>
  );
}
