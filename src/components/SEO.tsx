import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  titleKey: string; // i18n key
  descriptionKey?: string;
  image?: string;
  path?: string; // URL path after /en or /es etc.
}

export default function SEO({
  titleKey,
  descriptionKey = "defaultDescription",
  image = "https://www.arenalvolcanicvillas.com/og-image.jpg",
  path = "",
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";
  const fullUrl = `https://www.arenalvolcanicvillas.com/${lang}${path}`;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{`${t(titleKey)} | Arenal Volcanic Villas`}</title>
      <meta name="description" content={t(descriptionKey)} />
      <meta name="keywords" content={t("seo.keywords")} />
      <meta name="author" content="Arenal Volcanic Villas" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={`${t(titleKey)} | Arenal Volcanic Villas`}
      />
      <meta property="og:description" content={t(descriptionKey)} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${t(titleKey)} | Arenal Volcanic Villas`}
      />
      <meta name="twitter:description" content={t(descriptionKey)} />
      <meta name="twitter:image" content={image} />

      {/* hreflang links for alternate languages */}
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://www.arenalvolcanicvillas.com/en${path}`}
      />
      <link
        rel="alternate"
        hrefLang="es"
        href={`https://www.arenalvolcanicvillas.com/es${path}`}
      />
      <link
        rel="alternate"
        hrefLang="pt"
        href={`https://www.arenalvolcanicvillas.com/pt${path}`}
      />

      <link rel="icon" href="/favicon.ico" />
      <script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="GDwGvaXmWOPZHtpREFIsKQ"
        async
      ></script>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Arenal Volcanic Villas",
            "description": "${t(descriptionKey)}",
            "url": "${fullUrl}",
            "image": "${image}",
            "priceRange": "$100 - $300",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CR",
              "addressLocality": "La Fortuna",
              "addressRegion": "Alajuela"
            },
            "telephone": "+506-8554-3228"
          }
        `}
      </script>
    </Helmet>
  );
}
