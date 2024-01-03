import { ComponentProps, FC } from 'react';
import { EventCard } from '../../events-page/upcoming-events/event-card';
import { Heading } from '../../heading/heading';

const event: ComponentProps<typeof EventCard> = {
  image: '/images/events-page/event-card.png',
  heading: 'Banara Sadhana Shivir',
  date: '2023-11-21T18:33:00.000Z',
  place: 'Jagadguru Kripalu University Banara, Via – Mundali Colony, Tehsil – Damapada Cuttack – 754006',
  time: '11:00 AM - 11:00 AM',
  tags: [
    { text: '25 December', variant: 'primary' },
    { text: 'Program', variant: 'secondary' },
  ],
  link: '/events/1',
};

const events = [event, event, event];

export const MightBeInterested: FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 lg:px-10 py-20 lg:py-[100px]">
      <Heading title="You might be interested" classes="mb-6 lg:mb-10" />
      <div className="flex gap-3 lg:gap-5 overflow-auto no-scrollbar -mr-4 pr-4">
        {events.map((card, i) => (
          <EventCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
};
