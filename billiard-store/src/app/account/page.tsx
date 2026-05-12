export default function AccountPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Account</p>
        <h1 className="mt-4 text-4xl font-bold">Member Access</h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          Log in to manage orders, wishlists, rewards, and premium account features.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <a href="/auth/login" className="rounded-3xl border border-gray-800 bg-gray-900 p-8 text-center transition hover:border-gold hover:bg-gray-800">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Returning Customer</p>
            <p className="mt-4 text-xl font-semibold text-white">Login</p>
          </a>
          <a href="/auth/register" className="rounded-3xl border border-gray-800 bg-gray-900 p-8 text-center transition hover:border-gold hover:bg-gray-800">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">New Member</p>
            <p className="mt-4 text-xl font-semibold text-white">Create Account</p>
          </a>
        </div>
      </div>
    </div>
  );
}