import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card p-4">
            <h3 class="mb-3">Sign in to your account</h3>
            <form [formGroup]="form" (ngSubmit)="submit()">
              <div class="mb-3"><input formControlName="email" placeholder="Email" class="form-control" /></div>
              <div class="mb-3"><input type="password" formControlName="password" placeholder="Password" class="form-control" /></div>
              <div class="d-flex justify-content-between align-items-center">
                <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Login</button>
                <a routerLink="/register">Create account</a>
              </div>
              <div *ngIf="error" class="text-danger mt-2">{{ error }}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  form = new FormGroup({ email: new FormControl('', [Validators.required, Validators.email]), password: new FormControl('', [Validators.required, Validators.minLength(6)]) });
  error = '';
  constructor(private auth: AuthService, private router: Router) {}
  submit(){
    this.error = '';
    const v = this.form.value as any;
    if(this.auth.login(v.email, v.password)){
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}

