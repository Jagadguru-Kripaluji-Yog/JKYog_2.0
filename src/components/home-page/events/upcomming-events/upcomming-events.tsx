'use client';
import React, { useEffect, useState } from 'react';
import { getUpcommingEvents } from '@/src/api/get-upcomming-events';
import { UpcommingEventData } from './types';
import { UpcommingEventCard } from './upcomming-event-card';
import { Button } from '@/src/lib/button/button';

const UpcommingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<UpcommingEventData[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await getUpcommingEvents();

      setUpcomingEvents(data.data);
    };
    getEvents();
  }, []);

  return (
    <div className="w-[1440px] mx-auto flex flex-col items-center gap-10 self-stretch">
      <p className="text-[#291900] text-[44px] self-stretch not-italic font-ptserif font-bold leading-[56px]">
        Upcoming Events
      </p>
      {upcomingEvents.length ? (
        <div className="flex-col items-center gap-3.5 self-stretch p-2 rounded-[20px] bg-white">
          {upcomingEvents.map(({ attributes }, index) => {
            return (
              <div key={index}>
                <UpcommingEventCard {...attributes} />
                {index < upcomingEvents.length - 1 && <div className="w-full h-[1.25px] bg-[#f0ebe1]"></div>}
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
