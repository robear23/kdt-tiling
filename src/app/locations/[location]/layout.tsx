import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getLocationBySlug } from "@/lib/locations";
import { buildLocationGraph } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

type Props = {
  params: Promise<{ location: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locationSlug = resolvedParams.location;
  const location = getLocationBySlug(locationSlug);

  const locationName = location ? location.name : "South Wales";
  const pageUrl = location ? `${siteConfig.url}/locations/${location.slug}` : undefined;

  return {
    title: `Premium Wall & Floor Tiling in ${locationName}`,
    description: `Expert tiling, domestic plumbing, wall & ceiling panelling, and bricklaying services in ${locationName}. Fully guaranteed and insured. Get a free quote today!`,
    ...(location && { alternates: { canonical: `/locations/${location.slug}` } }),
    ...(pageUrl && {
      openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: pageUrl,
        siteName: siteConfig.name,
        title: `Premium Wall & Floor Tiling in ${locationName}`,
        description: `Expert tiling, domestic plumbing, wall & ceiling panelling, and bricklaying services in ${locationName}. Fully guaranteed and insured. Get a free quote today!`,
        images: [
          {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: `${siteConfig.name} — tiling project example in ${locationName}`,
          },
        ],
      },
    }),
    ...(pageUrl && {
      twitter: {
        card: "summary_large_image",
        title: `Premium Wall & Floor Tiling in ${locationName}`,
        description: `Expert tiling, domestic plumbing, wall & ceiling panelling, and bricklaying services in ${locationName}. Fully guaranteed and insured. Get a free quote today!`,
        images: [siteConfig.ogImage],
      },
    }),
  };
}

export default async function LocationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ location: string }>;
}) {
  const resolvedParams = await params;
  const locationSlug = resolvedParams.location;
  const location = getLocationBySlug(locationSlug);

  return (
    <>
      {location && <JsonLd data={buildLocationGraph(location)} />}
      {children}
    </>
  );
}
