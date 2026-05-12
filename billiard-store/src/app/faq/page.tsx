const questions = [
  {
    question: 'How do I track my order?',
    answer: 'Use the order tracking page after checkout and enter your order number to see shipment status in real time.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'We accept Stripe card payments and PayPal for a premium checkout experience.',
  },
  {
    question: 'Can I return a damaged product?',
    answer: 'Yes, our premium returns policy covers damaged or defective items with quick replacements or refunds.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Support</p>
        <h1 className="mt-4 text-4xl font-bold">Frequently Asked Questions</h1>
        <div className="mt-12 space-y-6">
          {questions.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
              <h2 className="text-2xl font-semibold text-white">{faq.question}</h2>
              <p className="mt-3 text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}