'use client';

import { FC } from 'react';
import Image from 'next/image';
import { linkGroups } from '../footer/constants';
import Link from 'next/link';
import { Button } from '@/src/components/button/button';
import { ArrowDown } from '../../icons/arrow-down';
import { Burger } from './burger-menu';
import { Modal } from '../../ui/modal/modal';
import { useAuthStore } from '@/src/zustand/auth-store';
import { useModalStore } from '@/src/zustand/modal-store';

export const Header: FC = () => {
  const { handleModalOpen } = useModalStore();
  const { isAuth, isLoading, signOut } = useAuthStore();

  return (
    <header className="relative flex items-center gap-3 xl:gap-8 px-4 xl:px-10 py-[13px] z-40">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={100} height={45} />
      </Link>
      <NavList />
      <div className="flex gap-2 ml-auto">
        {!isLoading &&
          (isAuth ? (
            <Button type="button" text="Sign out" variant="outlined" color="primary" size="small" onClick={signOut} />
          ) : (
            <>
              <Button
                type="button"
                text="Log in"
                variant="outlined"
                color="primary"
                size="small"
                classes="hidden lg:block"
                onClick={() => handleModalOpen(true)}
              />
              <Button
                type="button"
                text="Sign up"
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleModalOpen(true)}
              />
            </>
          ))}
      </div>
      <Modal />
      <Burger />
    </header>
  );
};

const NavList: FC = () => (
  <nav className="hidden lg:block">
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
  <li className="group relative flex items-center gap-2 px-2 xl:px-4 py-1.5 xl:py-3 font-satoshi-medium text-base text-primary cursor-pointer">
    <span>{title}</span>
    <div className="group-hover:rotate-180 transition">
      <ArrowDown />
    </div>
    <ul className="flex-col absolute bottom-0 translate-y-[100%] bg-heading rounded hidden group-hover:flex transition min-w-[130px] w-max">
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
