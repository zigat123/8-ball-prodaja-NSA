import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean | UrlTree {
    if (this.auth.isAuthenticated()) return true;
    // If no users exist yet, force registration first
    if (!this.auth.hasUsers()) return this.router.parseUrl('/register');
    return this.router.parseUrl('/login');
  }
}
