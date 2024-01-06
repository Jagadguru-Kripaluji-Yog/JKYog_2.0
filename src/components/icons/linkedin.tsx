import { SVGIconProps } from '@/src/types/icons';
import { getInvertedPathFill, getPathFill } from '@/src/utils/icons';
import { FC } from 'react';

export const LinkedInIcon: FC<SVGIconProps> = ({ width = 32, height = 32, variant, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none" {...props}>
      <rect width="32" height="32" rx="16" fill={getPathFill(variant, '#0072b1')} />
      <path
        d="M22.3999 16.5954V21.0079H19.8169V16.8644C19.8169 15.842 19.4403 15.1425 18.5255 15.1425C17.8259 15.1425 17.3954 15.6268 17.234 16.0573C17.1802 16.2187 17.1264 16.4339 17.1264 16.703V21.0079H14.5434C14.5434 21.0079 14.5972 14.0124 14.5434 13.3129H17.1264V14.3891C17.4492 13.851 18.095 13.0976 19.4403 13.0976C21.1084 13.0976 22.3999 14.2277 22.3999 16.5954ZM11.8528 9.59985C10.9918 9.59985 10.3999 10.1918 10.3999 10.9451C10.3999 11.6985 10.938 12.2904 11.799 12.2904C12.7138 12.2904 13.2519 11.6985 13.2519 10.9451C13.3057 10.138 12.7676 9.59985 11.8528 9.59985ZM10.5613 21.0079H13.1443V13.3129H10.5613V21.0079Z"
        fill={getInvertedPathFill(variant)}
      />
    </svg>
  );
};
