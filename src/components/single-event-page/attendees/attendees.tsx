import { FC } from 'react';
import Image from 'next/image';
import { Heading } from '../../heading/heading';

export const Attendees: FC = () => {
  return (
    <section className="px-4 lg:px-10 py-8 lg:pt-[100px] lg:pb-[120px] bg-bg-secondary bg-meet-section-bg rounded-[40px]">
      <Heading title="Attendees" />
      <div className="flex justify-start xl:justify-center gap-5 mt-3 lg:mt-10 pt-3 overflow-auto no-scrollbar -mr-4 lg:mr-0 pr-4">
        {attendees.map((attendee, i) => (
          <AttendeeCard key={i} {...attendee} />
        ))}
        <AttendeeCardOther />
      </div>
    </section>
  );
};

const attendees = [
  {
    src: '/images/events-page/attendees/swami.png',
    name: 'Swami Mukundananda',
    organizer: true,
  },
  {
    src: '/images/events-page/attendees/moin.png',
    name: 'Moin',
  },
  {
    src: '/images/events-page/attendees/brijpal.png',
    name: 'Brijpal',
  },
];

const AttendeeCard: FC<(typeof attendees)[0]> = ({ src, name, organizer }) => {
  return (
    <div className="relative flex flex-col items-center min-w-[320px] lg:min-w-[308px] gap-6 p-8 border border-border-primary rounded-[20px] bg-white">
      {organizer && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-button-primary px-2 py-1 text-white text-xs font-ptserif font-bold">
          Organizer
        </div>
      )}
      <Image src={src} alt="person" width={120} height={120} />
      <span className="text-heading font-ptserif font-bold text-xl leading-6">{name}</span>
    </div>
  );
};

const AttendeeCardOther: FC = () => {
  return (
    <div className="flex items-center p-8 border border-border-primary rounded-[20px] bg-white min-w-[376px]">
      <Image src="/images/events-page/attendees/other.png" alt="other" width={120} height={120} />
      <Image src="/images/events-page/attendees/other1.png" alt="other" width={120} height={120} className="-ml-6" />
      <div className="relative -ml-6">
        <Image src="/images/events-page/attendees/other2.png" alt="other" width={120} height={120} />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-ptserif font-bold">
          +6
        </span>
      </div>
    </div>
  );
};
