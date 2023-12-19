import { HeroSection } from '@/src/components/events-page/hero-section/hero-section';
import { OtherEventsSection } from '@/src/components/events-page/other-events-section/other-events-section';
import { PreviousEvents } from '@/src/components/events-page/previous-events/previous-events';
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
      <OtherEventsSection />
      <PreviousEvents />
    </main>
  );
};

export default Page;
