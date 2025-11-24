import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface StorefrontHeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

export function StorefrontHeader({ cartItemsCount, onCartClick, onMenuClick }: StorefrontHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
            <Menu size={24} />
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white">RF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-gray-900">Rufars Foods</h1>
              <p className="text-xs text-gray-600">Natural & Organic</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-orange-500">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
