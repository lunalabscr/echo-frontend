import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useSmoothNavigation } from "@/hooks/useSmoothNavigation";

export const Header = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "header",
  });
  const { t: info } = useTranslation("translation", {
    keyPrefix: "info",
  });

  // const navigate = useNavigate();
  const { lng } = useParams();
  const navigateTo = useSmoothNavigation();

  const phone = import.meta.env.VITE_WHATSAPP_PHONE || "";
  const message = encodeURIComponent(info("wa-text"));

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header__items}>
        <Link className={styles["header__small-item"]} to="/">
          AVV
        </Link>
        <div className={styles["header__item-wrapper"]}>
          <a
            className={clsx(styles.header__item, styles["header__large-item"])}
            onClick={() => navigateTo("/")}
          >
            {t("home")}
          </a>
          <a
            href="#about"
            className={clsx(styles.header__item, styles["header__large-item"])}
            onClick={() => navigateTo("#about")}
          >
            {t("about")}
          </a>
        </div>
        <Link className={styles["header__large-item"]} to="/">
          AVV
        </Link>
        <div className={styles["header__item-wrapper"]}>
          <a
            className={clsx(styles.header__item, styles["header__small-item"])}
            onClick={() => navigateTo("/")}
          >
            {t("home")}
          </a>
          <Link to={`/${lng}/gallery`} className={clsx(styles.header__item)}>
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
