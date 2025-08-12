import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollToTop } from "@/components/scrollToTop";
import { SITE_CONFIG } from "@/constants/site";

import { Outlet, useParams } from "react-router-dom";
import "@styles/globals.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Layout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const { defaultLang, supportedLangs } = SITE_CONFIG;

  useEffect(() => {
    const currentLang = lang || defaultLang;

    if (supportedLangs.includes(currentLang as typeof supportedLangs[number])) {
      i18n.changeLanguage(currentLang);
    } else if (lang) {
      // Redirect to default language if unsupported language is provided
      window.location.replace('/');
    }
  }, [lang, i18n]);

  return (
    <div className="layout">
      <ScrollToTop />
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
