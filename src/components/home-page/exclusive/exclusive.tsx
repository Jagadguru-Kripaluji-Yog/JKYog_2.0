import { Button } from '@/src/components/button/button';
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
    <section className="flex flex-col items-center gap-10 w-full pt-8 lg:pt-[100px] bg-section-bg rounded-t-[40px] bg-meet-section-bg">
      <div className="flex flex-col items-center gap-10 px-4">
        <div className="flex flex-col justify-start gap-3 items-center">
          <h3 className="text-center text-heading text-[32px] leading-10 lg:text-[44px] lg:leading-[56px] font-bold font-ptserif">
            Swami <br className="lg:hidden" /> Mukundananda <br className="lg:hidden" /> Exclusive
          </h3>
          <p className="max-w-[810px] text-center text-stone-600 text-lg font-satoshi-regular leading-normal">
            Swami Mukundananda Exclusive (SMex) is a community to provide knowledge, practical tools and tips addressing
            entire landscape of your life under 5 key themes.
          </p>
        </div>
        <Button type="link" href="/" text="Join SMEx" variant="contained" color="primary" />
      </div>
      <div className="px-4 h-[360px] grid grid-cols-[320px_320px_320px] lg:flex lg:justify-center lg:items-center gap-5 w-full overflow-auto no-scrollbar">
        {offers.map((offer) => (
          <Offer key={offer.src} {...offer} />
        ))}
      </div>
    </section>
  );
};

const Offer: FC<(typeof offers)[0]> = ({ src, text }) => {
  return (
    <div className="relative h-[352px] mt-auto">
      <div className="relative top-[5px] max-w-[363px] p-8 bg-white rounded-t-[20px] flex flex-col justify-start items-center gap-8">
        <Image src={src} alt="offer" width={186} height={186} className="h-[186px]" />
        <span className="text-center text-neutral-900 text-2xl font-bold font-ptserif">{text}</span>
      </div>
      <div className="w-[242px] lg:w-[284px] h-[12px] left-10 -top-[7px] absolute opacity-50 bg-white rounded-t-3xl" />
    </div>
  );
};
