import { Hero } from "../components/hero";
import { FeaturedProducts } from "../components/featured-products";
import { BenefitsSection } from "../components/benefits-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BenefitsSection />
    </>
  );
}

