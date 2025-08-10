import { useTranslation } from "react-i18next";

import styles from "./Amenities.module.scss";
import { amenities } from "@/constants/amentities";

export const Amenities = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.amenities}>
      <h2 className={styles.title}>{t("amenities.title")}</h2>
      <div className={styles.grid}>
        {amenities.map(({ icon: Icon, label }, idx) => (
          <div className={styles.item} key={idx}>
            <Icon size={28} strokeWidth={1.8} />
            <span>{t(label)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
