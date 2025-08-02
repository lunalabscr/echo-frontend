import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

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

  return (
    <section className={styles.book}>
      <p className={styles.book__title}>{t("ready")}</p>
      <p className={styles.book__subtitle}>{t("book")}</p>
      <button onClick={handleClick} className={styles.book__button}>
        {t("book-stay")}
      </button>
    </section>
  );
};
