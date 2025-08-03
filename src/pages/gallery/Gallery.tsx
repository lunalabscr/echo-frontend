import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import useFancybox from "@/hooks/useFancybox";
import type { Image } from "@/types/Image";

export const Gallery = () => {
  const { t } = useTranslation("translation", { keyPrefix: "gallery" });
  const [ref] = useFancybox();
  const galleryList: Image[] = [
    {
      src: "/images/IMG_3185.webp",
      alt: "Villa main bedroom",
      className: styles["gallery__picture"],
      mobileSrc: "/images/IMG_3185-400.webp", // Optional mobile image
      desktopSrc: "/images/IMG_3185-1200.webp", // Optional desktop image
      tabletSrc: "/images/IMG_3185-768.webp", // Optional tablet image
    },
    {
      src: "/images/IMG_3172.webp",
      alt: "Villa kitchen",
      className: styles["gallery__picture"],
      mobileSrc: "/images/IMG_3172-400.webp", // Optional mobile image
      desktopSrc: "/images/IMG_3172-1200.webp", // Optional desktop image
      tabletSrc: "/images/IMG_3172-768.webp", // Optional tablet image
    },
    {
      src: "/images/IMG_3161.webp",
      alt: "Villa living room",
      className: styles["gallery__picture"],
      mobileSrc: "/images/IMG_3161-400.webp", // Optional mobile image
      desktopSrc: "/images/IMG_3161-1200.webp", // Optional desktop image
      tabletSrc: "/images/IMG_3161-768.webp", // Optional tablet image
    },
    {
      src: "/images/IMG_3336.webp",
      alt: "Villa outside view",
      className: styles["gallery__picture"],
      mobileSrc: "/images/IMG_3336-400.webp", // Optional mobile image
      desktopSrc: "/images/IMG_3336-1200.webp", // Optional desktop image
      tabletSrc: "/images/IMG_3336-768.webp", // Optional tablet image
    },
  ];

  const galleryNotDisplayed: Image[] = [
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
              srcSet={`${item.mobileSrc} 500w, ${item.tabletSrc} 768w, ${item.desktopSrc} 1200w`}
              sizes="(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px"
              src={item.tabletSrc}
              alt={item.alt}
              className={clsx(item.className)}
            />
          </a>
        ))}
        <div style={{ display: "none" }}>
          {galleryNotDisplayed.map((item) => (
            <a key={item.src} data-fancybox="gallery" href={item.src}>
              <img
                src={item.src}
                alt={item.alt}
                // srcSet={`${item.mobileSrc} 500w, ${item.tabletSrc} 768w, ${item.desktopSrc} 1200w`}
                // sizes="(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px"
              />
            </a>
          ))}
        </div>
      </div>

      <p className={styles.gallery__text}>{t("text")}</p>
      <p className={styles.gallery__subtext}>{t("subtext")}</p>
    </section>
  );
};
