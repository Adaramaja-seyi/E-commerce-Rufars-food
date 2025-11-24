import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4200, orders: 145 },
  { month: "Feb", revenue: 3800, orders: 132 },
  { month: "Mar", revenue: 5100, orders: 178 },
  { month: "Apr", revenue: 4600, orders: 162 },
  { month: "May", revenue: 6200, orders: 215 },
  { month: "Jun", revenue: 5800, orders: 198 },
  { month: "Jul", revenue: 7100, orders: 245 },
  { month: "Aug", revenue: 6800, orders: 234 },
  { month: "Sep", revenue: 7500, orders: 268 },
  { month: "Oct", revenue: 8200, orders: 289 },
  { month: "Nov", revenue: 9100, orders: 315 },
];

const categoryData = [
  { name: "Dried Fruits", value: 3800, color: "#f97316" },
  { name: "Nuts", value: 2900, color: "#fb923c" },
  { name: "Seeds", value: 1800, color: "#fdba74" },
  { name: "Supplements", value: 1200, color: "#fed7aa" },
];

const topProducts = [
  { name: "Premium Dried Apricots", sales: 245, revenue: "$3,185.50" },
  { name: "Organic Mixed Nuts", sales: 198, revenue: "$2,970.00" },
  { name: "Chia Seeds", sales: 167, revenue: "$1,500.30" },
  { name: "Dried Mango Slices", sales: 142, revenue: "$1,561.80" },
  { name: "Vitamin D3 Supplement", sales: 89, revenue: "$1,678.90" },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-1">Analytics Dashboard</h1>
        <p className="text-gray-600">
          Track your business performance and insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Revenue</span>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-gray-900">$68,500</div>
            <div className="flex items-center gap-1 mt-2 text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>18.2% vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Orders</span>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-gray-900">2,381</div>
            <div className="flex items-center gap-1 mt-2 text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>12.5% vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">New Customers</span>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-gray-900">142</div>
            <div className="flex items-center gap-1 mt-2 text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span>23.1% vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Avg Order Value</span>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="text-gray-900">$28.75</div>
            <div className="flex items-center gap-1 mt-2 text-red-600">
              <ArrowDownRight className="w-4 h-4" />
              <span>3.2% vs last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Orders Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={{ fill: "#f97316" }}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Products */}
      <Card>
        <CardHeader>
          <CardTitle>Top Selling Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center text-orange-600">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900">{product.name}</div>
                    <div className="text-gray-500">
                      {product.sales} units sold
                    </div>
                  </div>
                </div>
                <div className="text-gray-900">{product.revenue}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Sales Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#f97316" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
