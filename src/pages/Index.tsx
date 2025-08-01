import SEO from "@/components/SEO";

import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Header } from "@components/header";

export const Index = () => {
  return (
    <>
      <SEO
        title="Arenal Volcanic Villas | La Fortuna's Hidden Paradise"
        description="Book your stay at Arenal Volcanic Villas — relax in nature near the majestic Arenal Volcano. Peace, comfort, and unforgettable views."
      />
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};
