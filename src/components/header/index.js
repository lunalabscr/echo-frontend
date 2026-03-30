import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { SITE_CONFIG } from "@/constants/site";
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
export const Header = () => {
    const { t } = useTranslation("translation", {
        keyPrefix: "header",
    });
    const { t: info } = useTranslation("translation", {
        keyPrefix: "info",
    });
    const navigate = useNavigate();
    const phone = import.meta.env.VITE_WHATSAPP_PHONE || "";
    const message = encodeURIComponent(info("wa-text"));
    const { lang } = useParams();
    const location = useLocation();
    const baseRoute = lang ? `/${lang}` : "";
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const langRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const currentLangDisplay = lang || SITE_CONFIG.defaultLang;
    const handleLanguageChange = (lng) => {
        setIsLangOpen(false);
        const currentLangPattern = new RegExp(`^\\/(${SITE_CONFIG.supportedLangs.join('|')})(\\/|$)`);
        const isLangInPath = currentLangPattern.test(location.pathname);
        if (isLangInPath) {
            if (lng === SITE_CONFIG.defaultLang) {
                // Going to default lang, just remove the language from path
                navigate(location.pathname.replace(currentLangPattern, '/'));
            }
            else {
                // Replace current language with new language
                navigate(location.pathname.replace(currentLangPattern, `/${lng}$2`));
            }
        }
        else {
            if (lng !== SITE_CONFIG.defaultLang) {
                // Add new language prefix
                navigate(`/${lng}${location.pathname === '/' ? '' : location.pathname}`);
            }
        }
    };
    const handleClick = () => {
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    };
    const handleHomeClick = (section) => {
        setIsMobileOpen(false);
        if (location.pathname.includes("/gallery") ||
            location.pathname.includes("/terms-and-conditions") ||
            location.pathname.includes("/return-policy")) {
            navigate(`${baseRoute}/`);
        }
        else {
            const el = document.getElementById(section);
            if (el)
                el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsx("header", { className: styles.header, children: _jsxs("nav", { className: styles.header__items, children: [_jsx("div", { className: styles.header__left, children: _jsx("div", { className: styles["header__desktop-items-group"], children: _jsxs("div", { className: styles["header__item-wrapper"], children: [_jsx("a", { href: "#home", className: styles.header__item, onClick: () => handleHomeClick("home"), children: t("home") }), _jsx("a", { href: "#about", className: styles.header__item, onClick: () => handleHomeClick("about"), children: t("about") })] }) }) }), _jsx("div", { className: styles.header__center, children: _jsx(Link, { className: styles["header__logo"], to: "/", children: _jsx("img", { src: "/images/logos/AVV-10.png" }) }) }), _jsx("div", { className: styles.header__right, children: _jsxs("div", { className: styles["header__item-wrapper"], children: [_jsx(Link, { to: `${baseRoute}/gallery`, className: clsx(styles.header__item, styles["header__large-item"]), children: t("gallery") }), _jsx("a", { onClick: handleClick, className: clsx(styles.header__item, styles["header__large-item"]), href: "#book", children: t("book-now") }), _jsxs("div", { className: styles.header__lang_switcher, ref: langRef, children: [_jsxs("button", { className: styles.header__lang_toggle, onClick: () => setIsLangOpen(!isLangOpen), children: [_jsx(Globe, { size: 18 }), _jsx("span", { children: currentLangDisplay.toUpperCase() }), _jsx(ChevronDown, { size: 14, className: clsx(styles.header__lang_icon, {
                                                    [styles['header__lang_icon--open']]: isLangOpen
                                                }) })] }), isLangOpen && (_jsx("div", { className: styles.header__lang_menu, children: SITE_CONFIG.supportedLangs.map((l) => {
                                            const isActive = lang === l || (l === SITE_CONFIG.defaultLang && !lang);
                                            return (_jsx("button", { className: clsx(styles.header__lang_menu_btn, {
                                                    [styles["header__lang_menu_btn--active"]]: isActive,
                                                }), onClick: () => handleLanguageChange(l), children: l.toUpperCase() }, l));
                                        }) }))] }), _jsx("div", { className: styles["header__mobile-btn"], children: _jsx("button", { onClick: () => setIsMobileOpen(!isMobileOpen), children: isMobileOpen ? _jsx(X, { size: 28, color: "black" }) : _jsx(Menu, { size: 28, color: "black" }) }) }), _jsx("div", { className: clsx(styles["header__mobile-overlay"], { [styles["header__mobile-overlay--open"]]: isMobileOpen }), children: _jsxs("div", { className: styles["header__mobile-menu"], children: [_jsx("a", { href: "#about", className: styles.header__item, onClick: () => handleHomeClick("about"), children: t("about") }), _jsx(Link, { to: `${baseRoute}/gallery`, className: styles.header__item, onClick: () => setIsMobileOpen(false), children: t("gallery") }), _jsx("a", { onClick: () => { handleClick(); setIsMobileOpen(false); }, className: styles.header__item, href: "#book", children: t("book-now") })] }) })] }) })] }) }));
    // ...
};
