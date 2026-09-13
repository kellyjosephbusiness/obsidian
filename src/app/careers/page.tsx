import type { Metadata } from "next";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/company/CtaBand";
import { BENEFITS, BENEFITS_HEADER, CAREERS_CTA, CAREERS_HERO, CAREERS_META, CAREERS_VALUES, CAREERS_VALUES_HEADER, OPEN_ROLES, OPEN_ROLES_HEADER } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { IconCardGrid } from "@/components/sites/corgi-insure-a0f7893c/company/IconCardGrid";
import { OpenRolesList } from "@/components/sites/corgi-insure-a0f7893c/company/OpenRolesList";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/company/PageHero";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { SectionFrame } from "@/components/sites/corgi-insure-a0f7893c/company/SectionFrame";

export const metadata: Metadata = { title: CAREERS_META.title, description: CAREERS_META.description };

/** /careers — hero → values → open roles → benefits → CTA → footer. */
export default function CareersPage() {
  return (
    <PageShell>
      <PageHero content={CAREERS_HERO} dataTrack="cta-careers-hero" />
      <SectionFrame heading={CAREERS_VALUES_HEADER.heading} sub={CAREERS_VALUES_HEADER.sub}>
        <IconCardGrid items={CAREERS_VALUES} columns={4} />
      </SectionFrame>
      <SectionFrame id="open-roles" width={1200} heading={OPEN_ROLES_HEADER.heading} sub={OPEN_ROLES_HEADER.sub}>
        <OpenRolesList roles={OPEN_ROLES} />
      </SectionFrame>
      <SectionFrame heading={BENEFITS_HEADER.heading} sub={BENEFITS_HEADER.sub}>
        <IconCardGrid items={BENEFITS} columns={3} />
      </SectionFrame>
      <CtaBand content={CAREERS_CTA} dataTrack="cta-careers" />
    </PageShell>
  );
}
