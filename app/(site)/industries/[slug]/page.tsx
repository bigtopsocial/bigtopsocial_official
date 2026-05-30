import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDetailView } from "@/components/industries/IndustryDetailView";
import { getAllIndustries, getIndustryBySlug } from "@/lib/content/industries";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllIndustries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    keywords: industry.searchKeywords,
    openGraph: {
      title: industry.seoTitle,
      description: industry.seoDescription,
      images: [industry.heroImage],
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const others = getAllIndustries()
    .filter((i) => i.slug !== industry.slug)
    .map((i) => ({ slug: i.slug, title: i.title }));

  return <IndustryDetailView industry={industry} others={others} />;
}
