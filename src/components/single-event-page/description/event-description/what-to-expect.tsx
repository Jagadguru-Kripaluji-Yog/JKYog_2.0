import Link from 'next/link';
import { FC, ReactNode } from 'react';

type ListItemNumered = {
  number: number;
  children?: ReactNode;
};

const ListItemNumered: FC<ListItemNumered> = ({ number, children }) => {
  return (
    <li className="flex gap-3 mb-4 text-primary text-lg leading-6 font-satoshi-regular">
      <div className="h-6 min-w-[24px] bg-button-primary bg-opacity-10 flex items-center justify-center text-button-primary text-xs font-ptserif font-bold rounded-full">
        {number}
      </div>
      {children}
    </li>
  );
};

export const WhatToExpect: FC = () => {
  return (
    <div>
      <h4 className="font-ptserif font-bold text-2xl mb-3">What to expect:</h4>
      <p className="mb-4 text-primary text-lg leading-6 font-satoshi-regular">
        Join{' '}
        <Link href="/" className="text-button-primary hover:text-opacity-80 underline underline-offset-[4.5px]">
          Algorand Foundation
        </Link>{' '}
        in India for our inaugural, global Impact Summit. This two-day event will bring together policymakers,
        executives, investors, NGOs, entrepreneurs, and other thought leaders to explore and collaborate on the use of
        blockchain to solve the world’s most intractable challenges.
      </p>
      <ul>
        <ListItemNumered number={1}>
          <span className="w-fit">
            <span className="text-heading font-satoshi-medium">Lecture: </span>
            Swamiji will share his profound wisdom and insights during a captivating lecture. Prepare to be inspired and
            gain a deeper understanding of spiritual principles.
          </span>
        </ListItemNumered>
        <ListItemNumered number={2}>
          <span className="w-fit">
            <span className="text-heading font-satoshi-medium">Book Signing: </span>
            Swamiji will be available for a book signing session. If you have any of his books or wish to acquire one,
            this is a fantastic opportunity to have it personally signed by the author.
          </span>
        </ListItemNumered>
      </ul>
    </div>
  );
};
