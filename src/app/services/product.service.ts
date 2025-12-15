export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  image?: string;
  description?: string;
}

export const sampleProducts: Product[] = [
  { id: 1, title: 'Standard 8-Ball', category: '8-Balls', price: '€19.99', image: 'https://via.placeholder.com/600x400?text=8-Ball', description: 'Classic resin 8-ball.' },
  { id: 2, title: 'Pro Cue - Maple', category: 'Cues & Sticks', price: '€129.00', image: 'https://via.placeholder.com/600x400?text=Pro+Cue', description: 'Professional two-piece maple cue with leather wrap.' },
  { id: 3, title: 'Tournament Table', category: 'Tables', price: '€1299.00', image: 'https://via.placeholder.com/600x400?text=Tournament+Table', description: 'Regulation size tournament table with slate bed.' },
  { id: 4, title: 'Colored 8-Ball Set', category: '8-Balls', price: '€24.50', image: 'https://via.placeholder.com/600x400?text=Colored+8-Balls', description: 'Vibrant color set for recreational play.' },
  { id: 5, title: 'Break Cue', category: 'Cues & Sticks', price: '€149.00', image: 'https://via.placeholder.com/600x400?text=Break+Cue', description: 'High-density break cue for powerful breaks.' },
  { id: 6, title: 'Cue Case - Double', category: 'Accessories', price: '€69.00', image: 'https://via.placeholder.com/600x400?text=Cue+Case', description: 'Padded double cue case with shoulder strap.' },
  { id: 7, title: 'Chalk Pack (12)', category: 'Accessories', price: '€9.99', image: 'https://via.placeholder.com/600x400?text=Chalk+Pack', description: 'Set of 12 high-quality chalks.' },
  { id: 8, title: 'Leather Cue Tip (3pk)', category: 'Accessories', price: '€7.50', image: 'https://via.placeholder.com/600x400?text=Cue+Tips', description: 'Durable leather tips for consistent play.' },
  { id: 9, title: 'Table Brush', category: 'Accessories', price: '€14.00', image: 'https://via.placeholder.com/600x400?text=Table+Brush', description: 'Soft bristle brush to keep your cloth clean.' },
  { id: 10, title: 'Pro Scoreboard', category: 'Accessories', price: '€29.00', image: 'https://via.placeholder.com/600x400?text=Scoreboard', description: 'Magnetic scoreboard for tournament play.' }
];

export function getProducts() { return sampleProducts.slice(); }
