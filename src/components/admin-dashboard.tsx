"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, LogOut } from "lucide-react";
import { Button } from "../ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

const INITIAL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Premium Dried Mangoes",
    price: 499,
    category: "Dried Fruits",
    stock: 50,
  },
  {
    id: "2",
    name: "Organic Dried Cranberries",
    price: 599,
    category: "Dried Fruits",
    stock: 30,
  },
  { id: "3", name: "Raw Almonds", price: 799, category: "Nuts", stock: 25 },
];

export function AdminDashboard() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Dried Fruits",
    stock: "",
  });

  const handleAddProduct = () => {
    if (formData.name && formData.price && formData.stock) {
      const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name,
        price: Number.parseInt(formData.price),
        category: formData.category,
        stock: Number.parseInt(formData.stock),
      };
      setProducts([...products, newProduct]);
      setFormData({ name: "", price: "", category: "Dried Fruits", stock: "" });
      setIsAddingProduct(false);
    }
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEditProduct = (product: Product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      stock: product.stock.toString(),
    });
  };

  const handleUpdateProduct = () => {
    if (editingId && formData.name && formData.price && formData.stock) {
      setProducts(
        products.map((p) =>
          p.id === editingId
            ? {
                ...p,
                name: formData.name,
                price: Number.parseInt(formData.price),
                category: formData.category,
                stock: Number.parseInt(formData.stock),
              }
            : p
        )
      );
      setEditingId(null);
      setFormData({ name: "", price: "", category: "Dried Fruits", stock: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Rufars Foods Admin</h1>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Product Section */}
        <div className="bg-white rounded-lg p-6 border border-border mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-foreground">
              Product Management
            </h2>
            {!isAddingProduct && !editingId && (
              <Button
                onClick={() => setIsAddingProduct(true)}
                className="bg-primary hover:bg-primary-light text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            )}
          </div>

          {(isAddingProduct || editingId) && (
            <div className="bg-background rounded-lg p-4 mb-6 space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground"
              />
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="number"
                  placeholder="Price (₹)"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="px-4 py-2 border border-border rounded-lg bg-white text-foreground"
                />
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="px-4 py-2 border border-border rounded-lg bg-white text-foreground"
                >
                  <option>Dried Fruits</option>
                  <option>Nuts</option>
                  <option>Seeds</option>
                  <option>Superfoods</option>
                </select>
                <input
                  type="number"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  className="px-4 py-2 border border-border rounded-lg bg-white text-foreground"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={editingId ? handleUpdateProduct : handleAddProduct}
                  className="bg-success hover:bg-success/90 text-white"
                >
                  {editingId ? "Update" : "Add"} Product
                </Button>
                <Button
                  onClick={() => {
                    setIsAddingProduct(false);
                    setEditingId(null);
                    setFormData({
                      name: "",
                      price: "",
                      category: "Dried Fruits",
                      stock: "",
                    });
                  }}
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg border border-border overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-border hover:bg-background transition"
                >
                  <td className="px-6 py-4 text-foreground">{product.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 font-semibold text-primary">
                    ₹{product.price}
                  </td>
                  <td className="px-6 py-4 text-foreground">{product.stock}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="p-2 hover:bg-background rounded text-primary"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="p-2 hover:bg-destructive/10 rounded text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-muted-foreground text-sm mb-2">Total Products</p>
            <p className="text-3xl font-bold text-primary">{products.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-muted-foreground text-sm mb-2">Total Stock</p>
            <p className="text-3xl font-bold text-primary">
              {products.reduce((sum, p) => sum + p.stock, 0)}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-muted-foreground text-sm mb-2">Total Value</p>
            <p className="text-3xl font-bold text-primary">
              ₹{products.reduce((sum, p) => sum + p.price * p.stock, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
