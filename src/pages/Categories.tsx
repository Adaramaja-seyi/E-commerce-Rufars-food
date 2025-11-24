import { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Package,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

const categories = [
  {
    id: 1,
    name: "Dried Fruits",
    slug: "dried-fruits",
    description: "Premium sun-dried fruits with natural sweetness",
    products: 45,
    status: "active",
    created: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Nuts",
    slug: "nuts",
    description: "Quality nuts sourced from trusted growers",
    products: 32,
    status: "active",
    created: "Jan 15, 2024",
  },
  {
    id: 3,
    name: "Seeds",
    slug: "seeds",
    description: "Nutrient-rich seeds for healthy living",
    products: 28,
    status: "active",
    created: "Jan 20, 2024",
  },
  {
    id: 4,
    name: "Supplements",
    slug: "supplements",
    description: "Vitamin and mineral supplements",
    products: 15,
    status: "active",
    created: "Feb 5, 2024",
  },
  {
    id: 5,
    name: "Gift Boxes",
    slug: "gift-boxes",
    description: "Curated gift boxes for special occasions",
    products: 8,
    status: "active",
    created: "Mar 10, 2024",
  },
  {
    id: 6,
    name: "Organic",
    slug: "organic",
    description: "Certified organic products",
    products: 22,
    status: "inactive",
    created: "Apr 1, 2024",
  },
];

export default function Categories() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">Category Management</h1>
          <p className="text-gray-600">
            Organize your products into categories
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>
                Create a new product category for your store
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Category Name</Label>
                <Input id="name" placeholder="e.g., Dried Fruits" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" placeholder="e.g., dried-fruits" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe this category..."
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => setIsDialogOpen(false)}
              >
                Create Category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Total Categories</span>
            <Package className="w-5 h-5 text-orange-500" />
          </div>
          <div className="text-gray-900">6</div>
          <div className="text-gray-500 mt-2">All product categories</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Active Categories</span>
            <Package className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-gray-900">5</div>
          <div className="text-gray-500 mt-2">Currently in use</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Total Products</span>
            <Package className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-gray-900">150</div>
          <div className="text-gray-500 mt-2">Across all categories</div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Avg Products/Cat</span>
            <Package className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-gray-900">25</div>
          <div className="text-gray-500 mt-2">Average distribution</div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search categories..." className="pl-10" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Category
                  </DropdownMenuItem>
                  <DropdownMenuItem>View Products</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Category
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <h3 className="text-gray-900 mb-2">{category.name}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {category.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-gray-900">{category.products}</div>
                  <div className="text-gray-500">Products</div>
                </div>
                <Badge
                  className={
                    category.status === "active"
                      ? "bg-green-100 text-green-700 hover:bg-green-100"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                  }
                >
                  {category.status}
                </Badge>
              </div>
            </div>

            <div className="mt-4 text-gray-500">Created {category.created}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
