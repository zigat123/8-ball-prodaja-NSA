import Link from 'next/link';

const posts = [
  { slug: 'mastering-spin', title: 'Mastering Spin Control', excerpt: 'Advanced shot shaping and spin strategies for serious players.' },
  { slug: 'cue-maintenance', title: 'Cue Maintenance Guide', excerpt: 'Keep your cue in championship shape with simple pro techniques.' },
  { slug: 'table-setup', title: 'Table Setup for Peak Performance', excerpt: 'How to optimize cloth, pockets and lighting for elite play.' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Insights</p>
        <h1 className="mt-4 text-4xl font-bold">Billiard Guides and Video Tutorials</h1>
        <div className="mt-12 space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 p-8 transition hover:border-gold hover:bg-gray-800">
              <h2 className="text-2xl font-semibold text-white group-hover:text-gold">{post.title}</h2>
              <p className="mt-3 text-gray-300">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}