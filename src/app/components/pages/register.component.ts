import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card p-4">
            <h3 class="mb-3">Create an account</h3>
            <form [formGroup]="form" (ngSubmit)="submit()">
              <div class="mb-3">
                <input formControlName="email" placeholder="Email" class="form-control" />
                <div *ngIf="form.get('email')?.invalid && form.get('email')?.touched" class="text-danger small mt-1">Enter a valid email.</div>
              </div>
              <div class="mb-3">
                <input type="password" formControlName="password" placeholder="Password" class="form-control" />
                <div *ngIf="form.get('password')?.invalid && form.get('password')?.touched" class="text-danger small mt-1">Password must be at least 6 characters.</div>
              </div>
              <div class="mb-3">
                <input type="password" formControlName="confirm" placeholder="Confirm Password" class="form-control" />
                <div *ngIf="form.value.password !== form.value.confirm && form.get('confirm')?.touched" class="text-danger small mt-1">Passwords do not match.</div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <button type="submit" class="btn btn-primary" [disabled]="form.invalid || form.value.password !== form.value.confirm">Register</button>
                <a routerLink="/login">Already have an account?</a>
              </div>
              <div *ngIf="error" class="text-danger mt-2">{{ error }}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RegisterComponent {
  form = new FormGroup({ email: new FormControl('', [Validators.required, Validators.email]), password: new FormControl('', [Validators.required, Validators.minLength(6)]), confirm: new FormControl('', [Validators.required]) });
  error = '';
  constructor(private auth: AuthService, private router: Router) {}
  submit(){
    this.error = '';
    const v = this.form.value as any;
    if(v.password !== v.confirm){ this.error = 'Passwords do not match'; return }
    if(this.auth.register(v.email, v.password)){
      this.router.navigate(['/home']);
    } else {
      this.error = 'Registration failed: email already exists';
    }
  }
}

