import Link from 'next/link';
import { FC } from 'react';

export interface ButtonProps {
  href: string;
  text: string;
  variant: 'contained' | 'outlined';
  color: 'primary';
  size?: 'small' | 'default';
  classes?: string;
}

const variants = {
  contained: {
    primary: 'bg-button-primary hover:bg-orange-400 text-white',
  },
  outlined: {
    primary: 'border hover:bg-gray-50 text-neutral-900',
  },
  size: {
    small: 'px-4 py-2.5',
    default: 'px-8 py-3.5 w-full lg:w-[unset]',
  },
};

export const Button: FC<ButtonProps> = ({ href = '/', text, variant, color, size = 'default', classes = '' }) => {
  return (
    <Link href={href} className={`z-10 ${size === 'small' ? '' : ' w-full lg:w-[unset]'}`}>
      <button
        className={`${variants.size[size]} 
                    rounded-[100px]
                    justify-center items-center inline-flex
                    cursor-pointer
                    
                    ${variants[variant][color]}
                    ${classes}
                `}
      >
        <span className="text-center text-base font-satoshi-bold leading-normal">{text}</span>
      </button>
    </Link>
  );
};
