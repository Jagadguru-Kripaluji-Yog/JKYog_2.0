import Image from 'next/image';
import { FC } from 'react';

export const HeroSection: FC = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px]">
      <Image src="/images/events-page/events-banner.png" alt="banner" fill objectFit="cover" />
    </section>
  );
};
