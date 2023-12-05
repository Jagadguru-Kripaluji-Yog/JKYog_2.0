import { FC } from 'react';
import Image from 'next/image';
import { linkGroups } from '../footer/constants';
import Link from 'next/link';
import { Button } from '@/src/lib/button/button';

export const Header: FC = () => (
  <header className="relative flex items-center gap-8 px-10 py-[13px] z-40">
    <Link href="/">
      <Image src="/images/logo.png" alt="logo" width={100} height={45} />
    </Link>
    <NavList />
    <div className="flex gap-2 ml-auto">
      <Button text="Log in" href="/" variant="outlined" color="primary" size="small" />
      <Button text="Sign up" href="/" variant="contained" color="primary" size="small" />
    </div>
  </header>
);

const NavList: FC = () => (
  <nav>
    <ul className="flex justify-end">
      {linkGroups.map((item) => (
        <NavListItem key={item.title} {...item} />
      ))}
    </ul>
  </nav>
);

type NavListItemProps = {
  title: string;
  links: NavListSubItem[];
};

type NavListSubItem = {
  name: string;
  url: string;
};

const NavListItem: FC<NavListItemProps> = ({ title, links }) => (
  <li className="group relative flex items-center gap-2 px-4 py-3 font-satoshi-medium text-base text-[#645743] cursor-pointer">
    <span>{title}</span>
    <div className="group-hover:rotate-180 transition">
      <ArrowDown />
    </div>
    <ul className="flex-col absolute bottom-0 translate-y-[100%] bg-[#291900] rounded hidden group-hover:flex transition min-w-[130px] w-max">
      {links.map((link) => (
        <NavListItemSubMenu key={link.name} {...link} />
      ))}
    </ul>
  </li>
);

const NavListItemSubMenu: FC<NavListSubItem> = ({ name, url }) => (
  <li className="text-white hover:bg-white/[.08] p-3">
    <Link href={url}>{name}</Link>
  </li>
);

const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M4.9292 7L8.9292 11L12.9292 7"
      stroke="#645743"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
