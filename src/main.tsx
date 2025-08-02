import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Index } from "./pages/Index";

import "./i18n";
import "@styles/globals.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Index />
    </HelmetProvider>
  </StrictMode>
);
