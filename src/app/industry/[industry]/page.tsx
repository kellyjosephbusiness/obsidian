import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/sites/corgi-insure-a0f7893c/detail/DetailPage";
import { getIndustryPage, INDUSTRY_SLUGS } from "@/components/sites/corgi-insure-a0f7893c/detail/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const page = getIndustryPage(industry);
  return page ? { title: page.meta.title, description: page.meta.description } : {};
}

/** Industry pages (/industry/construction, /industry/ai, …) on the shared detail template. */
export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const page = getIndustryPage(industry);
  if (!page) notFound();
  return <DetailPage page={page} />;
}
