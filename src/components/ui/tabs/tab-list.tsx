'use client';

import { Children, FC, createContext } from 'react';
import { ComponentWithChildren } from './tabs';

export const TabContext = createContext<number>(0);

export const TabList: FC<ComponentWithChildren> = ({ children }) => {
  const wrappedChildren = Children.map(children, (child, index) => (
    <TabContext.Provider value={index}>{child}</TabContext.Provider>
  ));
  return <ul className="flex justify-center gap-4 mb-8">{wrappedChildren}</ul>;
};
