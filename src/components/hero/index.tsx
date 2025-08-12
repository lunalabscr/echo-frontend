import { useTranslation } from "react-i18next";
import { useHeroImagePreload } from "@/hooks/useImagePreload";
import styles from "./index.module.scss";

export const Hero = () => {
  const { t } = useTranslation("translation", { keyPrefix: "hero" });
  useHeroImagePreload(); // Preload critical images
  
  return (
    <>
      <section 
        className={styles.hero} 
        id="home" 
        role="banner"
        aria-label={t("stay-near", { defaultValue: "Hero section showcasing Arenal Volcanic Villas" })}
      >
        <div className={styles.overlay} aria-hidden="true"></div>
        <h1 className={styles.hero__h1}>
          {t("site-title", { defaultValue: "Arenal Volcanic Villas - Luxury Accommodation near Arenal Volcano" })}
        </h1>
        <div className={styles.hero__text}>
          <p className={styles.hero__title} role="heading" aria-level={2}>
            {t("stay-near")}
          </p>
          <p className={styles.hero__subtitle}>
            {t("escape-fortuna")}
          </p>
        </div>
      </section>
      <section className={styles.hero__description} aria-labelledby="hero-description">
        <h2 id="hero-description" className="sr-only">
          {t("description-heading", { defaultValue: "About Our Villas" })}
        </h2>
        <p className={styles.hero__text2}>{t("hero-text")}</p>
        <p className={styles.hero__subtext}>{t("hero-sub")}</p>
      </section>
    </>
  );
};
