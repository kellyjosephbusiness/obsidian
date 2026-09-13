import type { Metadata } from "next";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/editorial/CtaBand";
import { EditorialShell } from "@/components/sites/corgi-insure-a0f7893c/editorial/EditorialShell";
import { IndexHero } from "@/components/sites/corgi-insure-a0f7893c/editorial/IndexHero";
import { UpdatesList } from "@/components/sites/corgi-insure-a0f7893c/editorial/UpdatesList";
import { INDEX_CTA, INDEX_LABELS, PRODUCT_UPDATES, UPDATES_INDEX } from "@/components/sites/corgi-insure-a0f7893c/editorial/data";

export const metadata: Metadata = {
  title: "Product Updates | FundLine Capital",
  description: UPDATES_INDEX.sub,
};

/** Product updates: hero heading → changelog list → CTA → footer. */
export default function UpdatesPage() {
  return (
    <EditorialShell>
      <IndexHero {...UPDATES_INDEX} />
      <UpdatesList label={INDEX_LABELS.updates} updates={PRODUCT_UPDATES} />
      <CtaBand {...INDEX_CTA} />
    </EditorialShell>
  );
}
