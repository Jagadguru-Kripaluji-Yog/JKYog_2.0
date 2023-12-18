import { ComponentProps, FC } from 'react';
import { EventCard } from '../upcoming-events/event-card';

const retreats: ComponentProps<typeof EventCard> = {
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

const cards = [retreats, retreats, retreats];

export const UpcomingRetreats: FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-10 mt-[120px] mb-20">
      <h2 className="text-center text-heading text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px] mb-10">
        Upcoming Retreats
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <EventCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
};
