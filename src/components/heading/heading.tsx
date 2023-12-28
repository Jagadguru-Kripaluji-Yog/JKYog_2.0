import { FC } from 'react';

type HeadingProps = {
  title: string;
  classes?: string;
};

export const Heading: FC<HeadingProps> = ({ title, classes }) => (
  <h2
    className={`
        text-center text-heading text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px]
        ${classes}
    `}
  >
    {title}
  </h2>
);
