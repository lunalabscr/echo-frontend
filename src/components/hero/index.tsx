import styles from "./index.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <article className={styles.hero__text}>
        <p className={styles.hero__title}>Stay Near Arenal.</p>
        <p className={styles.hero__subtitle}>
          Your Costa Rican escape in La Fortuna.
        </p>
      </article>
    </section>
  );
};
