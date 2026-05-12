import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { addToCart } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { getProducts, Product } from '../../services/product.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products: Product[] = getProducts();
  addToCart = addToCart;
  query = signal('');
  category = signal('All');
  sortBy = signal('featured');

  categories = ['All', ...Array.from(new Set(this.products.map(p => p.category)))];

  filtered = computed(() => {
    const q = this.query()?.toLowerCase()?.trim();
    return this.products.filter(p => {
      if (this.category() !== 'All' && p.category !== this.category()) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  });

  sorted = computed(() => {
    const results = [...this.filtered()];
    if (this.sortBy() === 'priceAsc') {
      return results.sort((a, b) => a.price - b.price);
    }
    if (this.sortBy() === 'priceDesc') {
      return results.sort((a, b) => b.price - a.price);
    }
    if (this.sortBy() === 'newest') {
      return results.sort((a, b) => b.id - a.id);
    }
    return results;
  });
}

// Products are provided by `getProducts()` from the product service
