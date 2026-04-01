import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import img1 from "../../../public/images/backgrounds/livingroom3-1200.webp";

import img2 from "../../../public/images/gallery/outside2-1200.webp";

export const Book = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "book",
  });

  const { t: info } = useTranslation("translation", {
    keyPrefix: "info",
  });

  const phone = import.meta.env.VITE_WHATSAPP_PHONE || "";
  const message = encodeURIComponent(info("wa-text"));

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="book" className={styles.book}>
      <motion.div
        className={styles.book__content}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.book__title}>{t("ready")}</h2>
        <p className={styles.book__subtitle}>{t("book")}</p>
        <button onClick={handleClick} className={styles.book__button}>
          {t("book-stay")}
        </button>
      </motion.div>

      <motion.div
        className={styles.book__images}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <img
          src={img1}
          alt="Comfortable living room interior at Arenal Volcanic Villas"
          className={styles.book__img_main}
          loading="lazy"
        />
        <img
          src={img2}
          alt="Exterior terrace view of Arenal Volcanic Villas"
          className={styles.book__img_sub}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};
