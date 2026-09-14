import Link from "next/link";
import { ChevronRightIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/EditorialIcons";
import type { BreadcrumbItem } from "./types";

/** Prop-driven variant of `PressBreadcrumb` (same 14px #4e4e4e trail with 14px chevrons). */
export function ArticleBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-fit max-w-7xl px-6 pt-6">
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-[#4e4e4e]">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 ? <ChevronRightIcon className="h-3.5 w-3.5 shrink-0" /> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-[#1d1d1d]">
                {item.label}
              </Link>
            ) : (
              <span className="line-clamp-1 max-w-[70vw] font-medium text-[#1d1d1d] md:max-w-none">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
