export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Categories</p>
        <h1 className="mt-4 text-4xl font-bold">Curated Collections for Every Player</h1>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {['Pool Cues', 'Carbon Shafts', 'Cue Cases', 'Chalk', 'Gloves', 'Pool Tables', 'Accessories'].map((category) => (
            <a key={category} href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="group block overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 p-8 transition hover:border-gold hover:bg-gray-800">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Category</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{category}</h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}