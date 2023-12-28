import React, { FC } from 'react';
import { ComposedTabs, ComposedTabsProps } from '../../tabs/composed-tabs';
import Stack from './stack';
import { Heading } from '../../heading/heading';

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
      <Heading title="JKYog Initiatives" />
      <ComposedTabs data={tabData} />
    </section>
  );
};

export default Initiatives;
