'use client';

import { FC, ReactNode, useContext } from 'react';
import { ComponentWithChildren, TabsContext } from './tabs';

export const TabPanels: FC<ComponentWithChildren> = ({ children }) => {
  const { activeIndex } = useContext(TabsContext);

  return <div>{(children as ReactNode[])[activeIndex]}</div>;
};

export const TabPanel: FC<ComponentWithChildren> = ({ children }) => {
  return children;
};
