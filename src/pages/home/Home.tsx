import { Book } from "@/components/book/Index";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { WhatWeOffer } from "@/components/whatweoffer";
import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";

export const Home = () => {
  const { lang } = useParams();
  return (
    <>
      <SEO
        titleKey="seo.homeTitle"
        descriptionKey="seo.homeDescription"
        path={`/${lang}`}
      />

      <Hero />
      <WhatWeOffer />
      <Faq />
      <Book />
    </>
  );
};
