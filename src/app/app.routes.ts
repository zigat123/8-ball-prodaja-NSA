import { Routes } from '@angular/router';
import { ShopComponent } from './components/pages/shop.component';
import { ProductComponent } from './components/pages/product.component';
import { CartComponent } from './components/pages/cart.component';
import { CheckoutComponent } from './components/pages/checkout.component';
import { RegisterComponent } from './components/pages/register.component';
import { LoginComponent } from './components/pages/login.component';
import { HomeComponent } from './components/pages/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'store', component: ShopComponent, canActivate: [AuthGuard] },
	{ path: 'product/:id', component: ProductComponent, canActivate: [AuthGuard] },
	{ path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
	{ path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
	{ path: '**', redirectTo: '/login' }
];
