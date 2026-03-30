import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Book } from "@/components/book/Index";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { WhatWeOffer } from "@/components/whatweoffer";
import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { Amenities } from "@/components/amenities";
import { motion } from "framer-motion";
export const Home = () => {
    const { lang } = useParams();
    const baseRoute = lang ? `/${lang}` : "";
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { titleKey: "seo.homeTitle", descriptionKey: "seo.homeDescription", path: `${baseRoute}` }), _jsx(Hero, {}), _jsx(motion.div, { initial: { opacity: 0, y: 75 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.8, ease: "easeOut" }, children: _jsx(WhatWeOffer, {}) }), _jsx(motion.div, { initial: { opacity: 0, y: 75 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.8, ease: "easeOut" }, children: _jsx(Amenities, {}) }), _jsx(motion.div, { initial: { opacity: 0, y: 75 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.8, ease: "easeOut" }, children: _jsx(Faq, {}) }), _jsx(Book, {})] }));
};
