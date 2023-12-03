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
      className={`inline-block cursor-pointer 
        font-satoshi-medium text-stone-600 text-xl hover:text-white
        px-6 py-2.5
         rounded-[29px]
        border border-stone-200
          ${
            isDisabled
              ? 'disabled cursor-not-allowed opacity-50'
              : isActive
                ? `active text-white bg-orange-400`
                : 'bg-white hover:bg-orange-300'
          }`}
      onClick={isDisabled ? undefined : () => setActiveIndex(index)}
      key={index + 'tab'}
      {...rest}
    >
      {children}
    </li>
  );
};
