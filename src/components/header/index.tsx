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
  // ... (rest of the component)
  return (
    <header className={styles.header}>
      <nav className={styles.header__items}>
        {/* 1. Small Logo (Mobile) */}
        <Link
          className={clsx(styles["header__small-item"], styles["header__logo"])}
          to="/"
        >
          <img src="/images/AVV-10.png" />
        </Link>
        {/* 2. Desktop Items Wrapper - Contains Left Links and Spacer */}
        <div className={styles["header__desktop-items-group"]}>
          <div className={styles["header__item-wrapper"]}>
            <a
              href="#home"
              className={clsx(
                styles.header__item,
                styles["header__large-item"]
              )}
              onClick={() => handleHomeClick("home")}
            >
              {t("home")}
            </a>
            <a
              href="#about"
              className={clsx(
                styles.header__item,
                styles["header__large-item"]
              )}
              onClick={() => handleHomeClick("about")}
            >
              {t("about")}
            </a>
          </div>
          {/* 3. The empty div for balancing the desktop layout */}
          <div className={styles["header__left-spacer"]} />
        </div>
        {/* 4. Large Logo (Desktop) - This will be the visual center */}
        <Link
          className={clsx(styles["header__large-item"], styles["header__logo"])}
          to="/"
        >
          <img src="/images/AVV-10.png" />
        </Link>
        {/* 5. Mobile/Right Links Wrapper - No change here */}
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
            className={clsx(styles.header__item, styles["header__large-item"])} // Add large-item to make it desktop-only
          >
            {t("gallery")}
          </Link>
          <a
            onClick={handleClick}
            className={clsx(styles.header__item, styles["header__large-item"])}
            href="#book"
          >
            {" "}
            {t("book-now")}
          </a>
          <a
            className={clsx(styles.header__item, styles["header__large-item"])}
            href="https://app.playtomic.io/tenant/64514c05-21b2-4a77-a3e2-d9c5bf157e7d"
            target="_blank"
          >
            {t("book-court")}
          </a>
          <Link
            to={`${baseRoute}/gallery`}
            className={clsx(styles.header__item, styles["header__small-item"])}
          >
            {t("gallery")}
          </Link>
          <a
            onClick={handleClick}
            className={clsx(styles.header__item, styles["header__small-item"])}
            href="#book"
          >
            {t("book-now")}
          </a>
          <a
            className={clsx(styles.header__item, styles["header__small-item"])}
            href="https://app.playtomic.io/tenant/64514c05-21b2-4a77-a3e2-d9c5bf157e7d"
            target="_blank"
          >
            {t("book-court")}
          </a>
        </div>
      </nav>
    </header>
  );
  // ...
};
