import { Arrow } from '@/src/lib/arrow/arrow';
import { Badge } from '@/src/lib/badge/badge';
import { Button } from '@/src/lib/button/button';
import { formatDate } from '@/src/utils/format-date';
import Image from 'next/image';
import { FC } from 'react';

type EventCardProps = {
  image: string;
  heading: string;
  place: string;
  date: string;
  time: string;
  tags: { text: string; variant: 'primary' | 'secondary' }[];
};

export const EventCard: FC<EventCardProps> = ({ image, heading, place, date, time, tags }) => {
  return (
    <div className="flex flex-col items-start p-2 border rounded-[20px] border-solid border-border-primary bg-white">
      <div className="relative bg-cover bg-no-repeat rounded-2xl overflow-hidden">
        <Image src={image} alt="event" width={639} height={245} className="h-[248px] object-cover lg:object-fill" />
        <div className="absolute top-3 left-3 flex gap-2">
          {tags.map(({ text, variant }) => (
            <Badge key={text} text={text} variant={variant} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start p-4 h-[330px] w-full">
        <h3 className="text-heading text-2xl font-ptserif font-bold mb-3">{heading}</h3>
        <div className="flex flex-col gap-2">
          <CardInfoBlock title="Date:" info={formatDate(date)} />
          <CardInfoBlock title="Time:" info={time} />
          <CardInfoBlock title="Venue:" info={place} />
        </div>
        <div className="flex justify-between w-full mt-auto">
          <Button type="link" href="/" variant="outlined" color="primary" text="Register" classes="h-12" />
          <Arrow direction="topLeft" />
        </div>
      </div>
    </div>
  );
};

export const CardInfoBlock: FC<{ title: string; info: string }> = ({ title, info }) => (
  <div className="flex flex-col text-base tracking-[-0.16px]">
    <span className="text-heading font-satoshi-medium">{title}</span>
    <span className="text-light-text/[.7] font-satoshi-regular leading-6">{info}</span>
  </div>
);
