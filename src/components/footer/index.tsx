import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });
  const { t: info } = useTranslation("translation", {
    keyPrefix: "info",
  });
  const { lang } = useParams();
  const baseRoute = lang ? `/${lang}` : "";
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
            <a
              href="https://www.instagram.com/arenalvolcanicvillas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className={styles.footer__subtext}
            >
              {t("instagram")}
            </a>
            <p onClick={handleClick} className={styles.footer__subtext}>
              {t("whatsapp")}
            </p>
            <p className={styles.footer__subtext}>{t("facebook")}</p>
          </div>

          <div>
            <p className={styles.footer__text}>{t("policy")}</p>
            <Link
              to={`${baseRoute}/return-policy`}
              className={styles.footer__subtext}
            >
              {t("return-policy")}
            </Link>
            <br />
            <Link
              to={`${baseRoute}/terms-and-conditions`}
              className={styles.footer__subtext}
            >
              {t("terms-conditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
