"use client";

import { useState } from "react";
import { ProductCard } from "./product-card";
import { Button } from "../ui/button";
import { Filter, Grid, List } from "lucide-react";

const ALL_PRODUCTS = [
  // Dried Fruits
  {
    id: "1",
    name: "Premium Dried Mangoes",
    price: 499,
    image: "../public/dried-mangoes.jpg",
    rating: 4.8,
    reviews: 124,
    category: "Dried Fruits",
    description: "Sweet, chewy mangoes packed with vitamin C and antioxidants",
    nutritionalInfo: {
      calories: 320,
      protein: "2g",
      fiber: "3g",
      vitaminC: "67%",
    },
  },
  {
    id: "2",
    name: "Organic Dried Cranberries",
    price: 599,
    image: "../public/dried-cranberries.png",
    rating: 4.9,
    reviews: 89,
    category: "Dried Fruits",
    description: "Tart, antioxidant-rich cranberries perfect for snacking",
    nutritionalInfo: {
      calories: 308,
      protein: "0.1g",
      fiber: "5.3g",
      vitaminC: "24%",
    },
  },
  {
    id: "3",
    name: "Dried Apricots",
    price: 449,
    image: "/dried-apricots.png",
    rating: 4.7,
    reviews: 156,
    category: "Dried Fruits",
    description: "Naturally sweet apricots rich in beta-carotene and fiber",
    nutritionalInfo: {
      calories: 241,
      protein: "3.4g",
      fiber: "7g",
      vitaminA: "47%",
    },
  },
  {
    id: "4",
    name: "Mixed Berries Blend",
    price: 699,
    image: "/mixed-dried-berries.jpg",
    rating: 4.9,
    reviews: 203,
    category: "Dried Fruits",
    description:
      "Antioxidant powerhouse blend of blueberries, strawberries, and more",
    nutritionalInfo: {
      calories: 325,
      protein: "1g",
      fiber: "7g",
      vitaminC: "15%",
    },
  },
  {
    id: "5",
    name: "Dried Figs",
    price: 549,
    image: "/dried-figs.png",
    rating: 4.6,
    reviews: 78,
    category: "Dried Fruits",
    description: "Natural sweetness with calcium and potassium",
    nutritionalInfo: {
      calories: 249,
      protein: "3.3g",
      fiber: "9.8g",
      calcium: "16%",
    },
  },
  {
    id: "6",
    name: "Dried Dates",
    price: 399,
    image: "/dried-dates.jpg",
    rating: 4.8,
    reviews: 234,
    category: "Dried Fruits",
    description: "Energy-rich dates with natural sugars and minerals",
    nutritionalInfo: {
      calories: 277,
      protein: "1.8g",
      fiber: "6.7g",
      potassium: "20%",
    },
  },
  // Nuts
  {
    id: "7",
    name: "Raw Almonds",
    price: 799,
    image: "/raw-almonds-nuts.jpg",
    rating: 4.7,
    reviews: 156,
    category: "Nuts",
    description: "Premium raw almonds rich in healthy fats and protein",
    nutritionalInfo: {
      calories: 579,
      protein: "21g",
      fiber: "12g",
      vitaminE: "37%",
    },
  },
  {
    id: "8",
    name: "Cashew Nuts",
    price: 899,
    image: "/cashew-nuts.jpg",
    rating: 4.8,
    reviews: 145,
    category: "Nuts",
    description: "Creamy cashews packed with magnesium and zinc",
    nutritionalInfo: {
      calories: 553,
      protein: "18g",
      fiber: "3.3g",
      magnesium: "73%",
    },
  },
  {
    id: "9",
    name: "Walnuts",
    price: 749,
    image: "/walnuts-pile.png",
    rating: 4.9,
    reviews: 189,
    category: "Nuts",
    description: "Omega-3 rich walnuts for heart and brain health",
    nutritionalInfo: {
      calories: 654,
      protein: "15g",
      fiber: "6.7g",
      omega3: "2.5g",
    },
  },
  {
    id: "10",
    name: "Pistachios",
    price: 999,
    image: "/pistachios.png",
    rating: 4.7,
    reviews: 112,
    category: "Nuts",
    description: "Premium pistachios with complete protein profile",
    nutritionalInfo: {
      calories: 560,
      protein: "20g",
      fiber: "10g",
      vitaminB6: "28%",
    },
  },
  {
    id: "11",
    name: "Macadamia Nuts",
    price: 1099,
    image: "/macadamia-nuts.jpg",
    rating: 4.9,
    reviews: 98,
    category: "Nuts",
    description: "Buttery macadamias with monounsaturated fats",
    nutritionalInfo: {
      calories: 718,
      protein: "7.9g",
      fiber: "8.6g",
      manganese: "51%",
    },
  },
  {
    id: "12",
    name: "Brazil Nuts",
    price: 849,
    image: "/brazil-nuts.jpg",
    rating: 4.6,
    reviews: 67,
    category: "Nuts",
    description: "Selenium-rich Brazil nuts for immune support",
    nutritionalInfo: {
      calories: 659,
      protein: "14g",
      fiber: "7.5g",
      selenium: "3487%",
    },
  },
  // Seeds
  {
    id: "13",
    name: "Pumpkin Seeds",
    price: 349,
    image: "/roasted-pumpkin-seeds.png",
    rating: 4.8,
    reviews: 134,
    category: "Seeds",
    description: "Zinc-rich pumpkin seeds for immune support",
    nutritionalInfo: {
      calories: 446,
      protein: "19g",
      fiber: "6g",
      zinc: "71%",
    },
  },
  {
    id: "14",
    name: "Sunflower Seeds",
    price: 299,
    image: "/sunflower-seeds.jpg",
    rating: 4.7,
    reviews: 167,
    category: "Seeds",
    description: "Vitamin E rich sunflower seeds for skin health",
    nutritionalInfo: {
      calories: 584,
      protein: "21g",
      fiber: "8.6g",
      vitaminE: "234%",
    },
  },
  {
    id: "15",
    name: "Chia Seeds",
    price: 449,
    image: "/chia-seeds.png",
    rating: 4.9,
    reviews: 201,
    category: "Seeds",
    description: "Superfood chia seeds with omega-3 and fiber",
    nutritionalInfo: {
      calories: 486,
      protein: "17g",
      fiber: "34g",
      omega3: "17.8g",
    },
  },
  {
    id: "16",
    name: "Flax Seeds",
    price: 399,
    image: "/flax-seeds.jpg",
    rating: 4.8,
    reviews: 145,
    category: "Seeds",
    description: "Ground flax seeds for omega-3 and lignans",
    nutritionalInfo: {
      calories: 534,
      protein: "18g",
      fiber: "27g",
      omega3: "22.8g",
    },
  },
  {
    id: "17",
    name: "Sesame Seeds",
    price: 329,
    image: "/sesame-seeds.jpg",
    rating: 4.6,
    reviews: 89,
    category: "Seeds",
    description: "Calcium-rich sesame seeds for bone health",
    nutritionalInfo: {
      calories: 573,
      protein: "18g",
      fiber: "12g",
      calcium: "98%",
    },
  },
  {
    id: "18",
    name: "Hemp Seeds",
    price: 499,
    image: "/hemp-seeds.jpg",
    rating: 4.9,
    reviews: 112,
    category: "Seeds",
    description: "Complete protein hemp seeds with all amino acids",
    nutritionalInfo: {
      calories: 553,
      protein: "31g",
      fiber: "4g",
      magnesium: "197%",
    },
  },
  // Superfoods
  {
    id: "19",
    name: "Goji Berries",
    price: 699,
    image: "/goji-berries.jpg",
    rating: 4.8,
    reviews: 156,
    category: "Superfoods",
    description: "Antioxidant-rich goji berries for immune support",
    nutritionalInfo: {
      calories: 349,
      protein: "14g",
      fiber: "13g",
      vitaminC: "148%",
    },
  },
  {
    id: "20",
    name: "Mulberries",
    price: 549,
    image: "/mulberries.jpg",
    rating: 4.7,
    reviews: 98,
    category: "Superfoods",
    description: "Iron-rich mulberries for energy and vitality",
    nutritionalInfo: {
      calories: 43,
      protein: "1.4g",
      fiber: "1.7g",
      iron: "14%",
    },
  },
  {
    id: "21",
    name: "Acai Berries",
    price: 799,
    image: "/acai-berries.jpg",
    rating: 4.9,
    reviews: 178,
    category: "Superfoods",
    description: "Antioxidant powerhouse acai berries",
    nutritionalInfo: {
      calories: 70,
      protein: "1g",
      fiber: "2g",
      antioxidants: "High",
    },
  },
  {
    id: "22",
    name: "Cacao Nibs",
    price: 649,
    image: "/cacao-nibs.jpg",
    rating: 4.8,
    reviews: 134,
    category: "Superfoods",
    description: "Raw cacao nibs with magnesium and theobromine",
    nutritionalInfo: {
      calories: 228,
      protein: "4.9g",
      fiber: "16.9g",
      magnesium: "272%",
    },
  },
];

export function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["Dried Fruits", "Nuts", "Seeds", "Superfoods"];

  let filteredProducts = selectedCategory
    ? ALL_PRODUCTS.filter((p) => p.category === selectedCategory)
    : ALL_PRODUCTS;

  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <div className="space-y-6">
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between md:hidden">
        <h2 className="text-xl font-bold text-foreground">Filter Products</h2>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {/* Filters */}
      <div className={`space-y-6 ${showFilters ? "block" : "hidden md:block"}`}>
        {/* Category Filter */}
        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-4 text-lg">
            Category
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className={`rounded-xl px-4 py-2 ${
                selectedCategory === null
                  ? "bg-primary text-white shadow-md"
                  : "border-primary text-primary hover:bg-primary/5"
              }`}
            >
              All Products
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "border-primary text-primary hover:bg-primary/5"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Sort Filter */}
        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-4 text-lg">
            Sort By
          </h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {filteredProducts.length} products
          {selectedCategory && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Filter className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No products found
          </h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters to see more products.
          </p>
          <Button
            onClick={() => {
              setSelectedCategory(null);
              setSortBy("featured");
            }}
            className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-3"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
