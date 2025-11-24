import { CheckCircle, Package } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface OrderConfirmationProps {
  orderNumber: string;
  onContinueShopping: () => void;
}

export function OrderConfirmation({ orderNumber, onContinueShopping }: OrderConfirmationProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        <h1 className="text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Package className="text-orange-500" size={24} />
            <div>
              <p className="text-sm text-gray-600">Order Number</p>
              <p className="text-gray-900">{orderNumber}</p>
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-sm text-gray-700">
            <p className="mb-2">
              📧 A confirmation email has been sent to your email address.
            </p>
            <p>
              📦 You can track your order status using the order number above.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <Button 
          onClick={onContinueShopping}
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          Continue Shopping
        </Button>
        <Button 
          variant="outline"
          className="w-full"
        >
          Track Order
        </Button>
      </div>
    </div>
  );
}
