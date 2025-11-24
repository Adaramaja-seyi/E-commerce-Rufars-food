import { Leaf, Heart, Zap, Award } from "lucide-react";

const BENEFITS = [
  {
    icon: Leaf,
    title: "Natural & Organic",
    description:
      "No artificial additives, preservatives, or chemicals. Pure nature in every bite.",
  },
  {
    icon: Heart,
    title: "Nutrient-Rich",
    description:
      "Packed with vitamins, minerals, and antioxidants for optimal health.",
  },
  {
    icon: Zap,
    title: "Energy Boost",
    description:
      "Natural sugars and nutrients provide sustained energy throughout the day.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Carefully sourced and quality-tested for the best taste and nutrition.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Rufars Foods?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing you the finest superfoods with
            uncompromising quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center border border-border hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
