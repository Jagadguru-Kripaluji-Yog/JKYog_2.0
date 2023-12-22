'use client';

import { FC } from 'react';
import Image from 'next/image';
import { VideoCard } from './video-card';
import { Button } from '@/src/components/button/button';

const mockVideos = [
  {
    src: '/images/events-page/video.png',
    heading: 'Bangalore Program Highlights 2019',
    place: 'Online, TX',
    date: 'October 14 – October 24, 2023',
  },
  {
    src: '/images/events-page/video2.png',
    heading: 'JKYog Spiritual Retreat & Family Camp',
    place: 'Online, TX',
    date: 'October 14 – October 24, 2023',
  },
];

const mockVideosSmall = [
  {
    src: '/images/events-page/video-card-mobile.png',
  },
  {
    src: '/images/events-page/video-card-mobile.png',
  },
  {
    src: '/images/events-page/video-card-mobile.png',
  },
];

export const PreviousEvents: FC = () => {
  return (
    <section className="py-8 lg:pt-[100px] lg:pb-[80px] bg-bg-secondary bg-meet-section-bg rounded-t-[40px]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <h2 className="text-center text-heading text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px] mb-4">
          Previous Events
        </h2>
        <p className="text-primary text-base text-center font-satoshi-regular max-w-[670px] mx-auto mb-10">
          Exploring the Chronicles of Past Events with Swami Mukundananda: From Enriching Parikrama Journeys to Profound
          Lectures, Heartfelt Testimonials, and Dynamic Shivir Activities, All Captured in Short Video Glimpses. Delve
          Beyond the Surface and Discover the Deeper Layers of Our Collective Experiences.
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-5 mb-5">
          {mockVideos.map((video, i) => (
            <VideoCard key={i} {...video} />
          ))}
        </div>
        <div className="flex flex-nowrap lg:flex-row gap-3 lg:gap-5 mb-10 overflow-auto no-scrollbar -mr-5 pr-5">
          {mockVideosSmall.map((video, i) => (
            <VideoCardSmall key={i} {...video} />
          ))}
        </div>
        <Button type="link" href="/" variant="contained" color="primary" text="Learn more" centered />
      </div>
    </section>
  );
};

type VideoCardSmallProps = {
  src: string;
};

const VideoCardSmall: FC<VideoCardSmallProps> = ({ src }) => {
  return (
    <div className="bg-white rounded-[20px] p-2 min-w-[343px]">
      <Image src={src} alt="" width={424} height={424} className="rounded-2xl" />
    </div>
  );
};
