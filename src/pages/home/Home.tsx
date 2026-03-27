import { Book } from "@/components/book/Index";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { WhatWeOffer } from "@/components/whatweoffer";
import { useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { Amenities } from "@/components/amenities";
import { motion } from "framer-motion";

export const Home = () => {
  const { lang } = useParams();
  const baseRoute = lang ? `/${lang}` : "";

  return (
    <>
      <SEO
        titleKey="seo.homeTitle"
        descriptionKey="seo.homeDescription"
        path={`${baseRoute}`}
      />

      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <WhatWeOffer />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Amenities />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Faq />
      </motion.div>
      <Book />
    </>
  );
};
