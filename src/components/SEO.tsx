import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

// You can import your i18n instance directly to access supported languages
import i18n from "@/i18n"; // Assuming your i18n config is in this file path

interface SEOProps {
  titleKey: string; // i18n key for the page title
  descriptionKey: string; // i18n key for the page description
  image?: string; // Optional: URL for the Open Graph image
  path: string; // URL path after the language code (e.g., "/about-us")
  priceRange?: string; // Optional: Price range for schema markup
}

export default function SEO({
  titleKey,
  descriptionKey,
  image = "/images/drone-1200.webp",
  path,
  priceRange = "$100 - $300", // Defaulting price range if not provided
}: SEOProps) {
  const { t } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://www.arenalvolcanicvillas.com";

  // Determine the full URL based on the current language
  const fullUrl =
    currentLang === "en"
      ? `${baseUrl}${path}`
      : `${baseUrl}/${currentLang}${path}`;

  const pageTitle = `${t(titleKey)} | Arenal Volcanic Villas`;
  const pageDescription = t(descriptionKey);
  const keywords = t("seo.keywords");

  // Define supported languages. This can also be pulled from i18n.options.supportedLngs
  const supportedLangs = ["en", "es", "pt"];

  // Build the JSON-LD schema as a JavaScript object for safety
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Arenal Volcanic Villas",
    description: pageDescription,
    url: fullUrl,
    image: image,
    priceRange: priceRange,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CR",
      addressLocality: "La Fortuna",
      addressRegion: "Alajuela",
      postalCode: "21007",
      streetAddress: "La Fortuna, Alajuela, Costa Rica",
    },
    telephone: "+506-8554-3228",
  };

  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <html lang={currentLang} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Primary SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Arenal Volcanic Villas" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${image}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />

      {/* Hreflang links for alternate languages */}
      {supportedLangs.map((lang) => {
        // Construct the href based on the language
        const href =
          lang === "en" ? `${baseUrl}${path}` : `${baseUrl}/${lang}${path}`;

        return <link key={lang} rel="alternate" hrefLang={lang} href={href} />;
      })}
      {/* x-default hreflang tag. It should point to the English version. */}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${path}`} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">{JSON.stringify(hotelSchema)}</script>
    </Helmet>
  );
}
