import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  auth$!: Observable<boolean>;
  constructor(private auth: AuthService, private router: Router) {
    this.auth$ = this.auth.authState;
  }
  logout(){ this.auth.logout(); this.router.navigate(['/login']); }
}
