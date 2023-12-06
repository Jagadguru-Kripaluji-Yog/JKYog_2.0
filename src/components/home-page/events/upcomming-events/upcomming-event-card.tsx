import { FC } from 'react';
import Image from 'next/image';
import { UpcommingEventData } from './types';
import { formatDate } from '@/src/utils/format-date';
import { Arrow } from '@/src/lib/arrow/arrow';

export const UpcommingEventCard: FC<UpcommingEventData['attributes']> = ({ image, tags, heading, place, time }) => {
  return (
    <div className="flex items-center mobile:flex-col mobile:items-start  gap-5 self-stretch px-4 py-3 mobile:gap-0">
      <Image src={image.data[0].attributes.url} alt="" width={80} height={80} className="rounded-[14px]" />
      <div className="flex lg:w-[661px] flex-col justify-center items-start">
        <div className="px-2 py-1 rounded-3xl bg-yellow-50 font-ptserif text-xs text-orange-500">{tags}</div>
        <h4 className="text-heading mobile:text-[20px] text-[32px] not-italic font-ptserif font-bold leading-10 mobile:leading-5">
          {heading}
        </h4>
      </div>
      <div className="flex w-[325px] flex-col justify-center items-start self-stretch">
        <span className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal self-stretch leading-6 tracking-[-0.16px]">
          {place}
        </span>
        <span className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal self-stretch leading-6 tracking-[-0.16px]">
          {formatDate(time)}
        </span>
      </div>
      <div className="flex flex-col justify-center items-start flex-[1_0_0] self-stretch"></div>
      <Arrow direction="topLeft" />
    </div>
  );
};
