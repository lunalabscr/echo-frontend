import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { SITE_CONFIG, SEO_DEFAULTS } from "@/constants/site";
export default function SEO({ titleKey, descriptionKey, image = SITE_CONFIG.defaultImage, path, priceRange = SITE_CONFIG.defaultPriceRange, keywords: customKeywords, }) {
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
    return (_jsxs(Helmet, { children: [_jsx("html", { lang: currentLang }), _jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx("title", { children: `${pageTitle} | Arenal Volcanic Villas` }), _jsx("meta", { name: "description", content: pageDescription }), _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { name: "author", content: "Arenal Volcanic Villas" }), _jsx("link", { rel: "canonical", href: fullUrl }), _jsx("meta", { property: "og:title", content: `${pageTitle} | ${SITE_CONFIG.siteName}` }), _jsx("meta", { property: "og:description", content: pageDescription }), _jsx("meta", { property: "og:type", content: "website" }), _jsx("meta", { property: "og:url", content: fullUrl }), _jsx("meta", { property: "og:image", content: pageImage }), _jsx("meta", { property: "og:image:width", content: "1200" }), _jsx("meta", { property: "og:image:height", content: "630" }), _jsx("meta", { property: "og:site_name", content: SITE_CONFIG.siteName }), _jsx("meta", { property: "og:locale", content: currentLang === "en" ? "en_US" : currentLang === "es" ? "es_ES" : "pt_BR" }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:title", content: `${pageTitle} | ${SITE_CONFIG.siteName}` }), _jsx("meta", { name: "twitter:description", content: pageDescription }), _jsx("meta", { name: "twitter:image", content: pageImage }), SITE_CONFIG.supportedLangs.map((lang) => {
                const href = lang === "en"
                    ? `${SITE_CONFIG.baseUrl}${path}`
                    : `${SITE_CONFIG.baseUrl}/${lang}${path}`;
                return _jsx("link", { rel: "alternate", hrefLang: lang, href: href }, lang);
            }), _jsx("link", { rel: "alternate", hrefLang: "x-default", href: `${SITE_CONFIG.baseUrl}${path}` }), _jsx("link", { rel: "icon", href: "/favicon.ico" }), _jsx("link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }), _jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) })] }));
}
