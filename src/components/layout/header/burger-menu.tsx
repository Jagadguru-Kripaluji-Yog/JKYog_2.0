import { FC } from 'react';

export const Burger: FC = () => {
  return (
    <div className="lg:hidden p-3 space-y-1.5">
      <span className="block w-6 h-0.5 bg-[#645743] rounded"></span>
      <span className="block w-6 h-0.5 bg-[#645743] rounded"></span>
      <span className="block w-6 h-0.5 bg-[#645743] rounded"></span>
    </div>
  );
};
