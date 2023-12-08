import Events from '@/src/components/home-page/events/events';
import Subscription from '@/src/components/home-page/subscription/subscription';
import Meet from '@/src/components/home-page/meet/meet';
import Initiatives from '@/src/components/home-page/initiatives/initiatives';
import Blog from '@/src/components/home-page/blog/blog';
import Mission from '@/src/components/home-page/mission/mission';
import Book from '@/src/components/home-page/book/book';
import { HeroSection } from '@/src/components/home-page/hero-section/hero-section';
import { Exclusive } from '@/src/components/home-page/exclusive/exclusive';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <Mission />
      <Events />
      <div className="max-w-[1440px] mx-auto ">
        <Subscription />
      </div>
      <Meet />
      <div className="max-w-[1440px] mx-auto">
        <Initiatives />
        <Book />
        <Blog />
      </div>
      <Exclusive />
    </main>
  );
}
