import React from 'react';

const heading = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <p className="text-[#291900] text-center text-[44px] not-italic font-bold leading-[56px]">JKYog Initiatives</p>
      {/* buttons */}
      <div className="flex w-[1130px] justify-center items-center gap-4">
        <button className="flex items-center gap-2.5 px-6 py-2.5 rounded-[29px] border-[1.25px] border-solid border-[#EF6F1F] bg-[#ef6f1f] text-white text-xl not-italic font-medium leading-7">
          sometext
        </button>
        <button className="flex items-center gap-2.5 px-6 py-2.5 rounded-[29px] border-[1.25px] border-solid border-[#EF6F1F] bg-[#ef6f1f] text-white text-xl not-italic font-medium leading-7">
          sometext
        </button>
        <button className="flex items-center gap-2.5 px-6 py-2.5 rounded-[29px] border-[1.25px] border-solid border-[#EF6F1F] bg-[#ef6f1f] text-white text-xl not-italic font-medium leading-7">
          sometext
        </button>
        <button className="flex items-center gap-2.5 px-6 py-2.5 rounded-[29px] border-[1.25px] border-solid border-[#EF6F1F] bg-[#ef6f1f] text-white text-xl not-italic font-medium leading-7">
          sometext
        </button>
      </div>
    </div>
  );
};

export default heading;
