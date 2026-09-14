import Link from "next/link";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { OpenRole } from "@/types/sites/corgi-insure-a0f7893c/company";

/** Open roles as one white card with hairline-separated rows: title, team pill, location, type, arrow. */
export function OpenRolesList({ roles }: { roles: OpenRole[] }) {
  return (
    <ul className="overflow-clip rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
      {roles.map((role, i) => (
        <li key={role.title} className={i > 0 ? "border-t border-[#e1e1e1]" : undefined}>
          <Link
            href={role.href}
            className="group flex flex-col gap-3 px-5 py-5 transition-colors hover:bg-[#f9f9f9] md:flex-row md:items-center md:gap-6 md:px-8 md:py-6"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <span className="font-mono text-[20px] font-medium leading-[1.15] tracking-[-0.02em] text-[#191919] group-hover:text-[#1e3a8a] md:text-[22px]">{role.title}</span>
              <span className="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#5c5c5c] md:hidden">
                {role.location} · {role.type}
              </span>
            </div>
            <span className="w-fit rounded-[4px] bg-[#dde4f6] px-3 py-1 text-[12px] font-medium leading-[1.2] tracking-[-0.18px] text-[#1e3a8a] md:w-[150px] md:text-center">{role.team}</span>
            <span className="hidden w-[170px] text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a] md:block">{role.location}</span>
            <span className="hidden w-[90px] text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a] md:block">{role.type}</span>
            <MaterialIcon name="arrow_forward" size={20} className="hidden shrink-0 text-[#4a4a4a] transition-transform group-hover:translate-x-1 group-hover:text-[#1e3a8a] md:block" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
