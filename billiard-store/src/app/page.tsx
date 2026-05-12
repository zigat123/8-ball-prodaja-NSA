import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import TopSellers from '@/components/TopSellers';
import NewArrivals from '@/components/NewArrivals';
import Brands from '@/components/Brands';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <TopSellers />
      <NewArrivals />
      <Brands />
      <Newsletter />
      <Testimonials />
    </div>
  );
}
