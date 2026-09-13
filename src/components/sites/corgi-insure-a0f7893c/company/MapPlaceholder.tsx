import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { MAP_PLACEHOLDER } from "./data";

/**
 * Map placeholder card: a dotted grid on `#f9f9f9` with a labelled pin per office. Stands in for an
 * embedded map so the page never loads a third-party tile server.
 */
export function MapPlaceholder() {
  return (
    <div className="flex flex-col overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
      <div
        className="relative aspect-[16/10] w-full bg-[#f9f9f9] md:aspect-[16/6]"
        style={{ backgroundImage: "radial-gradient(#d4d4d4 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        role="img"
        aria-label="Map showing FundLine Capital offices in Salt Lake City, Denver, Phoenix, Austin, Chicago and Atlanta"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 45% 55%, rgba(221,228,246,0.9) 0%, rgba(249,249,249,0) 65%)" }} />
        {MAP_PLACEHOLDER.pins.map((pin) => (
          <div key={pin.city} aria-hidden className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center" style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
            <span className="mb-1 whitespace-nowrap rounded-full border border-[#e1e1e1] bg-white px-2.5 py-1 text-[11px] font-medium leading-none tracking-[-0.16px] text-[#191919] shadow-[0_0_8px_0_rgba(25,25,25,0.08)] md:text-[12px]">
              {pin.city}
            </span>
            <MaterialIcon name="location_on" size={24} fill={1} className="text-[#1e3a8a]" />
          </div>
        ))}
        <span className="absolute right-4 bottom-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase leading-none tracking-[0.08em] text-[#7b7b7b]">Illustrative map</span>
      </div>
      <div className="flex flex-col gap-1.5 border-t border-[#e1e1e1] p-6 md:flex-row md:items-center md:justify-between md:gap-6 md:px-8">
        <h3 className="font-mono text-[22px] font-medium leading-[1.1] tracking-[-0.02em] text-[#191919]">{MAP_PLACEHOLDER.title}</h3>
        <p className="text-body text-[#4a4a4a]">{MAP_PLACEHOLDER.sub}</p>
      </div>
    </div>
  );
}
