import clsx from "clsx";
import styles from "./index.module.scss";
export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <p className={styles.gallery__title}>Stunning Villa Views.</p>
      <p className={styles.gallery__subtitle}>Browse amenities & landscapes.</p>
      <div className={styles["gallery__main-picture-wrapper"]}>
        <img
          className={styles["gallery__main-picture"]}
          src="https://placehold.co/600x400"
          alt=""
        />
      </div>

      <div className={styles["gallery__grid-gallery"]}>
        <div className={styles["gallery__picture-wrapper"]}>
          <img
            src="/images/IMG_3185.webp"
            className={clsx(styles["gallery__picture"])}
          />
        </div>
        <div className={styles["gallery__picture-wrapper"]}>
          <img
            src="/images/IMG_3172.webp"
            className={clsx(styles["gallery__picture"])}
          />
        </div>
        <div className={styles["gallery__picture-wrapper"]}>
          <img
            src="/images/IMG_3161.webp"
            className={clsx(styles["gallery__picture"])}
          />
        </div>

        <div className={styles["gallery__picture-wrapper"]}>
          <img
            src="/images/IMG_3336.webp"
            className={clsx(styles["gallery__picture"])}
          />
        </div>
      </div>

      <p className={styles.gallery__text}>
        See every detail of our villa and its breathtaking surroundings.
      </p>
      <p className={styles.gallery__subtext}>
        From sparkling pools to terrace sunsets, let each image inspire your
        next stay.
      </p>
    </div>
  );
};
