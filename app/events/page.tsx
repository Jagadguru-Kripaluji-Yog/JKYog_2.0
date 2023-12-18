import { HeroSection } from '@/src/components/events-page/hero-section/hero-section';
import { UpcomingEvents } from '@/src/components/events-page/upcoming-events/upcoming-events';
import { UpcomingRetreats } from '@/src/components/events-page/upcoming-retreats/upcoming-retreats';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <main>
      <HeroSection />
      <UpcomingEvents />
      <UpcomingRetreats />
    </main>
  );
};

export default Page;
