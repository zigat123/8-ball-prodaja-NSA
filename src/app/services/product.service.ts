import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError, map } from 'rxjs';

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
  { _id: '1', title: 'Predator LE Artisan Cue', category: 'Pool cues', price: 2659.0, image: '/images/pr le artisan cue.png', description: 'Limited edition radial cue with premium ebony and inlay.', badge: 'Premium' },
  { _id: '2', title: 'Pro Carbon Fiber Shaft', category: 'Carbon shafts', price: 549.0, image: '/images/Pro Carbon Fiber Shaft.png', description: 'Lightweight carbon fiber shaft for elite control.', badge: 'Top Seller' },
  { _id: '3', title: 'Gamer Break Cue', category: 'Break & jump cues', price: 629.99, image: '/images/Gamer Break Cue.png', description: 'High-density break cue built for maximum power.' },
  { _id: '4', title: 'Jump Cue Pro', category: 'Jump cue', price: 548.99, image: '/images/Jump Cue Pro.png', description: 'Precision jump cue with multi-zone grip wrap.' },
  { _id: '5', title: 'Luxury Cue Case', category: 'Cue cases', price: 700.0, image: '/images/Luxury Cue Case.png', description: 'Butterfly soft cue case with premium leather accents.' },
  { _id: '6', title: 'Tournament Pool Table', category: 'Pool tables', price: 3199.0, image: '/images/Tournament Pool Table.png', description: 'Regulation table with professional slate and rails.', badge: 'Featured' },
  { _id: '7', title: 'Premium Billiard Ball Set', category: 'Billiard balls', price: 79.99, image: '/images/Premium Billiard Ball Set.png', description: 'Pro-level resin ball set with consistent roll.' },
  { _id: '8', title: 'Professional Chalk Tube', category: 'Chalk', price: 19.99, image: '/images/Professional Chalk Tube.png', description: 'Long-lasting chalk for crisp cue ball contact.' },
  { _id: '9', title: 'Deluxe Cue Glove', category: 'Gloves', price: 29.0, image: '/images/Deluxe Cue Glove.png', description: 'Second Skin glove for smooth stroke and grip.' },
  { _id: '10', title: 'Triangle Rack', category: 'Triangle rack', price: 18.99, image: '/images/Triangle Rack.png', description: 'Precision molded rack for perfect breaks.' }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = '/api';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`).pipe(
      map(products => {
        if (!products || products.length === 0) return sampleProducts;
        return products;
      }),
      catchError(() => {
        console.warn('Atlas API failed, using sample products as fallback');
        return of(sampleProducts);
      })
    );
  }

  getProductById(id: string): Observable<Product | null> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`).pipe(
      catchError(() => {
        const found = sampleProducts.find(p => p._id === id || p.id === id);
        return of(found || null);
      })
    );
  }
}
