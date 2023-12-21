import { FC } from 'react';
import Image from 'next/image';
import { Play } from '../../icons/play';
import { Arrow } from '../../arrow/arrow';

export const VideoCard: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] lg:grid-cols-[600px_1fr] xl:grid-cols-[777px_1fr] md:gap-5 p-2 lg:p-3 rounded-[20px] border border-border-primary bg-white mb-5">
      <div className="relative">
        <Image
          src="/images/events-page/video.png"
          alt="test image"
          width={777}
          height={400}
          className="rounded-2xl h-[240px] lg:h-[400px] object-cover"
        />
        <button className="absolute top-[50%] left-[48.5%] -translate-x-2/4 -translate-y-2/4 flex justify-center items-center gap-1.5 p-[18px] rounded-[100px] bg-button-primary hover:bg-orange-400">
          <Play />
        </button>
      </div>
      <div className="flex flex-col justify-between items-start pt-3 p-2 lg:p-3 lg:pl-0 h-full">
        <div className="flex flex-col max-w-[610px] gap-2">
          <h3 className=" text-heading text-2xl lg:text-[32px] font-ptserif font-bold lg:leading-10">
            Bangalore Program Highlights 2019 | Swami Mukundananda Hindi
          </h3>
          <p className="text-primary text-base font-satoshi-regular leading-6 tracking-[-0.16px]">
            What inspires the mind to focus on God and what inspires the mind to run away in the direction of the world?
            The same student who does not feel like studying throughout the year is seen working hard at the time of his
            exams. What brings about this change in the child? Watch this inspiring video by Swami Mukundananda to find
            out who rules the mind. Learn the secret and then rule your mind to make your life a success.
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-button-primary opacity-50 text-base font-satoshi-bold leading-6 mt-2">
            10 Dec, 2019
          </span>
          <Arrow direction="topLeft" />
        </div>
      </div>
    </div>
  );
};
