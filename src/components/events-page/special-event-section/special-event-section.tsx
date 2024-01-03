import { Badge } from '@/src/components/badge/badge';
import Image from 'next/image';
import { FC } from 'react';
import { CardInfoBlock } from '../upcoming-events/event-card';
import { Button } from '@/src/components/button/button';
import { Arrow } from '../../arrow/arrow';
import { Heading } from '../../heading/heading';

const tags = [
  { text: '1 December', variant: 'primary' },
  { text: 'In-person', variant: 'secondary' },
] as const;

export const SpecialEventSection: FC = () => {
  return (
    <section className="relative flex items-center justify-center bg-bg-green w-full flex-col gap-6 lg:gap-10 py-8 lg:pt-[100px] lg:pb-[120px] px-4 lg:px-10 rounded-[40px] bg-meet-section-bg">
      <Heading title="Special Event" classes="lg:mb-10" />
      <div className="grid grid-cols-1 xl:grid-cols-[662px_682px] bg-white p-2 rounded-[20px]">
        <div className="relative flex rounded-2xl">
          <Image src="/images/events-page/special.png" alt="special" width={662} height={384} />
          <div className="absolute top-3 left-3 lg:top-4 lg:left-4 flex gap-2">
            {tags.map(({ text, variant }) => (
              <Badge key={text} text={text} variant={variant} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start p-2 pt-3 lg:pl-5 lg:p-4 w-full">
          <h3 className="text-heading text-xl leading-6 lg:text-[32px] lg:leading-10 font-ptserif font-bold mb-2 lg:mb-6">
            Hyderabad 16 - 17 Dec
          </h3>
          <div className="flex flex-col gap-2 lg:gap-3">
            <CardInfoBlock title="Date:" info="December 1 – December 2, 2023" />
            <CardInfoBlock title="Time:" info="06:00 PM - 08:00 PM" />
            <CardInfoBlock
              title="Venue:"
              info="Shree Ambaji Mandir Ambaji Neliyu, Patan-Chanasma Road, Patan - 384365"
            />
          </div>
          <div className="flex justify-between w-full mt-6 lg:mt-auto">
            <Button type="link" href="/" variant="contained" color="primary" text="Register" classes="h-12" />
            <Arrow direction="topLeft" />
          </div>
        </div>
      </div>
    </section>
  );
};
