'use client';

import { FC, useContext } from 'react';
import { ComponentWithChildren, TabsContext } from './tabs';
import { TabContext } from './tab-list';

interface TabProps extends ComponentWithChildren {
  isDisabled?: boolean;
}

export const Tab: FC<TabProps> = ({ children, isDisabled, ...rest }) => {
  const index = useContext(TabContext);
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = index === activeIndex;
  return (
    <li
      className={`block cursor-pointer 
        font-satoshi-regular text-primary text-base lg:text-xl hover:text-white
        px-4 lg:px-6 py-2.5
        rounded-[29px]
        w-fit whitespace-nowrap
        border border-border-primary
          ${
            isDisabled
              ? 'disabled cursor-not-allowed opacity-50'
              : isActive
                ? `active text-white bg-button-primary`
                : 'bg-white hover:bg-button-primary/[.7]'
          }`}
      onClick={isDisabled ? undefined : () => setActiveIndex(index)}
      key={index + 'tab'}
      {...rest}
    >
      {children}
    </li>
  );
};
