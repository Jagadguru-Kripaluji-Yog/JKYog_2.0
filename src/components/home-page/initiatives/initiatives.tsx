import React, { FC } from 'react';
import { ComposedTabs, ComposedTabsProps } from '../../ui/tabs/composed-tabs';
import Stack from './stack';

const tabData: ComposedTabsProps['data'] = [
  {
    label: 'My Daily Sadhana',
    content: <Stack />,
  },
  {
    label: 'Radha Krishna Bhakti App',
    content: 'Radha Krishna Bhakti App',
  },
  {
    label: 'Swami Mukundananda Youtube channel',
    content: 'Swami Mukundananda Youtube channel',
  },
  {
    label: 'JKYog Radio',
    content: 'JKYog Radio',
  },
];

const Initiatives: FC = () => {
  return (
    <section className="grid grid-cols-1 justify-center items-center gap-6 lg:gap-10 pt-[88px] py-[72px] lg:pb-20 px-4 lg:px-10">
      <h2 className="text-heading text-center text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px]">
        JKYog Initiatives
      </h2>
      <ComposedTabs data={tabData} />
    </section>
  );
};

export default Initiatives;
