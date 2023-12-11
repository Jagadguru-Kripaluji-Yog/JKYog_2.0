'use client';

import React, { Fragment } from 'react';
import { getUpcommingEvents } from '@/src/api/get-upcomming-events';
import { UpcommingEventCard } from './upcomming-event-card';
import { Button } from '@/src/lib/button/button';
import { useFetchData } from '@/src/hooks/use-fetch-data';

const UpcommingEvents = () => {
  const { data, isLoading } = useFetchData(getUpcommingEvents);

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10 px-4 lg:px-10 w-full">
      <h2 className="text-center lg:text-left text-heading text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px] w-full">
        Upcoming Events
      </h2>
      {data.length ? (
        <div className="flex flex-col items-center xl:gap-3.5 px-2 xl:p-2 rounded-[20px] bg-white w-full">
          {data.map(({ attributes }, index) => {
            return (
              <Fragment key={index}>
                <UpcommingEventCard {...attributes} />
                {index < data.length - 1 && <div className="w-full h-px bg-[#f0ebe1] xl:mt-3.5"></div>}
              </Fragment>
            );
          })}
        </div>
      ) : null}
      <Button type="link" href="/" text="All Events" variant="contained" color="primary" />
    </div>
  );
};

export default UpcommingEvents;
