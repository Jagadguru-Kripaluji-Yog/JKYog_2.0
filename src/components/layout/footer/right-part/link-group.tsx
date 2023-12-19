import Link from 'next/link';
import { FC } from 'react';

export type LinkGroupProps = {
  title: string;
  links: FooterLink[];
};

export type FooterLink = {
  name: string;
  url: string;
};

export const LinkGroup: FC<LinkGroupProps> = ({ title, links }) => (
  <div className="flex flex-col gap-[10px]">
    <h3 className="text-xl font-ptserif text-neutral-900 font-bold leading-7 mb-1">{title}</h3>
    {links.map(({ name, url }) => {
      return (
        <Link key={name} href={url} className="text-base font-satoshi-regular text-primary hover:text-button-primary">
          {name}
        </Link>
      );
    })}
  </div>
);
