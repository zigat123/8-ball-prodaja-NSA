const brands = [
  { name: 'Predator', logo: '/predator-logo.png' },
  { name: 'McDermott', logo: '/mcdermott-logo.png' },
  { name: 'Cuetec', logo: '/cuetec-logo.png' },
  { name: 'Taom', logo: '/taom-logo.png' },
  { name: 'Kamui', logo: '/kamui-logo.png' },
  { name: 'Jacoby', logo: '/jacoby-logo.png' },
];

export default function Brands() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Trusted Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center h-16 bg-gray-800 rounded-lg">
              <span className="text-white font-semibold">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}