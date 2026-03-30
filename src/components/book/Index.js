import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import img1 from "../../../public/images/livingroom3-1200.webp";
import img2 from "../../../public/images/outside2-1200.webp";
export const Book = () => {
    const { t } = useTranslation("translation", {
        keyPrefix: "book",
    });
    const { t: info } = useTranslation("translation", {
        keyPrefix: "info",
    });
    const phone = import.meta.env.VITE_WHATSAPP_PHONE || "";
    const message = encodeURIComponent(info("wa-text"));
    const handleClick = () => {
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    };
    return (_jsxs("section", { id: "book", className: styles.book, children: [_jsxs(motion.div, { className: styles.book__content, initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.8, ease: "easeOut" }, children: [_jsx("p", { className: styles.book__title, children: t("ready") }), _jsx("p", { className: styles.book__subtitle, children: t("book") }), _jsx("button", { onClick: handleClick, className: styles.book__button, children: t("book-stay") })] }), _jsxs(motion.div, { className: styles.book__images, initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }, children: [_jsx("img", { src: img1, alt: "Villa placeholder main", className: styles.book__img_main }), _jsx("img", { src: img2, alt: "Villa placeholder small", className: styles.book__img_sub })] })] }));
};
