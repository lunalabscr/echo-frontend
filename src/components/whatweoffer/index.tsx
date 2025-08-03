import type { Offer } from "@/types/Offer";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export const WhatWeOffer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "whatweoffer" });
  const whatWeOffer: Offer[] = [
    {
      id: "offer-1",
      title: t("volcano-views"),
      subtitle: t("volcano-views-desc"),
      image: "/images/IMG_3145.webp",
    },
    {
      id: "offer-2",
      title: t("modern-comfort"),
      subtitle: t("modern-comfort-desc"),
      image: "/images/IMG_3161.webp",
    },
    {
      id: "offer-3",
      title: t("adv-door"),
      subtitle: t("adv-door-desc"),
      image: "/images/IMG_3319.webp",
    },
  ];

  return (
    <section className={styles.offers} id="about">
      {whatWeOffer.map((offer, index) => (
        <article key={offer.id} className={styles.offers__grid}>
          <div
            className={clsx(styles["offers__image-wrapper"], {
              [styles["offers__order"]]: index % 2 == 0,
            })}
          >
            <img
              alt={`${offer.title} image`}
              className={styles["offers__image"]}
              src={offer.image}
            />
          </div>
          <div>
            <p className={styles.offers__text}>{offer.title}</p>
            <p className={styles.offers__subtitle}>{offer.subtitle}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
