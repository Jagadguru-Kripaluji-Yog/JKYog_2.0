'use client';

import { FC, useState } from 'react';
import { Badge } from '../../badge/badge';
import Image from 'next/image';
import { Button } from '../../button/button';
import { FacebookIcon, LinkedInIcon, TwitterIcon, WhatAppIcon } from '../../icons';
import Link from 'next/link';

const isBottom = () => {
  const details = document.getElementById('details');
  const footer = document.getElementsByTagName('footer')[0];

  const rect1 = details!.getBoundingClientRect();
  const rect2 = footer.getBoundingClientRect();

  return !(
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right
  );
};

export const Details: FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id="details"
      className={`
            ${expanded ? 'translate-y-0' : 'translate-y-[77%]'} lg:translate-y-0  fixed bottom-0 
            bg-white -mx-4 lg:mx-[unset] w-full z-40 lg:static order-first lg:order-none 
            flex flex-col p-6 pb-8 lg:p-10
            border border-border-primary rounded-t-[20px] rounded-b-none lg:rounded-[20px]  
            h-fit shadow-light duration-300
    `}
    >
      <div className="flex flex-col gap-3">
        <Badge variant="secondary" text="10 Remaining" />
        <div className="flex flex-col" onClick={() => setExpanded(!expanded)}>
          <div className="flex justify-between">
            <h4 className="text-heading text-2xl font-ptserif font-bold">Registration Details:</h4>
            <Image
              src="/icons/caret-black.svg"
              alt=""
              width={24}
              height={24}
              className={`lg:hidden ${expanded ? 'rotate-180' : ''}`}
            />
          </div>
          {!expanded && (
            <Button
              type="link"
              href="/"
              variant="contained"
              color="primary"
              text="Register"
              full
              classes="mt-6 lg:hidden"
            />
          )}
        </div>
      </div>
      <div className={`flex flex-col gap-5 lg:gap-6 mt-5 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>
        <Image src="/images/events-page/map.png" alt="map" width={387} height={240} className="rounded-2xl" />
        <InfoBlock info={info} />
        <Button type="link" href="/" variant="contained" color="primary" text="Register" full classes="lg:mt-2" />
        <Socials />
      </div>
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
    <div className="flex flex-col gap-4 lg:gap-5">
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
