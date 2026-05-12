import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { cartItems, cartTotal, clearCart } from '../../services/cart.service';
import { placeOrder, OrderPayload } from '../../services/order.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-4">
      <h2>Checkout</h2>
      <div *ngIf="cartItems().length === 0" class="alert alert-info">Your cart is empty.</div>
      <div *ngIf="cartItems().length > 0">
        <div class="mb-4 rounded-4 border border-secondary p-4 bg-dark-secondary">
          <h5 class="text-white">Order Summary</h5>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between align-items-center" *ngFor="let it of cartItems()">
              <span>{{ it.title }} x{{ it.qty }}</span>
              <strong>{{ (it.price * it.qty) | number:'1.2-2' }} €</strong>
            </li>
          </ul>
          <div class="d-flex justify-content-between align-items-center">
            <strong class="text-white">Total:</strong>
            <strong class="text-white">{{ cartTotal() | number:'1.2-2' }} €</strong>
          </div>
        </div>
        <form (ngSubmit)="placeOrder()">
          <div class="row gy-3 mb-4">
            <div class="col-md-6">
              <label class="form-label text-light">Full name</label>
              <input class="form-control bg-black text-white border-secondary" placeholder="Full name" [(ngModel)]="order.name" name="name" required>
            </div>
            <div class="col-md-6">
              <label class="form-label text-light">Email</label>
              <input class="form-control bg-black text-white border-secondary" placeholder="Email" type="email" [(ngModel)]="order.email" name="email" required>
            </div>
            <div class="col-12">
              <label class="form-label text-light">Shipping address</label>
              <input class="form-control bg-black text-white border-secondary" placeholder="Street, city, zip" [(ngModel)]="order.address" name="address" required>
            </div>
            <div class="col-12">
              <label class="form-label text-light">Payment method</label>
              <select class="form-select bg-black text-white border-secondary" [(ngModel)]="order.payment" name="payment" required>
                <option value="stripe">Stripe</option>
                <option value="paypal">PayPal</option>
                <option value="card">Card</option>
              </select>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
            <button class="btn btn-outline-secondary" type="button" (click)="clearCart()">Cancel Order</button>
            <button class="btn btn-primary" type="submit">Place Order</button>
          </div>
          <div *ngIf="successMessage" class="alert alert-success mt-4">{{ successMessage }}</div>
          <div *ngIf="errorMessage" class="alert alert-danger mt-4">{{ errorMessage }}</div>
        </form>
      </div>
    </div>
  `
})
export class CheckoutComponent {
  cartItems = cartItems;
  cartTotal = cartTotal;
  clearCart = clearCart;
  order: OrderPayload = { name: '', email: '', address: '', payment: 'stripe', items: [], total: 0 };
  successMessage = '';
  errorMessage = '';

  async placeOrder() {
    if (!this.order.name || !this.order.email || !this.order.address) {
      this.errorMessage = 'Please complete all checkout fields.';
      return;
    }

    this.order.items = this.cartItems().map(item => ({ ...item }));
    this.order.total = this.cartTotal();

    try {
      const response = await placeOrder(this.order);
      this.successMessage = response?.status === 'local-saved' ? 'Order saved locally and ready for MongoDB integration.' : 'Order placed successfully.';
      this.errorMessage = '';
      clearCart();
    } catch (err) {
      this.successMessage = '';
      this.errorMessage = 'Unable to place order right now. Please try again later.';
    }
  }
}
