'use client';

import React from 'react';
import { getUpcommingEvents } from '@/src/api/get-upcomming-events';
import { UpcommingEventCard } from './upcomming-event-card';
import { Button } from '@/src/lib/button/button';
import { useFetchData } from '@/src/hooks/use-fetch-data';

const UpcommingEvents = () => {
  const { data, isLoading } = useFetchData(getUpcommingEvents);

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10 self-stretch">
      <p className="text-heading text-[44px] self-stretch not-italic font-ptserif font-bold leading-[56px]">
        Upcoming Events
      </p>
      {data.length ? (
        <div className="flex-col items-center gap-3.5 self-stretch p-2 rounded-[20px] bg-white">
          {data.map(({ attributes }, index) => {
            return (
              <div key={index}>
                <UpcommingEventCard {...attributes} />
                {index < data.length - 1 && <div className="w-full h-[1.25px] bg-[#f0ebe1]"></div>}
              </div>
            );
          })}
        </div>
      ) : null}
      <Button href="/" text="All Events" variant="contained" color="primary" />
    </div>
  );
};

export default UpcommingEvents;
