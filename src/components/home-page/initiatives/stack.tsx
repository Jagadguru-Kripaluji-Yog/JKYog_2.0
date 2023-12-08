import React, { FC } from 'react';
import Image from 'next/image';
import { Play } from '@/src/components/icons';

const Stack: FC = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]  gap-5 ">
      <div className="flex flex-col lg:flex-row items-start lg:gap-5 p-2 lg:pl-3 lg:pr-6 py-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]">
        <Image
          src="/vid.jpeg"
          alt="video"
          width={368}
          height={368}
          className="rounded-2xl w-[368px] h-[208px] lg:h-[368px] object-cover"
        />
        <div className="h-full flex flex-col justify-between items-start gap-10 px-2 lg:px-0 py-3">
          <div className="flex flex-col justify-center items-start gap-3">
            <h2 className="text-heading text-2xl lg:text-[32px] font-ptserif font-bold lg:leading-10">
              Welcome to Bhagavad Gita
            </h2>
            <p className="text-primary  text-lg font-satoshi-regular leading-6">
              Bhagavad Gita is one of the most revered scriptures! Grasp the wisdom embedded in this precious jewel.
              Watch verse by verse shloka and translation followed by full commentary written by Swami Mukundananda.
            </p>
          </div>
          <button className="absolute lg:static top-[10%] left-[50%] -translate-x-2/4 lg:translate-x-0 flex justify-center items-center gap-1.5 p-[18px] rounded-[100px] bg-[#ef6f1f]">
            <Play />
          </button>
        </div>
      </div>

      <div className="relative flex flex-col-reverse lg:flex-col justify-between items-start gap-3 p-2 lg:pl-6 lg:pr-3 lg:pt-6 lg:pb-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]">
        <h2 className="text-heading text-2xl lg:text-[32px] font-ptserif font-bold lg:leading-10 pb-2 lg:pb-0 px-2 lg:px-0">
          Welcome to A Daily Sadhana
        </h2>
        <div className="flex items-start">
          <Image
            src="/vid2.jpeg"
            alt="vid2"
            width={160}
            height={160}
            className="w-[327px] lg:w-[160px] h-[208px] lg:h-[160px] rounded-2xl"
          />
          <div className="h-full flex items-end lg:pl-5 pr-0 pt-0 pb-3">
            <button className="absolute lg:static top-[28%] left-[50%] -translate-x-2/4 lg:translate-x-0 flex justify-center items-center gap-1.5 p-[18px] rounded-[100px] bg-[#ef6f1f]">
              <Play />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
