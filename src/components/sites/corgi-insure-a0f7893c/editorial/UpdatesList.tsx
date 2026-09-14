import Link from "next/link";
import { ArrowRightIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/EditorialIcons";
import { cn } from "@/lib/utils";
import type { ProductUpdate } from "./types";

const TAG_STYLES: Record<ProductUpdate["tag"], string> = {
  New: "border-[#1e3a8a] bg-[#dde4f6] text-[#1e3a8a]",
  Improved: "border-[#e1e1e1] bg-[#f6f6f6] text-[#4a4a4a]",
  Fixed: "border-[#ffe9ec] bg-[#ffe9ec] text-[#ff405d]",
};

export interface UpdatesListProps {
  label: string;
  updates: ProductUpdate[];
}

/** Product-updates changelog: one white card with hairline-separated rows (date column, tag chip, title, description). */
export function UpdatesList({ label, updates }: UpdatesListProps) {
  return (
    <section className="relative z-10 w-full overflow-hidden border-t border-b border-[#e1e1e1] px-4 py-4 md:px-6 md:py-6 lg:p-16">
      <div className="relative mx-auto flex max-w-[1136px] flex-col gap-6">
        <div aria-hidden className="pointer-events-none absolute -top-[9999px] -bottom-[9999px] left-0 w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute -top-[9999px] -bottom-[9999px] right-0 w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-px w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />

        <div className="relative flex flex-col rounded-t-[8px] border-x border-t border-[#e1e1e1]">
          <div className="px-6 py-3">
            <span className="text-[12px] leading-[18px] tracking-tight text-[#4a4a4a] uppercase">{label}</span>
          </div>
          <div className="overflow-hidden rounded-[8px] bg-[#e1e1e1] py-px">
            <ol className="flex flex-col gap-px overflow-hidden rounded-[8px]">
              {updates.map((update) => (
                <li key={`${update.date}-${update.title}`} className="grid gap-3 bg-white p-6 md:grid-cols-[160px_minmax(0,1fr)] md:gap-8">
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                    <span className="text-sm tracking-tight text-[#4a4a4a]">{update.date}</span>
                    <span className={cn("rounded-[4px] border px-2.5 py-0.5 text-[12px] leading-[18px] font-medium", TAG_STYLES[update.tag])}>{update.tag}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-mono text-[22px] leading-none tracking-tight text-[#191919] md:text-[26px]">{update.title}</h3>
                    <p className="text-body text-[#4a4a4a]">{update.description}</p>
                    {update.href ? (
                      <Link href={update.href} className="inline-flex w-fit items-center gap-1 text-body font-medium tracking-tight text-[#1e3a8a] hover:underline">
                        Read more
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
