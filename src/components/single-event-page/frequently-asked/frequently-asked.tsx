'use client';

import { FC } from 'react';
import { Accordion } from './accordion/accordion';

export const FrequentlyAsked: FC = () => {
  return (
    <section className="bg-section-bg bg-meet-section-bg pt-[100px] px-10 pb-[120px] rounded-[40px]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-heading text-[44px] leading-[56px] font-ptserif font-bold text-center mb-10">FAQ</h2>
        <Accordion />
      </div>
    </section>
  );
};
