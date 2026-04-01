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

  const villaImages = galleryImages.filter(
    (img) => !img.src.includes("cancha") && !img.src.includes("pickle"),
  );
  const courtImages = galleryImages.filter(
    (img) => img.src.includes("cancha") || img.src.includes("pickle"),
  );

  const courtMainPic = "/images/gallery/pickle-court.jpeg";

  return (
    <>
      <SEO
        titleKey="seo.galleryTitle"
        descriptionKey="seo.galleryDescription"
        path={`${baseRoute}/gallery`}
      />
      <section ref={ref} className={styles.gallery}>
        <h1 className={styles.gallery__h1}>Arenal Volcanic Villas</h1>

        {/* Villa Carousel */}
        <h2 className={styles.gallery__title}>
          {t("title", "Stunning Villa Views.")}
        </h2>
        <p className={styles.gallery__subtitle}>
          {t("subtitle", "Browse amenities & landscapes.")}
        </p>
        <div className={styles["gallery__main-picture-wrapper"]}>
          <img
            data-fancybox="villa-gallery"
            className={styles["gallery__main-picture"]}
            src="/images/gallery/villa-front.jpeg"
            srcSet={`/images/gallery/villa-front.jpeg 500w, /images/gallery/villa-front.jpeg 768w, /images/gallery/villa-front.jpeg 1200w`}
            sizes="(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px"
            alt="Aerial view of Arenal Volcanic Villas, showcasing the lush property grounds and surrounding landscape"
          />
        </div>
        <p className={styles.gallery__subtext}>
          {t("click-tosee", "Click to see more images")}
        </p>
        <div className={styles["gallery__grid-gallery"]}>
          {villaImages.slice(0, 4).map((item, index) => (
            <a
              data-fancybox="villa-gallery"
              key={`visible-villa-${index}`}
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
            {villaImages.slice(4).map((item, index) => (
              <a
                key={`hidden-villa-${index}`}
                data-fancybox="villa-gallery"
                href={item.desktopSrc}
              >
                <img src={item.tabletSrc} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>

        {/* Pickleball Court Carousel */}
        <h2 className={styles.gallery__title}>
          {t("pickleballTitle", "Pickleball Court")}
        </h2>
        <p className={styles.gallery__subtitle}>
          {t("pickleballSubtitle", "Enjoy our private courts.")}
        </p>
        <div className={styles["gallery__main-picture-wrapper"]}>
          <img
            data-fancybox="court-gallery"
            className={styles["gallery__main-picture"]}
            src={courtMainPic}
            srcSet={`${courtMainPic} 500w, ${courtMainPic} 768w, ${courtMainPic} 1200w`}
            sizes="(max-width: 767px) 50vw, (max-width: 1199px) 100vw, 1200px"
            alt="Pickleball court of Arenal Volcanic Villas"
            loading="lazy"
          />
        </div>
        <p className={styles.gallery__subtext}>
          {t("click-tosee", "Click to see more images")}
        </p>
        <div className={styles["gallery__grid-gallery"]}>
          {courtImages.slice(0, 4).map((item, index) => (
            <a
              data-fancybox="court-gallery"
              key={`visible-court-${index}`}
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
            {courtImages.slice(4).map((item, index) => (
              <a
                key={`hidden-court-${index}`}
                data-fancybox="court-gallery"
                href={item.desktopSrc}
              >
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
