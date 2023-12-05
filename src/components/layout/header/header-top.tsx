import { FC } from 'react';
import Image from 'next/image';

const navItems = [
  {
    icon: '/icons/volunteer.svg',
    name: 'Volunteer',
  },
  {
    icon: '/icons/donate.svg',
    name: 'Donate',
  },
  {
    icon: '/icons/shop.svg',
    name: 'Shop',
  },
  {
    icon: '/icons/crown.svg',
    name: 'SM Exclusive',
  },
  {
    icon: '/icons/globe.svg',
    name: 'USA',
  },
];

export const HeaderTop: FC = () => (
  <header className="w-full bg-[#291900] px-10">
    <NavList />
  </header>
);

const NavList: FC = () => (
  <nav>
    <ul className="flex justify-end">
      {navItems.map((item) => (
        <NavListItem key={item.name} {...item} />
      ))}
    </ul>
  </nav>
);

type NavListItemProps = {
  icon: string;
  name: string;
};

const NavListItem: FC<NavListItemProps> = ({ icon, name }) => (
  <li className="flex gap-2 px-4 py-3 font-satoshi-medium text-base text-white cursor-pointer hover:bg-white/[.08]">
    <Image src={icon} alt={name} width={20} height={20} />
    <span>{name}</span>
  </li>
);
