import Link from 'next/link';
import { FC } from 'react';

export type ButtonType = 'button' | 'link';

type CommonButtonProps<T> = {
  type: T;
  text: string;
  variant: keyof typeof variants;
  color: 'primary';
  size?: keyof typeof sizes;
  classes?: string;
  centered?: boolean;
  full?: boolean;
};

type LinkButtonProps = {
  href: string;
};

type NormalButtonProps = {
  onClick: () => void;
};

export type ButtonProps<T extends ButtonType> = T extends 'link'
  ? LinkButtonProps & CommonButtonProps<T>
  : NormalButtonProps & CommonButtonProps<T>;

const variants = {
  contained: {
    primary: 'bg-button-primary hover:bg-orange-400 text-white',
  },
  outlined: {
    primary: 'border bg-white hover:bg-gray-50 text-neutral-900',
  },
};

const sizes = {
  small: 'px-4 py-2.5',
  default: 'px-8 py-3.5 w-full lg:w-[unset]',
};

const DefaultButton: FC<ButtonProps<ButtonType>> = ({ text, variant, color, size = 'default', classes = '', full }) => (
  <div
    className={`${sizes[size]} 
                ${full ? '!w-full' : 'w-full lg:w-fit'}
                rounded-[100px]
                justify-center items-center inline-flex
                cursor-pointer z-10
                ${variants[variant][color]}
                ${classes}
            `}
  >
    <span className="text-center text-base font-satoshi-bold">{text}</span>
  </div>
);

export const Button: FC<ButtonProps<ButtonType>> = (props) => {
  const { type, size = 'default', centered, full } = props;

  if (type === 'link') {
    return (
      <Link
        href={props.href}
        className={`z-10 
        ${full ? 'w-full' : 'w-full lg:w-fit'}
        ${size === 'small' ? 'w-[unset]' : ''} 
        ${centered ? 'block mx-auto' : ''} 
        `}
      >
        <DefaultButton {...props} />
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={`${centered ? 'block mx-auto' : ''} ${full ? 'w-full' : ''}`}>
      <DefaultButton {...props} />
    </button>
  );
};
