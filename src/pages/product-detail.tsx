import { useParams } from "react-router-dom";
import { ProductDetail as ProductDetailComponent } from "../components/product-detail";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetailComponent productId={id || ""} />
      </div>
    </div>
  );
}

