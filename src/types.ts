export type ProductStatus = 'active' | 'draft' | 'out-of-stock';

export type Product = {
  id: string;
  name: string;
  sku: string;
  category: 'dried-fruits' | 'nuts' | 'seeds' | 'supplements' | 'other';
  price: number;
  stock: number;
  status: ProductStatus;
  image: string;
  weight?: string;
  createdAt: string;
};

export type OrderStatus = 'delivered' | 'shipped' | 'processing' | 'pending' | 'cancelled';

export type Order = {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
  };
  createdAt: string;
  total: number;
  status: OrderStatus;
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }>;
};

export type DashboardStats = {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  lowStockItems: number;
};


