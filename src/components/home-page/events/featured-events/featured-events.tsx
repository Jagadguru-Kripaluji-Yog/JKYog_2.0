'use client';

import React, { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import { FeaturedEventCard } from './featured-event-card';
import { getFeaturedEvents } from '@/src/api/get-featured-events';
import { useFetchData } from '@/src/hooks/use-fetch-data';
import { SampleNextArrow, SamplePrevArrow } from './custom-slider-arrows';
import { Heading } from '@/src/components/heading/heading';

const settings: Settings = {
  slidesToShow: 2.9,
  slidesToScroll: 1,
  infinite: false,
  draggable: true,
  nextArrow: <SampleNextArrow position="-top-24 right-10" />,
  prevArrow: <SamplePrevArrow position="-top-24 right-[108px]" />,
  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeaturedEvents: FC = () => {
  const { data, isLoading } = useFetchData(getFeaturedEvents);

  return (
    <div className="relative flex flex-col items-center pl-4 lg:pl-10 gap-10 w-full">
      <Heading title="Featured Events" classes="w-full lg:text-left" />
      <div className="w-full">
        {data.length ? (
          <Slider {...settings}>
            {data.map(({ attributes }, index) => (
              <FeaturedEventCard key={index} {...attributes} />
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  );
};

export default FeaturedEvents;
