import { ComponentProps, FC } from 'react';
import { EventCard } from '../upcoming-events/event-card';
import { Heading } from '../../heading/heading';

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
  link: '/retreat/1',
};

const cards = [retreats, retreats, retreats];

export const UpcomingRetreats: FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 lg:px-10 pt-[72px] lg:pt-[120px] mb-20">
      <Heading title="Upcoming Retreats" classes="mb-10" />
      <div className="flex flex-nowrap md:grid md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 overflow-auto no-scrollbar -mr-4 pr-4">
        {cards.map((card, i) => (
          <EventCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
};
