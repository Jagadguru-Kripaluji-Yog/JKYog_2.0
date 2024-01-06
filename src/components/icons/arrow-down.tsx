import { SVGIconProps } from '@/src/types/icons';
import { getPathFill } from '@/src/utils/icons';
import { FC } from 'react';

export const ArrowDownIcon: FC<SVGIconProps> = ({ width = 16, height = 16, variant = 'default', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height} fill="none" {...props}>
    <path
      d="M4.9292 7L8.9292 11L12.9292 7"
      stroke={getPathFill(variant)}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
