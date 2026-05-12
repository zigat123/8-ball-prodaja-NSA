export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Login</p>
        <h1 className="mt-4 text-4xl font-bold">Welcome Back</h1>
        <p className="mt-4 text-gray-300">Sign in to manage your orders, wishlist, and loyalty rewards.</p>
        <div className="mt-12 rounded-3xl border border-gray-800 bg-gray-900 p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" className="mt-3 w-full rounded-2xl border border-gray-700 bg-black px-4 py-3 text-white focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input type="password" className="mt-3 w-full rounded-2xl border border-gray-700 bg-black px-4 py-3 text-white focus:outline-none focus:border-gold" />
            </div>
            <button className="w-full rounded-full bg-gold px-6 py-4 text-base font-semibold text-black transition hover:bg-yellow-400">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}