import { FC } from 'react';
import Image from 'next/image';

export interface SampleArrowProps {
  position: string;
  onClick?: () => void;
}

export const SampleNextArrow: FC<SampleArrowProps> = ({ position, onClick }) => (
  <button
    onClick={onClick}
    className={`
            hidden lg:block absolute 
            ${position}
            rounded-[40px] border-[1.25px] border-solid border-border-primary 
            flex items-start gap-2.5 p-4 
            bg-white hover:bg-gray-50 transition duration-300
    `}
  >
    <Image src="/icons/arrow-right.svg" alt="arrow-left" width={20} height={20} />
  </button>
);

export const SamplePrevArrow: FC<SampleArrowProps> = ({ position, onClick }) => (
  <button
    onClick={onClick}
    className={`
            hidden lg:block absolute 
            ${position} 
            rounded-[40px] border-[1.25px] border-solid border-border-primary 
            flex items-start gap-2.5 p-4 
            bg-white hover:bg-gray-50 transition duration-300
    `}
  >
    <Image src="/icons/arrow-left.svg" alt="arrow-left" width={20} height={20} />
  </button>
);
