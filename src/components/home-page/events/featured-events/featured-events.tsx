'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import { FeaturedEventData } from './types';
import { FeaturedEventCard } from './featured-event-card';
import { getFeaturedEvents } from '@/src/api/get-featured-events';

const arrows = [
  {
    src: '/icons/arrow-left.svg',
    alt: 'arrow-left',
  },
  {
    src: '/icons/arrow-right.svg',
    alt: 'arrow-right',
  },
];

const settings: Settings = {
  slidesToShow: 2.5,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
};

const FeaturedEvents = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [featuredEvents, setFeaturedEvents] = useState<FeaturedEventData[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await getFeaturedEvents();
      setFeaturedEvents(data.data);
    };

    getEvents();
  }, []);

  return (
    <div className="w-[1440px] mx-auto flex flex-col items-center gap-10 self-stretch">
      <nav className="flex justify-between items-center self-stretch">
        <h2 className="text-[44px] mobile:text-[32px] not-italic font-bold leading-[56px] font-ptserif">
          Featured Events
        </h2>
        <div className="flex justify-center items-center gap-4 mobile:hidden mr-10">
          {arrows.map(({ src, alt }, index) => (
            <button
              key={index}
              onClick={index === 0 ? sliderRef?.current?.slickPrev : sliderRef?.current?.slickNext}
              className="rounded-[40px] border-[1.25px] border-solid border-[#DAD3C8] flex items-start gap-2.5 p-4 hover:bg-yellow-100 transition duration-300"
            >
              <Image src={src} alt={alt} width={20} height={20} />
            </button>
          ))}
        </div>
      </nav>
      <div className="w-full">
        {featuredEvents.length ? (
          <Slider ref={sliderRef} {...settings}>
            {featuredEvents.map(({ attributes }, index) => (
              <FeaturedEventCard key={index} {...attributes} />
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  );
};

export default FeaturedEvents;
