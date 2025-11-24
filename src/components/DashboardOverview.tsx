import { DollarSign, Package, ShoppingCart, AlertTriangle } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { DashboardStats, Order, Product } from '../types';

interface DashboardOverviewProps {
  stats: DashboardStats;
  recentOrders: Order[];
  lowStockProducts: Product[];
}

export function DashboardOverview({ stats, recentOrders, lowStockProducts }: DashboardOverviewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          iconColor="bg-green-500"
          trend={{ value: '12.5% from last month', isPositive: true }}
        />
        <StatsCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={ShoppingCart}
          iconColor="bg-blue-500"
          trend={{ value: '8.2% from last month', isPositive: true }}
        />
        <StatsCard
          title="Total Products"
          value={stats.totalProducts}
          icon={Package}
          iconColor="bg-purple-500"
        />
        <StatsCard
          title="Low Stock Items"
          value={stats.lowStockItems}
          icon={AlertTriangle}
          iconColor="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                  <div className="flex-1">
                    <p className="text-gray-900">{order.orderNumber}</p>
                    <p className="text-sm text-gray-600">{order.customer.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900">${order.total.toFixed(2)}</p>
                    <Badge 
                      variant={
                        order.status === 'delivered' ? 'default' : 
                        order.status === 'shipped' ? 'secondary' : 
                        'outline'
                      }
                      className="mt-1"
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alert</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.length === 0 ? (
                <p className="text-gray-600 text-center py-4">All products are well stocked! 🎉</p>
              ) : (
                lowStockProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.sku}</p>
                    </div>
                    <Badge variant="destructive">
                      {product.stock} left
                    </Badge>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
