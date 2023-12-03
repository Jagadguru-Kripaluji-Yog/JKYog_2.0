import Events from '@/src/components/home-page/events/events';
import Subscription from '@/src/components/home-page/subscription/subscription';
import Meet from '@/src/components/home-page/meet/meet';
import Initiatives from '@/src/components/home-page/initiatives/initiatives';
import Book from '@/src/components/home-page/book/Book';
import Blog from '@/src/components/home-page/blog/Blog';
import Footer from '@/src/components/home-page/footer/Footer';
import Mission from '@/src/components/home-page/mission/mission';
import { HeroSection } from '@/src/components/home-page/hero-section/hero-section';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <Mission />
      <Events />
      <div className="w-[1440px] mx-auto ">
        <Subscription />
      </div>
      <Meet />
      <div className="w-[1440px] mx-auto ">
        <Initiatives />
        <Book />
        <Blog />
      </div>
      <Footer />
    </main>
  );
}
