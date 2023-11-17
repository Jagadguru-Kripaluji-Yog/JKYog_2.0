import React from "react"

const Mission = () => {
  return (
    <div className="flex flex-col items-center gap-10 self-stretch px-10 py-[100px] mobile:w-[375px]">
      {/* text */}
      <div className="flex w-full flex-col justify-center items-center gap-4">
        <p className="self-stretch text-[#291900] text-center text-[40px] not-italic font-bold leading-[48px]">
          Jagadguru Kripaluji Yog
        </p>
        <p className="text-[#645743] text-center self-stretch text-lg not-italic font-normal leading-6">
          JKYog (Jagadguru Kripaluji Yog) is a non-profit charitable
          organization established for the physical, mental, and spiritual
          well-being of all humankind. It disseminates authentic knowledge of
          Yoga for the body, mind, and soul. It serves the needy, promotes
          education for the rural youth and provides healthcare for the
          underprivileged.
        </p>
      </div>
      <button className="flex h-12 items-center gap-1 text-white text-center text-base not-italic font-bold leading-6 px-8 py-3.5 rounded-[100px] bg-[#ef6f1f]">
        About Us
      </button>
    </div>
  )
}

export default Mission
