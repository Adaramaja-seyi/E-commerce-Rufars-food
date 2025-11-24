import { Header } from "../src/components/header";
import { Checkout } from "../src/components/checkout";
import { Footer } from "..src/components/footer";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Checkout />
      <Footer />
    </main>
  );
}
