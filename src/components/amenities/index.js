import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import styles from "./Amenities.module.scss";
import { amenities } from "@/constants/amentities";
export const Amenities = () => {
    const { t } = useTranslation();
    return (_jsxs("section", { className: styles.amenities, children: [_jsx("h2", { className: styles.title, children: t("amenities.title") }), _jsx("div", { className: styles.grid, children: amenities.map(({ icon: Icon, label }, idx) => (_jsxs("div", { className: styles.item, children: [_jsx(Icon, { size: 28, strokeWidth: 1.8 }), _jsx("span", { children: t(label) })] }, idx))) })] }));
};
