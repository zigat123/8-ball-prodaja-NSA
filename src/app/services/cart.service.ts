import { signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  qty: number;
  image?: string;
}

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem('billiardCart');
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem('billiardCart', JSON.stringify(items));
  } catch {
    // ignore
  }
}

export const cartItems = signal<CartItem[]>(loadCart());

export const cartCount = computed(() => cartItems().reduce((s, i) => s + i.qty, 0));
export const cartTotal = computed(() => cartItems().reduce((s, i) => s + i.price * i.qty, 0));

export function addToCart(product: { id: number; title: string; price: string | number; image?: string }) {
  const price = typeof product.price === 'string' ? parseFloat(String(product.price).replace(/[^0-9.]/g, '')) : Number(product.price);
  const existing = cartItems().find(i => i.id === product.id);
  if (existing) {
    cartItems.update(items => items.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
  } else {
    cartItems.update(items => [...items, { id: product.id, title: product.title, price: price || 0, qty: 1, image: product.image }]);
  }
  saveCart(cartItems());
}

export function removeFromCart(productId: number) {
  cartItems.update(items => {
    const next = items.filter(i => i.id !== productId);
    saveCart(next);
    return next;
  });
}

export function changeQty(productId: number, qty: number) {
  if (qty <= 0) return removeFromCart(productId);
  cartItems.update(items => {
    const next = items.map(i => i.id === productId ? { ...i, qty } : i);
    saveCart(next);
    return next;
  });
}

export function clearCart() {
  cartItems.set([]);
  saveCart([]);
}
