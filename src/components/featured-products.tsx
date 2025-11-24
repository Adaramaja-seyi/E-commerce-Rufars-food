"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./product-card";
import { Button } from "../ui/button";

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Premium Dried Mangoes",
    price: 499,
    image: "/dried-mangoes.jpg",
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
    image: "/dried-cranberries.png",
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
];

export function FeaturedProducts() {
  const [products, setProducts] = useState(FEATURED_PRODUCTS);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Superfoods
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handpicked selections of our most popular superfoods, carefully
            sourced for maximum nutrition and flavor
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
