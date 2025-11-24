"use client";
import { Header } from "../src/components/header";
import { ShoppingCart } from "../src/components/shopping-cart";
import { Footer } from "../src/components/footer";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ShoppingCart />
      <Footer />
    </main>
  );
}