import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { Badge } from '../badge/badge';
import { formatDate } from '@/src/utils/format-date';
import { Arrow } from '../arrow/arrow';
import { cn } from '@/src/utils/tailwind';
import { Button } from '../button/button';
import Link from 'next/link';

export interface EventCardProps {
  variant: 'basic' | 'detailed';
  orientation: 'landscape' | 'stacked';
  media: {
    type: 'video' | 'image';
    src: string;
    alt: string;
  };
  heading: string;
  date: string;
  place: string;
  time?: string;
  link?: string;
  tags?: ReactNode[];
  callToActions?: ReactNode[];
}

export const EventCard: FC<EventCardProps> = ({
  variant,
  orientation,
  media: { type, src, alt },
  heading,
  date,
  place,
  time,
  link,
  tags,
  callToActions,
}) => {
  const imageClass =
    orientation === 'stacked' ? (variant === 'basic' ? 'w-full h-2/3' : 'w-full h-2/5') : 'h-full w-1/2';
  const containerClass = orientation === 'stacked' ? 'flex flex-col' : 'flex';
  const contentClass = orientation === 'stacked' ? 'justify-between' : 'justify-start';
  const headingClass =
    orientation === 'stacked' && variant === 'basic'
      ? 'text-heading text-2xl lg:text-[32px] font-ptserif font-bold leading-8 lg:leading-10'
      : 'text-heading text-xl leading-6 lg:text-2xl font-ptserif font-bold mb-2 lg:mb-3"';
  return (
    <div
      className={cn(
        containerClass,
        'items-start p-2 border rounded-[20px] border-solid border-border-primary bg-white mr-3 lg:mr-5 h-full min-w-[343px]',
      )}
    >
      <div className={cn(imageClass, 'relative bg-cover bg-no-repeat rounded-2xl overflow-hidden')}>
        <Image layout="fill" alt={alt} src={src} />
        {tags && tags?.length > 0 && <div className="absolute top-3 left-3">{tags.map((tag) => tag)}</div>}
      </div>
      <div className="flex items-center gap-2.5 self-stretch p-2 pt-3 lg:p-4 flex-1">
        <div className={cn(contentClass, 'flex flex-col gap-2.5 items-start self-stretch flex-[1_0_0]')}>
          <h3 className={headingClass}>{heading}</h3>
          {variant === 'detailed' ? (
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <CardInfoBlock title="Date:" info={formatDate(date)} />
                <CardInfoBlock title="Time:" info={time ?? ''} />
                <CardInfoBlock title="Venue:" info={place} />
              </div>
              <div className="flex justify-between w-full mt-6 items-center">
                <div className="flex gap-x-3">
                  {callToActions?.map((action, index) => (
                    <span className="shrink" key={index}>
                      {action}
                    </span>
                  ))}
                </div>
                {link && (
                  <div className="ml-auto relative">
                    <Link href={link}>
                      <Arrow direction="topLeft" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-2.5 self-stretch items-center justify-between">
              <div className="flex flex-col">
                <span className="text-light-text/[.7] text-base font-normal leading-6 tracking-[-0.16px]">{place}</span>
                <span className="text-light-text/[.7] text-base font-normal leading-6 tracking-[-0.16px]">
                  {formatDate(date)}
                </span>
              </div>
              {link && <Arrow direction="topLeft" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CardInfoBlock: FC<{ title: string; info: string }> = ({ title, info }) => (
  <div className="flex flex-col text-base tracking-[-0.16px] last:min-h-[98px]">
    <span className="text-heading font-satoshi-medium">{title}</span>
    <span className="text-light-text/[.7] font-satoshi-regular leading-6">{info}</span>
  </div>
);
