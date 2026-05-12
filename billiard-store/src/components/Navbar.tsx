'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gold">
              Billiard Store
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="hover:text-gold transition-colors">
              Shop
            </Link>
            <Link href="/categories" className="hover:text-gold transition-colors">
              Categories
            </Link>
            <Link href="/blog" className="hover:text-gold transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link href="/account" className="hover:text-gold transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="hover:text-gold transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-gold text-black rounded-full h-5 w-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:text-gold transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 mt-2 rounded-lg p-4">
            <Link href="/shop" className="block py-2 hover:text-gold transition-colors">
              Shop
            </Link>
            <Link href="/categories" className="block py-2 hover:text-gold transition-colors">
              Categories
            </Link>
            <Link href="/blog" className="block py-2 hover:text-gold transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}