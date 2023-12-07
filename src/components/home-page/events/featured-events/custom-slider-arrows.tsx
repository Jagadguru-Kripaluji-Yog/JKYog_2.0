import { FC } from 'react';
import Image from 'next/image';

interface SampleArrowProps {
  onClick?: () => void;
}

export const SampleNextArrow: FC<SampleArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden lg:block absolute -top-24 right-10 rounded-[40px] border-[1.25px] border-solid border-border-color flex items-start gap-2.5 p-4 hover:bg-yellow-100 transition duration-300"
  >
    <Image src="/icons/arrow-right.svg" alt="arrow-left" width={20} height={20} />
  </button>
);

export const SamplePrevArrow: FC<SampleArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden lg:block absolute -top-24 right-[108px] rounded-[40px] border-[1.25px] border-solid border-border-color flex items-start gap-2.5 p-4 hover:bg-yellow-100 transition duration-300"
  >
    <Image src="/icons/arrow-left.svg" alt="arrow-left" width={20} height={20} />
  </button>
);
