import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/src/lib/button/button';

const Book: FC = () => {
  return (
    <section className="flex max-w-[1440px] gap-10">
      <div className="grid grid-cols-[500px_524px] items-stretch gap-10 px-14 mx-auto mt-[100px] mb-[88px] max-w-[1130px] rounded-[20px] bg-[#fbe5c4] bg-book-section-bg">
        <div className="flex flex-col justify-center items-start gap-10 py-20">
          <div className="flex flex-col justify-center items-start gap-3 self-stretch">
            <h2 className="text-heading text-[40px] font-ptserif font-bold leading-[48px] self-stretch">
              Sankeertan Sudha
            </h2>
            <p className="text-primary text-base font-satoshi-regular font-normal leading-6 self-stretch">
              In this companion book to Sankeertan Madhuri, there are over 100 bhajans to inspire contemplation and
              devotion.
            </p>
          </div>
          <Button href="/" text="Buy Now" variant="contained" color="primary" />
        </div>
        <div className="relative">
          <Image
            src="/images/book.png"
            alt="book"
            width={438}
            height={424}
            className="absolute right-[69px] bottom-0 w-[438px] h-[424px]"
          />
          <div className="absolute bottom-[83px] left-[31px] inline-flex justify-center items-center gap-[3.927px] p-4 bg-white rounded-2xl">
            <p className="w-[207.721px] text-heading text-xs not-italic font-medium leading-[130%]">
              Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight,
              what did my sons and the sons of Pandu do?
            </p>
          </div>
          <div className="absolute bottom-[28px] right-[43px] inline-flex justify-center items-center gap-[3.927px] shadow-[0px_5.89001px_15.70671px_0px_rgba(0,0,0,0.25)] p-4 rounded-2xl bg-white">
            <p className="w-[207.721px] text-heading text-xs not-italic font-medium leading-[130%]">
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
