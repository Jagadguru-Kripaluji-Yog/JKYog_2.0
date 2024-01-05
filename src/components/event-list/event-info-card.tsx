import { FC, Fragment } from 'react';
import Image from 'next/image';
import { formatDate } from '@/src/utils/format-date';
import { Arrow } from '@/src/components/arrow/arrow';
import { EventInfo } from '.';

export const EventInfoCard: FC<EventInfo> = ({ imageSrc, tags, heading, place, time }) => {
  return (
    <div className="grid xl:grid-cols-[680px_325px_44px] justify-between items-center gap-1 xl:gap-5 w-full px-2 xl:px-4 py-3">
      <div className="flex gap-5">
        {imageSrc && <Image src={imageSrc} alt="" width={80} height={80} className="hidden xl:block rounded-[14px]" />}
        <div className="flex flex-col justify-center items-start gap-2 xl:gap-0 pt-1 xl:pt-0">
          <div className="flex gap-x-3">{tags?.map((tag, index) => <div key={index}>{tag}</div>)}</div>

          <h4 className="max-w-[511px] text-heading text-[20px] md:text-[32px] font-ptserif font-bold leading-6 md:leading-10 mobile:leading-5">
            {heading}
          </h4>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start">
        <span className="text-light-text text-base not-italic font-normal leading-6 tracking-[-0.16px]">{place}</span>
        <span className="text-light-text text-base not-italic font-normal leading-6 tracking-[-0.16px]">
          {formatDate(time)}
        </span>
      </div>
      <div className="hidden xl:block">
        <Arrow direction="topLeft" />
      </div>
    </div>
  );
};