import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { useHeroImagePreload } from "@/hooks/useImagePreload";
import styles from "./index.module.scss";
export const Hero = () => {
    const { t } = useTranslation("translation", { keyPrefix: "hero" });
    useHeroImagePreload(); // Preload critical images
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: styles.hero, id: "home", role: "banner", "aria-label": t("stay-near", { defaultValue: "Hero section showcasing Arenal Volcanic Villas" }), children: [_jsx("div", { className: styles.overlay, "aria-hidden": "true" }), _jsx("h1", { className: styles.hero__h1, children: t("site-title", { defaultValue: "Arenal Volcanic Villas - Luxury Accommodation near Arenal Volcano" }) }), _jsxs("div", { className: styles.hero__text, children: [_jsx("h2", { className: styles.hero__title, children: t("stay-near") }), _jsx("p", { className: styles.hero__subtitle, children: t("escape-fortuna") })] })] }), _jsxs("section", { className: styles.hero__description, "aria-labelledby": "hero-description", children: [_jsx("h2", { id: "hero-description", className: "sr-only", children: t("description-heading", { defaultValue: "About Our Villas" }) }), _jsx("p", { className: styles.hero__text2, children: t("hero-text") }), _jsx("p", { className: styles.hero__subtext, children: t("hero-sub") })] })] }));
};
