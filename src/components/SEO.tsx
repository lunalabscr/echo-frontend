import type { SEOProps } from "@/types/SEO";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description = "Discover Arenal Volcanic Villas – your nature escape in Costa Rica. Comfortable stays near the volcano with breathtaking views.",
  keywords = "Arenal, Costa Rica, Villas, Volcano, La Fortuna, Nature, Travel, Hotel, Stay",
  url = "https://www.arenalvolcanicvillas.com/",
  image = "https://www.arenalvolcanicvillas.com/og-image.jpg",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Arenal Volcanic Villas" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}
