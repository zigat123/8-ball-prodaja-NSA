export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Contact</p>
        <h1 className="mt-4 text-4xl font-bold">Live Support for Competitive Players</h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          Our concierge support team is available to help with product recommendations, order updates, and premium checkout questions.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Email</p>
            <p className="mt-4 text-xl font-semibold text-white">support@billiardstore.com</p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Phone</p>
            <p className="mt-4 text-xl font-semibold text-white">+1 (800) 555-POOL</p>
          </div>
        </div>
      </div>
    </div>
  );
}