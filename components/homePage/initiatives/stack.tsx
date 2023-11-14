import React from "react"
import { Play } from "@/components/icons"
const stack = () => {
  return (
    <div className="flex items-start gap-5 self-stretch">
      {/* card */}
      <div className="flex w-[785px] items-start gap-5 pl-3 pr-6 py-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]">
        {/* video */}
        <div
          className="w-[368px] shrink-0 self-stretch bg-cover bg-no-repeat rounded-2xl"
          style={{ backgroundImage: "url('./vid.jpeg')" }}
        ></div>
        {/* text */}
        <div className="flex flex-col items-start gap-10 flex-[1_0_0] px-0 py-3">
          {/* text */}
          <div className="flex flex-col justify-center items-start gap-3 self-stretch">
            <p className="text-[#291900] text-[32px] not-italic font-bold leading-10 self-stretch">
              Welcome to Bhagavad Gita
            </p>
            <p className="text-[#645743] self-stretch text-lg not-italic font-normal leading-6">
              Bhagavad Gita is one of the most revered scriptures! Grasp the
              wisdom embedded in this precious jewel. Watch verse by verse
              shloka and translation followed by full commentary written by
              Swami Mukundananda.
            </p>
          </div>
          <button className="flex justify-center items-center gap-1.5 p-[18px] rounded-[100px] bg-[#ef6f1f]">
            <Play />
          </button>
        </div>
      </div>

      {/* card */}
      <div className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch pl-6 pr-3 pt-6 pb-3 rounded-[20px] border-[1.25px] border-solid border-[#F0EBE1]">
        <p className="text-[#291900] text-[32px] not-italic font-bold leading-10 self-stretch">
          some text
        </p>
        {/* play */}
        <div className="flex items-start self-stretch">
          {/* video */}
          <div
            className="w-40 h-40 rounded-2xl bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('./vid2.jpeg')" }}
          ></div>
          <div className="flex items-end gap-2.5 flex-[1_0_0] self-stretch pl-5 pr-0 pt-0 pb-3">
            <button className="flex justify-center items-center gap-1.5 p-[18px] rounded-[100px] bg-[#ef6f1f]">
              <Play />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default stack
