import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";
export const Footer = () => {
    const { t } = useTranslation("translation", { keyPrefix: "footer" });
    const { t: info } = useTranslation("translation", {
        keyPrefix: "info",
    });
    const { lang } = useParams();
    const baseRoute = lang ? `/${lang}` : "";
    const phone = import.meta.env.VITE_WHATSAPP_PHONE || "";
    const message = encodeURIComponent(info("wa-text"));
    const handleClick = () => {
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    };
    return (_jsx("footer", { className: styles.footer, children: _jsxs("div", { className: styles.footer__wrapper, children: [_jsx("div", { className: styles["footer__logo-wrapper"], children: _jsx("img", { className: styles["footer__logo"], alt: "Arenal Volcanic Villas logo", src: "/images/AVV-01.png" }) }), _jsxs("div", { className: styles.footer__content, children: [_jsxs("div", { children: [_jsx("p", { className: styles.footer__text, children: t("connect") }), _jsx("a", { href: "https://www.instagram.com/arenalvolcanicvillas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", target: "_blank", className: styles.footer__subtext, children: t("instagram") }), _jsx("p", { onClick: handleClick, className: styles.footer__subtext, children: t("whatsapp") }), _jsx("p", { className: styles.footer__subtext, children: t("facebook") })] }), _jsxs("div", { children: [_jsx("p", { className: styles.footer__text, children: t("policy") }), _jsx(Link, { to: `${baseRoute}/return-policy`, className: styles.footer__subtext, children: t("return-policy") }), _jsx("br", {}), _jsx(Link, { to: `${baseRoute}/terms-and-conditions`, className: styles.footer__subtext, children: t("terms-conditions") })] })] })] }) }));
};
