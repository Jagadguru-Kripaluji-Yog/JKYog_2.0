import { SVGIconProps } from '@/src/types/icons';
import * as icons from '.';
import { Meta } from '@storybook/react';
export default {
  title: 'Icons',
  subcomponents: icons,
  args: {
    variant: 'default',
    width: 100,
    height: 100,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'primary-dark', 'light-brown', 'default'],
      control: { type: 'radio' },
    },
  },
} as Meta<SVGIconProps>;
export { ArrowRight } from '.';
export { ArrowDown } from '.';
export { Meet } from '.';
export { Location } from '.';
export { Calendar } from '.';
export { Play } from '.';
export { Facebook } from './social/facebook';
export { Instagram } from './social/instagram';
export { Linkdin } from './social/linkdin';
export { Pintrest } from './social/pintrest';
export { X } from './social/x';
export { Youtube } from './social/youtube';
export { GoogleIcon } from './google';
export { CloseIcon } from './close';
export { FacebookIcon } from './facebook';
export { InstaIcon } from './insta';
export { LinkedInIcon } from './linkedin';
export { PintrestIcon } from './pintrest';
export { TwitterIcon } from './twitter';
export { WhatAppIcon } from './whatapp';
export { YoutubeIcon } from './youtube';
export { ThinArrowRight } from './thinArrowRight';
export { PracticalTool } from './practicalTool';
export { LiveConnect } from './liveConnect';
export { Mentor } from './mentor';
export { Apple } from './apple';
