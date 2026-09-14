import Image from "next/image";
import { InitialsAvatar } from "@/components/sites/corgi-insure-a0f7893c/shared/InitialsAvatar";
import type { Leader } from "@/types/sites/corgi-insure-a0f7893c/company";
import { Reveal } from "./Reveal";

const PORTRAIT_BOX_CLASS = "relative h-[200px] w-full overflow-hidden bg-[#dde4f6] md:h-[220px]";

/** Six leader cards: headshot (initials tile when no photo is set), name, role and a two-line bio. */
export function LeadershipGrid({ leaders }: { leaders: Leader[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {leaders.map((leader, i) => (
        <Reveal key={leader.name} index={i} className="flex">
          <li className="flex w-full flex-col overflow-clip rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
            <div className="relative -mx-px -mt-px overflow-clip rounded-[8px] border border-[#e1e1e1] shadow-[0_0_24px_0_rgba(25,25,25,0.35)]">
              {leader.photo ? (
                <div className={PORTRAIT_BOX_CLASS}>
                  <Image
                    alt={`${leader.name}, ${leader.role}`}
                    src={leader.photo}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
              ) : (
                <InitialsAvatar name={leader.name} className="h-[200px] w-full md:h-[220px]" textClassName="text-[72px] opacity-90" />
              )}
            </div>
            <div className="flex flex-col gap-3 p-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-mono text-[22px] font-medium leading-[1.1] tracking-[-0.02em] text-[#191919]">{leader.name}</h3>
                <p className="text-[14px] font-medium leading-[1.2] tracking-[-0.21px] text-[#1e3a8a]">{leader.role}</p>
              </div>
              <p className="text-body text-[#4a4a4a]">{leader.bio}</p>
            </div>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
