# Premium Billiard Equipment Store

A luxury billiard ecommerce experience built with Next.js, Tailwind CSS, Node.js, MongoDB, Stripe, PayPal, JWT authentication, and Redis-ready caching.

## Features

- Dark premium design with gold highlights and cinematic product merchandising
- Hero section, featured categories, top sellers, and new arrivals carousel
- Brand showcase, newsletter signup, customer testimonials, and premium footer
- API scaffold for products, authentication, orders, and Stripe checkout
- MongoDB models for products, users, and orders
- Admin-ready ecommerce structure with product inventory and order management

## Getting Started

Install dependencies:

```bash
npm install
```

Copy environment variables:

```bash
cp .env.example .env.local
```

Fill in your MongoDB, Stripe, JWT, Cloudinary, and Redis credentials in `.env.local`.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - build production bundle
- `npm start` - run production server
- `npm run lint` - run ESLint

## Notes

This repository includes the core frontend experience and backend API scaffolding. Add real checkout flows, admin pages, and integrations as required to complete the premium ecommerce platform.
