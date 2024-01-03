import { Button } from '@/src/components/button/button';
import { FC } from 'react';

export const HeroSection: FC = () => {
  return (
    <section className="relative flex items-end w-full h-[500px] lg:h-[600px] bg-events-banner-mobile lg:bg-events-banner bg-no-repeat bg-cover px-4 lg:pl-[162px] pb-12 lg:pb-[123px]">
      <Button
        type="link"
        href="/"
        variant="contained"
        color="primary"
        text="Register"
        classes="lg:absolute left-[162px] bottom-[123px]"
      />
    </section>
  );
};
