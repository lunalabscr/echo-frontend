import { Book } from "@/components/book/Index";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { WhatWeOffer } from "@/components/whatweoffer";
import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { Amenities } from "@/components/amenities";

export const Home = () => {
  const { lang } = useParams();
  const baseRoute = lang ? `/${lang}` : "";

  return (
    <>
      <SEO
        titleKey="seo.homeTitle"
        descriptionKey="seo.homeDescription"
        path={`${baseRoute}`}
      />

      <Hero />
      <WhatWeOffer />
      <Amenities />
      <Faq />
      <Book />
    </>
  );
};
