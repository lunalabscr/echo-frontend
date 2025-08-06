import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, Routes, Route } from "react-router-dom";
import { Gallery } from "./gallery/Gallery";
import { TermsAndConditions } from "./terms-and-conditions";
import { NotFound } from "./not-found";
import "@styles/globals.scss";
import { Layout } from "./Layout";
import { Home } from "./home/Home";

export const LocalizedApp = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const supported = ["en", "es", "pt"];

    if (!lang || !supported.includes(lang)) {
      const browserLang = navigator.language.slice(0, 2);
      const fallback = supported.includes(browserLang) ? browserLang : "en";
      navigate(`/${fallback}`, { replace: true });
      return;
    }
    i18n.changeLanguage(lang);
  }, [lang, i18n, navigate]);

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"gallery"} element={<Gallery />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
