import React from 'react';

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 flex-[1_0_0] self-stretch px-12 py-16 rounded-[20px] bg-[#fff3dd]">
      <div className="flex flex-col justify-center items-center gap-8 self-stretch">
        <p className="text-[#291900] text-center mobile:text-[24px] text-[32px] not-italic font-bold leading-10">
          Receive Swamiji’s quote every day in your inbox
        </p>
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
      <button className="flex justify-center items-center gap-1.5 px-8 py-3.5 rounded-[100px] bg-[#ef6f1f] text-white">
        Subscribe
      </button>
    </div>
  );
};

export default Form;
