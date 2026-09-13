import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRY_SLUGS, getIndustry } from "@/components/sites/corgi-insure-a0f7893c/industries/data";
import { IndustryPage } from "@/components/sites/corgi-insure-a0f7893c/industries/IndustryPage";

interface IndustryRouteProps {
  params: Promise<{ industry: string }>;
}

/** Only the eleven data-driven slugs are built; `/industry/ai` is its own static route and wins over this segment. */
export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: IndustryRouteProps): Promise<Metadata> {
  const { industry } = await params;
  const definition = getIndustry(industry);
  if (!definition) return {};
  return { title: definition.meta.title, description: definition.meta.description };
}

export default async function IndustryRoute({ params }: IndustryRouteProps) {
  const { industry } = await params;
  const definition = getIndustry(industry);
  if (!definition) notFound();
  return <IndustryPage industry={definition} />;
}
