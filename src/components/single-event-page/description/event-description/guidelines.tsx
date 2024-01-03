import Link from 'next/link';
import { FC } from 'react';

export const Guidelines: FC = () => {
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
