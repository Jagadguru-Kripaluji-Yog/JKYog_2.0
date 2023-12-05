import Link from 'next/link';
import { FC } from 'react';

export interface ButtonProps {
  href: string;
  text: string;
  variant: 'contained' | 'outlined';
  color: 'primary';
  size?: 'small' | 'default';
}

const variants = {
  contained: {
    primary: 'bg-orange-500 hover:bg-orange-400 text-white',
  },
  outlined: {
    primary: 'border hover:bg-gray-50 text-neutral-900',
  },
  size: {
    small: 'px-4 py-2.5',
    default: 'px-8 py-3.5',
  },
};

export const Button: FC<ButtonProps> = ({ href = '/', text, variant, color, size = 'default' }) => {
  return (
    <Link href={href} className="z-10">
      <button
        className={`${variants.size[size]} 
                    rounded-[100px]
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
