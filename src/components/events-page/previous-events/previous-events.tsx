'use client';

import { FC } from 'react';
import { VideoCard } from './video-card';
import Image from 'next/image';
import { SampleNextArrow, SamplePrevArrow } from '../../home-page/events/featured-events/custom-slider-arrows';
import Slider, { Settings } from 'react-slick';

const settings: Settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  draggable: true,
  variableWidth: true,
  adaptiveHeight: true,
  nextArrow: <SampleNextArrow position="-bottom-10 left-[50%] translate-x-2 translate-y-[100%]" />,
  prevArrow: <SamplePrevArrow position="-bottom-10 right-[50%] -translate-x-2 translate-y-[100%]" />,
  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
  ],
};

const cards = [
  {
    src: '/images/events-page/video-card.png',
  },
  {
    src: '/images/events-page/video-card.png',
  },
  {
    src: '/images/events-page/video-card.png',
  },
  {
    src: '/images/events-page/video-card.png',
  },
  {
    src: '/images/events-page/video-card.png',
  },
  {
    src: '/images/events-page/video-card.png',
  },
  {
    src: '/images/events-page/video-card.png',
  },
  {
    src: '/images/events-page/video-card.png',
  },
];

export const PreviousEvents: FC = () => {
  return (
    <section className="pt-[100px] pb-[172px] bg-bg-secondary bg-meet-section-bg rounded-t-[40px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <h2 className="text-center text-heading text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px] mb-4">
          Previous Events
        </h2>
        <p className="text-primary text-base text-center font-satoshi-regular max-w-[670px] mx-auto mb-10">
          Exploring the Chronicles of Past Events with Swami Mukundananda: From Enriching Parikrama Journeys to Profound
          Lectures, Heartfelt Testimonials, and Dynamic Shivir Activities, All Captured in Short Video Glimpses. Delve
          Beyond the Surface and Discover the Deeper Layers of Our Collective Experiences.
        </p>
        <VideoCard />
        <Slider {...settings}>
          {cards.map((card, i) => (
            <VideoCardSmall key={i} {...card} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

type VideoCardSmallProps = {
  src: string;
};

const VideoCardSmall: FC<VideoCardSmallProps> = ({ src }) => {
  return (
    <div className="bg-white rounded-[20px] p-2 mr-5">
      <Image src={src} alt="" width={240} height={240} className="rounded-2xl" />
    </div>
  );
};
