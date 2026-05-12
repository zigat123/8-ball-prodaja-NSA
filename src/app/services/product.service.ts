export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image?: string;
  description?: string;
  badge?: string;
}

export const sampleProducts: Product[] = [
  { id: 1, title: 'Predator LE Artisan Cue', category: 'Pool cues', price: 2659.0, image: '/images/pr%20le%20artisan%20cue.png', description: 'Limited edition radial cue with premium ebony and inlay.', badge: 'Premium' },
  { id: 2, title: 'Pro Carbon Fiber Shaft', category: 'Carbon shafts', price: 549.0, image: '/images/Pro%20Carbon%20Fiber%20Shaft.png', description: 'Lightweight carbon fiber shaft for elite control.', badge: 'Top Seller' },
  { id: 3, title: 'Gamer Break Cue', category: 'Break & jump cues', price: 629.99, image: '/images/Gamer%20Break%20Cue.png', description: 'High-density break cue built for maximum power.' },
  { id: 4, title: 'Jump Cue Pro', category: 'Jump cue', price: 548.99, image: '/images/Jump%20Cue%20Pro.png', description: 'Precision jump cue with multi-zone grip wrap.' },
  { id: 5, title: 'Luxury Cue Case', category: 'Cue cases', price: 700.0, image: '/images/Luxury%20Cue%20Case.png', description: 'Butterfly soft cue case with premium leather accents.' },
  { id: 6, title: 'Tournament Pool Table', category: 'Pool tables', price: 3199.0, image: '/images/Tournament%20Pool%20Table.png', description: 'Regulation table with professional slate and rails.', badge: 'Featured' },
  { id: 7, title: 'Premium Billiard Ball Set', category: 'Billiard balls', price: 79.99, image: '/images/Premium%20Billiard%20Ball%20Set.png', description: 'Pro-level resin ball set with consistent roll.' },
  { id: 8, title: 'Professional Chalk Tube', category: 'Chalk', price: 19.99, image: '/images/Professional%20Chalk%20Tube.png', description: 'Long-lasting chalk for crisp cue ball contact.' },
  { id: 9, title: 'Deluxe Cue Glove', category: 'Gloves', price: 29.0, image: '/images/Deluxe%20Cue%20Glove.png', description: 'Second Skin glove for smooth stroke and grip.' },
  { id: 10, title: 'Triangle Rack', category: 'Triangle rack', price: 18.99, image: '/images/Triangle%20Rack.png', description: 'Precision molded rack for perfect breaks.' }
];

export function getProducts() { return sampleProducts.slice(); }
