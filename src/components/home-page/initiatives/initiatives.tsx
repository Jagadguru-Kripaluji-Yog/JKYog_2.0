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
    <section className="flex flex-col justify-center items-center gap-10 self-stretch pt-[88px] pb-20 px-10">
      <h2 className="text-[#291900] text-center text-[44px] font-ptserif font-bold leading-[56px]">
        JKYog Initiatives
      </h2>
      <ComposedTabs data={tabData} />
    </section>
  );
};

export default Initiatives;
