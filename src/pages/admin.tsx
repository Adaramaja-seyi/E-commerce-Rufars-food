import { useMemo, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { DashboardHeader } from "../components/DashboardHeader";
import { Sidebar } from "../components/Sidebar";
import { DashboardOverview } from "../components/DashboardOverview";
import { ProductsView } from "../components/ProductsView";
import { OrdersView } from "../components/OrdersView";
import Customers from "./Customers";
import Analytics from "./Analytics";
import Categories from "./Categories";
import { SettingsPage } from "../components/ui/SettingsPage";
import type { DashboardStats, Order, Product } from "../types";

export default function Admin() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // derive active tab from current admin path (e.g. /admin/customers -> 'customers')
  const subpath =
    location.pathname === "/admin" || location.pathname === "/admin/"
      ? ""
      : location.pathname.replace(/^\/admin\//, "");
  const activeTab = subpath.split("/")[0] || "dashboard";

  const products = useMemo<Product[]>(
    () => [
      {
        id: "p1",
        name: "Premium Dried Apricots",
        sku: "RF-APR-001",
        category: "dried-fruits",
        price: 12.99,
        stock: 45,
        status: "active",
        image: "/dried-apricots.png",
        weight: "250g",
        createdAt: new Date().toISOString(),
      },
      {
        id: "p2",
        name: "Organic Mixed Nuts",
        sku: "RF-NUT-002",
        category: "nuts",
        price: 15.99,
        stock: 32,
        status: "active",
        image: "/raw-almonds-nuts.jpg",
        weight: "300g",
        createdAt: new Date().toISOString(),
      },
      {
        id: "p3",
        name: "Dried Mango Slices",
        sku: "RF-MAN-003",
        category: "dried-fruits",
        price: 10.99,
        stock: 8,
        status: "active",
        image: "/dried-mangoes.jpg",
        weight: "200g",
        createdAt: new Date().toISOString(),
      },
      {
        id: "p4",
        name: "Chia Seeds",
        sku: "RF-SED-004",
        category: "seeds",
        price: 8.99,
        stock: 60,
        status: "active",
        image: "/mixed-dried-berries.jpg",
        weight: "500g",
        createdAt: new Date().toISOString(),
      },
      {
        id: "p5",
        name: "Vitamin D3 Supplement",
        sku: "RF-SUP-005",
        category: "supplements",
        price: 18.99,
        stock: 0,
        status: "out-of-stock",
        image: "/walnuts-pile.png",
        weight: "60 capsules",
        createdAt: new Date().toISOString(),
      },
      {
        id: "p6",
        name: "Dried Cranberries",
        sku: "RF-CRN-006",
        category: "dried-fruits",
        price: 9.99,
        stock: 28,
        status: "active",
        image: "/dried-cranberries.png",
        weight: "250g",
        createdAt: new Date().toISOString(),
      },
    ],
    []
  );

  const orders = useMemo<Order[]>(
    () => [
      {
        id: "o1",
        orderNumber: "ORD-2024-001",
        customer: { name: "Sarah Johnson", email: "sarah.j@email.com" },
        createdAt: new Date(2024, 9, 28).toISOString(),
        total: 41.97,
        status: "delivered",
        items: [],
      },
      {
        id: "o2",
        orderNumber: "ORD-2024-002",
        customer: { name: "Michael Chen", email: "mchen@email.com" },
        createdAt: new Date(2024, 9, 29).toISOString(),
        total: 32.97,
        status: "shipped",
        items: [],
      },
      {
        id: "o3",
        orderNumber: "ORD-2024-003",
        customer: { name: "Emma Wilson", email: "emmaw@email.com" },
        createdAt: new Date(2024, 9, 30).toISOString(),
        total: 28.97,
        status: "processing",
        items: [],
      },
      {
        id: "o4",
        orderNumber: "ORD-2024-004",
        customer: { name: "David Brown", email: "dbrown@email.com" },
        createdAt: new Date(2024, 9, 31).toISOString(),
        total: 12.99,
        status: "pending",
        items: [],
      },
    ],
    []
  );

  const stats = useMemo<DashboardStats>(
    () => ({
      totalRevenue: 4856.89,
      totalOrders: 127,
      totalProducts: products.length,
      lowStockItems: products.filter((p) => p.stock <= 10).length,
    }),
    [products]
  );

  const lowStockProducts = useMemo(
    () => products.filter((p) => p.stock > 0 && p.stock <= 10),
    [products]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader onOpenSidebar={() => setMobileSidebarOpen(true)} />
      <div className="flex">
        <Sidebar
          activeTab={activeTab}
          onTabChange={(tab) => {
            // navigate to the corresponding admin sub-route
            if (tab === "dashboard") navigate("/admin");
            else navigate(`/admin/${tab}`);
            setMobileSidebarOpen(false);
          }}
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
        <div className="flex-1 p-4 md:p-6">
          <Routes>
            <Route
              index
              element={
                <DashboardOverview
                  stats={stats}
                  recentOrders={orders}
                  lowStockProducts={lowStockProducts}
                />
              }
            />
            <Route
              path="products"
              element={
                <ProductsView
                  products={products}
                  onAddProduct={() => {}}
                  onEditProduct={() => {}}
                  onDeleteProduct={() => {}}
                />
              }
            />
            <Route
              path="orders"
              element={
                <OrdersView orders={orders} onUpdateOrderStatus={() => {}} />
              }
            />
            <Route path="customers" element={<Customers />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="categories" element={<Categories />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<div>Admin page not found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
