import { Button } from '@/src/lib/button/button';
import Image from 'next/image';
import React, { FC } from 'react';

const Mission: FC = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 self-stretch px-10 py-[100px] mobile:w-[375px]">
      <Image
        src="/images/background-flowers-left.png"
        alt="bg-left"
        width={640}
        height={424}
        className="absolute left-0 top-0"
      />
      <Image
        src="/images/background-flowers-right.png"
        alt="bg-right"
        width={640}
        height={424}
        className="absolute right-0 top-0"
      />
      <Image src="/images/blur.png" alt="blur" width={1176} height={424} className="absolute left-132 top-0" />
      <div className="z-10 w-[894px] h-[132px] flex-col justify-center items-center gap-3 inline-flex">
        <div className="self-stretch text-center text-lime-950 text-[40px] font-bold font-ptserif leading-[48px]">
          Jagadguru Kripaluji Yog
        </div>
        <div className="self-stretch text-center text-stone-600 text-lg font-normal font-satoshi-regular leading-normal">
          JKYog (Jagadguru Kripaluji Yog) is a non-profit charitable organization established for the physical, mental,
          and spiritual well-being of all humankind. It disseminates authentic knowledge of Yoga for the body, mind, and
          soul. It serves the needy, promotes education for the rural youth and provides healthcare for the
          underprivileged.
        </div>
      </div>
      <Button href="/" text="About Us" variant="contained" color="primary" />
    </section>
  );
};

export default Mission;
