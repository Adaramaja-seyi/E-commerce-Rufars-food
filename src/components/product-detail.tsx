"use client";

import React, { useState } from "react";
import {
  Star,
  ShoppingCart,
  Minus,
  Plus,
  Heart,
  Share2,
  Truck,
  Shield,
  Leaf,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "../../hooks/use-cart";
import { Link } from "react-router-dom";

const PRODUCT_DATA: Record<string, any> = {
  "1": {
    name: "Premium Dried Mangoes",
    price: 499,
    image: "/dried-mangoes.jpg",
    rating: 4.8,
    reviews: 124,
    category: "Dried Fruits",
    description:
      "Delicious, naturally sweet dried mangoes sourced from the finest orchards. No added sugar or preservatives.",
    nutritionInfo: {
      servingSize: "100g",
      calories: 320,
      protein: "3.3g",
      carbs: "80g",
      fiber: "1.6g",
      fat: "0.3g",
      vitaminC: "36.4mg",
      vitaminA: "54μg",
    },
    benefits: [
      "Rich in Vitamin C for immune support",
      "Natural energy boost from natural sugars",
      "High in antioxidants",
      "Supports digestive health",
    ],
    ingredients: "100% Natural Mangoes",
    storage: "Store in a cool, dry place",
    shelfLife: "12 months from date of manufacture",
    origin: "Maharashtra, India",
  },
  "2": {
    name: "Organic Dried Cranberries",
    price: 599,
    image: "/dried-cranberries.png",
    rating: 4.9,
    reviews: 89,
    category: "Dried Fruits",
    description:
      "Tart and tangy organic cranberries, perfect for snacking or adding to your favorite recipes.",
    nutritionInfo: {
      servingSize: "100g",
      calories: 308,
      protein: "0.4g",
      carbs: "82g",
      fiber: "4.6g",
      fat: "0.4g",
      vitaminC: "13.3mg",
      vitaminK: "24.3μg",
    },
    benefits: [
      "Supports urinary tract health",
      "Rich in antioxidants",
      "Low in fat",
      "Natural source of vitamin K",
    ],
    ingredients: "100% Organic Cranberries",
    storage: "Store in a cool, dry place",
    shelfLife: "18 months from date of manufacture",
    origin: "Wisconsin, USA",
  },
  "3": {
    name: "Raw Almonds",
    price: 799,
    image: "/raw-almonds-nuts.jpg",
    rating: 4.7,
    reviews: 156,
    category: "Nuts",
    description:
      "Premium raw almonds rich in healthy fats and protein, perfect for snacking or cooking.",
    nutritionInfo: {
      servingSize: "100g",
      calories: 579,
      protein: "21g",
      carbs: "22g",
      fiber: "12g",
      fat: "50g",
      vitaminE: "25.6mg",
      magnesium: "270mg",
    },
    benefits: [
      "Rich in healthy monounsaturated fats",
      "High protein content for muscle health",
      "Excellent source of Vitamin E",
      "Supports heart health",
    ],
    ingredients: "100% Raw Almonds",
    storage: "Store in a cool, dry place",
    shelfLife: "24 months from date of manufacture",
    origin: "California, USA",
  },
  "4": {
    name: "Mixed Berries Blend",
    price: 699,
    image: "/mixed-dried-berries.jpg",
    rating: 4.9,
    reviews: 203,
    category: "Dried Fruits",
    description:
      "Antioxidant powerhouse blend of blueberries, strawberries, and more superfoods.",
    nutritionInfo: {
      servingSize: "100g",
      calories: 325,
      protein: "1g",
      carbs: "82g",
      fiber: "7g",
      fat: "0.5g",
      vitaminC: "15mg",
      antioxidants: "High",
    },
    benefits: [
      "Antioxidant powerhouse",
      "Supports brain health",
      "Natural anti-inflammatory properties",
      "Boosts immune system",
    ],
    ingredients: "Blueberries, Strawberries, Raspberries, Blackberries",
    storage: "Store in a cool, dry place",
    shelfLife: "12 months from date of manufacture",
    origin: "Mixed Origins",
  },
};

export function ProductDetail({ productId }: { productId: string }) {
  const product = PRODUCT_DATA[productId] || PRODUCT_DATA["1"];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("nutrition");
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
    setQuantity(1);
  };

  const tabs = [
    { id: "nutrition", label: "Nutrition", icon: Leaf },
    { id: "benefits", label: "Benefits", icon: Shield },
    { id: "details", label: "Details", icon: Truck },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/products"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Products</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl py-3"
              >
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl py-3"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-xl text-sm font-semibold mb-4">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl md:text-5xl font-bold text-primary">
                ₹{product.price}
              </span>
              <span className="text-lg text-muted-foreground">/pack</span>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <span className="text-lg font-semibold text-foreground">
                Quantity:
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-background rounded-xl border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors rounded-l-xl"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 py-3 font-bold text-lg min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors rounded-r-xl"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold text-primary">
                    ₹{product.price * quantity}
                  </p>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ShoppingCart className="w-6 h-6 mr-3" />
              Add to Cart
            </Button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  Free Shipping
                </p>
                <p className="text-xs text-muted-foreground">Over ₹1000</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  100% Natural
                </p>
                <p className="text-xs text-muted-foreground">
                  No Preservatives
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm font-medium text-foreground">Organic</p>
                <p className="text-xs text-muted-foreground">Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-border shadow-sm">
          {/* Tab Navigation */}
          <div className="border-b border-border">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "nutrition" && (
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Nutrition Information
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Per {product.nutritionInfo.servingSize}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(product.nutritionInfo).map(([key, value]) => {
                    if (key === "servingSize") return null;
                    return (
                      <div
                        key={key}
                        className="flex justify-between items-center p-4 bg-background rounded-xl"
                      >
                        <span className="text-foreground capitalize font-medium">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span className="font-bold text-primary text-lg">
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Health Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.benefits.map((benefit: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-background rounded-xl"
                    >
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-foreground font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "details" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Product Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Ingredients
                        </h4>
                        <p className="text-muted-foreground">
                          {product.ingredients}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Storage Instructions
                        </h4>
                        <p className="text-muted-foreground">
                          {product.storage}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Shelf Life
                        </h4>
                        <p className="text-muted-foreground">
                          {product.shelfLife}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Origin
                        </h4>
                        <p className="text-muted-foreground">
                          {product.origin}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
