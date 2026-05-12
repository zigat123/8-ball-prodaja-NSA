import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';

export interface Product {
  id?: string;
  _id?: string;
  title: string;
  category: string;
  price: number;
  image?: string;
  description?: string;
  badge?: string;
}

export const sampleProducts: Product[] = [
  { title: 'Predator LE Artisan Cue', category: 'Pool cues', price: 2659.0, image: '/images/pr%20le%20artisan%20cue.png', description: 'Limited edition radial cue with premium ebony and inlay.', badge: 'Premium' },
  { title: 'Pro Carbon Fiber Shaft', category: 'Carbon shafts', price: 549.0, image: '/images/Pro%20Carbon%20Fiber%20Shaft.png', description: 'Lightweight carbon fiber shaft for elite control.', badge: 'Top Seller' },
  { title: 'Gamer Break Cue', category: 'Break & jump cues', price: 629.99, image: '/images/Gamer%20Break%20Cue.png', description: 'High-density break cue built for maximum power.' },
  { title: 'Jump Cue Pro', category: 'Jump cue', price: 548.99, image: '/images/Jump%20Cue%20Pro.png', description: 'Precision jump cue with multi-zone grip wrap.' },
  { title: 'Luxury Cue Case', category: 'Cue cases', price: 700.0, image: '/images/Luxury%20Cue%20Case.png', description: 'Butterfly soft cue case with premium leather accents.' },
  { title: 'Tournament Pool Table', category: 'Pool tables', price: 3199.0, image: '/images/Tournament%20Pool%20Table.png', description: 'Regulation table with professional slate and rails.', badge: 'Featured' },
  { title: 'Premium Billiard Ball Set', category: 'Billiard balls', price: 79.99, image: '/images/Premium%20Billiard%20Ball%20Set.png', description: 'Pro-level resin ball set with consistent roll.' },
  { title: 'Professional Chalk Tube', category: 'Chalk', price: 19.99, image: '/images/Professional%20Chalk%20Tube.png', description: 'Long-lasting chalk for crisp cue ball contact.' },
  { title: 'Deluxe Cue Glove', category: 'Gloves', price: 29.0, image: '/images/Deluxe%20Cue%20Glove.png', description: 'Second Skin glove for smooth stroke and grip.' },
  { title: 'Triangle Rack', category: 'Triangle rack', price: 18.99, image: '/images/Triangle%20Rack.png', description: 'Precision molded rack for perfect breaks.' }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`).pipe(
      catchError(() => {
        console.warn('Atlas API failed, using sample products as fallback');
        return of(sampleProducts);
      })
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`).pipe(
      catchError(() => {
        const found = sampleProducts.find((p, index) => index.toString() === id || p._id === id);
        return found ? of(found) : of({} as Product);
      })
    );
  }
}
