export const siteConfig = {
  name: "KDT Tiling Swansea",
  shortName: "KDT Tiling",
  tagline: "Premium Wall & Floor Tiling",
  description:
    "Professional wall & floor tiling, domestic plumbing, wall & ceiling panelling, and small bricklaying jobs across South Wales. Fully guaranteed and insured.",
  url: "https://kdttiling.co.uk",
  ogImage: "/images/kitchen_28.jpg",
  logo: "/logo.jpg",
  themeColor: "#0B0B0C",
  accentColor: "#22d3ee",
  locale: "en_GB",

  contact: {
    phoneDisplay: "+44 7713 246545",
    phoneE164: "+447713246545",
    phoneTelHref: "tel:+447713246545",
    email: "info@kdttiling.co.uk",
  },

  social: {
    instagram: "https://instagram.com/kdttilingswansea",
    instagramHandle: "@kdttilingswansea",
    facebook: "https://www.facebook.com/profile.php?id=61560688422009#",
    googleBusiness: "https://www.google.com/maps/search/?api=1&query=KDT+Tiling+Swansea",
  },

  business: {
    baseLocation: "Pontardawe",
    serviceAreaName: "South Wales",
    guarantees: ["Fully guaranteed workmanship", "Fully insured"],
  },

  services: [
    {
      name: "Wall Tiling",
      description: "All aspects of wall tiling for bathrooms, kitchens, and living spaces.",
    },
    {
      name: "Floor Tiling",
      description: "All aspects of floor tiling, from bathrooms to full-property flooring.",
    },
    {
      name: "Domestic Plumbing",
      description: "Reliable domestic plumbing services for kitchens, bathrooms, and beyond.",
    },
    {
      name: "Wall & Ceiling Panelling",
      description: "Modern wall and ceiling panelling to enhance any room.",
    },
    {
      name: "Small Bricklaying Jobs",
      description: "Professional small-scale bricklaying and hardscaping work.",
    },
  ],
} as const;
