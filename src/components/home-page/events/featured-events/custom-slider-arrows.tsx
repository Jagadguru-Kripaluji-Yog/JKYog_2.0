import { FC } from 'react';
import Image from 'next/image';

export interface SampleArrowProps {
  position: string;
  onClick?: () => void;
  className?: string;
  small?: boolean;
}

export const SampleNextArrow: FC<SampleArrowProps> = ({ position = '', onClick, className, small }) => {
  const isLast = !!className!.match('slick-disabled');

  return (
    <button
      onClick={onClick}
      className={`
                  hidden lg:block absolute 
                  ${position}
                  rounded-[40px] border-[1.25px] border-solid border-border-primary 
                  flex items-start gap-2.5 ${small ? 'p-[13px]' : 'p-4'} 
                  bg-white ${isLast ? '' : 'hover:bg-gray-50'} transition duration-300
          `}
    >
      <Image
        src="/icons/arrow-right.svg"
        alt="arrow-left"
        width={small ? 16 : 20}
        height={small ? 16 : 20}
        className={`${isLast ? 'invert-[0.7] brightness-[0]' : ''}`}
      />
    </button>
  );
};

export const SamplePrevArrow: FC<SampleArrowProps> = ({ position = '', onClick, className, small }) => {
  const isLast = !!className!.match('slick-disabled');

  return (
    <button
      onClick={onClick}
      className={`
                  hidden lg:block absolute
                  ${position} 
                  rounded-[40px] border-[1.25px] border-solid border-border-primary 
                  flex items-start gap-2.5 ${small ? 'p-[13px]' : 'p-4'}  
                  bg-white ${isLast ? '' : 'hover:bg-gray-50'} transition duration-300
          `}
    >
      <Image
        src="/icons/arrow-left.svg"
        alt="arrow-left"
        width={small ? 16 : 20}
        height={small ? 16 : 20}
        className={`${isLast ? 'invert-[0.7] brightness-[0]' : ''}`}
      />
    </button>
  );
};
