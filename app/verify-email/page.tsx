'use client';
import React, { useState } from 'react';
import { AppleIcon, GoogleIcon, ThinArrowRight } from '../../src/components/icons';
import Link from 'next/link';
import { CloseIcon } from '@/src/components/icons/close';

const VerifyEmail = () => {
  return (
    <>
      <div className="absolute top-1/2 serif left-1/2 bg-[#FFFBF2] shadow z-50 rounded-lg transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex w-[900px] h-[596px] p-[56px] flex-col justify-center items-center gap-8 shrink-0">
          <div className="absolute right-6 top-6 border bg-section-bg rounded-full p-3 items-center flex cursor-pointer">
            <CloseIcon />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-center text-[40px] font-bold leading-8 text-heading">Verify your E-mail</div>

            <div className="text-primary font-[18px]  leading-6 w-[500px] text-center">
              {' '}
              Please, verify your E-mail address using the OTP (One Time Password) {'\n'} link sent to{' '}
              <span className="font-bold">melanie001brown@gmail.com</span>
            </div>
          </div>

          <div>
            <button className="bg-[#EF6F1F] flex justify-center border-border-color gap-[2px] rounded-3xl px-[16px] py-[10px]  text-white  ">
              Change E-mail address{' '}
            </button>
          </div>
          <div>
            <p className="text-primary text-base font-semibold leading-6">
              Already have an account?{' '}
              <span className="text-[#ef6f1f] text-base font-semibold leading-6 underline">
                <Link href={'/signin'}> Sign In </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
