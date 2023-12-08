import { Button } from '@/src/lib/button/button';
import Image from 'next/image';
import { FC } from 'react';

const offers = [
  {
    src: '/images/offer-1.png',
    text: 'Assimilate Practical Tools and Techniques',
  },
  {
    src: '/images/offer-2.png',
    text: 'Regular Live Connect With Swamiji',
  },
  {
    src: '/images/offer-3.png',
    text: 'Choose Swamiji to be your Mentor',
  },
];

export const Exclusive: FC = () => {
  return (
    <section className="flex flex-col items-center gap-10 w-full pt-[100px] bg-section-bg rounded-t-[40px] bg-meet-section-bg">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col justify-start gap-3 items-center">
          <h2 className="text-center text-lime-950 text-[44px] font-bold font-ptserif leading-[56px]">
            Swami Mukundananda Exclusive
          </h2>
          <p className="max-w-[810px] text-center text-stone-600 text-lg font-satoshi-regular leading-normal">
            Swami Mukundananda Exclusive (SMex) is a community to provide knowledge, practical tools and tips addressing
            entire landscape of your life under 5 key themes.
          </p>
        </div>
        <Button href="/" text="Join SMEx" variant="contained" color="primary" />
      </div>
      <div className="flex justify-center items-center gap-5 w-full">
        {offers.map((offer) => (
          <Offer key={offer.src} {...offer} />
        ))}
      </div>
    </section>
  );
};

const Offer: FC<(typeof offers)[0]> = ({ src, text }) => {
  return (
    <div className="relative h-[351.56px]">
      <div className="relative top-[5px] max-w-[363px] p-8 bg-white rounded-t-[20px] flex flex-col justify-start items-center gap-8">
        <Image src={src} alt="offer" width={186} height={186} className="h-[186px]" />
        <span className="text-center text-neutral-900 text-2xl font-bold font-ptserif">{text}</span>
      </div>
      <div className="w-[284px] h-[12px] left-10 -top-[7px] absolute opacity-50 bg-white rounded-t-3xl" />
    </div>
  );
};
