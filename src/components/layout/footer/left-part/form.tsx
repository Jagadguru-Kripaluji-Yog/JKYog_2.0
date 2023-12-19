'use client';

import { FC, useState } from 'react';
import { Input } from '@/src/lib/input/input';

export const Form: FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <form className="flex flex-col gap-[14px] w-[346px]">
      <Input placeholder="Enter your E-mail address..." />
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
                           before:absolute before:left-0 before:h-6 before:w-6
                           before:border before:border-neutral-200 before:bg-white  before:rounded-full
                           after:absolute after:left-[4px] after:top-[4px] after:h-4 after:w-4 after:rounded-full
                           peer-checked:after:bg-orange-400"
        >
          Join me to WhatsApp group
        </label>
      </div>
    </form>
  );
};
