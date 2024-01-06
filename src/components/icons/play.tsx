import { SVGIconProps } from '@/src/types/icons';
import { getPathFill } from '@/src/utils/icons';
import { FC } from 'react';

export const GooglePlayIcon: FC<SVGIconProps> = ({ width = 20, height = 20, variant, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.97103 1.95563L16.5878 8.23466C17.8042 9.02775 17.8042 10.9722 16.5878 11.7653L6.97103 18.0443C5.73239 18.8538 4.16675 17.8665 4.16675 16.2776V3.72229C4.16675 2.13339 5.73239 1.14614 6.97103 1.95563Z"
        fill={getPathFill(variant)}
      />
    </svg>
  );
};
