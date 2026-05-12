import { CartItem } from './cart.service';

export interface OrderPayload {
  name: string;
  email: string;
  address: string;
  payment: string;
  items: CartItem[];
  total: number;
  createdAt?: string;
}

export async function placeOrder(order: OrderPayload) {
  const payload = { ...order, createdAt: new Date().toISOString() };
  try {
    const response = await fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Backend order submission failed');
    }

    return await response.json();
  } catch (error) {
    const existing = JSON.parse(localStorage.getItem('billiardOrders') || '[]');
    existing.push(payload);
    localStorage.setItem('billiardOrders', JSON.stringify(existing));
    return { status: 'local-saved', order: payload };
  }
}
