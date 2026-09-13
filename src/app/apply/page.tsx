import type { Metadata } from "next";
import { ApplyFlow } from "@/components/sites/corgi-insure-a0f7893c/company/ApplyFlow";
import { APPLY_META } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";

export const metadata: Metadata = { title: APPLY_META.title, description: APPLY_META.description };

/** /apply — three-step application UI (business → financials → contact) with a confirmation state. */
export default function ApplyPage() {
  return (
    <PageShell>
      <ApplyFlow />
    </PageShell>
  );
}
