import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import i18n from "./i18n";
import "@styles/globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Layout } from "./pages/Layout";
import { TermsAndConditions } from "./pages/terms-and-conditions";
import { Home } from "./pages/home/Home";
import { Gallery } from "./pages/gallery/Gallery";
import { NotFound } from "./pages/not-found";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"gallery"} element={<Gallery />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="return-policy" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/:lang" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"gallery"} element={<Gallery />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="return-policy" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </I18nextProvider>
  </BrowserRouter>
);
