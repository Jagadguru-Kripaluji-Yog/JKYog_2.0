'use client';

import React, { useState, createContext, FC, ReactNode } from 'react';

export interface ComponentWithChildren {
  children: ReactNode | ReactNode[];
}

interface TabsContext {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const initialContext: TabsContext = {
  activeIndex: 0,
  setActiveIndex: () => {},
};

export const TabsContext = createContext<TabsContext>(initialContext);

export const Tabs: FC<ComponentWithChildren> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>{children}</TabsContext.Provider>;
};
