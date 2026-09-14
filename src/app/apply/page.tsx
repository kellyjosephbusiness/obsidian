import type { Metadata } from "next";
import { ApplyEmbed } from "@/components/sites/corgi-insure-a0f7893c/company/ApplyEmbed";
import { APPLY_META } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";

export const metadata: Metadata = { title: APPLY_META.title, description: APPLY_META.description };

/** /apply — the live LendTrack funding application beside the intro column. */
export default function ApplyPage() {
  return (
    <PageShell>
      <ApplyEmbed />
    </PageShell>
  );
}
