import { useState } from 'react';
import { StorefrontHeader } from './storefront/StorefrontHeader';
import { CategoryNav } from './storefront/CategoryNav';
import { HeroBanner } from './storefront/HeroBanner';
import { ProductCard } from './storefront/ProductCard';
import { CartDrawer } from './storefront/CartDrawer';
import { CheckoutForm } from './storefront/CheckoutForm';
import { OrderConfirmation } from './storefront/OrderConfirmation';
import { Product } from '../types';
import { CartItem } from '../types/cart';
import { toast } from 'sonner@2.0.3';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from './ui/sheet';
import { Button } from './ui/button';
import { Settings } from 'lucide-react';

interface StorefrontProps {
  products: Product[];
  onSwitchToAdmin: () => void;
}

type CheckoutStep = 'shopping' | 'checkout' | 'confirmed';

export function Storefront({ products, onSwitchToAdmin }: StorefrontProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('shopping');
  const [orderNumber, setOrderNumber] = useState('');

  const filteredProducts = products.filter((product) => 
    product.status === 'active' && 
    (selectedCategory === 'all' || product.category === selectedCategory)
  );

  const handleAddToCart = (product: Product, quantity: number) => {
    const existingItem = cartItems.find((item) => item.productId === product.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      const newItem: CartItem = {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
        weight: product.weight,
      };
      setCartItems([...cartItems, newItem]);
    }
    
    toast.success(`${product.name} added to cart!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId));
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCheckoutStep('checkout');
  };

  const handleOrderComplete = (orderData: any) => {
    const newOrderNumber = `ORD-${Date.now()}`;
    setOrderNumber(newOrderNumber);
    setCartItems([]);
    setCheckoutStep('confirmed');
    toast.success('Order placed successfully!');
  };

  const handleContinueShopping = () => {
    setCheckoutStep('shopping');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (checkoutStep === 'checkout') {
    return (
      <>
        <StorefrontHeader 
          cartItemsCount={totalItems}
          onCartClick={() => setCheckoutStep('shopping')}
          onMenuClick={() => setIsMenuOpen(true)}
        />
        <CheckoutForm 
          items={cartItems}
          onBack={() => setCheckoutStep('shopping')}
          onComplete={handleOrderComplete}
        />
      </>
    );
  }

  if (checkoutStep === 'confirmed') {
    return (
      <>
        <StorefrontHeader 
          cartItemsCount={0}
          onCartClick={() => {}}
          onMenuClick={() => setIsMenuOpen(true)}
        />
        <OrderConfirmation 
          orderNumber={orderNumber}
          onContinueShopping={handleContinueShopping}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StorefrontHeader 
        cartItemsCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMenuOpen(true)}
      />
      <CategoryNav 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <HeroBanner />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-gray-900 mb-2">
            {selectedCategory === 'all' 
              ? 'All Products' 
              : selectedCategory.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} products available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>

      <CartDrawer 
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={onSwitchToAdmin}
            >
              <Settings size={18} className="mr-2" />
              Admin Dashboard
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
