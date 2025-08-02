import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

export const Faq = () => {
  const { t } = useTranslation("translation", { keyPrefix: "faq" });
  const accordionFaq = [
    {
      trigger: t("question1"),
      content: t("answer1"),
      value: "trigger-1",
    },
    {
      trigger: t("question2"),
      content: t("answer2"),
      value: "trigger-2",
    },
    {
      trigger: t("question3"),
      content: t("answer3"),
      value: "trigger-3",
    },
  ];
  return (
    <Accordion type="multiple" className={styles.accordion}>
      {accordionFaq.map((faq) => (
        <AccordionItem
          key={faq.value}
          value={faq.value}
          className={styles.accordion__item}
        >
          <AccordionTrigger className={styles.accordion__trigger}>
            {faq.trigger}
          </AccordionTrigger>
          <AccordionContent className={styles.accordion__content}>
            {faq.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
