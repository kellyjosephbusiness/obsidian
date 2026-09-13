import type { Metadata } from "next";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/company/CtaBand";
import { LOCATIONS_HERO, LOCATIONS_META, OFFICES } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { InfoCardGrid } from "@/components/sites/corgi-insure-a0f7893c/company/InfoCardGrid";
import { MapPlaceholder } from "@/components/sites/corgi-insure-a0f7893c/company/MapPlaceholder";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/company/PageHero";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { SectionFrame } from "@/components/sites/corgi-insure-a0f7893c/company/SectionFrame";

export const metadata: Metadata = { title: LOCATIONS_META.title, description: LOCATIONS_META.description };

/** /locations — hero → six office cards → map placeholder → CTA → footer. */
export default function LocationsPage() {
  return (
    <PageShell>
      <PageHero content={LOCATIONS_HERO} dataTrack="cta-locations-hero" />
      <SectionFrame heading="Our offices" sub="Drop in during business hours or book a video call with a specialist from any office.">
        <InfoCardGrid items={OFFICES} />
      </SectionFrame>
      <SectionFrame width={1200}>
        <MapPlaceholder />
      </SectionFrame>
      <CtaBand dataTrack="cta-locations" />
    </PageShell>
  );
}
