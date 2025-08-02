import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleHomeClick = (section: string) => {
    if (location.pathname.includes("/gallery")) {
      navigate("/");
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header__items}>
        <div className={styles["header__item-wrapper"]}>
          <a
            href="#home"
            className={styles.header__item}
            onClick={() => handleHomeClick("home")}
          >
            {t("home")}
          </a>
          <a
            href="#about"
            className={clsx(styles.header__item, styles["header__large-item"])}
            onClick={() => handleHomeClick("about")}
          >
            {t("about")}
          </a>
        </div>
        <a href="#home">AVV</a>
        <div className={styles["header__item-wrapper"]}>
          <a
            className={clsx(styles.header__item, styles["header__large-item"])}
            onClick={() => navigate("gallery")}
          >
            {t("gallery")}
          </a>
          <a onClick={handleClick} className={styles.header__item} href="#book">
            {t("book-now")}
          </a>
        </div>
      </nav>
    </header>
  );
};
