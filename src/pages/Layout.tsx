import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollToTop } from "@/components/scrollToTop";

import { Outlet, useParams } from "react-router-dom";
import "@styles/globals.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Layout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const defaultLang = "en";

  useEffect(() => {
    const currentLang = lang || defaultLang;
    const supportedLanguages = ["en", "es", "pt"];

    if (supportedLanguages.includes(currentLang)) {
      i18n.changeLanguage(currentLang);
    }
  }, [lang, i18n]);

  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
