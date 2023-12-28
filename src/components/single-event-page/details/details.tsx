import { FC } from 'react';
import { Badge } from '../../badge/badge';
import Image from 'next/image';
import { Button } from '../../button/button';
import { FacebookIcon, LinkedInIcon, TwitterIcon, WhatAppIcon } from '../../icons';
import Link from 'next/link';

export const Details: FC = () => {
  return (
    <div className="flex flex-col gap-6 p-10 border border-border-primary rounded-[20px] h-fit shadow-light">
      <div className="flex flex-col gap-3">
        <Badge variant="secondary" text="10 Remaining" />
        <h4 className="text-heading text-2xl font-ptserif font-bold">Registration Details:</h4>
      </div>
      <Image src="/images/events-page/map.png" alt="map" width={387} height={240} className="rounded-2xl" />
      <InfoBlock info={info} />
      <Button type="link" href="/" variant="contained" color="primary" text="Register" full classes="mt-2" />
      <Socials />
    </div>
  );
};

const info = [
  {
    src: '/icons/location.svg',
    text: 'Shree Ambaji Mandir Ambaji Neliyu, Patan-Chanasma Road, Patan - 384365',
  },
  {
    src: '/icons/calendar.svg',
    text: '1 Dec - 2 Dec 2023, 6:00 PM - 8:00 PM',
  },
  {
    src: '/icons/dollar.svg',
    text: 'USD 200',
  },
  {
    src: '/icons/email.svg',
    text: 'hello@jkyog.com',
  },
  {
    src: '/icons/phone.svg',
    text: '(425) 610-7427',
  },
];

type InfoBlockProps = {
  info: {
    src: string;
    text: string;
  }[];
};

const InfoBlock: FC<InfoBlockProps> = ({ info }) => {
  return (
    <div className="flex flex-col gap-5">
      {info.map(({ src, text }) => (
        <div key={text} className="flex gap-2 items-start">
          <Image src={src} alt="icon" width={24} height={24} />
          <span className="text-heading text-base font-satoshi-medium">{text}</span>
        </div>
      ))}
    </div>
  );
};

const socials = [
  {
    icon: <FacebookIcon className="h-12 w-12 lg:h-8 lg:w-8" />,
    link: '/',
  },
  {
    icon: (
      <TwitterIcon className="h-12 w-12 lg:h-8 lg:w-8 bg-button-primary hover:bg-button-primary/[.8]  rounded-full p-2" />
    ),
    link: '/',
  },
  {
    icon: <WhatAppIcon className="h-12 w-12 lg:h-8 lg:w-8" />,
    link: '/',
  },
  {
    icon: <LinkedInIcon className="h-12 w-12 lg:h-8 lg:w-8" />,
    link: '/',
  },
];

const Socials: FC = () => {
  return (
    <div className="mt-4">
      <h5 className="text-heading text-lg leading-6 font-ptserif font-bold mb-4">Share this event:</h5>
      <div className="flex gap-3">
        {socials.map(({ icon, link }, i) => (
          <Link key={i} href={link}>
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
