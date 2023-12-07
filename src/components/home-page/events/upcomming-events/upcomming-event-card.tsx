import { FC } from 'react';
import Image from 'next/image';
import { UpcommingEventData } from './types';
import { formatDate } from '@/src/utils/format-date';
import { Arrow } from '@/src/lib/arrow/arrow';

export const UpcommingEventCard: FC<UpcommingEventData['attributes']> = ({ image, tags, heading, place, time }) => {
  return (
    <div className="grid xl:grid-cols-[680px_325px_44px] justify-between items-center gap-1 xl:gap-5 w-full px-2 xl:px-4 py-3">
      <div className="flex gap-5">
        <Image
          src={image.data[0].attributes.url}
          alt=""
          width={80}
          height={80}
          className="hidden xl:block rounded-[14px]"
        />
        <div className="flex flex-col justify-center items-start gap-2 xl:gap-0 pt-1 xl:pt-0">
          <div className="px-2 py-1 rounded-3xl bg-yellow-50 font-ptserif text-xs text-orange-500">{tags}</div>
          <h4 className="max-w-[511px] text-heading text-[20px] md:text-[32px] font-ptserif font-bold leading-10 mobile:leading-5">
            {heading}
          </h4>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start">
        <span className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal  leading-6 tracking-[-0.16px]">
          {place}
        </span>
        <span className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal  leading-6 tracking-[-0.16px]">
          {formatDate(time)}
        </span>
      </div>
      <div className="hidden xl:block">
        <Arrow direction="topLeft" />
      </div>
    </div>
  );
};
