import React, { FC } from 'react';
import { Poster } from './poster';
import { Places } from './places';

const Meet: FC = () => {
  return (
    <section className="relative flex items-center justify-center bg-[#edf3e5] w-full flex-col  gap-10 self-stretch pt-[100px] pb-[120px] px-10 rounded-[40px] bg-meet-section-bg">
      <h2 className="text-[#291900] text-center text-[44px] font-ptserif font-bold leading-[56px]">Meet Swamiji</h2>
      <div className="flex w-[1360px] justify-end items-center gap-5 ">
        <Poster />
        <Places />
      </div>
    </section>
  );
};

export default Meet;
