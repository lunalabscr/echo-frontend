import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

export const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });
  const { t: info } = useTranslation("translation", {
    keyPrefix: "info",
  });
  const phone = import.meta.env.VITE_WHATSAPP_PHONE || "";
  const message = encodeURIComponent(info("wa-text"));

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles["footer__logo-wrapper"]}>
          <img
            className={styles["footer__logo"]}
            alt="Arenal Volcanic Villas logo"
          />
        </div>
        <div className={styles.footer__content}>
          <div>
            <p className={styles.footer__text}>{t("connect")}</p>
            <p onClick={handleClick} className={styles.footer__subtext}>
              {t("instagram")}
            </p>
            <p className={styles.footer__subtext}>{t("whatsapp")}</p>
            <p className={styles.footer__subtext}>{t("facebook")}</p>
          </div>

          <div>
            <p className={styles.footer__text}>{t("policy")}</p>
            <p className={styles.footer__subtext}>{t("return-policy")}</p>
            <p className={styles.footer__subtext}>{t("terms-conditions")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
