import { FC, useState } from 'react';
import Image from 'next/image';

const values = ['All', 'Online', 'In-person', 'With Swamiji'];

export const FilterSelect: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(values[1]);

  return (
    <div className="relative z-10 whitespace-nowrap w-full lg:w-fit">
      <div
        onClick={() => setExpanded(true)}
        className={`${
          expanded ? 'flex items-center' : 'flex items-center'
        } group border border-border-primary rounded-3xl pl-6 py-3.5 pr-4 cursor-pointer`}
      >
        <span className="text-heading text-lg font-ptserif font-satoshi-medium leading-6 ">Sort by:</span>
        &nbsp;
        <span className="text-[#948C80] text-lg font-ptserif font-satoshi-medium leading-6 ">{selected}</span>
        <button className="ml-auto lg:ml-2 group-hover:bg-gray-100 rounded-md w-4 h-4">
          <Image src="/icons/caret-black.svg" alt="caret" width={16} height={16} />
        </button>
      </div>
      <ul
        className={`${
          expanded ? 'flex' : 'hidden'
        } absolute top-0 flex-col pl-6 py-3.5 pr-4 gap-5 border border-border-primary rounded-3xl bg-white w-full`}
      >
        <li onClick={() => setExpanded(false)} className="flex items-center cursor-pointer">
          <span className="text-heading text-lg font-ptserif font-satoshi-medium leading-6">Sort by:</span>
          &nbsp;
          <span className="text-[#948C80] text-lg font-ptserif font-satoshi-medium leading-6">{selected}</span>
          <button onClick={() => setExpanded(false)} className="w-4 h-4 hover:bg-gray-100 rounded-md ml-auto lg:ml-2">
            <Image src="/icons/caret-black.svg" alt="caret" width={16} height={16} className="rotate-180" />
          </button>
        </li>
        {values.map((value) => (
          <li
            key={value}
            className="text-heading text-lg leading-6 hover:text-button-primary cursor-pointer"
            onClick={() => {
              setSelected(value);
              setExpanded(false);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
