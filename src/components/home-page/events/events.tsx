import React, { FC } from 'react';
import FeaturedEvents from './featured-events/featured-events';
import UpcommingEvents from './upcomming-events/upcomming-events';

const Events: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 lg:gap-[100px] w-full py-8 lg:py-[88px] rounded-[40px] bg-events-section-bg/[.30]">
      <FeaturedEvents />
      <UpcommingEvents />
    </section>
  );
};

export default Events;
