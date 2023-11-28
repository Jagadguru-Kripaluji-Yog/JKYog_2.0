'use client';
import React, { useState } from 'react';
import { AppleIcon, GoogleIcon, ThinArrowRight } from '../../src/components/icons';
import Link from 'next/link';
import { CloseIcon } from '@/src/components/icons/close';

const SignUp = () => {
  return (
    <>
      <div className="absolute top-1/2 serif left-1/2 bg-[#FFFBF2] shadow z-50 rounded-lg transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex w-[900px] h-[596px] p-[56px] flex-col items-center gap-8 shrink-0">
          <div className="absolute right-6 top-6 border bg-[#fbe5c4] rounded-full p-3 items-center flex cursor-pointer">
            <CloseIcon />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-center text-[40px] font-bold leading-8 text-[#291900]">Sign In</div>

            <div className="text-[#645743] font-[18px]  leading-6">
              {' '}
              Log In to keep track of JKYog Online classes and events.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 self-stretch py-[10px] pl-[80px] pr-[40px] border border-[#dad3c8]  rounded-full">
              <span className="rounded-full flex justify-center items-center p-[7px] border border-[#f0ebe1] bg-white">
                <GoogleIcon />
              </span>
              Continue with Google
            </div>
            <div className="flex items-center gap-3 self-stretch py-[10px] pl-[80px] pr-[40px] border border-[#dad3c8]  rounded-full">
              <span className="rounded-full flex justify-center items-center p-[7px] border border-[#f0ebe1] bg-black">
                <AppleIcon />{' '}
              </span>
              Continue with Apple
            </div>
            <div className="flex justify-center items-center gap-3  self-stretch">
              <svg xmlns="http://www.w3.org/2000/svg" width="158" height="2" viewBox="0 0 158 2" fill="none">
                <path d="M1 1H157" stroke="#DAD3C8" strokeLinecap="round" />
              </svg>
              Or
              <svg xmlns="http://www.w3.org/2000/svg" width="158" height="2" viewBox="0 0 158 2" fill="none">
                <path d="M1 1H157" stroke="#DAD3C8" strokeLinecap="round" />
              </svg>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Enter your E-mail address..."
                className="flex w-full text-sm items-center p-4 pl-5 focus:none outline-none rounded-full border-[#dad3c8] border"
              />
              <span className="p-3 absolute  right-2 rounded-full top-[5px]  items-center gap-[10px] bg-[#ef6f1f]">
                <ThinArrowRight className=" text-white " />
              </span>
            </div>
          </div>

          <div>
            <p className="text-[#645743] text-base leading-6">
              By clicking on Continue, you accept our{' '}
              <span className="text-[#ef6f1f] text-base font-semibold leading-6 underline">Terms of Service</span> and{' '}
              <span className="text-[#ef6f1f] text-base font-semibold leading-6 underline">Privacy Policy</span>
            </p>
          </div>
          <div>
            <p className="text-[#645743] text-base font-semibold leading-6">
              New to JKYog?{' '}
              <span className="text-[#ef6f1f] text-base font-semibold leading-6 underline">
                <Link href={'/signup'}> Sign Up </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
