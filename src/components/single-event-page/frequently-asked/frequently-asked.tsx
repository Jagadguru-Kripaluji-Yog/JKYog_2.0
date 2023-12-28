'use client';

import { FC } from 'react';
import { Accordion } from './accordion/accordion';
import { Heading } from '../../heading/heading';

export const FrequentlyAsked: FC = () => {
  return (
    <section className="bg-section-bg bg-meet-section-bg pt-[100px] px-10 pb-[120px] rounded-[40px]">
      <div className="max-w-[900px] mx-auto">
        <Heading title="FAQ" classes="mb-10" />
        <Accordion />
      </div>
    </section>
  );
};
