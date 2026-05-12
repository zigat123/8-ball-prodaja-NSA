import Image from 'next/image';
import Link from 'next/link';

const topSellers = [
  {
    id: 1,
    name: 'Predator Cue',
    price: 299.99,
    image: '/predator.jpg',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'McDermott Cue',
    price: 249.99,
    image: '/mcdermott.jpg',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Cuetec Cue',
    price: 199.99,
    image: '/cuetec.jpg',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Kamui Chalk',
    price: 19.99,
    image: '/chalk.jpg',
    rating: 4.9,
  },
];

export default function TopSellers() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Top Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {topSellers.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-64 bg-gray-700 flex items-center justify-center">
                <span className="text-white">{product.name}</span>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300 ml-1">{product.rating}</span>
                </div>
                <p className="text-gold font-bold">${product.price}</p>
                <button className="mt-4 w-full bg-gold text-black py-2 rounded hover:bg-yellow-500 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}