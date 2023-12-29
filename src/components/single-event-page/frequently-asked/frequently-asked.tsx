'use client';

import { FC } from 'react';
import { Accordion } from './accordion/accordion';
import { Heading } from '../../heading/heading';

export const FrequentlyAsked: FC = () => {
  return (
    <section className="bg-section-bg bg-meet-section-bg py-8 lg:pt-[100px] px-4 lg:px-10 lg:pb-[120px] rounded-[40px]">
      <div className="max-w-[900px] mx-auto">
        <Heading title="FAQ" classes="mb-6 lg:mb-10" />
        <Accordion />
      </div>
    </section>
  );
};
