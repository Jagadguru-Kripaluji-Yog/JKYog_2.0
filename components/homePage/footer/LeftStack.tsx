import React from "react"
import {
  ArrowRight,
  Instagram,
  Facebook,
  Linkdin,
  Pintrest,
  X,
  Youtube,
} from "@/components/icons"
const LeftStack = () => {
  return (
    <div className="flex  w-[346px] flex-col justify-between items-start self-stretch">
      {/* form */}
      <div className="flex flex-col items-start gap-14">
        <img
          src="./logo.png"
          alt=""
          className="flex items-start gap-[9.687px]"
        />
        <div className="flex flex-col mt-8 gap-4">
          <h1 className="leading-8 lg:text-[28px] text-[20px] text-[#291900] font-bold   ">
            Subscribe to Our Newsletter
          </h1>
          <div className="flex w-[346px] flex-col  gap-3.5">
            <div className="flex w-[346px] justify-between items-center pl-5 pr-2 py-2 rounded-[56px] border-[1.25px] border-solid border-[#DAD3C8] bg-transparent">
              <input
                type="text"
                placeholder="enter your email address"
                className="bg-transparent"
              />
              <div className="flex flex-end items-center gap-2.5 p-3 rounded-[100px] bg-[#ef6f1f]">
                <ArrowRight className="h-4 w-4 fill-white" />
              </div>
            </div>
          </div>
        </div>
        {/* connect with us */}
        <div className="flex flex-col items-start gap-4 self-stretch">
          <p className="text-[#291900] text-xl not-italic font-bold leading-7">
            Connect With Us
          </p>
          <div className="flex items-start gap-3">
            <Instagram className="w-8 h-8" />
            <Facebook className="w-8 h-8" />
            <Linkdin className="w-8 h-8" />
            <Pintrest className="w-8 h-8" />
            {/* <X /> */}
            <Youtube className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftStack
