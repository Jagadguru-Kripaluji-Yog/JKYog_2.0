import { FC } from 'react';
import Link from 'next/link';
import { LeftPart } from './left-part/left-part';
import { RightPart } from './right-part/right-part';
import { linkGroups } from './constants';

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center bg-[#FFFBF2] px-4 lg:px-10 pt-[48px] lg:pt-16 pb-8">
      <div className="flex flex-col xl:flex-row justify-between w-full gap-[46px] lg:gap-20 2xl:gap-[150px] border-b border-neutral-200 pb-6 mb-6">
        <LeftPart />
        <RightPart linkGroups={linkGroups} />
      </div>
      <div className="flex flex-col md:flex-row justify-between text-sm gap-5 md:gap-2 text-neutral-700 text-opacity-50 w-full">
        <div className="leading-6">© Copyright 2020 JKYog. All Rights Reserved.</div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-12 leading-6">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Services</Link>
        </div>
      </div>
    </footer>
  );
};
