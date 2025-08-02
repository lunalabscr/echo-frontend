import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

export const Hero = () => {
  const { t } = useTranslation("translation", { keyPrefix: "hero" });
  return (
    <section className={styles.hero} id="home">
      <h1 className={styles.hero__h1}>Arenal Volcanic Villas</h1>
      <article className={styles.hero__text}>
        <p className={styles.hero__title}>{t("stay-near")}</p>
        <p className={styles.hero__subtitle}>{t("escape-fortuna")}</p>
      </article>
      <div className={styles.hero__description}>
        <p className={styles.hero__text2}>{t("hero-text")}</p>
        <p className={styles.hero__subtext}>{t("hero-sub")}</p>
      </div>
    </section>
  );
};
