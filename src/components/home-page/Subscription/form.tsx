import { Button } from '@/src/lib/button/button';
import React, { FC } from 'react';

const Form: FC = () => {
  return (
    <div className="flex flex-col justify-center items-start pr-[116px] gap-10 flex-[1_0_0] self-stretch ">
      <div className="flex flex-col justify-center items-center gap-8 self-stretch">
        <h2 className="text-[#291900] mobile:text-[24px] text-[32px] not-italic font-bold font-ptserif leading-10">
          Receive Swamiji’s quote every day in your inbox
        </h2>
        <div className="flex flex-col items-center gap-4 self-stretch">
          <input
            type="text"
            className="flex items-start self-stretch px-5 py-3.5 rounded-[56px] border-[1.25px] border-solid border-[#DAD3C8] bg-transparent"
            placeholder="Full Name"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="flex items-start self-stretch px-5 py-3.5 rounded-[56px] border-[1.25px] border-solid border-[#DAD3C8] bg-transparent"
          />
        </div>
      </div>
      <Button href="/" text="Subscribe" variant="contained" color="primary" />
    </div>
  );
};

export default Form;
