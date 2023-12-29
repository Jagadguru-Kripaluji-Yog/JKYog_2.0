import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { Play } from '../../icons';
import Link from 'next/link';

export const Description: FC = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <div>
        <h3 className="font-ptserif text-[32px] font-bold leading-10 mb-3">
          Join Us at Swamiji&apos;s Exclusive Event in Patan!
        </h3>
        <p className="text-primary text-lg leading-6 font-satoshi-regular">
          We invite you to an extraordinary event with Swamiji in Patan – an opportunity you won&apos;t want to miss!
          This event promises to be an enlightening and deeply spiritual experience, offering you a chance to get up
          close and personal with Swamiji, engage in profound discussions, and witness his inspiring teachings in
          action. Here&apos;s what you can expect:
        </p>
      </div>
      <div>
        <h4 className="font-ptserif font-bold text-2xl mb-3">Event Highlights:</h4>
        <ul className="list-disc ml-7">
          <li className="mb-4 text-primary text-lg leading-6 font-satoshi-regular">
            <span className="text-heading font-satoshi-medium">Lecture: </span>
            Swamiji will share his profound wisdom and insights during a captivating lecture. Prepare to be inspired and
            gain a deeper understanding of spiritual principles.
          </li>
          <li className="mb-4 text-primary text-lg leading-6 font-satoshi-regular">
            <span className="text-heading font-satoshi-medium">Book Signing: </span>
            Swamiji will be available for a book signing session. If you have any of his books or wish to acquire one,
            this is a fantastic opportunity to have it personally signed by the author.
          </li>
        </ul>
        <p className="text-primary text-lg leading-6 font-satoshi-regular">
          We look forward to welcoming you to this transformative event with Swamiji. Your presence will undoubtedly add
          to the collective energy of this spiritual gathering. Prepare to be inspired, and spiritually uplifted.
        </p>
      </div>
      <div className="relative">
        <Image src="/images/events-page/video1.png" alt="" width={670} height={400} className="" />
        <button className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 flex justify-center items-center gap-1.5 p-[18px] rounded-[100px] bg-button-primary hover:bg-orange-400">
          <Play />
        </button>
      </div>
      <div>
        <h4 className="font-ptserif font-bold text-2xl mb-3">What to expect:</h4>
        <p className="mb-4 text-primary text-lg leading-6 font-satoshi-regular">
          Join{' '}
          <Link href="/" className="text-button-primary hover:text-opacity-80 underline underline-offset-[4.5px]">
            Algorand Foundation
          </Link>{' '}
          in India for our inaugural, global Impact Summit. This two-day event will bring together policymakers,
          executives, investors, NGOs, entrepreneurs, and other thought leaders to explore and collaborate on the use of
          blockchain to solve the world’s most intractable challenges.
        </p>
        <ul>
          <ListItemNumered number={1}>
            <span className="w-fit">
              <span className="text-heading font-satoshi-medium">Lecture: </span>
              Swamiji will share his profound wisdom and insights during a captivating lecture. Prepare to be inspired
              and gain a deeper understanding of spiritual principles.
            </span>
          </ListItemNumered>
          <ListItemNumered number={2}>
            <span className="w-fit">
              <span className="text-heading font-satoshi-medium">Book Signing: </span>
              Swamiji will be available for a book signing session. If you have any of his books or wish to acquire one,
              this is a fantastic opportunity to have it personally signed by the author.
            </span>
          </ListItemNumered>
        </ul>
      </div>
      <Guidelines />
      <p className="text-primary text-lg leading-6 font-satoshi-regular">
        We invite you to an extraordinary event with Swamiji in Patan – an opportunity you won&apos;t want to miss!
      </p>
    </div>
  );
};

type ListItemNumered = {
  number: number;
  children?: ReactNode;
};

const ListItemNumered: FC<ListItemNumered> = ({ number, children }) => {
  return (
    <li className="flex gap-3 mb-4 text-primary text-lg leading-6 font-satoshi-regular">
      <div className="h-6 w-6 bg-button-primary bg-opacity-10  flex items-center justify-center text-button-primary text-xs font-ptserif font-bold rounded-full">
        {number}
      </div>
      {children}
    </li>
  );
};

const Guidelines: FC = () => {
  return (
    <div className="p-6 lg:p-12 bg-bg-secondary rounded-[20px]">
      <h4 className="text-heading text-2xl font-ptserif font-bold italic mb-3">COVID-19 Guidelines</h4>
      <p className="text-primary text-lg leading-6 font-satoshi-regular">
        Please make sure to verify any{' '}
        <Link
          href="/"
          className="text-[#F18B4B] hover:text-opacity-80 underline underline-offset-4 font-satoshi-medium"
        >
          COVID-19-related guidelines
        </Link>{' '}
        that may be in place closer to the event date, as circumstances can change. Enjoy your unique and meaningful
        experience at the event!
      </p>
    </div>
  );
};
