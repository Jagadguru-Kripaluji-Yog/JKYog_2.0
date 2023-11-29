'use client';

import { Button } from '@/src/lib/button/button';
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
    <section className="flex w-full h-[700px]">
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
      className={`relative px-10 py-16 overflow-hidden flex flex-col ${
        isActive ? 'flex-[1_1_50%]' : 'flex-[1]'
      }  transition-all duration-500 `}
      onMouseEnter={onHover}
    >
      <Image src={src} alt={alt} fill className="object-cover z-10" />
      <div
        className={`relative z-20 mt-auto w-[542px] h-[392px] flex-col justify-start items-start gap-10 inline-flex transition-all duration-600 ${
          isActive ? 'opacity-1' : 'opacity-0'
        }`}
      >
        <div className="self-stretch h-[300px] flex-col justify-start items-start gap-3 flex">
          <h1 className="self-stretch text-orange-50 text-[56px] font-bold font-ptserif leading-[64px]">
            Swami Mukundananda. Man with a Mission
          </h1>
          <p className="self-stretch text-orange-50 text-lg font-satoshi-regular leading-normal">
            The powerful techniques of mind management revealed by Swamiji are the elaborations of eternal truths of the
            vedas that have helped thousands of people transform their minds and their lives by learning and applying
            these principles.
          </p>
        </div>
        <Button href="/" text="Learn More" variant="contained" color="primary" />
      </div>
      {subTitle && !isActive && (
        <h3 className="z-20 w-[210px] text-center text-white text-[32px] font-bold font-ptserif leading-10">
          {subTitle}
        </h3>
      )}
    </div>
  );
};
