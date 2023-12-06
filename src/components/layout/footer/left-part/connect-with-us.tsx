import { FC } from 'react';
import {
  FacebookIcon,
  InstaIcon,
  LinkedInIcon,
  LiveConnect,
  Mentor,
  PintrestIcon,
  PracticalTool,
  TwitterIcon,
  WhatAppIcon,
  YoutubeIcon,
} from '../../../icons';
import Link from 'next/link';

const socialLinks = [
  {
    icon: <YoutubeIcon className="h-8 w-8" />,
    link: '/',
  },
  {
    icon: <FacebookIcon className="h-8 w-8" />,
    link: '/',
  },
  {
    icon: <TwitterIcon className="h-8 w-8 bg-[#EF6F1F] rounded-full p-2" />,
    link: '/',
  },
  {
    icon: <WhatAppIcon className="h-8 w-8" />,
    link: '/',
  },
  {
    icon: <LinkedInIcon className="h-8 w-8" />,
    link: '/',
  },
  {
    icon: <InstaIcon className="h-8 w-8" />,
    link: '/',
  },
  {
    icon: <PintrestIcon className="h-8 w-8" />,
    link: '/',
  },
];

export const ConnectWithUs: FC = () => (
  <div className="flex flex-col gap-3 bottom-5 mt-auto">
    <h2 className="text-heading text-xl font-ptserif font-bold leading-7">Connect with us:</h2>
    <div className="flex gap-3">
      {socialLinks.map(({ icon, link }, i) => (
        <Link key={i} href={link}>
          {icon}
        </Link>
      ))}
    </div>
  </div>
);
