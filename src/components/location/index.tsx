import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

export const Location = () => {
  const { t } = useTranslation("translation", { keyPrefix: "location" });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t("title", "Location")}</h2>
      <p className={styles.address}>
        La Guaria, Provincia de Alajuela, Zeta trece, 21007
      </p>
      <div className={styles.mapContainer}>
        <iframe
          title="Arenal Volcanic Villas Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.347944936453!2d-84.66392722429276!3d10.473212889657711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa00db0cc85a773%3A0xefcd9bb6675000b2!2sArenal%20Volcanic%20Villas!5e0!3m2!1ses!2scr!4v1775024902612!5m2!1ses!2scr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
