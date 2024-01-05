import { SVGIconProps } from '@/src/types/icons';
import { getPathFill } from '@/src/utils/icons';
import { FC } from 'react';

export const Apple: FC<SVGIconProps> = ({ className, width = 18, height = 18, variant = 'default', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={width} height={height} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.09386 5.56788C8.51176 5.56788 7.6049 4.89426 6.66254 4.89426C5.40962 4.89426 4.26318 5.65516 3.61719 6.7714C2.31812 9.01268 3.28266 12.3243 4.54979 14.1459C5.17181 15.0329 5.90476 16.031 6.87728 15.9993C7.80988 15.9596 8.16038 15.3971 9.29262 15.3971C10.4169 15.3971 10.7354 15.9993 11.7239 15.9755C12.7284 15.9596 13.3664 15.0726 13.9796 14.1777C14.6894 13.1478 14.984 12.1498 15 12.0942C14.976 12.0863 13.047 11.3501 13.023 9.1317C13.007 7.27837 14.5457 6.39138 14.6176 6.35171C13.7409 5.07677 12.3939 4.93393 11.9236 4.90219C10.6955 4.80697 9.66797 5.56788 9.09386 5.56788Z"
        fill={getPathFill(variant)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9206 1.08932C11.6917 0.804074 12.1961 1.22464 12.0472 2.0287C11.8983 2.83275 11.1526 3.7158 10.3815 4.00105C9.61041 4.2863 9.10603 3.86573 9.2549 3.06167C9.40378 2.25762 10.1496 1.37457 10.9206 1.08932Z"
        fill={getPathFill(variant)}
      />
    </svg>
  );
};
