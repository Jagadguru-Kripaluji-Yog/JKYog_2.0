import Link from 'next/link';
import { FC } from 'react';

export interface ButtonProps {
  href: string;
  text: string;
  variant: 'contained';
  color: 'primary';
}

const variants = {
  contained: {
    primary: 'bg-orange-500 hover:bg-orange-400 text-white',
  },
};

export const Button: FC<ButtonProps> = ({ href = '/', text, variant, color }) => {
  return (
    <Link href={href} className="z-10">
      <button
        className={`px-8 py-3.5 rounded-[100px]
                    justify-start items-center inline-flex
                    cursor-pointer
                    ${variants[variant][color]}
                `}
      >
        <span className="text-center text-base font-satoshi-bold leading-normal">{text}</span>
      </button>
    </Link>
  );
};
