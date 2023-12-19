import React, { FC } from 'react';
import { Poster } from './poster';
import { Places } from './places';

const Meet: FC = () => {
  return (
    <section className="relative flex items-center justify-center bg-bg-green w-full flex-col gap-6 lg:gap-10 py-8 lg:pt-[100px] lg:pb-[120px] px-4 lg:px-10 rounded-[40px] bg-meet-section-bg">
      <h2 className="text-heading text-center text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px]">
        Meet Swamiji
      </h2>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-5 max-w-[1360px] w-full">
        <Poster />
        <Places />
      </div>
    </section>
  );
};

export default Meet;
