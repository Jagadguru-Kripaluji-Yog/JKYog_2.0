import { FC } from 'react';
import Image from 'next/image';
import { Badge } from '@/src/lib/badge/badge';
import { formatDate } from '@/src/utils/format-date';

export const CardLarge: FC<{ blogs: any }> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:gap-5 p-3 rounded-[20px] border border-[#F0EBE1] w-full">
      <div className="relative">
        <Image
          src={blogs[0].attributes.poster.data[0].attributes.url}
          alt="test image"
          width={584}
          height={235}
          className="rounded-2xl"
        />
        <div className="absolute top-2.5 left-2.5 z-10">
          <Badge text={blogs[0].attributes.tag} src="/icons/location.png" />
        </div>
      </div>
      <div className="flex flex-col justify-between items-start px-0 py-3 h-full">
        <div className="flex flex-col max-w-[610px] gap-2 ">
          <h3 className=" text-heading text-2xl lg:text-[32px] font-ptserif font-bold lg:leading-10">
            {blogs[0].attributes.heading}
          </h3>
          <p className="text-primary text-base font-satoshi-regular leading-6 tracking-[-0.16px]">
            {blogs[0].attributes.detail}
          </p>
        </div>
        <span className="text-[#EF6F1F] opacity-50 text-base font-satoshi-bold leading-6 mt-2">
          {formatDate(blogs[0].attributes.time)}
        </span>
      </div>
    </div>
  );
};
