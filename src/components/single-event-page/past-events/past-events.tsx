'use client';

import { FC } from 'react';
import { VideoCard } from '../../events-page/previous-events/default/video-card';
import { VideoCardSmall } from '../../events-page/previous-events/default/previous-events';
import { Button } from '../../button/button';
import { Heading } from '../../heading/heading';

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

export const PastEvents: FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto pt-10 lg:pt-14 px-4 lg:px-10 pb-20 lg:pb-[120px]">
      <Heading title="Past Events Glimpses" classes=" mb-4" />
      <p className="text-primary text-base font-satoshi-regular text-center max-w-[670px] mx-auto mb-10">
        Swamiji’s lectures cover the teachings of the Vedas, Upanishads, Shreemad Bhagwatam, Puranas, Bhagavad Geeta,
        Ramayan, & other Eastern scriptures and Western philosophies. Like the true Disciple of a true Master, Swamiji
        masterfully quotes from the scriptures of all the great religions, to satisfy even the most discerning of
        knowledge-seekers.
      </p>
      <div className="flex flex-col lg:flex-row justify-center gap-5 mb-5">
        {mockVideos.map((video, i) => (
          <VideoCard key={i} {...video} />
        ))}
      </div>
      <div className="flex flex-nowrap lg:flex-row gap-3 lg:gap-5 mb-10 overflow-auto no-scrollbar -mr-3 pr-3">
        {mockVideosSmall.map((video, i) => (
          <VideoCardSmall key={i} {...video} />
        ))}
      </div>
      <Button type="link" href="/" variant="contained" color="primary" text="Learn more" centered />
    </section>
  );
};
