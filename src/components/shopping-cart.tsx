"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "../../hooks/use-cart";

export function ShoppingCart() {
  const { items, removeItem, updateQuantity } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 1000 ? 0 : 100;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven't added any superfoods to your cart yet.
              Start exploring our premium collection!
            </p>
            <Link to="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            <span className="hidden sm:inline">Continue Shopping</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Shopping Cart
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex gap-4">
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl"
                    />
                    <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {item.quantity}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold text-xl mb-3">
                      ₹{item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-background rounded-xl p-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="font-bold text-lg text-primary">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-3 text-destructive hover:bg-destructive/10 rounded-xl transition-colors self-start"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 border border-border shadow-sm h-fit sticky top-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold">
                  {shipping === 0 ? (
                    <span className="text-secondary font-bold">Free</span>
                  ) : (
                    `₹${shipping}`
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (18%)</span>
                <span className="font-semibold">₹{tax}</span>
              </div>
            </div>

            <div className="flex justify-between mb-6">
              <span className="text-xl font-bold text-foreground">Total</span>
              <span className="text-3xl font-bold text-primary">₹{total}</span>
            </div>

            {/* Free Shipping Banner */}
            {subtotal < 1000 && (
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 mb-6">
                <p className="text-sm text-secondary font-medium text-center">
                  Add ₹{1000 - subtotal} more for free shipping!
                </p>
              </div>
            )}

            <div className="space-y-3">
              <Link to="/signup" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Proceed to Checkout
                </Button>
              </Link>
              <Link to="/products" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary/5 bg-transparent rounded-xl py-3 font-semibold"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>

            {/* Security Badge */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
