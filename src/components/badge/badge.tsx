import { FC, ReactNode } from 'react';
import Image from 'next/image';

export interface BadgeProps {
  src?: string;
  iconStart?: ReactNode;
  text: string;
  variant?: keyof typeof variants;
}

const variants = {
  primary: 'text-white bg-button-primary',
  secondary: 'text-button-primary bg-bg-light',
};

export const Badge: FC<BadgeProps> = ({ iconStart, src, text, variant = 'secondary' }) => {
  return (
    <div
      className={`
        flex items-center gap-1 w-fit px-2 py-1.5 rounded-3xl
        ${variants[variant]}
    `}
    >
      {src && (
        <Image
          className={variant === 'primary' ? 'invert-75' : 'invert-0'}
          src={src}
          alt="badge-icon"
          width={16}
          height={16}
          color="white"
        />
      )}
      {iconStart}
      <span className="text-center text-xs capitalize font-ptserif font-bold leading-4">{text}</span>
    </div>
  );
};
