import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card product-card h-100">
      <div class="image-container">
        <a [routerLink]="['/product', product._id || product.id]">
          <img [src]="product.image" class="card-img-top" alt="" loading="eager">
        </a>
      </div>
      <div class="card-body d-flex flex-column p-4">
        <h6 class="card-title mb-1">
          <a [routerLink]="['/product', product._id || product.id]" class="text-decoration-none text-white fw-semibold fs-5">
            {{ product.title }}
          </a>
        </h6>
        <p class="text-muted small mb-2 text-uppercase letter-spacing-1">{{ product.category }}</p>
        <p class="card-text text-secondary small mb-4 line-clamp-2">{{ product.description }}</p>
        <div class="mt-auto d-flex align-items-center justify-content-between">
          <span class="price-tag gold-gradient-text">{{ product.price | currency:'EUR':'symbol':'1.2-2' }}</span>
          <a [routerLink]="['/product', product._id || product.id]" class="btn btn-link text-gold p-0 text-decoration-none">
            Details <i class="fas fa-chevron-right ms-1 small"></i>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: var(--bg-surface);
      border: 1px solid var(--glass-border);
      transition: var(--transition);
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px -20px rgba(212, 175, 55, 0.3);
        border-color: rgba(212, 175, 55, 0.3);
        
        .card-img-top { transform: scale(1.05); }
      }
    }

    .image-container {
      height: 240px;
      overflow: hidden;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-img-top {
      max-height: 100%;
      width: auto;
      object-fit: contain;
      transition: var(--transition);
    }

    .price-tag {
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .letter-spacing-1 { letter-spacing: 1px; }
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .text-gold { color: var(--gold-primary); }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
}
