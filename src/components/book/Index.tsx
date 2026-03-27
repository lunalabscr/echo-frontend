import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import img1 from "../../../public/images/livingroom3-1200.webp";

import img2 from "../../../public/images/outside2-1200.webp";

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
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className={styles.book__title}>{t("ready")}</p>
        <p className={styles.book__subtitle}>{t("book")}</p>
        <button onClick={handleClick} className={styles.book__button}>
          {t("book-stay")}
        </button>
      </motion.div>

      <motion.div
        className={styles.book__images}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <img
          src={img1}
          alt="Villa placeholder main"
          className={styles.book__img_main}
        />
        <img
          src={img2}
          alt="Villa placeholder small"
          className={styles.book__img_sub}
        />
      </motion.div>
    </section>
  );
};
