import { Checkout as CheckoutComponent } from "../components/checkout";

export default function Checkout() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Checkout
          </h1>
        </div>
        <CheckoutComponent />
      </div>
    </div>
  );
}

