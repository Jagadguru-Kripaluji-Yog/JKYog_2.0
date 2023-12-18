'use client';

import { FC, ReactNode, useState } from 'react';
import { Tabs } from './tabs';
import { TabList } from './tab-list';
import { Tab } from './tab';
import { TabPanel, TabPanels } from './tab-panels';
import { FilterSelect } from '../../events-page/upcoming-events/filter-select';

export interface ComposedTabsProps {
  data: { label: string; content: ReactNode; disabled?: boolean }[];
  limit?: number;
}

const getExtraTabs = (tabs: ComposedTabsProps['data'], limit: number): number => {
  if (limit > tabs.length || limit === 0) {
    return 0;
  }

  return tabs.length - limit;
};

const getSliced = (tabs: ComposedTabsProps['data'], extraTabs: number): ComposedTabsProps['data'] => {
  if (!extraTabs) {
    return tabs;
  }

  const slicedTo = tabs.length - extraTabs;
  return tabs.slice(0, slicedTo);
};

export const ComposedTabs: FC<ComposedTabsProps> = ({ data, limit = 0 }) => {
  const [extraTabs, setExtraTabs] = useState(getExtraTabs(data, limit));
  return (
    <Tabs>
      {limit ? (
        <TabListWithFilters
          data={data}
          extraTabs={extraTabs}
          onShow={() => setExtraTabs(0)}
          onHide={() => setExtraTabs(getExtraTabs(data, limit))}
        />
      ) : (
        <TabList>
          {getSliced(data, extraTabs).map((tab, i) => (
            <Tab isDisabled={tab.disabled} key={`tw-tab-${i}`}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
      )}

      <TabPanels>
        {getSliced(data, extraTabs).map((tab, i) => (
          <TabPanel key={`tw-tabp-${i}`}>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

const TabListWithFilters: FC<{
  data: ComposedTabsProps['data'];
  extraTabs: number;
  onShow: () => void;
  onHide: () => void;
}> = ({ data, extraTabs, onShow, onHide }) => (
  <div className="flex justify-between">
    <TabList centered={false}>
      {getSliced(data, extraTabs).map((tab, i) => (
        <Tab isDisabled={tab.disabled} key={`tw-tab-${i}`}>
          {tab.label}
        </Tab>
      ))}
      {extraTabs ? (
        <span
          onClick={onShow}
          className="text-base font-satoshi-bold text-button-primary hover:text-button-primary/[.8] cursor-pointer text-center w-20"
        >
          + {extraTabs} cities
        </span>
      ) : (
        <span
          onClick={onHide}
          className="text-base font-satoshi-bold text-button-primary hover:text-button-primary/[.8] cursor-pointer text-center w-20"
        >
          Hide
        </span>
      )}
    </TabList>
    <FilterSelect />
  </div>
);
