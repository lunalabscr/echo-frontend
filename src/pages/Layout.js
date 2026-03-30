import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollToTop } from "@/components/scrollToTop";
import { SITE_CONFIG } from "@/constants/site";
import { Outlet, useParams } from "react-router-dom";
import "@styles/globals.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { WhatsappFab } from "@/components/WhatsAppFab";
export const Layout = () => {
    const { lang } = useParams();
    const { i18n } = useTranslation();
    const { defaultLang, supportedLangs } = SITE_CONFIG;
    useEffect(() => {
        const currentLang = lang || defaultLang;
        if (supportedLangs.includes(currentLang)) {
            i18n.changeLanguage(currentLang);
        }
        else if (lang) {
            // Redirect to default language if unsupported language is provided
            window.location.replace("/");
        }
    }, [lang, i18n]);
    return (_jsxs("div", { className: "layout", children: [_jsx(ScrollToTop, {}), _jsx("a", { href: "#main-content", className: "sr-only focus:not-sr-only", children: "Skip to main content" }), _jsx(Header, {}), _jsxs("main", { id: "main-content", role: "main", children: [_jsx(WhatsappFab, {}), _jsx(Outlet, {})] }), _jsx(Footer, {})] }));
};
