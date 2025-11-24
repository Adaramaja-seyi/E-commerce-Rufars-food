import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { FeaturedProducts } from "./components/featured-products";
import { BenefitsSection } from "./components/benefits-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProducts />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
