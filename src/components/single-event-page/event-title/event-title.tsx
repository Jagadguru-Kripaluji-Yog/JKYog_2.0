import Image from 'next/image';
import { FC } from 'react';
import { Badge } from '../../badge/badge';
import Link from 'next/link';
import { Heading } from '../../heading/heading';

export const EventTitle: FC = () => {
  return (
    <section className="flex flex-col items-start px-10 pt-[60px] max-w-[1440px] mx-auto px-10">
      <div className="flex gap-10 mb-10">
        <Link href="/events">
          <div className="flex items-center gap-1 hover:opacity-80">
            <Image src="/icons/caret-black.svg" alt="" width={24} height={24} className="rotate-90" />
            <span className="text-primary text-base font-satoshi-regular">Back to Events</span>
          </div>
        </Link>
        <div className="flex flex-col items-start">
          <div className="flex gap-2 mb-3">
            <Badge variant="primary" text="8 December" />
            <Badge variant="secondary" text="Program" />
          </div>
          <Heading title="Patan 1-2 Dec" />
          <span className="text-primary text-base font-satoshi-regular mt-2">
            Friday, December 8 - Sunday, December 10, 2023
          </span>
        </div>
      </div>
      <div>
        <Image src="/images/events-page/single-event-banner.png" alt="" width={1360} height={460} />
      </div>
    </section>
  );
};
