import { SVGIconProps } from '@/src/types/icons';
import * as icons from '.';
import { Meta } from '@storybook/react';
export default {
  title: 'Icons',
  subcomponents: icons,
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'primary', 'secondary', 'primary-dark', 'light-brown'],
      control: { type: 'radio' },
    },
    width: { control: { type: 'range', min: 10, max: 2000, step: 10 } },
    height: { control: { type: 'range', min: 10, max: 2000, step: 10 } },
  },
} as Meta<SVGIconProps>;
export { ArrowRightIcon } from '.';
export { ArrowDownIcon } from '.';
export { LocationIcon } from '.';
export { CalendarIcon } from '.';
export { GooglePlayIcon } from '.';
export { FacebookIcon } from '.';
export { GoogleIcon } from '.';
export { CloseIcon } from '.';
export { InstagramIcon } from '.';
export { LinkedInIcon } from './linkedin';
export { PintrestIcon } from './pintrest';
export { TwitterIcon } from './twitter';
export { WhatsAppIcon } from './whatsapp';
export { YoutubeIcon } from './youtube';
export { PracticalToolIcon } from './practical-tool';
export { LiveConnectIcon } from './live-connect';
export { MentorIcon } from './mentor';
export { AppleIcon } from './apple';
