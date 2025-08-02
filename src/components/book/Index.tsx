import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

export const Book = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "book",
  });

  return (
    <section className={styles.book}>
      <p className={styles.book__title}>{t("ready")}</p>
      <p className={styles.book__subtitle}>{t("book")}</p>
      <button className={styles.book__button}>{t("book-stay")}</button>
    </section>
  );
};
