import SEO from "@/components/SEO";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

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
      default: "/images/drone-768.webp",
      sources: [
        "/images/drone-400.webp 500w",
        "/images/drone-768.webp 768w",
        "/images/drone-1200.webp 1200w",
      ],
    },
    {
      name: "kitchen2",
      alt: t("imageAlt2"),
      default: "/images/kitchen2-1200.webp",
      sources: [
        "/images/kitchen2-400.webp 500w",
        "/images/kitchen2-768.webp 768w",
        "/images/kitchen2-1200.webp 1200w",
      ],
    },
    {
      name: "outside2",
      alt: t("imageAlt3"),
      default: "/images/outside2-768.webp",
      sources: [
        "/images/outside2-400.webp 500w",
        "/images/outside2-768.webp 768w",
        "/images/outside2-1200.webp 1200w",
      ],
    },
  ];

  return (
    <section className={styles.terms}>
      <SEO
        titleKey="pageTitle"
        descriptionKey="pageDescription"
        path={`${baseRoute}/terms-and-conditions`}
      />
      <p className={styles["terms__terms-text"]}>{t("title")}</p>
      <div className={styles["terms__text"]}>
        <p>{t("intro")}</p>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <li key={num}>
              <Check className={styles["terms__icon"]} size={24} />
              <p className={styles["terms__rule"]}>{t(`rule${num}`)}</p>
            </li>
          ))}
        </ul>
        <p>{t("closing")} </p>
      </div>

      <div className={styles["terms__image-container"]}>
        {images.map((img, idx) => (
          <div className={styles["terms__image-wrapper"]} key={idx}>
            <img
              src={img.default}
              srcSet={img.sources.join(", ")}
              sizes="(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px"
              className={styles["terms__image"]}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
