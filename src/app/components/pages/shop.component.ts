import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { addToCart } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  private productService = inject(ProductService);
  
  products: Product[] = [];
  categories: string[] = ['All'];
  
  addToCart = addToCart;
  query = '';
  category = 'All';
  sortBy = 'featured';

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.categories = ['All', ...Array.from(new Set(this.products.map(p => p.category)))];
    });
  }

  get sorted(): Product[] {
    const q = this.query?.toLowerCase()?.trim();
    let results = [...this.products].filter(p => {
      if (this.category !== 'All' && p.category !== this.category) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });

    if (this.sortBy === 'priceAsc') return results.sort((a, b) => a.price - b.price);
    if (this.sortBy === 'priceDesc') return results.sort((a, b) => b.price - a.price);
    return results;
  }
}
