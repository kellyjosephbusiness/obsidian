import Link from "next/link";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { InfoCard } from "@/types/sites/corgi-insure-a0f7893c/company";
import { Reveal } from "./Reveal";

/** Icon + title + short lines + optional text link (support channels, offices). */
export function InfoCardGrid({ items }: { items: InfoCard[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} index={i} className="flex">
          <li className="flex w-full flex-col gap-5 rounded-[24px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-[#dde4f6] text-[#1e3a8a]">
                <MaterialIcon name={item.icon} size={22} />
              </span>
              <h3 className="font-mono text-[22px] font-medium leading-[1.1] tracking-[-0.02em] text-[#191919]">{item.title}</h3>
              {item.badge ? (
                <span className="ml-auto rounded-full bg-[#1e3a8a] px-2.5 py-1 text-[11px] font-medium uppercase leading-none tracking-[0.08em] text-white">{item.badge}</span>
              ) : null}
            </div>
            <ul className="flex flex-col gap-1.5">
              {item.lines.map((line) => (
                <li key={line} className="text-body break-words text-[#4a4a4a]">
                  {line}
                </li>
              ))}
            </ul>
            {item.link ? (
              <Link
                href={item.link.href}
                className="mt-auto inline-flex w-fit items-center gap-1 text-[14px] font-medium leading-[1.2] tracking-[-0.21px] text-[#1e3a8a] hover:underline"
              >
                {item.link.label}
                <MaterialIcon name="arrow_forward" size={16} />
              </Link>
            ) : null}
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
