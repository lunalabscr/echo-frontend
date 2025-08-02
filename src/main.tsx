import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Index } from "./pages/Index";

import "./i18n";
import "@styles/globals.scss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider>
      <Index />
    </HelmetProvider>
  </BrowserRouter>
);
