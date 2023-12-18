import { HeroSection } from '@/src/components/events-page/hero-section/hero-section';
import { UpcomingEvents } from '@/src/components/events-page/upcoming-events/upcoming-events';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <main>
      <HeroSection />
      <UpcomingEvents />
    </main>
  );
};

export default Page;
