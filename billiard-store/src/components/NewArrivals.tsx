'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const newArrivals = [
  { id: 1, name: 'New Cue Model', price: 349.99, image: '/new-cue.jpg' },
  { id: 2, name: 'Carbon Shaft Pro', price: 149.99, image: '/carbon.jpg' },
  { id: 3, name: 'Luxury Case', price: 89.99, image: '/luxury-case.jpg' },
  { id: 4, name: 'Pro Gloves', price: 29.99, image: '/gloves.jpg' },
  { id: 5, name: 'Table Accessory', price: 49.99, image: '/accessory.jpg' },
];

export default function NewArrivals() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">New Arrivals</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {newArrivals.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-white">{product.name}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold">{product.name}</h3>
                  <p className="text-gold font-bold">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}