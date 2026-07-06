import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    ...locations.map((l) => ({
      url: `${siteConfig.url}/locations/${l.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
