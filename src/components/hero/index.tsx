import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

export const Hero = () => {
  const { t } = useTranslation("translation", { keyPrefix: "hero" });
  return (
    <section className={styles.hero} id="home">
      <article className={styles.hero__text}>
        <p className={styles.hero__title}>{t("stay-near")}</p>
        <p className={styles.hero__subtitle}>{t("escape-fortuna")}</p>
      </article>
    </section>
  );
};
