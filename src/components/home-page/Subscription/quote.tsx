import React, { FC } from 'react';
import Image from 'next/image';

const Quote: FC = () => {
  return (
    <div className="order-first lg:order-1 flex flex-col justify-center items-center gap-6 lg:gap-10 px-8 py-10 rounded-[20px] border-[#F0EBE1] bg-[#FFFBF2]">
      <div className="flex justify-center items-center w-[72px] h-[72px] gap-2.5 p-2.5 rounded-[100px] bg-orange-100">
        <Image src="/icons/quotes.svg" alt="quotes" width={48} height={48} />
      </div>
      <p className="text-stone-600 text-center text-xl not-italic font-normal leading-8 mobile:text-[18px]">
        &ldquo;If you carry yesterday with you, your today <br className="hidden lg:block" /> becomes very{' '}
        <br className="hidden lg:block" /> heavy - you can neither float nor fly.&rdquo;
      </p>
      <p className="text-heading text-center text-[20px] font-olga-ctt leading-7">
        — Sadhguru 09 <br className="hidden lg:block" /> September, 2023
      </p>
    </div>
  );
};

export default Quote;
