'use client';

import { Children, FC, createContext } from 'react';
import { ComponentWithChildren } from './tabs';

export const TabContext = createContext<number>(0);

export const TabList: FC<ComponentWithChildren & { centered?: boolean }> = ({ children, centered = true }) => {
  const wrappedChildren = Children.map(children, (child, index) => (
    <TabContext.Provider value={index}>{child}</TabContext.Provider>
  ));
  return (
    <ul
      className={`flex flex-nowrap lg:flex-wrap lg:justify-start items-center gap-4 lg:mb-8 ${
        centered ? 'lg:mx-auto' : ''
      } overflow-auto lg:overflow-visible no-scrollbar`}
    >
      {wrappedChildren}
    </ul>
  );
};
