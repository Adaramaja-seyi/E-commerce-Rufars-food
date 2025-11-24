"use client";

import type React from "react";

import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Leaf } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "../../hooks/use-cart";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description?: string;
  nutritionalInfo?: {
    calories: number;
    protein: string;
    fiber: string;
    vitaminC?: string;
    vitaminE?: string;
  };
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col group">
      {/* Image */}
      <div className="relative h-56 bg-background overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-secondary/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
          {product.category}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm">
          <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Nutritional Info */}
        {product.nutritionalInfo && (
          <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Leaf className="w-3 h-3 text-secondary" />
              <span>{product.nutritionalInfo.calories} cal</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>{product.nutritionalInfo.protein} protein</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>{product.nutritionalInfo.fiber} fiber</span>
            </div>
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">
              ₹{product.price}
            </span>
            <span className="text-sm text-muted-foreground ml-1">/pack</span>
          </div>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
