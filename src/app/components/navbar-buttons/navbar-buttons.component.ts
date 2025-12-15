import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { cartCount } from '../../services/cart.service';

@Component({
  selector: 'app-navbar-buttons',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-buttons.component.html',
  styleUrls: ['./navbar-buttons.component.scss']
})
export class NavbarButtonsComponent {
  cartCount = cartCount;
  constructor(private router: Router) {}
  navigateToCart() { this.router.navigate(['/cart']); }
  getCartCount() { return this.cartCount(); }
}
