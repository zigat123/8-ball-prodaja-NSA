import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card product-card h-100 w-100 overflow-hidden">
      <a [routerLink]="['/product', product.id]"><img [src]="product.image" class="card-img-top" alt=""></a>
      <div class="card-body d-flex flex-column">
        <h6 class="card-title mb-2"><a [routerLink]="['/product', product.id]">{{ product.title }}</a></h6>
        <p class="card-text text-muted small mb-1">{{ product.category }}</p>
        <p class="card-text text-muted small mb-3">{{ product.description }}</p>
        <div class="mt-auto d-flex justify-content-between align-items-center gap-2">
          <strong class="price">{{ product.price | currency:'EUR':'symbol':'1.2-0' }}</strong>
          <button class="btn btn-outline-primary btn-sm" (click)="onAdd()">Add</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card { height: 100%; }
    .card-img-top { height: 240px; object-fit: cover; width: 100%; }
    .card-body { flex: 1; }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() add!: (p: any) => void;
  onAdd() { if (this.add) this.add(this.product); }
}
