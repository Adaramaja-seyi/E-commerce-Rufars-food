import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Order } from '../types';
import { useState } from 'react';
import { Package, User, Phone, Mail } from 'lucide-react';

interface OrderDetailsDialogProps {
  order: Order;
  open: boolean;
  onClose: () => void;
  onUpdateStatus: (status: Order['status']) => void;
}

export function OrderDetailsDialog({ order, open, onClose, onUpdateStatus }: OrderDetailsDialogProps) {
  const [newStatus, setNewStatus] = useState(order.status);

  const handleUpdateStatus = () => {
    onUpdateStatus(newStatus);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
          <DialogDescription>{order.orderNumber}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <User size={18} />
              Customer Information
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-gray-900">{order.customer.name}</p>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail size={16} />
                {order.customer.email}
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone size={16} />
                {order.customer.phone}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <Package size={18} />
              Order Items
            </h3>
            <div className="border rounded-lg divide-y">
              {order.items.map((item, index) => (
                <div key={index} className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-900">{item.productName}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-gray-900">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4">Update Order Status</h3>
            <Select value={newStatus} onValueChange={(value) => setNewStatus(value as Order['status'])}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button 
            onClick={handleUpdateStatus}
            className="bg-orange-500 hover:bg-orange-600"
            disabled={newStatus === order.status}
          >
            Update Status
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
