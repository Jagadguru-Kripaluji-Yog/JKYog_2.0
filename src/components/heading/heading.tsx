import { FC } from 'react';

type HeadingProps = {
  title: string;
};

export const Heading: FC<HeadingProps> = ({ title }) => <h2>{title}</h2>;
