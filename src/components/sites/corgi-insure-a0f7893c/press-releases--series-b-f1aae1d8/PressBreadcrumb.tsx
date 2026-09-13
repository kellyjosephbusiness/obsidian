import Link from "next/link";
import { BREADCRUMB } from "./data";
import { ChevronRightIcon } from "./icons";

/** Breadcrumb `nav` above the hero (source: shrink-wrapped, centered, 14px #4e4e4e, 14px chevrons). */
export function PressBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-fit max-w-7xl px-6 pt-6">
      <ol className="flex items-center gap-1.5 text-sm text-[#4e4e4e]">
        {BREADCRUMB.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 ? <ChevronRightIcon className="h-3.5 w-3.5 shrink-0" /> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-[#1d1d1d]">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[#1d1d1d]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
