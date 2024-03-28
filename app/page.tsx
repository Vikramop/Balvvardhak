import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';
import BestSeller from '@/components/BestSeller';
import Categories from '@/components/Categories';
import HealthyRoots from '@/components/HealthyRoots';
import Recipies from '@/components/Recipies';
import Blogs from '@/components/Blogs';
import Prepare from '@/components/Prepare';
import FollowUs from '@/components/FollowUs';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <BestSeller />
      <Categories />
      <HealthyRoots />
      <Prepare />
      <Reviews />
      <FollowUs />
      <Recipies />
      <Blogs />
    </div>
  );
}
