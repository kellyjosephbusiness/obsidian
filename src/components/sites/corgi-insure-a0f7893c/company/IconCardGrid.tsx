import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { IconCard } from "@/types/sites/corgi-insure-a0f7893c/company";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export interface IconCardGridProps {
  items: IconCard[];
  /** Columns at lg (defaults to 3; 4 for the value rows, 2 for wide cards). */
  columns?: 2 | 3 | 4;
}

const COLS: Record<NonNullable<IconCardGridProps["columns"]>, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

/** White rounded cards with a navy-tinted icon tile, F37 Bolton title and body copy (values, controls, benefits). */
export function IconCardGrid({ items, columns = 3 }: IconCardGridProps) {
  return (
    <ul className={cn("grid grid-cols-1 gap-4 md:gap-6", COLS[columns])}>
      {items.map((item, i) => (
        <Reveal key={item.title} index={i} className="flex">
          <li className="flex w-full flex-col gap-5 rounded-[8px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-8">
            <span className="flex size-12 items-center justify-center rounded-[8px] bg-[#DDEAFE] text-[#0160CC]">
              <MaterialIcon name={item.icon} size={24} />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-[22px] font-medium leading-[1.1] tracking-[-0.02em] text-[#191919] md:text-[24px]">{item.title}</h3>
              <p className="text-body text-[#4a4a4a]">{item.description}</p>
            </div>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
