import { FC, useState } from 'react';
import Image from 'next/image';

const values = ['All', 'India', 'USA'];

export const CountrySelect: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(values[1]);

  return (
    <div className="relative z-10">
      <div
        onClick={() => setExpanded(true)}
        className={`${expanded ? 'hidden' : 'flex items-center'} group border-l border-white ml-8 cursor-pointer`}
      >
        <span className="text-button-primary text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px]">
          {selected}
        </span>
        <button className="ml-2 group-hover:bg-gray-100 rounded-md ">
          <Image src="/icons/caret.svg" alt="caret" width={24} height={24} />
        </button>
      </div>
      <ul
        className={`${
          expanded ? 'flex' : 'hidden'
        } absolute top-0 flex-col p-5 gap-5 border border-border-primary rounded-3xl -mt-[21px] ml-3 bg-white`}
      >
        <li className="flex items-center cursor-pointer" onClick={() => setExpanded(false)}>
          <span className="text-button-primary text-[32px] lg:text-[44px] font-ptserif font-bold leading-10 lg:leading-[56px]">
            {selected}
          </span>
          <button onClick={() => setExpanded(false)} className="w-6 h-6 hover:bg-gray-100 rounded-md ml-2">
            <Image src="/icons/caret.svg" alt="caret" width={24} height={24} />
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
