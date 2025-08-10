import { useTranslation } from "react-i18next";
import {
  Wifi,
  BedDouble,
  Bath,
  Tv,
  Snowflake,
  Car,
  PawPrint,
  CookingPot,
  WashingMachine,
  UtensilsCrossed,
} from "lucide-react";
import styles from "./Amenities.module.scss";

export const Amenities = () => {
  const { t } = useTranslation();

  const amenities = [
    { icon: Wifi, label: t("amenities.wifi") },
    { icon: BedDouble, label: t("amenities.bedrooms") },
    { icon: Bath, label: t("amenities.bathrooms") },
    { icon: Tv, label: t("amenities.tv") },
    { icon: Snowflake, label: t("amenities.ac") },
    { icon: Car, label: t("amenities.parking") },
    { icon: PawPrint, label: t("amenities.petFriendly") },
    { icon: CookingPot, label: t("amenities.bbq") },
    { icon: WashingMachine, label: t("amenities.washerDryer") },
    { icon: UtensilsCrossed, label: t("amenities.kitchen") },
  ];

  return (
    <section className={styles.amenities}>
      <h2 className={styles.title}>{t("amenities.title")}</h2>
      <div className={styles.grid}>
        {amenities.map(({ icon: Icon, label }, idx) => (
          <div className={styles.item} key={idx}>
            <Icon size={28} strokeWidth={1.8} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
