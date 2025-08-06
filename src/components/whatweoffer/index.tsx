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
      mobileImage: "/images/IMG_3145-400.webp", // Optional mobile-specific image
      desktopImage: "/images/IMG_3145-1200.webp", // Optional desktop-specific image
      tabletImage: "/images/IMG_3145-768.webp", // Optional tablet-specific image
    },
    {
      id: "offer-2",
      title: t("modern-comfort"),
      subtitle: t("modern-comfort-desc"),
      image: "/images/moderncomfort-768.webp",
      mobileImage: "/images/moderncomfort-400.webp", // Optional mobile-specific image
      desktopImage: "/images/moderncomfort-1200.webp", // Optional desktop-specific image
      tabletImage: "/images/moderncomfort-768.webp", // Optional tablet-specific image
    },
    {
      id: "offer-3",
      title: t("adv-door"),
      subtitle: t("adv-door-desc"),
      image: "/images/IMG_3319-768.webp",
      mobileImage: "/images/IMG_3319-400.webp", // Optional mobile-specific image
      desktopImage: "/images/IMG_3319-1200.webp", // Optional desktop-specific image
      tabletImage: "/images/IMG_3319-768.webp", // Optional tablet-specific image
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
              srcSet={`${offer.mobileImage} 500w, ${offer.tabletImage} 768w, ${offer.desktopImage} 1200w`}
              sizes="(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px"
              alt={`${offer.title} image`}
              className={styles["offers__image"]}
              src={offer.tabletImage}
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
