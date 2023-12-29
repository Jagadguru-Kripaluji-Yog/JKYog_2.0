import { Attendees } from '@/src/components/single-event-page/attendees/attendees';
import { Description } from '@/src/components/single-event-page/description/description';
import { Details } from '@/src/components/single-event-page/details/details';
import { FrequentlyAsked } from '@/src/components/single-event-page/frequently-asked/frequently-asked';
import { EventTitle } from '@/src/components/single-event-page/event-title/event-title';
import { MightBeInterested } from '@/src/components/single-event-page/might-be-interested/might-be-interested';
import { PastEvents } from '@/src/components/single-event-page/past-events/past-events';
import { Testimonials } from '@/src/components/single-event-page/testimonials/testimonials';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <main>
      <EventTitle />
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[670px_467px] justify-end items-start gap-8 lg:gap-10 px-4 lg:px-10 pt-8 lg:pt-10 pb-20 lg:pb-[100px] max-w-[1440px] mx-auto px-10">
        <Description />
        <Details />
      </section>
      <Attendees />
      <Testimonials />
      <PastEvents />
      <FrequentlyAsked />
      <MightBeInterested />
    </main>
  );
};

export default Page;
