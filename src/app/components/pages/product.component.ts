import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { getProducts } from '../../services/product.service';
import { addToCart } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-4">
      <button class="btn btn-link mb-3" (click)="goBack()">← Back to shop</button>
      <div *ngIf="product; else notFound">
        <div class="row">
          <div class="col-md-6">
            <img [src]="product.image" class="img-fluid" alt>
          </div>
          <div class="col-md-6">
            <h2>{{ product.title }}</h2>
            <p class="text-muted">{{ product.category }}</p>
            <h3 class="text-primary">{{ product.price }}</h3>
            <p class="mb-4">{{ product.description || 'High quality pool gear.' }}</p>
            <div class="d-flex gap-2">
              <button class="btn btn-primary" (click)="addToCart(product)">Add to cart</button>
              <button class="btn btn-outline-secondary" (click)="goBack()">Continue shopping</button>
            </div>
          </div>
        </div>
      </div>
      <ng-template #notFound>
        <div class="alert alert-warning">Product not found.</div>
      </ng-template>
    </div>
  `
})
export class ProductComponent {
  id = '';
  product: any = null;
  addToCart = addToCart;
  constructor(private route: ActivatedRoute, private router: Router){
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.product = getProducts().find(p => String(p.id) === String(this.id)) || null;
  }
  goBack(){ this.router.navigate(['/shop']); }
}
