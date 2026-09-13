import type { ThreeUpBandContent } from "@/types/sites/corgi-insure-a0f7893c/industry-ai";
import { AI_SCENARIOS } from "./data";
import { WhySection } from "./WhySection";

/** "AI Funding Scenarios" (site: /ai section 6) — the same three-up band as the "Why" section. */
export function ScenariosSection({ content = AI_SCENARIOS }: { content?: ThreeUpBandContent } = {}) {
  return <WhySection content={content} id="scenarios" />;
}
