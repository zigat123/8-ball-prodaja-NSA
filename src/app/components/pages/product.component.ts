import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';
import { addToCart } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container py-5 mt-5">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a routerLink="/shop" class="text-gold text-decoration-none">Products</a></li>
          <li class="breadcrumb-item active text-muted" aria-current="page">{{ product?.title || 'Details' }}</li>
        </ol>
      </nav>

      <div *ngIf="product; else notFound" class="glass p-4 p-lg-5 animate-fade-in">
        <div class="row g-5">
          <div class="col-md-6">
            <div class="product-image-display glass p-4 d-flex align-items-center justify-content-center overflow-hidden" style="min-height: 400px; background: #000;">
              <img [src]="product.image" class="img-fluid" [alt]="product.title" style="max-height: 500px; object-fit: contain;">
            </div>
          </div>
          <div class="col-md-6 d-flex flex-column">
            <div class="mb-auto">
              <span class="badge rounded-pill bg-gold text-dark mb-3 px-3 py-2" *ngIf="product.badge">{{ product.badge }}</span>
              <p class="text-muted text-uppercase letter-spacing-2 mb-1 small">{{ product.category }}</p>
              <h1 class="display-5 fw-bold mb-3">{{ product.title }}</h1>
              <div class="price-box mb-4">
                <span class="gold-gradient-text fs-2 fw-bold">{{ product.price | currency:'EUR':'symbol':'1.2-2' }}</span>
              </div>
              <p class="text-secondary lead mb-5">{{ product.description || 'Experience the ultimate precision and style with our premium billiard equipment. Each piece is crafted to meet professional tournament standards.' }}</p>
            </div>
            
            <div class="actions d-flex gap-3 flex-wrap">
              <button class="btn btn-primary btn-lg px-5 py-3" (click)="addToCart(product!)">
                <i class="fas fa-shopping-cart me-2"></i> Add to Selection
              </button>
              <button class="btn btn-outline-gold btn-lg px-5 py-3" (click)="goBack()">
                Back to Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      <ng-template #notFound>
        <div class="text-center py-5">
          <h2 class="mb-4">Product Not Found</h2>
          <button class="btn btn-primary" (click)="goBack()">Return to Shop</button>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .text-gold { color: var(--gold-primary); }
    .bg-gold { background: var(--gold-primary) !important; }
    .letter-spacing-2 { letter-spacing: 2px; }
    .breadcrumb-item + .breadcrumb-item::before { color: var(--text-muted); }
  `]
})
export class ProductComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  product: Product | null = null;
  addToCart = addToCart;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (data) => this.product = data,
        error: () => this.product = null
      });
    }
  }

  goBack() { this.router.navigate(['/shop']); }
}
