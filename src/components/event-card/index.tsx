import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { Badge } from '../badge/badge';
import { formatDate } from '@/src/utils/format-date';
import { Arrow } from '../arrow/arrow';
import { cn } from '@/src/utils/tailwind';

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
  const imageClass = orientation === 'stacked' ? 'w-full h-2/3' : 'h-full w-1/2';
  const containerClass = orientation === 'stacked' ? 'flex flex-col' : 'flex';
  return (
    <div
      className={cn(
        containerClass,
        'items-start p-2 border rounded-[20px] border-solid border-border-primary bg-white mr-3 lg:mr-5 h-full min-w-[320px]',
      )}
    >
      <div className={cn(imageClass, 'relative bg-cover bg-no-repeat rounded-2xl overflow-hidden')}>
        <Image layout="fill" alt={alt} src={src} />
        {tags && tags?.length > 0 && <div className="absolute top-3 left-3">{tags.map((tag) => tag)}</div>}
      </div>
      <div className="flex items-center gap-2.5 self-stretch p-2 pt-3 lg:p-4 flex-1">
        <div className="flex flex-col justify-between items-start self-stretch flex-[1_0_0]">
          <h3 className="text-heading text-2xl lg:text-[32px] font-ptserif font-bold leading-8 lg:leading-10">
            {heading}
          </h3>
          <div className="flex gap-2.5 self-stretch items-center justify-between">
            <div className="flex flex-col">
              <span className="text-light-text/[.7] text-base font-normal leading-6 tracking-[-0.16px]">{place}</span>
              <span className="text-light-text/[.7] text-base font-normal leading-6 tracking-[-0.16px]">
                {formatDate(date)}
              </span>
            </div>
            {link && <Arrow direction="topLeft" />}
          </div>
        </div>
      </div>
    </div>
  );
};
