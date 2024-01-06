import { SVGIconProps } from '@/src/types/icons';
import { getPathFill } from '@/src/utils/icons';
import { FC } from 'react';

export const CloseIcon: FC<SVGIconProps> = ({ width = 20, height = 20, variant = 'default', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M16.25 3.75L3.75 16.25M16.25 16.25L3.75 3.75"
        stroke={getPathFill(variant)}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
