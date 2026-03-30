import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import useFancybox from "@/hooks/useFancybox";

import SEO from "@/components/SEO";
import { useParams } from "react-router-dom";
import { galleryImages } from "@/constants/gallery";

export const Gallery = () => {
  const { lang } = useParams();
  const { t } = useTranslation("translation", { keyPrefix: "gallery" });
  const [ref] = useFancybox();
  const baseRoute = lang ? `/${lang}` : "";



  return (
    <>
      <SEO
        titleKey="seo.galleryTitle"
        descriptionKey="seo.galleryDescription"
        path={`${baseRoute}/gallery`}
      />
      <section ref={ref} className={styles.gallery}>
        <h1 className={styles.gallery__h1}>Arenal Volcanic Villas</h1>
        <h2 className={styles.gallery__title}>{t("title")}</h2>
        <p className={styles.gallery__subtitle}>{t("subtitle")}</p>
        <div className={styles["gallery__main-picture-wrapper"]}>
          <img
            data-fancybox="gallery"
            className={styles["gallery__main-picture"]}
            src="/images/gallery/drone4-1200.webp"
            srcSet={`/images/gallery/drone4-400.webp 500w, /images/gallery/drone4-768.webp 768w, /images/gallery/drone4-1200.webp 1200w`}
            sizes="(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px"
            alt="Aerial view of Arenal Volcanic Villas, showcasing the lush property grounds and surrounding landscape"
          />
        </div>
        <p className={styles.gallery__subtext}>{t("click-tosee")}</p>
        <div className={styles["gallery__grid-gallery"]}>
          {galleryImages.slice(0, 4).map((item, index) => (
            <a
              data-fancybox="gallery"
              key={`visible-${index}`}
              href={item.desktopSrc}
              className={styles["gallery__picture-wrapper"]}
            >
              <img
                srcSet={`${item.mobileSrc} 500w, ${item.tabletSrc} 768w, ${item.desktopSrc} 1200w`}
                sizes="(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px"
                src={item.tabletSrc}
                alt={item.alt}
                className={clsx(styles["gallery__picture"], item.className)}
                loading="lazy"
              />
            </a>
          ))}
          <div style={{ display: "none" }}>
            {galleryImages.slice(4).map((item, index) => (
              <a key={`hidden-${index}`} data-fancybox="gallery" href={item.desktopSrc}>
                <img src={item.tabletSrc} alt={item.alt} />
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
