import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./i18n";
import "@styles/globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalizedApp } from "./pages/LocalizedApp";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<LocalizedApp />} />
        <Route path="/:lng/*" element={<LocalizedApp />} />
      </Routes>
    </HelmetProvider>
  </BrowserRouter>
);
