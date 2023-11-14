import React from "react"
import LeftStack from "./LeftStack"
import RightStack from "./RightStack"

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6 pt-16 pb-8 px-10 bg-[#fffbf2]">
      {/* content */}
      <div className="flex justify-between items-start self-stretch">
        <LeftStack />
        <RightStack />
      </div>
      {/* vector */}
      <div className="h-[1.5px] bg-[#dad3c8] w-full"></div>
      {/* stack */}
      <div className="flex justify-between items-center self-stretch">
        <p className="text-[#645743] text-base not-italic font-normal leading-6 opacity-50">
          © Copyright 2020 JKYog. All Rights Reserved.
        </p>
        <div className="flex items-start gap-12">
          <p className="text-[#645743] text-base not-italic font-normal leading-6 opacity-50">
            Privacy Policy
          </p>
          <p className="text-[#645743] text-base not-italic font-normal leading-6 opacity-50">
            Terms of Service
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
