import { FC, ReactNode } from 'react';
import { Tabs } from './tabs';
import { TabList } from './tab-list';
import { Tab } from './tab';
import { TabPanel, TabPanels } from './tab-panels';

export interface ComposedTabsProps {
  data: { label: string; content: ReactNode; disabled?: boolean }[];
}

export const ComposedTabs: FC<ComposedTabsProps> = ({ data }) => {
  return (
    <Tabs>
      <TabList>
        {data.map((tab, i) => (
          <Tab isDisabled={tab.disabled} key={`tw-tab-${i}`}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((tab, i) => (
          <TabPanel key={`tw-tabp-${i}`}>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
