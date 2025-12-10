import { useState } from "react";
import { Plus, Search, Edit, Trash2, MoreVertical, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Product } from "../types";
import { ProductDialog } from "./ProductDialog";

interface ProductsViewProps {
  products: Product[];
  onAddProduct: (product: Omit<Product, "id" | "createdAt">) => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
}

export function ProductsView({
  products,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
}: ProductsViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingProduct(null);
  };

  const handleSave = (product: Omit<Product, "id" | "createdAt">) => {
    if (editingProduct) {
      onEditProduct({
        ...product,
        id: editingProduct.id,
        createdAt: editingProduct.createdAt,
      });
    } else {
      onAddProduct(product);
    }
    handleDialogClose();
  };

  const handleConfirmDelete = (productId: string) => {
    onDeleteProduct(productId);
    setProductToDelete(null);
  };

  const getStatusColor = (status: Product["status"]) => {
    switch (status) {
      case "active":
        return "default";
      case "draft":
        return "secondary";
      case "out-of-stock":
        return "destructive";
    }
  };

  const productBeingDeleted = products.find((p) => p.id === productToDelete);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Products</h1>
          <p className="text-gray-600">Manage your product inventory</p>
        </div>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-orange-500 hover:bg-orange-600"
        >
          <Plus size={18} className="mr-2" />
          Add Product
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Desktop / tablet table */}
      <div className="hidden md:block bg-white rounded-lg border p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.weight}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600">{product.sku}</TableCell>
                <TableCell>
                  <span className="capitalize text-gray-600">
                    {product.category.replace("-", " ")}
                  </span>
                </TableCell>
                <TableCell className="text-gray-900">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell>
                  <span
                    className={
                      product.stock < 10 ? "text-red-600" : "text-gray-900"
                    }
                  >
                    {product.stock}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(product.status)}>
                    {product.status.replace("-", " ")}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(product)}>
                        <Edit size={16} className="mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setProductToDelete(product.id)}
                        className="text-red-600"
                      >
                        <Trash2 size={16} className="mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile list view */}
      <div className="block md:hidden space-y-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border p-4 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 min-w-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-gray-900 font-medium break-words">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {product.weight}
                  </p>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <p className="text-gray-900 font-semibold">
                  ${product.price.toFixed(2)}
                </p>
                <p
                  className={`text-sm ${
                    product.stock < 10 ? "text-red-600" : "text-gray-600"
                  }`}
                >
                  {product.stock} left
                </p>
              </div>
            </div>

            <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge
                  variant={getStatusColor(product.status)}
                  className="text-sm"
                >
                  {product.status.replace("-", " ")}
                </Badge>
                <span className="text-sm text-gray-600 capitalize">
                  {product.category.replace("-", " ")}
                </span>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleEdit(product)}
                  className="w-full sm:w-auto"
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  className="text-red-600 w-full sm:w-auto"
                  variant="ghost"
                  onClick={() => setProductToDelete(product.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProductDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        onSave={handleSave}
        product={editingProduct}
      />

      {/* Delete Confirmation Modal */}
      {productToDelete && productBeingDeleted && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            pointerEvents: "auto",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "24px",
              maxWidth: "420px",
              width: "100%",
              margin: "0 16px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              position: "relative",
              zIndex: 10000,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: 0,
                  color: "#1f2937",
                }}
              >
                Delete Product
              </h2>
              <button
                onClick={() => setProductToDelete(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: "#6b7280",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#1f2937")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#6b7280")
                }
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ color: "#6b7280", marginBottom: "24px", margin: 0 }}>
              Are you sure you want to delete{" "}
              <strong style={{ color: "#1f2937" }}>
                {productBeingDeleted.name}
              </strong>
              ? This action cannot be undone.
            </p>

            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "flex-end",
                marginTop: "24px",
              }}
            >
              <button
                onClick={() => setProductToDelete(null)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  border: "1px solid #d1d5db",
                  backgroundColor: "white",
                  color: "#1f2937",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "white";
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmDelete(productToDelete)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#dc2626",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#b91c1c";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#dc2626";
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
