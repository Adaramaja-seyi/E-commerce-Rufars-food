import { Card } from '../ui/card';

export function HeroBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Card className="overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-white mb-3">Premium Dried Fruits & Nuts</h2>
            <p className="text-orange-50 mb-6">
              Discover our selection of organic, naturally sourced dried fruits, nuts, seeds, and supplements. 
              Fresh, healthy, and delivered to your door.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌱</span>
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📦</span>
                <span>Free Shipping $50+</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
