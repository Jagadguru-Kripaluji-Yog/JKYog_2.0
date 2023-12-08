import { FC } from 'react';
import { LinkGroup, LinkGroupProps } from './link-group';

type RightPartProps = {
  linkGroups: LinkGroupProps[];
};

export const RightPart: FC<RightPartProps> = ({ linkGroups }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-[50px] justify-between ">
    {linkGroups.map((group) => (
      <LinkGroup key={group.title} {...group} />
    ))}
  </div>
);
