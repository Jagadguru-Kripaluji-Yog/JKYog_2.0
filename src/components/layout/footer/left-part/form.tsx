'use client';

import { FC, useState } from 'react';
import Image from 'next/image';

export const Form: FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <form className="flex flex-col gap-[14px] w-[346px]">
      <label className="flex justify-between bg-white border border-[#DAD3C8] rounded-[56px] pl-5 py-2 pr-2">
        <input
          type="email"
          placeholder="Enter your email address"
          className="text-[#291900] text-opacity-30 font-satoshi-medium w-full"
        />
        <button type="submit" className="rounded-full bg-orange-500 hover:bg-orange-400 p-3">
          <Image src="/icons/arrow-right-white.svg" alt="arrow" width={16} height={16} />
        </button>
      </label>
      <div className="flex gap-4 w-full">
        <input
          id="subscribe"
          type="checkbox"
          className="hidden peer"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label
          htmlFor="subscribe"
          className="cursor-pointer
                           relative pl-9 
                           text-base font-satoshi-regular text-stone-600 text-opacity-80
                           before:absolute before:left-0 before:h-6 before:w-6 before:rounded-full
                           before:border before:neutral-200 before:rounded-full
                           after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full
                           peer-checked:after:bg-orange-400"
        >
          Join me to WhatsApp group
        </label>
      </div>
    </form>
  );
};
