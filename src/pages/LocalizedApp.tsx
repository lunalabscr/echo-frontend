import { Book } from "@/components/book/Index";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import SEO from "@/components/SEO";
import { WhatWeOffer } from "@/components/whatweoffer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

export const LocalizedApp = () => {
  const { lng } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const supported = ["en", "es", "pt"];

    if (!lng || !supported.includes(lng)) {
      const browserLang = navigator.language.slice(0, 2);
      const fallback = supported.includes(browserLang) ? browserLang : "en";
      navigate(`/${fallback}`, { replace: true });
      return;
    }

    i18n.changeLanguage(lng);
  }, [lng, i18n, navigate]);

  return (
    <>
      <SEO
        titleKey="seo.homeTitle"
        descriptionKey="seo.homeDescription"
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <WhatWeOffer />
        <Faq />
        <Book />
      </main>
      <Footer />
    </>
  );
};
