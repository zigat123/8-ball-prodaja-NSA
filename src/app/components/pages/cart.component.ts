import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cartItems, cartTotal, cartCount, removeFromCart, changeQty, clearCart } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container py-5 mt-4">
      <div class="cart-header mb-5">
        <h1 class="display-4 fw-bold">Your <span class="gold-gradient-text">Cart</span></h1>
        <p class="text-muted">{{ cartCount() }} items in your selection</p>
      </div>

      <div *ngIf="cartItems().length === 0" class="empty-cart glass p-5 text-center">
        <div class="icon-circle mb-4 mx-auto bg-surface"><i class="fas fa-shopping-cart"></i></div>
        <h3>Your cart is currently empty</h3>
        <p class="text-muted mb-4">Looks like you haven't added any premium gear yet.</p>
        <a routerLink="/shop" class="btn btn-primary rounded-pill px-5">Continue Shopping</a>
      </div>

      <div *ngIf="cartItems().length > 0" class="row g-5">
        <div class="col-lg-8">
          <div class="cart-items-list">
            <div class="glass p-4 mb-3 d-flex align-items-center gap-4 animate-fade-in" *ngFor="let it of cartItems()">
              <div class="item-image rounded overflow-hidden shadow-sm" style="width: 120px; height: 90px; background: #000;">
                <img [src]="it.image" alt="" class="w-100 h-100" style="object-fit: contain;">
              </div>
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h5 class="mb-0 fw-semibold">{{ it.title }}</h5>
                  <span class="gold-gradient-text fw-bold fs-5">{{ (it.price * it.qty) | currency:'EUR':'symbol':'1.2-2' }}</span>
                </div>
                <div class="d-flex align-items-center gap-4">
                  <div class="quantity-control d-flex align-items-center bg-black rounded-pill p-1">
                    <button class="btn btn-link text-gold p-0 px-2" (click)="changeQty(it.id, it.qty - 1)"><i class="fas fa-minus small"></i></button>
                    <span class="px-2 small fw-bold">{{ it.qty }}</span>
                    <button class="btn btn-link text-gold p-0 px-2" (click)="changeQty(it.id, it.qty + 1)"><i class="fas fa-plus small"></i></button>
                  </div>
                  <button class="btn btn-link text-muted p-0 small text-decoration-none" (click)="removeFromCart(it.id)">
                    <i class="fas fa-trash-alt me-1"></i> Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <button class="btn btn-link text-muted mt-3 p-0 text-decoration-none" (click)="clearCart()">
            <i class="fas fa-times-circle me-1"></i> Clear entire cart
          </button>
        </div>

        <div class="col-lg-4">
          <div class="glass p-4 sticky-top" style="top: 100px;">
            <h4 class="mb-4">Order Summary</h4>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-secondary">Subtotal</span>
              <span class="text-white">{{ cartTotal() | currency:'EUR':'symbol':'1.2-2' }}</span>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <span class="text-secondary">Shipping</span>
              <span class="text-success small">FREE</span>
            </div>
            <hr class="border-secondary opacity-25">
            <div class="d-flex justify-content-between mb-4">
              <span class="fw-bold">Total</span>
              <span class="gold-gradient-text fw-bold fs-4">{{ cartTotal() | currency:'EUR':'symbol':'1.2-2' }}</span>
            </div>
            <a routerLink="/checkout" class="btn btn-primary w-100 py-3 rounded-pill mb-3">Proceed to Checkout</a>
            <a routerLink="/shop" class="btn btn-outline-gold w-100 py-3 rounded-pill">Keep Shopping</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .text-gold { color: var(--gold-primary); }
    .icon-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: var(--gold-primary);
      border: 1px solid var(--glass-border);
    }
    .sticky-top { z-index: 10; }
  `]
})
export class CartComponent {
  cartItems = cartItems;
  cartTotal = cartTotal;
  cartCount = cartCount;
  removeFromCart = removeFromCart;
  changeQty = (id: string | number, v: any) => changeQty(id, Number(v));
  clearCart = clearCart;
}
