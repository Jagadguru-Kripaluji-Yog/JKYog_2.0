import React from 'react';
import FeaturedEvents from './featured-events/featured-events';
import UpcommingEvents from './upcomming-events/upcomming-events';

const Events = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[100px] self-stretch pl-10 py-[88px] rounded-[40px] bg-yellow-50 ">
      <FeaturedEvents />
      <UpcommingEvents />
    </div>
  );
};

export default Events;
