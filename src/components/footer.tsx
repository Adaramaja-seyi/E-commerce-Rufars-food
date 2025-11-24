import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">RF</span>
              </div>
              <span className="font-bold text-lg">Rufars Foods</span>
            </div>
            <p className="text-white/70">
              Premium dried fruits and superfoods for a healthier lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link to="#" className="hover:text-white transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@rufarfoods.com"
                  className="hover:text-white transition"
                >
                  info@rufarfoods.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Food Street, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>&copy; 2025 Rufars Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
