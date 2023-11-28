import React from "react";
import { Meet } from "@/src/components/icons";
const Book = () => {
    return (
        <div className="flex w-[1440px] flex-col items-start gap-10 pt-[100px] pb-[88px] px-[155px]">
            <div className="flex self-stretch items-start gap-10 px-14 py-20 rounded-[20px] bg-[#fbe5c4]">
                {/* bg */}
                {/* <div className="absolute">
          <Meet className="w-[400px] h-[472px]" />
        </div> */}

                {/* text */}
                <div className="flex w-[500px] flex-col justify-center items-start gap-10">
                    <div className="flex flex-col justify-center items-start gap-3 self-stretch">
                        <p className="text-[#291900] text-[40px] not-italic font-bold leading-[48px] self-stretch">
                            Sankeertan Sudha
                        </p>
                        <p className="text-[#645743] text-base not-italic font-normal leading-6 self-stretch">
                            In this companion book to Sankeertan Madhuri, there
                            are over 100 bhajans to inspire contemplation and
                            devotion.
                        </p>
                    </div>
                    <button className="flex items-center gap-1 text-[color:var(--White,#FFF)] text-center text-base not-italic font-bold leading-6 px-8 py-3.5 rounded-[100px] bg-[#ef6f1f]">
                        Buy Now
                    </button>
                </div>
                {/* book */}
                <div className="absolute right-[200px] mt-[-200px] h-[452px]">
                    {/* cover */}
                    <div
                        className="inline-flex items-center w-[840.612px] h-[583.381px] rotate-[-30deg] bg-cover bg-no-repeat"
                        style={{ backgroundImage: "url('./book.png')" }}
                    ></div>
                    {/* quote1 */}
                    {/* <div className="inline-flex justify-center items-center gap-[3.927px] p-4bg-white">
            <p className="w-[207.721px] text-[#291900] text-xs not-italic font-medium leading-[130%]">
              Dhritarashtra said: O Sanjay, after gathering on the holy field of
              Kurukshetra, and desiring to fight, what did my sons and the sons
              of Pandu do?
            </p>
          </div> */}
                    {/* quote2 */}
                    {/* <div className="inline-flex justify-center items-center gap-[3.927px] shadow-[0px_5.89001px_15.70671px_0px_rgba(0,0,0,0.25)] p-4 rounded-2xl bg-white">
            <p className="w-[207.721px] text-[#291900] text-xs not-italic font-medium leading-[130%]">
              Dhritarashtra said: O Sanjay, after gathering on the holy field of
              Kurukshetra, and desiring to fight, what did my sons and the sons
              of Pandu do?
            </p>
          </div> */}
                </div>
            </div>
        </div>
    );
};

export default Book;
