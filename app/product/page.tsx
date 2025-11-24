import { Header } from "../src/components/header";
import { ProductDetail } from "../src/components/product-detail";
import { Footer } from "..src/components/footer";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductDetail productId={params.id} />
      <Footer />
    </main>
  );
}
