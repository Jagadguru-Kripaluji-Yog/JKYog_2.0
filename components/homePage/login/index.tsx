import React from "react"
import { signIn } from "next-auth/react"
import { Apple, Google, ArrowRight, Close } from "@/components/icons"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/Dialog"
const index = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="text-gray-700 border flex justify-center border-[#dad3c8] gap-[2px] rounded-3xl px-[16px] py-[10px] hover:text-orange cursor-pointer">
            login
          </div>
        </DialogTrigger>
        <DialogContent className="flex min-w-[900px] flex-col items-center gap-10 shrink-0 p-14 rounded-[20px]">
          <DialogHeader className="flex flex-col items-center gap-3">
            <DialogTitle className="self-stretch text-[#291900] text-center text-[40px] not-italic font-bold leading-[48px]">
              Login
            </DialogTitle>
            <DialogDescription className="self-stretch text-[#645743] text-lg not-italic font-normal leading-6">
              Create an account to keep track of JKYog Online classes and
              events.
            </DialogDescription>

            <DialogClose asChild>
              <div className="flex items-center gap-2.5 absolute p-3.5 rounded-[100px] right-6 top-6 cursor-pointer bg-[#fbe5c4]">
                <Close />
              </div>
            </DialogClose>
          </DialogHeader>
          {/* social */}
          <div className="flex w-[354px] flex-col items-start gap-4">
            <div className="flex hover:cursor-pointer items-center gap-3 self-stretch border pl-20 pr-10 py-2.5 rounded-[56px] border-solid border-[#DAD3C8]" onClick={()=>signIn("google")}>
              <div className="bg-white w-[32px] h-[32px] flex items-center justify-center rounded-full">
                <Google />
              </div>
              <p>Sign In with Google</p>
            </div>

            <div className="flex items-center gap-3 hover:cursor-pointer self-stretch border pl-20 pr-10 py-2.5 rounded-[56px] border-solid border-[#DAD3C8]">
              <div className="bg-black w-[32px] h-[32px] flex items-center justify-center rounded-full">
                <Apple />
              </div>
              <p>Sign In with Google</p>
            </div>

            <div className="flex justify-center items-center gap-3 self-stretch">
              <div className="w-[157px] h-[1px] bg-[#dad3c8]"></div>
              <p>or</p>
              <div className="w-[157px] h-[1px] bg-[#dad3c8]"></div>
            </div>
            {/* content */}
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
          <p className="text-[#645743] text-base not-italic font-normal leading-6">
            By clicking on Continue, you accept our{" "}
            <span className="text-[#EF6F1F] underline">Terms of Service</span>{" "}
            and <span className="text-[#EF6F1F] underline">Privacy Policy</span>
          </p>
          <p className="text-[#645743] text-base not-italic font-normal leading-6">
            Already have an account?{" "}
            <span className="text-[#EF6F1F] underline">Sign In</span>
          </p>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default index
