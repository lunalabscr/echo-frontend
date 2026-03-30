import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@radix-ui/react-accordion";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";
export const Faq = () => {
    const { t } = useTranslation("translation", { keyPrefix: "faq" });
    const accordionFaq = [
        { trigger: t("question1"), content: t("answer1"), value: "trigger-1" },
        { trigger: t("question2"), content: t("answer2"), value: "trigger-2" },
        { trigger: t("question3"), content: t("answer3"), value: "trigger-3" },
    ];
    return (_jsxs("div", { className: styles.wrapper, children: [_jsx("div", { className: styles["wrapper__image-wrapper"], children: _jsx("img", { className: styles.wrapper__image, src: "/images/gallery/outside2-768.webp", srcSet: `/images/gallery/outside2-400.webp 500w, /images/gallery/outside2-768.webp 768w, /images/gallery/outside2-1200.webp 1200w`, sizes: "(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px", alt: "Beautiful exterior view of Arenal Volcanic Villas showcasing Costa Rican nature", loading: "lazy" }) }), _jsxs(Accordion, { type: "multiple", className: styles.accordion, children: [_jsx("h2", { className: styles.accordion__title, children: t("faq") }), accordionFaq.map((faq) => (_jsxs(AccordionItem, { value: faq.value, className: styles.accordion__item, children: [_jsxs(AccordionTrigger, { className: styles.accordion__trigger, children: [faq.trigger, _jsxs("span", { className: styles.iconWrapper, children: [_jsx(ChevronDown, { className: styles.iconClosed }), _jsx(ChevronUp, { className: styles.iconOpen })] })] }), _jsx(AccordionContent, { className: styles.accordion__content, children: faq.content })] }, faq.value)))] })] }));
};
