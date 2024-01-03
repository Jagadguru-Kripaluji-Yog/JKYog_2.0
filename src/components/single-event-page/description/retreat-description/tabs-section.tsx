import { ComposedTabs } from '@/src/components/tabs/composed-tabs';
import Image from 'next/image';
import { FC } from 'react';

const TabContent: FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src="/images/events-page/highlight.png" alt="" width={590} height={340} />
      <div className="p-6 border border-border-primary rounded-[20px] bg-white">
        <h4 className="text-heading text-lg leading-6 font-ptserif font-bold mb-2">{title}</h4>
        <p className="text-primary text-base font-satoshi-regular">{description}</p>
      </div>
    </div>
  );
};

type TabsSectionProps = {
  title: string;
  tabsData: TabsData[];
};

type TabsData = {
  label: string;
  description: string;
};

export const TabsSection: FC<TabsSectionProps> = ({ title, tabsData }) => {
  const data = tabsData.map(({ label, description }) => ({
    label,
    content: <TabContent title={label} description={description} />,
  }));

  return (
    <div className="bg-bg-light p-6 lg:p-10 rounded-[20px] border border-border-primary">
      <h4 className="text-heading text-2xl font-ptserif font-bold mb-5 lg:mb-6">{title}</h4>
      <ComposedTabs data={data} small />
    </div>
  );
};
