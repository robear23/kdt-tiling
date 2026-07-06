import { siteConfig } from "./site-config";
import { locations } from "./locations";

export function businessId(): string {
  return `${siteConfig.url}/#business`;
}

export function websiteId(): string {
  return `${siteConfig.url}/#website`;
}

export function buildBusinessSchema() {
  return {
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": businessId(),
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    areaServed: [
      { "@type": "AdministrativeArea", name: siteConfig.business.serviceAreaName },
      ...locations.map((l) => ({ "@type": "City", name: l.name })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: siteConfig.services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          provider: { "@id": businessId() },
        },
      })),
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId(),
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": businessId() },
  };
}

export function buildRootGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [buildBusinessSchema(), buildWebsiteSchema()],
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url?: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function buildLocationServiceSchema(location: { name: string; slug: string }) {
  const pageUrl = `${siteConfig.url}/locations/${location.slug}`;
  return {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Tiling & Home Improvement Services in ${location.name}`,
    serviceType: siteConfig.services.map((s) => s.name),
    areaServed: { "@type": "City", name: location.name },
    provider: { "@id": businessId() },
    url: pageUrl,
  };
}

export function buildLocationGraph(location: { name: string; slug: string }) {
  const pageUrl = `${siteConfig.url}/locations/${location.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: location.name }]),
      buildLocationServiceSchema(location),
    ],
  };
}
