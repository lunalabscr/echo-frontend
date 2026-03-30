import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
export const WhatWeOffer = () => {
    const { t } = useTranslation("translation", { keyPrefix: "whatweoffer" });
    const whatWeOffer = [
        {
            id: "offer-1",
            title: t("volcano-views"),
            subtitle: t("volcano-views-desc"),
            image: "/images/offers/IMG_3145.webp",
            mobileImage: "/images/offers/IMG_3145-400.webp", // Optional mobile-specific image
            desktopImage: "/images/offers/IMG_3145-1200.webp", // Optional desktop-specific image
            tabletImage: "/images/offers/IMG_3145-768.webp", // Optional tablet-specific image
        },
        {
            id: "offer-2",
            title: t("modern-comfort"),
            subtitle: t("modern-comfort-desc"),
            image: "/images/offers/moderncomfort-768.webp",
            mobileImage: "/images/offers/moderncomfort-400.webp", // Optional mobile-specific image
            desktopImage: "/images/offers/moderncomfort-1200.webp", // Optional desktop-specific image
            tabletImage: "/images/offers/moderncomfort-768.webp", // Optional tablet-specific image
        },
        {
            id: "offer-3",
            title: t("adv-door"),
            subtitle: t("adv-door-desc"),
            image: "/images/offers/cancha1.webp",
            mobileImage: "/images/gallery/cancha6-400.webp", // Optional mobile-specific image
            desktopImage: "/images/gallery/cancha6-1200.webp", // Optional desktop-specific image
            tabletImage: "/images/gallery/cancha6-768.webp", // Optional tablet-specific image
        },
    ];
    return (_jsxs("section", { className: styles.offers, id: "about", "aria-labelledby": "what-we-offer-heading", children: [_jsx("h2", { id: "what-we-offer-heading", className: "sr-only", children: "About Arenal Volcanic Villas" }), _jsx("p", { className: styles.offers__subtitle, children: t("about") }), _jsx("p", { className: styles.offers__subtitle, children: t("about-2") }), whatWeOffer.map((offer, index) => (_jsxs("article", { className: styles.offers__grid, children: [_jsx("div", { className: clsx(styles["offers__image-wrapper"], {
                            [styles["offers__order"]]: index % 2 == 0,
                        }), children: _jsx("img", { srcSet: `${offer.mobileImage} 500w, ${offer.tabletImage} 768w, ${offer.desktopImage} 1200w`, sizes: "(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px", alt: `${offer.title} showing luxurious amenities at Arenal Volcanic Villas`, className: styles["offers__image"], src: offer.tabletImage, loading: "lazy" }) }), _jsxs("div", { children: [_jsx("h3", { className: styles.offers__text, children: offer.title }), _jsx("p", { className: styles.offers__subtitle, children: offer.subtitle })] })] }, offer.id)))] }));
};
