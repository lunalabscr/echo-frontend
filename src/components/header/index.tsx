import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";

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
  const { lang } = useParams();
  const baseRoute = lang ? `/${lang}` : "";

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleHomeClick = (section: string) => {
    if (
      location.pathname.includes("/gallery") ||
      location.pathname.includes("/terms-and-conditions") ||
      location.pathname.includes("/return-policy")
    ) {
      navigate(`${baseRoute}/`);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header__items}>
        <Link className={styles["header__small-item"]} to="/">
          AVV
        </Link>
        <div className={styles["header__item-wrapper"]}>
          <a
            href="#home"
            className={clsx(styles.header__item, styles["header__large-item"])}
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
        <Link className={styles["header__large-item"]} to="/">
          AVV
        </Link>
        <div className={styles["header__item-wrapper"]}>
          <a
            href="#home"
            className={clsx(styles.header__item, styles["header__small-item"])}
            onClick={() => handleHomeClick("home")}
          >
            {t("home")}
          </a>
          <Link
            to={`${baseRoute}/gallery`}
            className={clsx(styles.header__item)}
          >
            {t("gallery")}
          </Link>
          <a onClick={handleClick} className={styles.header__item} href="#book">
            {t("book-now")}
          </a>
        </div>
      </nav>
    </header>
  );
};
