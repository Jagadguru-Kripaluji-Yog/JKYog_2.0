'use client';

import { ComponentProps, FC } from 'react';
import { ComposedTabs, ComposedTabsProps } from '../../ui/tabs/composed-tabs';
import { CountrySelect } from './country-select';
import { EventCard } from './event-card';
import { Button } from '@/src/lib/button/button';

const props: ComponentProps<typeof EventCard> = {
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

const cards = [props, props, props, props, props];

const tabData: ComposedTabsProps['data'] = [
  {
    label: 'All',
    content: (
      <div className="grid grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <EventCard key={i} {...card} />
        ))}
      </div>
    ),
  },
  { label: 'Ahmadabad', content: 'Ahmadabad' },
  { label: 'Bangalore', content: 'Bangalore' },
  { label: 'Delhi', content: 'Delhi' },
  { label: 'Mathura', content: 'Mathura' },
  { label: 'Mumbai', content: 'Mumbai' },
  { label: 'Vrindavan', content: 'Vrindavan' },
  { label: 'Hyderabad', content: 'Hyderabad' },
  { label: 'Patan', content: 'Patan' },
  { label: 'Vrindavan', content: 'Vrindavan' },
  { label: 'Chennai', content: 'Chennai' },
  { label: 'Kolkata', content: 'Kolkata' },
];

export const UpcomingEvents: FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-10 mt-[120px] mb-20">
      <div className="flex justify-start mb-10">
        <h2 className="text-center lg:text-left text-heading text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px]">
          The Upcoming Events
        </h2>
        <CountrySelect />
      </div>
      <ComposedTabs data={tabData} limit={6} />
      <div className="flex justify-center mt-10 w-full">
        <Button type="button" variant="contained" color="primary" text="See more" onClick={() => {}} classes="h-12" />
      </div>
    </section>
  );
};
