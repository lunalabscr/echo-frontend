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
      image: "https://placehold.co/400x400",
    },
    {
      id: "offer-2",
      title: t("modern-comfort"),
      subtitle: t("modern-comfort-desc"),
      image: "https://placehold.co/400x400",
    },
    {
      id: "offer-3",
      title: t("adv-door"),
      subtitle: t("adv-door-desc"),
      image: "https://placehold.co/400x400",
    },
  ];

  return (
    <section className={styles.offers} id="about">
      {whatWeOffer.map((offer) => (
        <article key={offer.id} className={styles.offers__grid}>
          <div
            className={clsx({
              [styles["offers__order"]]: offer.id == "offer-2",
            })}
          >
            <img className={styles["offers__image"]} src={offer.image} />
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
