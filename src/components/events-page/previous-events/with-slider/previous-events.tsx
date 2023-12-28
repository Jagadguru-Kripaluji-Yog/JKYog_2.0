'use client';

import { FC } from 'react';
import { VideoCard } from './video-card';
import Image from 'next/image';
import { SampleNextArrow, SamplePrevArrow } from '../../../home-page/events/featured-events/custom-slider-arrows';
import Slider, { Settings } from 'react-slick';
import { Heading } from '@/src/components/heading/heading';

export const settings: Settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
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
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
};

const cardsMock = [
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

const cardsMockMobile = [
  {
    src: '/images/events-page/video-card-mobile.png',
  },
  {
    src: '/images/events-page/video-card-mobile.png',
  },
  {
    src: '/images/events-page/video-card-mobile.png',
  },
  {
    src: '/images/events-page/video-card-mobile.png',
  },
  {
    src: '/images/events-page/video-card-mobile.png',
  },
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
    <section className="py-8 lg:pt-[100px] lg:pb-[172px] bg-bg-secondary bg-meet-section-bg rounded-t-[40px]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        <Heading title="Previous Events" classes="mb-4" />
        <p className="text-primary text-base text-center font-satoshi-regular max-w-[670px] mx-auto mb-10">
          Exploring the Chronicles of Past Events with Swami Mukundananda: From Enriching Parikrama Journeys to Profound
          Lectures, Heartfelt Testimonials, and Dynamic Shivir Activities, All Captured in Short Video Glimpses. Delve
          Beyond the Surface and Discover the Deeper Layers of Our Collective Experiences.
        </p>
        <VideoCard />
        <div className="hidden lg:block">
          <Slider {...settings}>
            {cardsMock.map((card, i) => (
              <VideoCardSmall key={i} {...card} forSlider />
            ))}
          </Slider>
        </div>
        <div className="flex flex-nowrap overflow-auto no-scrollbar gap-5 lg:hidden">
          {cardsMockMobile.map((card, i) => (
            <VideoCardSmall key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

type VideoCardSmallProps = {
  src: string;
  forSlider?: boolean;
};

const VideoCardSmall: FC<VideoCardSmallProps> = ({ src, forSlider }) => {
  const imageSize = forSlider ? 240 : 343;
  return (
    <div
      className={`
        bg-white rounded-[20px] p-2
        ${forSlider ? 'mr-5' : 'min-w-[343px] '}
    `}
    >
      <Image src={src} alt="" width={imageSize} height={imageSize} className="rounded-2xl" />
    </div>
  );
};
