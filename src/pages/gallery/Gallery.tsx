import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import useFancybox from "@/hooks/useFancybox";
import type { Image } from "@/types/Image";
import SEO from "@/components/SEO";
import { useParams } from "react-router-dom";
import { galleryNotDisplayed } from "@/constants/gallery";

export const Gallery = () => {
  const { lang } = useParams();
  const { t } = useTranslation("translation", { keyPrefix: "gallery" });
  const [ref] = useFancybox();
  const baseRoute = lang ? `/${lang}` : "";

  const galleryList: Image[] = [
    {
      src: "/images/mainbedroom-768.webp",
      alt: "Villa main bedroom",
      className: styles["gallery__picture"],
      mobileSrc: "/images/mainbedroom-400.webp",
      desktopSrc: "/images/mainbedroom-1200.webp",
      tabletSrc: "/images/mainbedroom-768.webp",
    },
    {
      src: "/images/kitchen-768.webp",
      alt: "Villa kitchen",
      className: styles["gallery__picture"],
      mobileSrc: "/images/kitchen-400.webp",
      desktopSrc: "/images/kitchen-1200.webp",
      tabletSrc: "/images/kitchen-768.webp",
    },
    {
      src: "/images/livingroom-768.webp",
      alt: "Villa living room",
      className: styles["gallery__picture"],
      mobileSrc: "/images/livingroom-400.webp",
      desktopSrc: "/images/livingroom-1200.webp",
      tabletSrc: "/images/livingroom-768.webp",
    },
    {
      src: "/images/outside-768.webp",
      alt: "Villa outside view",
      className: styles["gallery__picture"],
      mobileSrc: "/images/outside-400.webp",
      desktopSrc: "/images/outside-1200.webp",
      tabletSrc: "/images/outside-768.webp",
    },
  ];

  return (
    <>
      <SEO
        titleKey="seo.galleryTitle"
        descriptionKey="seo.galleryDescription"
        path={`${baseRoute}/gallery`}
      />
      <section ref={ref} className={styles.gallery}>
        <h1 className={styles.gallery__h1}>Arenal Volcanic Villas</h1>
        <p className={styles.gallery__title}>{t("title")}</p>
        <p className={styles.gallery__subtitle}>{t("subtitle")}</p>
        <div className={styles["gallery__main-picture-wrapper"]}>
          <img
            data-fancybox="gallery"
            className={styles["gallery__main-picture"]}
            src="/images/drone4-1200.webp"
            srcSet={`/images/drone4-400.webp 500w, /images/drone4-768.webp 768w, /images/drone4-1200.webp 1200w`}
            sizes="(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px"
            alt="Villa above view"
          />
        </div>
        <p className={styles.gallery__subtext}>{t("click-tosee")}</p>
        <div className={styles["gallery__grid-gallery"]}>
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
                <img src={item.src} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>

        <p className={styles.gallery__text}>{t("text")}</p>
        <p className={styles.gallery__subtext}>{t("subtext")}</p>
      </section>
    </>
  );
};
