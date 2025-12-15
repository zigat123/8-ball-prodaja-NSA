import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cartItems, cartTotal, clearCart } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-4">
      <h2>Checkout</h2>
      <div *ngIf="cartItems().length === 0" class="alert alert-info">Your cart is empty.</div>
      <div *ngIf="cartItems().length > 0">
        <div class="mb-3">
          <h5>Order Summary</h5>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between" *ngFor="let it of cartItems()">{{ it.title }} x{{ it.qty }} <span>{{ (it.price * it.qty) | number:'1.2-2' }} €</span></li>
          </ul>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <strong>Total:</strong>
            <strong>{{ cartTotal() | number:'1.2-2' }} €</strong>
          </div>
        </div>
        <form (submit)="placeOrder($event)">
          <div class="row">
            <div class="col-md-6 mb-3">
              <input class="form-control" placeholder="Full name" required>
            </div>
            <div class="col-md-6 mb-3">
              <input class="form-control" placeholder="Email" type="email" required>
            </div>
            <div class="col-12 mb-3">
              <input class="form-control" placeholder="Address" required>
            </div>
            <div class="col-12 mb-3">
              <input class="form-control" placeholder="Payment info (mock)" required>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <button class="btn btn-outline-secondary" type="button" (click)="clearCart()">Cancel</button>
            <button class="btn btn-primary" type="submit">Place Order</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class CheckoutComponent {
  cartItems = cartItems;
  cartTotal = cartTotal;
  clearCart = clearCart;
  placeOrder(e: Event){
    e.preventDefault();
    alert('Order placed — thank you!');
    this.clearCart();
  }
}
