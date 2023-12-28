import { FC } from 'react';
import Image from 'next/image';

export interface BadgeProps {
  src?: string;
  text: string;
  variant?: keyof typeof variants;
}

const variants = {
  primary: 'text-white bg-button-primary',
  secondary: 'text-button-primary bg-bg-light',
};

export const Badge: FC<BadgeProps> = ({ src, text, variant = 'secondary' }) => {
  return (
    <div
      className={`
        flex items-center gap-1 px-2 py-1.5 rounded-3xl w-fit
        ${variants[variant]}
    `}
    >
      {src && <Image src={src} alt="badge-icon" width={16} height={16} />}
      <span className="text-center text-xs capitalize font-ptserif font-bold leading-4">{text}</span>
    </div>
  );
};
