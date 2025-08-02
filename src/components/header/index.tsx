import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "header",
  });
  return (
    <header className={styles.header}>
      <nav className={styles.header__items}>
        <div className={styles["header__item-wrapper"]}>
          <a className={styles.header__item} href="#home">
            {t("home")}
          </a>
          <a
            className={clsx(styles.header__item, styles["header__large-item"])}
            href="#about"
          >
            {t("about")}
          </a>
        </div>
        <a href="#home">AVV</a>
        <div className={styles["header__item-wrapper"]}>
          <a
            className={clsx(styles.header__item, styles["header__large-item"])}
            href="#gallery"
          >
            {t("gallery")}
          </a>
          <a className={styles.header__item} href="#book">
            {t("book-now")}
          </a>
        </div>
      </nav>
    </header>
  );
};
