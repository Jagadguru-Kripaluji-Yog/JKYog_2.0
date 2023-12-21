import { FC } from 'react';
import Image from 'next/image';

export interface ArrowProps {
  direction: 'left' | 'right' | 'topLeft';
}

const arrowDirections = {
  left: '/icons/arrow-left.svg',
  right: '/icons/arrow-right.svg',
  topLeft: '/icons/arrow-top-right.svg',
};

export const Arrow: FC<ArrowProps> = ({ direction }) => {
  return (
    <div className="w-fit h-fit hidden lg:flex justify-center items-center gap-1.5 p-2.5 rounded-[100px] border-[1.25px] border-solid border-border-primary cursor-pointer hover:bg-gray-50">
      <Image src={arrowDirections[direction]} alt="arrow" width={24} height={24} />
    </div>
  );
};
