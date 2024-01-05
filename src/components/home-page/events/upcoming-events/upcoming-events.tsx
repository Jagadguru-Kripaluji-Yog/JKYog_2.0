'use client';

import React, { Fragment } from 'react';
import { getUpcomingEvents } from '@/src/api/upcoming-events';
import { UpcomingEventCard } from './upcoming-event-card';
import { Button } from '@/src/components/button/button';
import { useFetchData } from '@/src/hooks/use-fetch-data';
import { Heading } from '@/src/components/heading/heading';

const UpcomingEvents = () => {
  const { data, isLoading } = useFetchData(getUpcomingEvents);

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10 px-4 lg:px-10 w-full">
      <Heading title="Upcoming Events" classes="w-full lg:text-left" />
      {data.length ? (
        <div className="flex flex-col items-center xl:gap-3.5 px-2 xl:p-2 rounded-[20px] bg-white w-full">
          {data.map(({ attributes }, index) => {
            return (
              <Fragment key={index}>
                <UpcomingEventCard {...attributes} />
                {index < data.length - 1 && <div className="w-full h-px bg-border-primary xl:mt-3.5"></div>}
              </Fragment>
            );
          })}
        </div>
      ) : null}
      <Button type="link" href="/" text="All Events" variant="contained" color="primary" />
    </div>
  );
};

export default UpcomingEvents;