
import { Button } from "../ui/button";
import { ChefHat, Leaf, Award, Heart, Package, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1734773487516-078839ea277f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGZydWl0cyUyMG51dHMlMjBoZWFsdGh5fGVufDF8fHx8MTc2Mzk3NDg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dried fruits and nuts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 text-orange-400" />
              <span className="text-white/90">
                Naturally Delicious & Nutritious
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-white mb-6">
              <span className="block text-orange-400">RF</span>
              <span className="block">Rufars Foods</span>
            </h1>

            {/* Subheading */}
            <p className="text-white/90 mb-8 max-w-2xl">
              Discover premium dried fruits, nuts, and seeds carefully sourced
              from the finest growers. Naturally delicious and packed with
              nutrition to fuel your healthy lifestyle.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Leaf className="w-4 h-4 text-green-400" />
                <span className="text-white/90">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-white/90">Carefully Sourced</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Package className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8"
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-[5]" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630816631132-e961649c82d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGZydWl0cyUyMGFzc29ydG1lbnR8ZW58MXx8fHwxNzYzOTQ1NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dried fruits"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="mb-2">Premium Dried Fruits</h3>
              <p className="text-gray-600">
                Sun-dried to perfection, preserving natural sweetness and
                nutrients
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1702506183897-e4869f155209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjBzZWVkc3xlbnwxfHx8fDE3NjM4OTI5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nuts and seeds"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="mb-2">Quality Nuts & Seeds</h3>
              <p className="text-gray-600">
                Carefully selected for optimal taste, texture, and nutritional
                value
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <Heart className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="mb-2">Healthy Lifestyle</h3>
              <p className="text-gray-600">
                Packed with vitamins, minerals, and energy to support your
                wellness journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
