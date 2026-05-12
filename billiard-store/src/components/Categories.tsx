import Link from 'next/link';

const categories = [
  { name: 'Pool Cues', image: '/cue.jpg', href: '/category/pool-cues' },
  { name: 'Carbon Shafts', image: '/shaft.jpg', href: '/category/carbon-shafts' },
  { name: 'Cue Cases', image: '/case.jpg', href: '/category/cue-cases' },
  { name: 'Chalk', image: '/chalk.jpg', href: '/category/chalk' },
  { name: 'Gloves', image: '/glove.jpg', href: '/category/gloves' },
  { name: 'Pool Tables', image: '/table.jpg', href: '/category/pool-tables' },
  { name: 'Accessories', image: '/accessories.jpg', href: '/category/accessories' },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-white text-lg">{category.name}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}