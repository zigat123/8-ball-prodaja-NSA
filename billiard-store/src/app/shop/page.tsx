import Link from 'next/link';

const products = [
  { id: 'predator-cue', name: 'Predator Elite Cue', price: 299.99, status: 'Top Seller' },
  { id: 'mcdermott-cue', name: 'McDermott Legacy Cue', price: 249.99, status: 'Featured' },
  { id: 'cuetec-shaft', name: 'Cuetec Carbon Shaft', price: 149.99, status: 'New Arrival' },
  { id: 'kamui-chalk', name: 'Kamui Chalk Set', price: 19.99, status: 'Bestseller' },
];

export default function ShopPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="border-b border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Shop</p>
              <h1 className="mt-4 text-4xl font-bold">Premium Billiard Equipment</h1>
              <p className="mt-3 max-w-2xl text-gray-300">
                Browse curated premium cues, shafts, cases, chalk, accessories and table gear.
              </p>
            </div>
            <div className="space-x-2">
              <button className="rounded-full border border-gray-700 px-4 py-2 text-sm uppercase tracking-[0.25em] text-white transition hover:border-gold hover:text-gold">
                Filter
              </button>
              <button className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400">
                Sort: Best Sellers
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group block overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 p-6 transition hover:border-gold hover:shadow-xl">
                <div className="h-72 rounded-3xl bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 p-6">
                  <div className="mb-6 h-full rounded-3xl bg-slate-900" />
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.status}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">{product.name}</h2>
                  <p className="mt-4 text-lg font-bold text-gold">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}