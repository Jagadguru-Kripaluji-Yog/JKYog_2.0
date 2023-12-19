'use client';

import { FC } from 'react';
import { FeaturedEventCard } from '../../home-page/events/featured-events/featured-event-card';
import { useFetchData } from '@/src/hooks/use-fetch-data';
import { getFeaturedEvents } from '@/src/api/get-featured-events';
import { Button } from '@/src/lib/button/button';

export const OtherEventsSection: FC = () => {
  const { data, isLoading } = useFetchData(getFeaturedEvents);
  return (
    <section className="flex flex-col items-center max-w-[1440px] mx-auto px-10 mt-[120px] mb-20">
      <h2 className="text-center text-heading text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px]">
        Other Events
      </h2>
      <div className="grid grid-cols-3 gap-y-5 my-10">
        {data.length
          ? [...data, ...data].map(({ attributes }, index) => (
              <div key={index} className="h-[405px]">
                <FeaturedEventCard {...attributes} />
              </div>
            ))
          : null}
      </div>
      <Button type="link" href="/" variant="contained" color="primary" text="Learn more" />
    </section>
  );
};
