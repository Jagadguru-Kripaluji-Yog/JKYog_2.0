import { Badge } from '@/src/lib/badge/badge';
import Image from 'next/image';
import { FC } from 'react';
import { CardInfoBlock } from '../upcoming-events/event-card';
import { Button } from '@/src/lib/button/button';
import { Arrow } from '@/src/lib/arrow/arrow';

const tags = [
  { text: '1 December', variant: 'primary' },
  { text: 'In-person', variant: 'secondary' },
] as const;

export const SpecialEventSection: FC = () => {
  return (
    <section className="relative flex items-center justify-center bg-bg-green w-full flex-col gap-6 lg:gap-10 py-8 lg:pt-[100px] lg:pb-[120px] px-4 lg:px-10 rounded-[40px] bg-meet-section-bg">
      <h2 className="text-center text-heading text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px] mb-10">
        Special Event
      </h2>
      <div className="grid grid-cols-[662px_682px] bg-white p-2 rounded-[20px]">
        <div className="relative flex">
          <Image src="/images/events-page/special.png" alt="special" width={662} height={384} />
          <div className="absolute top-4 left-4 flex gap-2">
            {tags.map(({ text, variant }) => (
              <Badge key={text} text={text} variant={variant} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start pl-5 p-4 w-full">
          <h3 className="text-heading text-[32px] leadong-10 font-ptserif font-bold mb-6">Hyderabad 16 - 17 Dec</h3>
          <div className="flex flex-col gap-3">
            <CardInfoBlock title="Date:" info="December 1 – December 2, 2023" />
            <CardInfoBlock title="Time:" info="06:00 PM - 08:00 PM" />
            <CardInfoBlock
              title="Venue:"
              info="Shree Ambaji Mandir Ambaji Neliyu, Patan-Chanasma Road, Patan - 384365"
            />
          </div>
          <div className="flex justify-between w-full mt-auto">
            <Button type="link" href="/" variant="contained" color="primary" text="Register" classes="h-12" />
            <Arrow direction="topLeft" />
          </div>
        </div>
      </div>
    </section>
  );
};
