import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Product } from '../../types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
    setShowQuantity(false);
  };

  const isOutOfStock = product.stock === 0;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {isOutOfStock && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            Out of Stock
          </Badge>
        )}
        {!isOutOfStock && product.stock < 10 && (
          <Badge variant="secondary" className="absolute top-2 right-2">
            Low Stock
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-gray-900">${product.price.toFixed(2)}</p>
            <p className="text-xs text-gray-500">{product.weight}</p>
          </div>
          <Badge variant="outline" className="text-xs">
            {product.stock} in stock
          </Badge>
        </div>
        
        {!showQuantity ? (
          <Button 
            onClick={() => setShowQuantity(true)}
            disabled={isOutOfStock}
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-9 w-9"
              >
                <Minus size={16} />
              </Button>
              <div className="flex-1 text-center">
                <span className="text-gray-900">{quantity}</span>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="h-9 w-9"
              >
                <Plus size={16} />
              </Button>
            </div>
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              Add {quantity} to Cart
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
