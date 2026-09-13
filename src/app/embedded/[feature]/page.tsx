import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FEATURE_PAGES, featurePageBySlug } from "@/components/sites/corgi-insure-a0f7893c/products/data";
import { FeaturePage } from "@/components/sites/corgi-insure-a0f7893c/products/FeaturePage";

interface Params {
  params: Promise<{ feature: string }>;
}

/** Only the four embedded-financing features exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return FEATURE_PAGES.map((p) => ({ feature: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { feature } = await params;
  const content = featurePageBySlug(feature);
  return content ? { title: content.meta.title, description: content.meta.description } : {};
}

/** /embedded/digital-application, /embedded/marketplace, /embedded/matching, /embedded/prequalify */
export default async function EmbeddedFeaturePage({ params }: Params) {
  const { feature } = await params;
  const content = featurePageBySlug(feature);
  if (!content) notFound();
  return <FeaturePage content={content} />;
}
