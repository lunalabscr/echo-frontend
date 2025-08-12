export const SITE_CONFIG = {
  baseUrl: "https://www.arenalvolcanicvillas.com",
  siteName: "Arenal Volcanic Villas",
  supportedLangs: ["en", "es", "pt"] as const,
  defaultLang: "en" as const,
  defaultImage: "/images/drone-1200.webp",
  defaultPriceRange: "$100 - $300",
  contact: {
    phone: "+506-8554-3228",
    email: "info@arenalvolcanicvillas.com",
  },
  address: {
    street: "La Fortuna, Alajuela, Costa Rica",
    locality: "La Fortuna",
    region: "Alajuela",
    postalCode: "21007",
    country: "CR",
  },
  geo: {
    latitude: "10.4677",
    longitude: "-84.6431",
  },
} as const;

export const SEO_DEFAULTS = {
  title: "Arenal Volcanic Villas",
  description: "Luxury villas near Arenal Volcano, Costa Rica. Experience comfort and nature in perfect harmony.",
  keywords: "Arenal Costa Rica villas, hotel near Arenal Volcano, luxury villas, La Fortuna accommodation, Costa Rica vacation rental",
} as const;