'use client';

import { FC } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import {
  SampleNextArrow,
  SamplePrevArrow,
} from '@/src/components/home-page/events/featured-events/custom-slider-arrows';

const settings: Settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  nextArrow: <SampleNextArrow position="-top-[60px] right-3" small />,
  prevArrow: <SamplePrevArrow position="-top-[60px] right-[71px]" small />,
  responsive: [
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const slides = [1, 2, 3, 4];

export const Highights: FC = () => {
  return (
    <div className="bg-bg-light p-6 lg:p-10 rounded-[20px] border border-border-primary">
      <h4 className="text-heading text-2xl font-ptserif font-bold mb-5 lg:mb-6">Highlights:</h4>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {slides.map((s) => (
            <div
              key={s}
              className="!flex flex-col justify-center p-5 bg-bg-secondary rounded-3xl max-w-[186px] h-[250px] mr-1"
            >
              <Image
                src="/images/events-page/highlight-image.png"
                alt=""
                width={146}
                height={146}
                className="mx-auto"
              />
              <h5 className="text-heading text-lg text-center leading-[26px] font-satoshi-medium mt-auto">
                Swamiji’s Lectures
              </h5>
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:hidden flex gap-4 overflow-auto no-scrollbar -mr-4 pr-4">
        {slides.map((s) => (
          <div
            key={s}
            className="flex flex-col gap-3 justify-start p-5 bg-bg-secondary rounded-3xl min-w-[197px] h-[224px]"
          >
            <Image src="/images/events-page/highlight-image.png" alt="" width={156} height={146} className="mx-auto" />
            <h5 className="text-heading text-lg text-center leading-[26px] font-satoshi-medium mt-auto">
              Swamiji’s Lectures
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
