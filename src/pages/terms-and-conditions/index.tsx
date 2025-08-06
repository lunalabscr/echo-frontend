import SEO from "@/components/SEO";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
export const TermsAndConditions = () => {
  const { lang } = useParams();
  return (
    <section className={styles.terms}>
      <SEO
        titleKey=""
        descriptionKey=""
        path={`/${lang}/terms-and-conditions`}
      />
    </section>
  );
};
