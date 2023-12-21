'use client';

import { FC } from 'react';
import { FeaturedEventCard } from '../../home-page/events/featured-events/featured-event-card';
import { useFetchData } from '@/src/hooks/use-fetch-data';
import { getFeaturedEvents } from '@/src/api/get-featured-events';
import { Button } from '@/src/lib/button/button';

export const OtherEventsSection: FC = () => {
  const { data, isLoading } = useFetchData(getFeaturedEvents);
  return (
    <section className="max-w-[1440px] mx-auto px-4 lg:px-10 mt-[88px] lg:mt-[120px] mb-20">
      <h2 className="text-center text-heading text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px]">
        Other Events
      </h2>
      <div className="flex flex-nowrap lg:grid lg:grid-cols-3 lg:gap-y-5 mt-6 mb-8 lg:my-10 overflow-auto no-scrollbar -mr-4">
        {data.length
          ? [...data, ...data].map(({ attributes }, index) => (
              <div key={index} className="h-[388px] lg:h-[405px]">
                <FeaturedEventCard {...attributes} />
              </div>
            ))
          : null}
      </div>
      <div className="flex justify-center mt-10 w-full">
        <Button type="link" href="/" variant="contained" color="primary" text="Learn more" />
      </div>
    </section>
  );
};
