import { Metadata } from "next";
import { defaultSeo, SeoProps } from "@/config/seo";
import { OpenGraphType, TwitterCardType } from "@/types/seo.types";



export function constructMetadata({
  title = defaultSeo.title,
  description = defaultSeo.description,
  canonical = "",
  openGraph = defaultSeo.openGraph,
  twitter = defaultSeo.twitter,
}: Partial<SeoProps> = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      url: canonical || openGraph?.url,
      siteName: openGraph?.siteName,
      images: openGraph?.images || [],
      locale: openGraph?.locale,
      type: openGraph?.type as OpenGraphType,
    },
    twitter: {
      card: twitter?.card as TwitterCardType,
      site: twitter?.site,
      creator: twitter?.handle,
    },
    alternates: {
      canonical: canonical,
    },
  };
}
