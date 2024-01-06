import { SVGIconProps } from '@/src/types/icons';
import { getPathFill } from '@/src/utils/icons';
import { FC } from 'react';

export const ArrowRightIcon: FC<SVGIconProps> = ({ width = 20, height = 20, variant = 'default', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M3.3335 10H16.6668M16.6668 10L11.6668 5M16.6668 10L11.6668 15"
        stroke={getPathFill(variant)}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
