import { formatDate } from '@/src/utils/format-date';
import Image from 'next/image';
import { FC } from 'react';
import { FeaturedEventData } from './types';
import { Arrow } from '@/src/lib/arrow/arrow';

export const FeaturedEventCard: FC<FeaturedEventData['attributes']> = ({ image, heading, place, date }) => {
  return (
    <div className="flex !w-[555px]  mobile:w-[375px] flex-col items-start p-2 border rounded-[20px] border-solid border-[#F0EBE1] bg-white">
      <div className="relative w-[539px] h-[245px] bg-cover bg-no-repeat rounded-2xl overflow-hidden">
        <Image
          src={image.data[0].attributes.url}
          alt="event"
          width={539}
          height={245}
          className="absolute top-0 z-0 h-[245px]"
          objectFit="cover"
        />
        <div className="relative z-10 inline-flex items-center gap-1 px-2 py-1 rounded-3xl bg-[#fffbf2] mt-[12px] ml-[12px]">
          <span className="text-[#EF6F1F] text-center text-xs not-italic font-bold leading-4">tags</span>
        </div>
      </div>
      <div className="flex items-center gap-2.5 self-stretch p-4">
        <div className="flex flex-col justify-center items-start flex-[1_0_0]">
          <h3 className="text-[#291900] text-[32px] font-ptserif not-italic font-bold leading-10">{heading}</h3>
          <div className="flex gap-2.5 self-stretch items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
                {place}
              </span>
              <span className="text-[rgba(58,45,39,0.70)] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
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
