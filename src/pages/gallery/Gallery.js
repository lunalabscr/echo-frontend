import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import useFancybox from "@/hooks/useFancybox";
import SEO from "@/components/SEO";
import { useParams } from "react-router-dom";
import { galleryNotDisplayed } from "@/constants/gallery";
export const Gallery = () => {
    const { lang } = useParams();
    const { t } = useTranslation("translation", { keyPrefix: "gallery" });
    const [ref] = useFancybox();
    const baseRoute = lang ? `/${lang}` : "";
    const galleryList = [
        {
            src: "/images/mainbedroom-768.webp",
            alt: "Villa main bedroom",
            className: styles["gallery__picture"],
            mobileSrc: "/images/mainbedroom-400.webp",
            desktopSrc: "/images/mainbedroom-1200.webp",
            tabletSrc: "/images/mainbedroom-768.webp",
        },
        {
            src: "/images/kitchen-768.webp",
            alt: "Villa kitchen",
            className: styles["gallery__picture"],
            mobileSrc: "/images/kitchen-400.webp",
            desktopSrc: "/images/kitchen-1200.webp",
            tabletSrc: "/images/kitchen-768.webp",
        },
        {
            src: "/images/livingroom-768.webp",
            alt: "Villa living room",
            className: styles["gallery__picture"],
            mobileSrc: "/images/livingroom-400.webp",
            desktopSrc: "/images/livingroom-1200.webp",
            tabletSrc: "/images/livingroom-768.webp",
        },
        {
            src: "/images/outside-768.webp",
            alt: "Villa outside view",
            className: styles["gallery__picture"],
            mobileSrc: "/images/outside-400.webp",
            desktopSrc: "/images/outside-1200.webp",
            tabletSrc: "/images/outside-768.webp",
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { titleKey: "seo.galleryTitle", descriptionKey: "seo.galleryDescription", path: `${baseRoute}/gallery` }), _jsxs("section", { ref: ref, className: styles.gallery, children: [_jsx("h1", { className: styles.gallery__h1, children: "Arenal Volcanic Villas" }), _jsx("p", { className: styles.gallery__title, children: t("title") }), _jsx("p", { className: styles.gallery__subtitle, children: t("subtitle") }), _jsx("div", { className: styles["gallery__main-picture-wrapper"], children: _jsx("img", { "data-fancybox": "gallery", className: styles["gallery__main-picture"], src: "/images/drone4-1200.webp", srcSet: `/images/drone4-400.webp 500w, /images/drone4-768.webp 768w, /images/drone4-1200.webp 1200w`, sizes: "(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px", alt: "Villa above view" }) }), _jsx("p", { className: styles.gallery__subtext, children: t("click-tosee") }), _jsxs("div", { className: styles["gallery__grid-gallery"], children: [galleryList.map((item, index) => (_jsx("a", { "data-fancybox": "gallery", href: item.src, className: styles["gallery__picture-wrapper"], children: _jsx("img", { srcSet: `${item.mobileSrc} 500w, ${item.tabletSrc} 768w, ${item.desktopSrc} 1200w`, sizes: "(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px", src: item.tabletSrc, alt: item.alt, className: clsx(item.className) }) }, index))), _jsx("div", { style: { display: "none" }, children: galleryNotDisplayed.map((item) => (_jsx("a", { "data-fancybox": "gallery", href: item.src, children: _jsx("img", { src: item.src, alt: item.alt }) }, item.src))) })] }), _jsx("p", { className: styles.gallery__text, children: t("text") }), _jsx("p", { className: styles.gallery__subtext, children: t("subtext") })] })] }));
};
