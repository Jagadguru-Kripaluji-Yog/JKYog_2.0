'use client';

import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from '../../home-page/events/featured-events/custom-slider-arrows';
import { QuoteIcon } from '../../home-page/subscription/quote';
import { Heading } from '../../heading/heading';

const settings: Settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  infinite: false,
  nextArrow: <SampleNextArrow position="-bottom-10 left-[50%] translate-x-2 translate-y-[100%]" />,
  prevArrow: <SamplePrevArrow position="-bottom-10 right-[50%] -translate-x-2 translate-y-[100%]" />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2.7,
        slidesToScroll: 1,
      },
    },
  ],
};

const test = [1, 2, 3, 4, 5];

export const Testimonials: FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 xl:px-10 pt-20 lg:pt-[120px] pb-10 lg:pb-[156px]">
      <Heading title="Testimonials" classes="mb-10" />
      <Slider {...settings} className="hidden xl:block">
        {test.map((t) => (
          <TestimonialCard key={t} />
        ))}
      </Slider>
      <div className="flex xl:hidden overflow-auto no-scrollbar -mr-4">
        {test.map((t) => (
          <TestimonialCard key={t} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard: FC = () => {
  return (
    <div className="group h-[476px] min-w-[320px] xl:min-w-[440px] mr-3 xl:mr-5 flex flex-col items-center px-8 pt-12 pb-10 xl:px-[54px] xl:py-16 border border-border-primary rounded-t-[180px] rounded-b-[20px] bg-bg-light hover:bg-button-primary cursor-pointer transition duration-300 ease-in-out">
      <QuoteIcon />
      <span className="text-xl text-primary group-hover:text-white text-center font-satoshi-regular mt-8 xl:mt-6">
        I went through the Isha Kriya process today and felt tears welling up in my eyes... I felt something - sort of
        an urge to enjoy it longer.
      </span>
      <span className="mt-auto text-heading group-hover:text-white text-center text-lg leading-[26px] font-ptserif font-bold">
        — Aparna <br />
        India, October 2023
      </span>
    </div>
  );
};
