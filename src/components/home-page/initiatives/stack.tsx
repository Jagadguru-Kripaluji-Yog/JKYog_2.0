import React, { FC } from 'react';
import Image from 'next/image';
import { Play } from '@/src/components/icons';

const Stack: FC = () => {
  return (
    <div className="flex items-start gap-5 self-stretch">
      <div className="flex w-[785px] items-start gap-5 pl-3 pr-6 py-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]">
        <Image
          src="/vid.jpeg"
          alt="video"
          width={368}
          height={368}
          className="rounded-2xl w-[368px] h-[368px] object-cover"
        />
        <div className="flex flex-col items-start gap-10 flex-[1_0_0] px-0 py-3">
          <div className="flex flex-col justify-center items-start gap-3 self-stretch">
            <h2 className="text-heading text-[32px] font-ptserif font-bold leading-10 self-stretch">
              Welcome to Bhagavad Gita
            </h2>
            <p className="text-primary self-stretch text-lg font-satoshi-regular leading-6">
              Bhagavad Gita is one of the most revered scriptures! Grasp the wisdom embedded in this precious jewel.
              Watch verse by verse shloka and translation followed by full commentary written by Swami Mukundananda.
            </p>
          </div>
          <button className="flex justify-center items-center gap-1.5 p-[18px] rounded-[100px] bg-[#ef6f1f]">
            <Play />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch pl-6 pr-3 pt-6 pb-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]">
        <p className="text-heading text-[32px] font-ptserif font-bold leading-10 self-stretch">some text</p>
        <div className="flex items-start self-stretch">
          <div
            className="w-40 h-40 rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('./vid2.jpeg')" }}
          ></div>
          <div className="flex items-end gap-2.5 flex-[1_0_0] self-stretch pl-5 pr-0 pt-0 pb-3">
            <button className="flex justify-center items-center gap-1.5 p-[18px] rounded-[100px] bg-[#ef6f1f]">
              <Play />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
