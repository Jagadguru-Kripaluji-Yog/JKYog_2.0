import { FC } from 'react';
import Image from 'next/image';
import { Badge } from '@/src/lib/badge/badge';
import { formatDate } from '@/src/utils/format-date';

export const CardLarge: FC<{ blogs: any }> = ({ blogs }) => {
  return (
    <div className="flex h-[360px] items-center gap-5 self-stretch p-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]">
      <div className="relative flex w-[584px] items-center self-stretch pl-2.5 pr-[413px] pt-2.5 pb-[302px]">
        <Image src={blogs[0].attributes.poster.data[0].attributes.url} alt="test image" fill className="rounded-2xl" />
        <div className="z-10">
          <Badge text={blogs[0].attributes.tag} src="/icons/location.png" />
        </div>
      </div>
      <div className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch px-0 py-3">
        <div className="flex w-[610px] h-[211.5px] flex-col items-start gap-3">
          <div className="flex flex-col justify-center items-start gap-2 self-stretch">
            <h3 className="self-stretch text-heading text-[32px] font-ptserif font-bold leading-10">
              {blogs[0].attributes.heading}
            </h3>
            <p className="self-stretch text-primary text-base font-satoshi-regular leading-6 tracking-[-0.16px]">
              {blogs[0].attributes.detail}
            </p>
          </div>
        </div>
        <p className="self-stretch text-orange-500 opacity-50 text-base font-satoshi-bold leading-6">
          {formatDate(blogs[0].attributes.time)}
        </p>
      </div>
    </div>
  );
};
