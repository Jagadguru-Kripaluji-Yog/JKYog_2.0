'use client';

import { Children, FC, createContext } from 'react';
import { ComponentWithChildren } from './tabs';

export const TabContext = createContext<number>(0);

export const TabList: FC<ComponentWithChildren> = ({ children }) => {
  const wrappedChildren = Children.map(children, (child, index) => (
    <TabContext.Provider value={index}>{child}</TabContext.Provider>
  ));
  return (
    <ul className="grid grid-cols-[162px_221px_322px_125px] lg:flex lg:justify-center gap-4 lg:mb-8 overflow-auto no-scrollbar">
      {wrappedChildren}
    </ul>
  );
};
