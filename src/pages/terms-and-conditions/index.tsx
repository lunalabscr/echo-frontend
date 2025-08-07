import SEO from "@/components/SEO";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
export const TermsAndConditions = () => {
  const { lang } = useParams();
  const baseRoute = lang ? `/${lang}` : "";

  return (
    <section className={styles.terms}>
      <SEO
        titleKey=""
        descriptionKey=""
        path={`${baseRoute}/terms-and-conditions`}
      />
    </section>
  );
};
