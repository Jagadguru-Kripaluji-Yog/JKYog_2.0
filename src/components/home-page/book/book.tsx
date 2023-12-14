import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/src/lib/button/button';

const Book: FC = () => {
  return (
    <section className="flex max-w-[1440px] mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] justify-items-center gap-8 lg:gap-0 h-[555px] lg:h-[unset] max-w-[1130px] lg:px-14 mx-auto lg:mt-[100px] lg:mb-[88px] rounded-[20px] bg-section-bg bg-book-section-bg">
        <div className="flex flex-col justify-start lg:justify-center items-start px-4 lg:px-0 gap-8 lg:gap-10 pt-12 lg:py-20">
          <div className="flex flex-col justify-center items-start gap-3">
            <h2 className="text-heading text-center lg:text-left text-[32px] leading-10 lg:text-[40px] lg:leading-[48px] font-ptserif font-bold  w-full">
              Sankeertan Sudha
            </h2>
            <p className="text-primary text-center lg:text-left text-base font-satoshi-regular font-normal leading-6">
              In this companion book to Sankeertan Madhuri, there are over 100 bhajans to inspire contemplation and
              devotion.
            </p>
          </div>
          <Button href="/" text="Buy Now" variant="contained" color="primary" />
        </div>
        <Image src="/images/book-mobile.png" alt="book-mobile" width={375} height={267} className="lg:hidden mt-auto" />
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/images/book.png"
            alt="book"
            width={438}
            height={424}
            className="absolute right-[69px] bottom-0 w-[438px] h-[424px]"
          />
          <div className="absolute bottom-[83px] left-[31px] inline-flex justify-center items-center p-4 bg-white rounded-2xl shadow-[0px_5.89001px_15.70671px_0px_rgba(0,0,0,0.25)]">
            <p className="w-[208px] text-heading text-xs font-medium leading-[130%]">
              Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight,
              what did my sons and the sons of Pandu do?
            </p>
          </div>
          <div className="absolute bottom-[28px] right-[43px]  inline-flex justify-center items-center p-4 rounded-2xl bg-white shadow-[0px_5.89001px_15.70671px_0px_rgba(0,0,0,0.25)]">
            <p className="w-[208px] text-heading text-xs font-medium leading-[130%]">
              Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight,
              what did my sons and the sons of Pandu do?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
