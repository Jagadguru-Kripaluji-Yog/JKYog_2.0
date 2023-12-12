'use client';

import Image from 'next/image';
import { FC, useContext, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ModalContext } from '@/src/context/modal/modal-context';

export const Modal: FC = () => {
  const supabase = createClientComponentClient();
  const { open, handleModalOpen } = useContext(ModalContext);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [open]);

  if (!open) {
    return <></>;
  }

  return (
    <div className="flex absolute top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-40">
      <div className="relative flex flex-col justify-start items-center m-auto w-[900px] p-14 bg-modal-bg rounded-[20px] gap-10">
        <div
          onClick={() => handleModalOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 p-3.5 bg-[#FBE5C4]/[.4] hover:bg-[#FBE5C4]/[.5] rounded-[100px] cursor-pointer"
        >
          <Image src="/icons/close.svg" alt="close" width={20} height={20} />
        </div>
        <div className="flex flex-col justify-start items-center gap-3 ">
          <h2 className="text-center text-heading text-[40px] font-bold font-ptserif leading-[48px]">Sign Up</h2>
          <span className="text-primary text-lg font-satoshi-regular leading-normal">
            Create an account to keep track of JKYog Online classes and events.
          </span>
        </div>
        <div className="w-[354px]">
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google', 'apple']} />
        </div>

        <div>
          <span className="text-stone-600 text-base font-normal font-['Satoshi Variable'] leading-normal">
            By clicking on Continue, you accept our
          </span>
          <span className="text-stone-600 text-lg font-normal font-['Satoshi Variable'] leading-normal"> </span>
          <span className="text-orange-500 text-base font-medium font-['Satoshi Variable'] underline leading-normal">
            Terms of Service
          </span>
          <span className="text-stone-600 text-lg font-normal font-['Satoshi Variable'] leading-normal"> </span>
          <span className="text-stone-600 text-base font-normal font-['Satoshi Variable'] leading-normal">and</span>
          <span className="text-stone-600 text-lg font-normal font-['Satoshi Variable'] leading-normal"> </span>
          <span className="text-orange-500 text-base font-medium font-['Satoshi Variable'] underline leading-normal">
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};
