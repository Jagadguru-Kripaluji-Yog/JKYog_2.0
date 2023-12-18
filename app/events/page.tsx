import { HeroSection } from '@/src/components/events-page/hero-section/hero-section';
import { SpecialEventSection } from '@/src/components/events-page/special-event-section/special-event-section';
import { UpcomingEvents } from '@/src/components/events-page/upcoming-events/upcoming-events';
import { UpcomingRetreats } from '@/src/components/events-page/upcoming-retreats/upcoming-retreats';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <main>
      <HeroSection />
      <UpcomingEvents />
      <UpcomingRetreats />
      <SpecialEventSection />
    </main>
  );
};

export default Page;
