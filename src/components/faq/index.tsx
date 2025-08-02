import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import styles from "./index.module.scss";

export const Faq = () => {
  const accordionFaq = [
    {
      trigger: "How close are you to the Arenal Volcano?",
      content: "Yes, we are super close to the volcano",
      value: "trigger-1",
    },
    {
      trigger: "Is there on-site parking?",
      content: "Yes, there is on-site parking for small and big vehicules",
      value: "trigger-2",
    },
    {
      trigger: "Are local tours and activities available?",
      content:
        "We are located in the heart of La Fortuna, you'll have plenty of nearby activities",
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
