import { formatDate } from '@/src/utils/format-date';
import Image from 'next/image';
import { FC } from 'react';
import { FeaturedEventData } from './types';
import { Arrow } from '@/src/lib/arrow/arrow';
import { Badge } from '@/src/lib/badge/badge';

export const FeaturedEventCard: FC<FeaturedEventData['attributes']> = ({ image, heading, place, date }) => {
  return (
    <div className="flex flex-col items-start p-2 border rounded-[20px] border-solid border-border-primary bg-white mr-3 lg:mr-5 h-full min-w-[320px]">
      <div className="relative bg-cover bg-no-repeat rounded-2xl overflow-hidden">
        <Image
          src={image.data[0].attributes.url}
          alt="event"
          width={639}
          height={245}
          className="h-[245px] object-cover lg:object-fill"
        />
        <div className="absolute top-3 left-3">
          <Badge text="Tags" />
        </div>
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
            <Arrow direction="topLeft" />
          </div>
        </div>
      </div>
    </div>
  );
};
