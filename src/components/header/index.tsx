import clsx from "clsx";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { SITE_CONFIG } from "@/constants/site";
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

export const Header = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "header",
  });
  const { t: info } = useTranslation("translation", {
    keyPrefix: "info",
  });

  const navigate = useNavigate();

  const phone = import.meta.env.VITE_WHATSAPP_PHONE || "";
  const message = encodeURIComponent(info("wa-text"));
  const { lang } = useParams();
  const location = useLocation();
  const baseRoute = lang ? `/${lang}` : "";

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLangDisplay = lang || SITE_CONFIG.defaultLang;

  const handleLanguageChange = (lng: string) => {
    setIsLangOpen(false);

    const currentLangPattern = new RegExp(
      `^\\/(${SITE_CONFIG.supportedLangs.join("|")})(\\/|$)`,
    );
    const isLangInPath = currentLangPattern.test(location.pathname);

    if (isLangInPath) {
      if (lng === SITE_CONFIG.defaultLang) {
        // Going to default lang, just remove the language from path
        navigate(location.pathname.replace(currentLangPattern, "/"));
      } else {
        // Replace current language with new language
        navigate(location.pathname.replace(currentLangPattern, `/${lng}$2`));
      }
    } else {
      if (lng !== SITE_CONFIG.defaultLang) {
        // Add new language prefix
        navigate(
          `/${lng}${location.pathname === "/" ? "" : location.pathname}`,
        );
      }
    }
  };

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleHomeClick = (section: string) => {
    setIsMobileOpen(false);
    if (
      location.pathname.includes("/gallery") ||
      location.pathname.includes("/terms-and-conditions") ||
      location.pathname.includes("/return-policy")
    ) {
      navigate(`${baseRoute}/`);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={styles.header}>
      <nav className={styles.header__items}>
        {/* Left Side: Desktop Links */}
        <div className={styles.header__left}>
          <div className={styles["header__desktop-items-group"]}>
            <div className={styles["header__item-wrapper"]}>
              <a
                href="#home"
                className={styles.header__item}
                onClick={() => handleHomeClick("home")}
              >
                {t("home")}
              </a>
              <a
                href="#about"
                className={styles.header__item}
                onClick={() => handleHomeClick("about")}
              >
                {t("about")}
              </a>
            </div>
          </div>
        </div>

        {/* Center Side: Logo */}
        <div className={styles.header__center}>
          <Link className={styles["header__logo"]} to="/">
            <img
              src="/images/logos/AVV-01.png"
              alt="Arenal Volcanic Villas logo"
            />
          </Link>
        </div>

        {/* Right Side: Options & Mobile Menu */}
        <div className={styles.header__right}>
          <div className={styles["header__item-wrapper"]}>
            <Link
              to={`${baseRoute}/gallery`}
              className={clsx(
                styles.header__item,
                styles["header__large-item"],
              )}
            >
              {t("gallery")}
            </Link>
            <a
              onClick={handleClick}
              className={clsx(
                styles.header__item,
                styles["header__large-item"],
              )}
              href="#book"
            >
              {t("book-now")}
            </a>

            <div className={styles.header__lang_switcher} ref={langRef}>
              <button
                className={styles.header__lang_toggle}
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <Globe size={18} />
                <span>{currentLangDisplay.toUpperCase()}</span>
                <ChevronDown
                  size={14}
                  className={clsx(styles.header__lang_icon, {
                    [styles["header__lang_icon--open"]]: isLangOpen,
                  })}
                />
              </button>

              {isLangOpen && (
                <div className={styles.header__lang_menu}>
                  {SITE_CONFIG.supportedLangs.map((l) => {
                    const isActive =
                      lang === l || (l === SITE_CONFIG.defaultLang && !lang);
                    return (
                      <button
                        key={l}
                        className={clsx(styles.header__lang_menu_btn, {
                          [styles["header__lang_menu_btn--active"]]: isActive,
                        })}
                        onClick={() => handleLanguageChange(l)}
                      >
                        {l.toUpperCase()}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className={styles["header__mobile-btn"]}>
              <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
                {isMobileOpen ? (
                  <X size={28} color="black" />
                ) : (
                  <Menu size={28} color="black" />
                )}
              </button>
            </div>

            <div
              className={clsx(styles["header__mobile-overlay"], {
                [styles["header__mobile-overlay--open"]]: isMobileOpen,
              })}
            >
              <div className={styles["header__mobile-menu"]}>
                <a
                  href="#about"
                  className={styles.header__item}
                  onClick={() => handleHomeClick("about")}
                >
                  {t("about")}
                </a>
                <Link
                  to={`${baseRoute}/gallery`}
                  className={styles.header__item}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {t("gallery")}
                </Link>
                <a
                  onClick={() => {
                    handleClick();
                    setIsMobileOpen(false);
                  }}
                  className={styles.header__item}
                  href="#book"
                >
                  {t("book-now")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
  // ...
};
