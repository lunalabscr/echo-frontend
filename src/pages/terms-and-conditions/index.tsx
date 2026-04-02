import SEO from "@/components/SEO";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import clsx from "clsx";

export const TermsAndConditions = () => {
  const { lang } = useParams();
  const { t } = useTranslation("translation", {
    keyPrefix: "terms-and-conditions",
  });

  const baseRoute = lang ? `/${lang}` : "";

  const images = [
    {
      name: "drone",
      alt: t("imageAlt1"),
      default: "/images/gallery/drone-768.webp",
      sources: [
        "/images/gallery/drone-400.webp 500w",
        "/images/gallery/drone-768.webp 768w",
        "/images/gallery/drone-1200.webp 1200w",
      ],
    },
    {
      name: "kitchen2",
      alt: t("imageAlt2"),
      default: "/images/backgrounds/kitchen2-768.webp",
      sources: [
        "/images/backgrounds/kitchen2-400.webp 500w",
        "/images/backgrounds/kitchen2-768.webp 768w",
        "/images/backgrounds/kitchen2-1200.webp 1200w",
      ],
    },
    {
      name: "outside2",
      alt: t("imageAlt3"),
      default: "/images/gallery/outside2-768.webp",
      sources: [
        "/images/gallery/outside2-400.webp 500w",
        "/images/gallery/outside2-768.webp 768w",
        "/images/gallery/outside2-1200.webp 1200w",
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.terms}>
      <SEO
        titleKey="pageTitle"
        descriptionKey="pageDescription"
        path={`${baseRoute}/terms-and-conditions`}
      />

      <motion.div
        className={styles.terms__header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.terms__title}>{t("title")}</h1>
        <p className={styles.terms__intro}>{t("intro")}</p>
      </motion.div>

      <motion.div
        className={clsx(styles.terms__section, styles["terms__section--cancellation"])}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className={styles["terms__section-title"]}>{t("cancellationTitle")}</h2>
        <p className={styles["terms__cancellation-text"]}>{t("cancellationText")}</p>
      </motion.div>

      <div className={styles.terms__section}>
        <h2 className={styles["terms__section-title"]}>{t("houseRulesTitle")}</h2>
        <motion.ul
          className={styles["terms__rules-list"]}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {Array.from({ length: 11 }, (_, i) => i + 1).map((num) => (
            <motion.li
              key={num}
              className={styles["terms__rule-item"]}
              variants={itemVariants}
            >
              <span className={styles["terms__rule-number"]}>
                {num.toString().padStart(2, "0")}
              </span>
              <div className={styles["terms__rule-content"]}>
                <p>{t(`rule${num}`)}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        className={styles.terms__closing}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>{t("closing")}</p>
      </motion.div>

      <motion.div
        className={styles["terms__image-container"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {images.map((img, idx) => (
          <motion.div
            className={styles["terms__image-wrapper"]}
            key={idx}
            variants={itemVariants}
          >
            <img
              src={img.default}
              srcSet={img.sources.join(", ")}
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
              className={styles["terms__image"]}
              alt={img.alt}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
