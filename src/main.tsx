import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import i18n from "./i18n";
import "@styles/globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalizedApp } from "./pages/LocalizedApp";
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <Routes>
          <Route path="/*" element={<LocalizedApp />} />
          <Route path="/:lang/*" element={<LocalizedApp />} />
        </Routes>
      </HelmetProvider>
    </I18nextProvider>
  </BrowserRouter>
);
