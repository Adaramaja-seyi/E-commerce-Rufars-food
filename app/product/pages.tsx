import { Header } from "../src/components/header";
import { ProductListing } from "../src/components/product-listing";
import { Footer } from "../src/components/footer";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductListing />
      <Footer />
    </main>
  );
}
