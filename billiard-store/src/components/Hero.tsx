export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.2),_transparent_45%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(0,0,0,0.9))]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">Luxury billiard supply</p>
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Professional cues, tables and accessories for the elite player.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          Discover premium billiard equipment with cinematic design, high performance, and a luxury sports shopping experience.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/shop"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-black transition hover:bg-yellow-400"
          >
            Explore Collections
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-gray-700 bg-black px-8 py-4 text-base font-semibold text-white transition hover:border-gold hover:text-gold"
          >
            Contact a Pro
          </a>
        </div>
      </div>
    </section>
  );
}