import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cartItems, cartTotal, removeFromCart, changeQty, clearCart } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-4">
      <h2>Your Cart</h2>
      <div *ngIf="cartItems().length === 0" class="alert alert-info">Your cart is empty.</div>
      <div *ngIf="cartItems().length > 0">
        <div class="list-group mb-3">
          <div class="list-group-item d-flex align-items-center" *ngFor="let it of cartItems()">
            <img [src]="it.image || 'https://via.placeholder.com/80'" alt width="80" height="60" class="mr-3" style="object-fit:cover">
            <div class="flex-grow-1">
              <div class="d-flex justify-content-between">
                <strong>{{ it.title }}</strong>
                <span>{{ (it.price * it.qty) | number:'1.2-2' }} €</span>
              </div>
              <div class="mt-2 d-flex align-items-center gap-2">
                <input type="number" min="1" [value]="it.qty" (change)="changeQty(it.id, $any($event.target).value)" style="width:70px" class="form-control form-control-sm">
                <button class="btn btn-sm btn-outline-danger" (click)="removeFromCart(it.id)">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-outline-secondary" (click)="clearCart()">Clear cart</button>
          </div>
          <div>
            <strong>Total: {{ cartTotal() | number:'1.2-2' }} €</strong>
            <button class="btn btn-primary ml-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CartComponent {
  cartItems = cartItems;
  cartTotal = cartTotal;
  removeFromCart = removeFromCart;
  changeQty = (id: number, v: any) => changeQty(id, Number(v));
  clearCart = clearCart;
}
