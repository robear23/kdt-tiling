export const locations = [
  { name: "Swansea", slug: "swansea" },
  { name: "Neath", slug: "neath" },
  { name: "Port Talbot", slug: "port-talbot" },
  { name: "Llanelli", slug: "llanelli" },
  { name: "Mumbles", slug: "mumbles" },
  { name: "Gorseinon", slug: "gorseinon" },
  { name: "Pontardawe", slug: "pontardawe" },
  { name: "Carmarthen", slug: "carmarthen" },
  { name: "Ammanford", slug: "ammanford" },
  { name: "Bridgend", slug: "bridgend" },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
