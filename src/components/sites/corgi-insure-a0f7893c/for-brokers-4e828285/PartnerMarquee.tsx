import { PARTNER_WORDMARKS } from "./data";

/** The track is repeated 4× (0 → -25% keyframe) so the marquee loops seamlessly. */
const TRACK_COPIES = 4;

/**
 * Partner strip (source: the grayscale customer-logo marquee under the broker hero).
 * Same 81px band (py-6 + 32px track + border), same 60s `logo-scroll` keyframe, same 80px gaps
 * and 50% opacity — but the logos are replaced by text wordmarks of fictional partner brokerages.
 */
export function PartnerMarquee() {
  return (
    <section className="relative w-full shrink-0 overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6] py-6">
      <div className="opacity-50">
        <div className="w-full overflow-hidden" style={{ contain: "content" }}>
          <div className="logo-carousel-track flex w-max items-center gap-20 [animation:logo-scroll_60s_linear_infinite] motion-reduce:[animation:none]">
            {Array.from({ length: TRACK_COPIES }, (_, copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-20" aria-hidden={copy > 0 || undefined}>
                {PARTNER_WORDMARKS.map((partner) => (
                  <span
                    key={partner.name}
                    className="flex h-8 shrink-0 items-center whitespace-nowrap font-mono text-[20px] font-medium leading-none tracking-[-0.02em] text-[#191919]"
                  >
                    {partner.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
