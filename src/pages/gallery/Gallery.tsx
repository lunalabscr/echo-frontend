import clsx from "clsx";
import styles from "./index.module.scss";
import useFancybox from "@/hooks/useFancyBox";
import { useTranslation } from "react-i18next";
export const Gallery = () => {
  const { t } = useTranslation("translation", { keyPrefix: "gallery" });
  const [ref] = useFancybox();
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

  const galleryNotDisplayed = [
    {
      src: "/images/IMG_3145.webp",
      alt: "Volcano views from the villa",
    },
    {
      src: "/images/IMG_3171.webp",
      alt: "Villa living room",
    },
    {
      src: "/images/IMG_3181.webp",
      alt: "Villa main bedroom",
    },
    {
      src: "/images/IMG_3319.webp",
      alt: "Villa outside view to the porch",
    },
    {
      src: "/images/IMG_3340.webp",
      alt: "Villa entrance",
    },
    {
      src: "/images/IMG_3346.webp",
      alt: "Villa bathroom",
    },
  ];
  return (
    <section className={styles.gallery}>
      <h1 className={styles.gallery__h1}>Arenal Volcanic Villas</h1>
      <p className={styles.gallery__title}>{t("title")}</p>
      <p className={styles.gallery__subtitle}>{t("subtitle")}</p>
      <div className={styles["gallery__main-picture-wrapper"]}>
        <img
          className={styles["gallery__main-picture"]}
          src="https://placehold.co/600x400"
          alt=""
        />
      </div>
      <p className={styles.gallery__subtext}>{t("click-tosee")}</p>
      <div ref={ref} className={styles["gallery__grid-gallery"]}>
        {galleryList.map((item, index) => (
          <a
            data-fancybox="gallery"
            key={index}
            href={item.src}
            className={styles["gallery__picture-wrapper"]}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={clsx(item.className)}
            />
          </a>
        ))}
        <div style={{ display: "none" }}>
          {galleryNotDisplayed.map((item) => (
            <a key={item.src} data-fancybox="gallery" href={item.src}>
              <img src={item.src} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>

      <p className={styles.gallery__text}>{t("text")}</p>
      <p className={styles.gallery__subtext}>{t("subtext")}</p>
    </section>
  );
};
