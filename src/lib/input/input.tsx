import { FC, SyntheticEvent } from 'react';
import Image from 'next/image';

export interface InputProps {
  placeholder: string;
  // temporary optional
  onChange?: (e: SyntheticEvent) => void;
}

export const Input: FC<InputProps> = ({ placeholder }) => {
  return (
    <label className="flex justify-between bg-white border border-border-color rounded-[56px] pl-5 py-2 pr-2">
      <input
        type="email"
        placeholder={placeholder}
        className="text-heading text-opacity-70 font-satoshi-medium w-full outline-none"
      />
      <button type="submit" className="rounded-full bg-orange-500 hover:bg-orange-400 p-3">
        <Image src="/icons/arrow-right-white.svg" alt="arrow" width={16} height={16} />
      </button>
    </label>
  );
};
