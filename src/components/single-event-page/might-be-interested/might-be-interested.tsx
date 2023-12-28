import { ComponentProps, FC } from 'react';
import { EventCard } from '../../events-page/upcoming-events/event-card';

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
};

const events = [event, event, event];

export const MightBeInterested: FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-10 py-[100px]">
      <h2 className="text-heading text-[44px] leading-[56px] font-ptserif font-bold text-center mb-10">
        You might be interested
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {events.map((card, i) => (
          <EventCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
};
