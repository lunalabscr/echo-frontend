import clsx from "clsx";
import styles from "./index.module.scss";
export const Gallery = () => {
  const galleryList = [
    {
      src: "/images/IMG_3185.webp",
      alt: "Villa main bedroom",
      className: styles["gallery__picture"],
    },
    {
      src: "/images/IMG_3172.webp",
      alt: "Villa kitchen",
      className: styles["gallery__picture"],
    },
    {
      src: "/images/IMG_3161.webp",
      alt: "Villa living room",
      className: styles["gallery__picture"],
    },
    {
      src: "/images/IMG_3336.webp",
      alt: "Villa outside view",
      className: styles["gallery__picture"],
    },
  ];
  return (
    <section className={styles.gallery}>
      <h1 className={styles.gallery__h1}>Arenal Volcanic Villas</h1>
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
        {galleryList.map((item, index) => (
          <div key={index} className={styles["gallery__picture-wrapper"]}>
            <img
              src={item.src}
              alt={item.alt}
              className={clsx(item.className)}
            />
          </div>
        ))}
      </div>

      <p className={styles.gallery__text}>
        See every detail of our villa and its breathtaking surroundings.
      </p>
      <p className={styles.gallery__subtext}>
        From sparkling pools to terrace sunsets, let each image inspire your
        next stay.
      </p>
    </section>
  );
};
