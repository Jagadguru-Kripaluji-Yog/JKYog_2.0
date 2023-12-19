import { FC } from 'react';
import Image from 'next/image';

export interface BadgeProps {
  src?: string;
  text: string;
}

export const Badge: FC<BadgeProps> = ({ src, text }) => {
  return (
    <div className="w-fit h-fit flex items-center gap-1 px-2 py-1.5 rounded-3xl bg-bg-light">
      {src && <Image src={src} alt="badge-icon" width={16} height={16} />}
      <span className="text-button-primary text-center text-xs capitalize font-ptserif font-bold leading-4">
        {text}
      </span>
    </div>
  );
};
