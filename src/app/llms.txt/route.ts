import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";
import { locations } from "@/lib/locations";

function buildLlmsTxt(): string {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Services",
    ...siteConfig.services.map((s) => `- ${s.name}: ${s.description}`),
    "",
    "## Service Area",
    `Based in ${siteConfig.business.baseLocation}, covering all of ${siteConfig.business.serviceAreaName}. Towns served:`,
    ...locations.map((l) => `- [${l.name}](${siteConfig.url}/locations/${l.slug})`),
    "",
    "## Contact",
    `- Phone: ${siteConfig.contact.phoneDisplay}`,
    `- Email: ${siteConfig.contact.email}`,
    `- Instagram: ${siteConfig.social.instagram}`,
    `- Facebook: ${siteConfig.social.facebook}`,
    "",
    "## Guarantees",
    ...siteConfig.business.guarantees.map((g) => `- ${g}`),
    "",
    "## Key Pages",
    `- [Homepage](${siteConfig.url}/)`,
    `- [Get a Quote](${siteConfig.url}/#contact)`,
    `- [Portfolio Gallery](${siteConfig.url}/#gallery)`,
  ];
  return lines.join("\n");
}

export function GET() {
  return new NextResponse(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
