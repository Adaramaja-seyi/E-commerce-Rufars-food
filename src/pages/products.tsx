import { ProductListing } from "../components/product-listing";

export default function Products() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Superfood Collection
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our premium range of dried fruits, nuts, and seeds
          </p>
        </div>
        <ProductListing />
      </div>
    </div>
  );
}

