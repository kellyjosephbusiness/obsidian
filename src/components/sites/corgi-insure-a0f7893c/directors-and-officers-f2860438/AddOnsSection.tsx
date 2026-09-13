import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { ADD_ONS } from "./data";
import { H2_CLASS, Hairlines, Rails } from "./rails";

/** "Available Add-ons": three white cards with a raised icon header. */
export function AddOnsSection() {
  return (
    <section className="relative px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-12">
        <h2 className={`px-6 ${H2_CLASS}`}>{ADD_ONS.heading}</h2>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ADD_ONS.cards.map((card) => (
              <article key={card.title} className="flex flex-col overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_16px_0_rgba(25,25,25,0.05)]">
                <div className="flex items-center justify-center rounded-[24px] bg-white py-12 shadow-[0_0_16px_0_rgba(25,25,25,0.15)]">
                  <MaterialIcon name={card.icon} size={24} className="text-[#1e3a8a]" />
                </div>
                <div className="flex flex-col gap-[10px] p-5">
                  <h3 className="font-mono text-[24px] leading-none tracking-[-0.77px] text-[#191919]">{card.title}</h3>
                  <p className="text-[14px] leading-[1.4] tracking-[-0.21px] text-[#4a4a4a]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
