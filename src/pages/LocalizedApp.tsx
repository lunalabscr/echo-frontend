import { Book } from "@/components/book/Index";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import SEO from "@/components/SEO";
import { WhatWeOffer } from "@/components/whatweoffer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, Routes, Route } from "react-router-dom";
import { Gallery } from "./gallery/Gallery";
import { ScrollToTop } from "@/components/scrollToTop";
import { TermsAndConditions } from "./terms-and-conditions";
import { NotFound } from "./not-found";
import "@styles/globals.scss";

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
    <div className="layout">
      <Header />
      <Routes>
        <Route
          index
          element={
            <>
              <SEO
                titleKey="seo.homeTitle"
                descriptionKey="seo.homeDescription"
                path={`/${lng}`}
              />
              <main>
                <ScrollToTop />
                <Hero />
                <WhatWeOffer />
                <Faq />
                <Book />
              </main>
            </>
          }
        />
        <Route
          path="gallery"
          element={
            <>
              <SEO
                titleKey="seo.galleryTitle"
                descriptionKey="seo.galleryDescription"
                path={`/${lng}/gallery`}
              />
              <main>
                <ScrollToTop />
                <Gallery />
              </main>
            </>
          }
        />
        <Route
          path="terms-and-conditions"
          element={
            <>
              <SEO
                titleKey=""
                descriptionKey=""
                path={`/${lng}/terms-and-conditions`}
              />
              <main>
                <ScrollToTop />
                <TermsAndConditions />
              </main>
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
