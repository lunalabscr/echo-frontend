import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

export const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });
  return (
    <footer className={styles.footer}>
      <img />
      <div>
        <p className={styles.footer__text}>{t("connect")}</p>
        <p className={styles.footer__subtext}>{t("instagram")}</p>
        <p className={styles.footer__subtext}>{t("whatsapp")}</p>
      </div>
    </footer>
  );
};
