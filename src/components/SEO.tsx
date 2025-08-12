import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import type { SEOProps } from "@/types/SEO";
import { SITE_CONFIG, SEO_DEFAULTS } from "@/constants/site";

export default function SEO({
  titleKey,
  descriptionKey,
  image = SITE_CONFIG.defaultImage,
  path,
  priceRange = SITE_CONFIG.defaultPriceRange,
  keywords: customKeywords,
}: SEOProps) {
  const { t } = useTranslation();
  const currentLang = i18n.language || "en";

  const pageImage = `${SITE_CONFIG.baseUrl}${image}`;
  const fullUrl = currentLang === "en" 
    ? `${SITE_CONFIG.baseUrl}${path}`
    : `${SITE_CONFIG.baseUrl}/${currentLang}${path}`;

  const pageTitle = t(titleKey, {
    defaultValue: SEO_DEFAULTS.title,
  });
  
  const pageDescription = t(descriptionKey, {
    defaultValue: SEO_DEFAULTS.description,
  });

  const keywords = customKeywords || t("seo.keywords", {
    defaultValue: SEO_DEFAULTS.keywords,
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE_CONFIG.siteName,
    description: pageDescription,
    url: fullUrl,
    image: [pageImage],
    priceRange,
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE_CONFIG.address.country,
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      streetAddress: SITE_CONFIG.address.street,
    },
    telephone: SITE_CONFIG.contact.phone,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Parking" },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning" }
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    }
  };

  return (
    <Helmet>
      <html lang={currentLang} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{`${pageTitle} | Arenal Volcanic Villas`}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Arenal Volcanic Villas" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={`${pageTitle} | ${SITE_CONFIG.siteName}`} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />
      <meta property="og:locale" content={currentLang === "en" ? "en_US" : currentLang === "es" ? "es_ES" : "pt_BR"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${pageTitle} | ${SITE_CONFIG.siteName}`} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Hreflang */}
      {SITE_CONFIG.supportedLangs.map((lang) => {
        const href = lang === "en" 
          ? `${SITE_CONFIG.baseUrl}${path}` 
          : `${SITE_CONFIG.baseUrl}/${lang}${path}`;
        return <link key={lang} rel="alternate" hrefLang={lang} href={href} />;
      })}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_CONFIG.baseUrl}${path}`} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
