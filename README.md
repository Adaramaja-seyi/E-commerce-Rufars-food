# My React App - E-Commerce Platform

A modern, full-featured e-commerce application built with React, TypeScript, and Vite. This project includes both a customer-facing storefront and a comprehensive admin dashboard.

## Overview

This is a production-ready e-commerce platform featuring:

- **Storefront**: Browse products, manage shopping cart, and complete checkout
- **Admin Dashboard**: Manage products, orders, customers, inventory, and analytics
- **Responsive Design**: Mobile-first approach with Radix UI components
- **Modern Stack**: React 19, TypeScript, Vite, and TailwindCSS

## Features

### Customer Features

- 🛒 **Product Browsing**: Explore products with detailed information
- 🛍️ **Shopping Cart**: Add/remove items, view cart summary
- 💳 **Checkout**: Complete purchase flow with order confirmation
- 📦 **Order Tracking**: View order details and status
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 🎨 **Modern UI**: Beautiful component library with Radix UI

### Admin Features

- 📊 **Dashboard Overview**: Real-time analytics and business metrics
- 📦 **Product Management**: Create, edit, and manage product inventory
- 📋 **Order Management**: View and process customer orders
- 👥 **Customer Management**: Track and manage customer information
- 📈 **Analytics**: View sales data, revenue, and performance metrics
- ⚙️ **Settings**: Configure application settings

## Tech Stack

### Frontend

- **React** 19.1.0 - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Modern build tool with HMR
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Radix UI** - Unstyled, accessible component primitives
- **Shadcn/ui** - High-quality React components

### Form & Validation

- **React Hook Form** - Efficient form handling
- **Zod** - TypeScript-first schema validation

### UI Components & Utilities

- **Lucide React** - Beautiful icon library
- **Embla Carousel** - Responsive carousel component
- **Date-fns** - Date utility library
- **Sonner** - Toast notifications
- **Class Variance Authority** - CSS class composition




## Getting Started

## Key Components

### Pages

- **Home** (`src/pages/home.tsx`) - Landing page with hero section
- **Products** (`src/pages/products.tsx`) - Product listing with filters
- **Product Detail** (`src/pages/product-detail.tsx`) - Individual product details
- **Cart** (`src/pages/cart.tsx`) - Shopping cart page
- **Checkout** (`src/pages/checkout.tsx`) - Checkout process
- **Admin** (`src/pages/admin.tsx`) - Admin dashboard

### Core Components

- **Header** - Navigation and search
- **Footer** - Footer information
- **Product Card** - Product display component
- **Shopping Cart** - Cart management
- **Admin Dashboard** - Admin interface with tabs for different sections



## Data Management

Sample product data is stored in `public/data.json`. The application:

- Loads data from the JSON file
- Uses React hooks for state management
- Implements custom hooks like `use-cart.tsx` for cart functionality

## Custom Hooks

- **`use-cart.tsx`** - Shopping cart state management and operations

## Performance Optimizations

- Vite for fast builds and HMR
- Code splitting with React Router
- Lazy loading of components
- Optimized bundle size with tree-shaking

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

When contributing to this project:

1. Ensure TypeScript types are properly defined
2. Follow ESLint rules (`npm run lint`)
3. Use Radix UI components for consistency
4. Test responsive design on mobile

## Deployment

The project includes a `vercel.json` configuration for easy deployment to Vercel:

```bash
npm run build
# Deploy to Vercel
vercel
```

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Payment gateway integration
- [ ] Advanced product filtering and search
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Email notifications
- [ ] Inventory management improvements
- [ ] Multi-language support

## License

This project is private and confidential.

## Support

For issues, questions, or feedback, please create an issue in the project repository.

---

**Version**: 0.1.0  
**Last Updated**: December 2025
