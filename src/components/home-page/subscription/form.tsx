import { Button } from '@/src/lib/button/button';
import React, { FC } from 'react';

const Form: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start xl:pr-[116px] gap-8 flex-[1_0_0] self-stretch ">
      <div className="flex flex-col justify-center items-center gap-6 self-stretch">
        <h2 className="text-center lg:text-left text-heading text-[24px] lg:text-[32px] font-bold font-ptserif leading-8 lg:leading-10">
          Receive Swamiji’s quote every day in your inbox
        </h2>
        <div className="flex flex-col items-center gap-4 self-stretch">
          <input
            type="text"
            className="flex items-start self-stretch px-5 py-3.5 rounded-[56px] border-[1.25px] border-solid border-border-color bg-transparent focus-visible:outline-orange-500"
            placeholder="Full Name"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="flex items-start self-stretch px-5 py-3.5 rounded-[56px] border-[1.25px] border-solid border-border-color bg-transparent focus-visible:outline-orange-500"
          />
        </div>
      </div>
      <Button href="/" text="Subscribe" variant="contained" color="primary" />
    </div>
  );
};

export default Form;
