import clsx from "clsx";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__items}>
        <div className={styles["header__item-wrapper"]}>
          <a className={styles.header__item} href="#home">
            Home
          </a>
          <a
            className={clsx(styles.header__item, styles["header__large-item"])}
            href="#about"
          >
            About
          </a>
        </div>
        <a href="#home">AVV</a>
        <div className={styles["header__item-wrapper"]}>
          <a
            className={clsx(styles.header__item, styles["header__large-item"])}
            href="#gallery"
          >
            Gallery
          </a>
          <a className={styles.header__item} href="#book">
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
};
