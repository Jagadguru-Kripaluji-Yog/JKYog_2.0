'use client';

import { Button } from '@/src/components/button/button';
import Image from 'next/image';
import { FC, useState } from 'react';

const subSections = [
  {
    id: '1',
    src: '/images/full-images/philosophy.jpg',
    alt: 'philosphy',
    subTitle: 'Philosophy',
  },
  {
    id: '2',
    src: '/images/full-images/community.jpg',
    alt: 'community',
    subTitle: 'Community',
  },
  {
    id: '3',
    src: '/images/full-images/swami.png',
    alt: 'swami',
  },
];

export const HeroSection: FC = () => {
  const [active, setActive] = useState('3');

  const onHover = (e: React.SyntheticEvent) => setActive(e.currentTarget.id);

  return (
    <section className="flex flex-col md:flex-row w-full h-[818px] lg:h-[700px]">
      {subSections.map((subSection, i) => (
        <SubSection key={subSection.id} {...subSection} onHover={onHover} isActive={active === subSection.id} />
      ))}
    </section>
  );
};

interface SubSectionProps {
  id: string;
  src: string;
  alt: string;
  subTitle?: string;
  isActive: boolean;
  onHover: (e: React.SyntheticEvent) => void;
}

const SubSection: FC<SubSectionProps> = ({ id, src, alt, isActive, onHover, subTitle }) => {
  return (
    <div
      id={id}
      className={`relative px-4 xl:px-10 pb-16 xl:py-16 overflow-hidden flex flex-col ${
        isActive ? 'flex-[1_1_73%] lg:flex-[1_1_50%]' : 'flex-[1]'
      }  transition-all duration-500 cursor-pointer`}
      onMouseEnter={onHover}
    >
      {id === '3' ? (
        <>
          <Image src={src} alt={alt} fill className="hidden lg:block object-cover z-10" />
          <Image
            src="/images/full-images/swami-mobile.png"
            alt="swami-mobile"
            fill
            className="lg:hidden object-cover z-10"
          />
        </>
      ) : (
        <Image src={src} alt={alt} fill className="object-cover z-10" />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-10" />
      <div
        className={`relative z-20 mt-auto max-w-[542px] flex-col justify-end items-start gap-10 flex transition-all duration-600 ${
          isActive ? 'flex' : 'hidden'
        }`}
      >
        <div className="flex-col justify-start items-start gap-3 flex">
          <h2 className="z-20 text-orange-50 text-[40px] lg:text-[56px] font-bold font-ptserif leading-[48px] lg:leading-[64px]">
            Swami Mukundananda. Man with a Mission
          </h2>
          <p className="z-20 text-orange-50 text-base lg:text-lg font-satoshi-regular leading-normal">
            The powerful techniques of mind management revealed by Swamiji are the elaborations of eternal truths of the
            vedas that have helped thousands of people transform their minds and their lives by learning and applying
            these principles.
          </p>
        </div>
        <Button type="link" href="/" text="Learn More" variant="contained" color="primary" />
      </div>
      {subTitle && !isActive && (
        <h3 className="mt-auto z-20 text-left md:text-center text-white text-2xl md:text-[32px] font-bold font-ptserif leading-10">
          {subTitle}
        </h3>
      )}
    </div>
  );
};
