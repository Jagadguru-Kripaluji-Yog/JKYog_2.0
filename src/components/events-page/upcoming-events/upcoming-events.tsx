'use client';

import { ComponentProps, FC } from 'react';
import { CountrySelect } from './country-select';
import { EventCard } from './event-card';
import { Button } from '@/src/components/button/button';
import { FilterSelect } from './filter-select';
import { ComposedTabs, ComposedTabsProps } from '../../tabs/composed-tabs';
import { Heading } from '../../heading/heading';

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
  link: '/events/1',
};

const cards = [props, props, props, props, props];

const tabData: ComposedTabsProps['data'] = [
  {
    label: 'All',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
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
    <section className="max-w-[1440px] mx-auto px-4 lg:px-10 pt-[72px] lg:pt-[120px]">
      <div className="flex flex-col-reverse items-center lg:flex-row justify-start mb-5 lg:mb-10">
        <div className="lg:hidden w-full">
          <FilterSelect />
        </div>
        <Heading title="The Upcoming Events" classes="mb-6 lg:mb-0 lg:text-left" />
        <CountrySelect />
      </div>
      <ComposedTabs data={tabData} limit={6} />
      <div className="flex justify-center mt-10 w-full">
        <Button type="link" href="/" variant="contained" color="primary" text="See more" classes="h-12" />
      </div>
    </section>
  );
};