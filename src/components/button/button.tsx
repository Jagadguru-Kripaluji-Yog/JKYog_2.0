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
    primary: 'border hover:bg-gray-50 text-neutral-900',
  },
};

const sizes = {
  small: 'px-4 py-2.5',
  default: 'px-8 py-3.5 w-full lg:w-[unset]',
};

const DefaultButton: FC<ButtonProps<ButtonType>> = ({ text, variant, color, size = 'default', classes = '' }) => (
  <div
    className={`${sizes[size]} 
                rounded-[100px]
                justify-center items-center inline-flex
                cursor-pointer z-10
                ${variants[variant][color]}
                ${classes}
            `}
  >
    <span className="text-center text-base font-satoshi-bold leading-normal">{text}</span>
  </div>
);

export const Button: FC<ButtonProps<ButtonType>> = (props) => {
  const { type, size = 'default' } = props;

  if (type === 'link') {
    return (
      <Link href={props.href} className={`z-10 ${size === 'small' ? '' : ' w-full lg:w-[unset]'}`}>
        <DefaultButton {...props} />
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className="p-3">
      <DefaultButton {...props} />
    </button>
  );
};
