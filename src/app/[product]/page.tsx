import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/sites/corgi-insure-a0f7893c/detail/DetailPage";
import { getProductPage, PRODUCT_SLUGS } from "@/components/sites/corgi-insure-a0f7893c/detail/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((product) => ({ product }));
}

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product } = await params;
  const page = getProductPage(product);
  return page ? { title: page.meta.title, description: page.meta.description } : {};
}

/** Loan-product pages (/term-loans, /line-of-credit, …) on the shared detail template. */
export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  const page = getProductPage(product);
  if (!page) notFound();
  return <DetailPage page={page} />;
}
