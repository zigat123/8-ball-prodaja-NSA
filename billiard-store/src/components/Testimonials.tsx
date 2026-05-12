const testimonials = [
  {
    name: 'John Doe',
    review: 'Amazing quality cues! Worth every penny.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    review: 'Fast shipping and excellent customer service.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    review: 'Premium equipment for serious players.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.review}"</p>
              <p className="text-white font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}