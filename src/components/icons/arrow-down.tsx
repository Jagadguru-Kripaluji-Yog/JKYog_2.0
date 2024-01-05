import { SVGIconProps } from '@/src/types/icons';
import { getPathFill } from '@/src/utils/icons';
import { cn } from '@/src/utils/tailwind';
import { FC } from 'react';

export const ArrowDown: FC<SVGIconProps> = ({ className, width, height, variant = 'default', ...props }) => (
  <div style={{ width, height }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={'100%'}
      height={'100%'}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      {...props}
    >
      <path
        d="M4.9292 7L8.9292 11L12.9292 7"
        stroke={getPathFill(variant)}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
