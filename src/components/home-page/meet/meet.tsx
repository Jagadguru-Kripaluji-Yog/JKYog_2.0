import React from "react";
import VStack from "./vStack";
import { Meet } from "@/src/components/icons";
const meet = () => {
    return (
        <div className="flex items-center justify-center bg-[#edf3e5] w-full flex-col  gap-10 self-stretch pt-[100px] pb-[120px] px-10 rounded-[40px]">
            {/* <div
        className="absolute h-auto w-full "
        style={{
          background: "#EDF3E5 ",
          opacity: "0.5",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <Meet />
      </div> */}
            <div className="z-50">
                <p className="text-[#291900] text-center text-[44px] not-italic font-bold leading-[56px] ">
                    Meet Swamiji
                </p>
                <VStack />
            </div>
        </div>
    );
};

export default meet;
