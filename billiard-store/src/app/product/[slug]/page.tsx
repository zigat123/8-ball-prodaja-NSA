import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <div className="flex-1 rounded-3xl border border-gray-800 bg-gray-900 p-6">
            <div className="h-[420px] rounded-3xl bg-slate-900" />
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[1, 2, 3].map((index) => (
                <div key={index} className="h-28 rounded-3xl bg-gray-800" />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Product</p>
            <h1 className="mt-4 text-4xl font-bold">Premium Cue Collection</h1>
            <p className="mt-4 text-gold text-3xl font-semibold">$299.99</p>
            <div className="mt-6 space-y-4 rounded-3xl border border-gray-800 bg-gray-900 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Variants</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {['12.5mm', '13mm', '14mm'].map((variant) => (
                    <button key={variant} className="rounded-full border border-gray-700 px-4 py-2 text-sm text-white transition hover:border-gold hover:text-gold">
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Shipping</p>
                <p className="mt-2 text-gray-300">Free express shipping on orders over $150. Track orders in real time.</p>
              </div>
              <button className="w-full rounded-full bg-gold px-6 py-4 text-base font-semibold text-black transition hover:bg-yellow-400">
                Add to Cart
              </button>
            </div>
            <div className="mt-10 rounded-3xl border border-gray-800 bg-gray-900 p-6">
              <h2 className="text-2xl font-semibold text-white">Product Details</h2>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li>Professional-grade hardwood shaft</li>
                <li>Premium leather grip with anti-slip finish</li>
                <li>Carbon fiber joint for precision control</li>
                <li>Includes custom case and accessories</li>
              </ul>
            </div>
            <div className="mt-10 border-t border-gray-800 pt-8 text-sm text-gray-400">
              <Link href="/shop" className="text-gold hover:underline">
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}