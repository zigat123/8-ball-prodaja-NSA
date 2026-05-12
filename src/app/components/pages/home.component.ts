import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ShopComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
