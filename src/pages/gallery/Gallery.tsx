import styles from "./index.module.scss";
export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <p className={styles.gallery__title}>Stunning Villa Views.</p>
      <p className={styles.gallery__subtitle}>Browse amenities & landscapes.</p>

      <img
        className={styles["gallery__main-picture"]}
        src="https://placehold.co/600x400"
        alt=""
      />

      <div className={styles["gallery__grid-gallery"]}>
        <img
          src="https://placehold.co/200x200"
          className={styles.gallery__picture}
        />
        <img
          src="https://placehold.co/200x200"
          className={styles.gallery__picture}
        />
        <img
          src="https://placehold.co/200x200"
          className={styles.gallery__picture}
        />
        <img
          src="https://placehold.co/200x200"
          className={styles.gallery__picture}
        />
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
