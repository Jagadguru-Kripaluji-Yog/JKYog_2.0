import { FC } from 'react';
import Image from 'next/image';
import { GooglePlayIcon } from '../../../icons/play';
import { Arrow } from '../../../arrow/arrow';

export const VideoCard: FC<{
  src: string;
  heading: string;
  place: string;
  date: string;
}> = ({ src, heading, date, place }) => {
  return (
    <div className="flex flex-col items-start p-2 border rounded-[20px] border-solid border-border-primary bg-white h-full min-w-[320px]">
      <div className="relative bg-cover bg-no-repeat rounded-2xl overflow-hidden">
        <Image src={src} alt="event" width={654} height={340} className="object-cover lg:object-fill" />
        <button className="absolute top-[50%] left-[48.5%] -translate-x-2/4 -translate-y-2/4 flex justify-center items-center gap-1.5 p-[18px] rounded-[100px] bg-white hover:bg-slate-100">
          <GooglePlayIcon variant='primary' />
        </button>
      </div>
      <div className="flex items-center gap-2.5 self-stretch p-2 pt-3 lg:p-4 flex-1">
        <div className="flex flex-col justify-between items-start self-stretch flex-[1_0_0]">
          <h3 className="text-heading text-2xl lg:text-[32px] font-ptserif font-bold leading-8 lg:leading-10">
            {heading}
          </h3>
          <div className="flex gap-2.5 self-stretch items-center justify-between">
            <div className="flex flex-col">
              <span className="text-light-text/[.7] text-base font-normal leading-6 tracking-[-0.16px]">{place}</span>
              <span className="text-light-text/[.7] text-base font-normal leading-6 tracking-[-0.16px]">{date}</span>
            </div>
            <Arrow direction="topLeft" />
          </div>
        </div>
      </div>
    </div>
  );
};
