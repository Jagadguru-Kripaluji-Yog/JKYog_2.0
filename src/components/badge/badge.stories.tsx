import type { Meta } from '@storybook/react';
import { Badge, BadgeProps } from './badge';

const Story: Meta<BadgeProps> = {
  component: Badge,
  title: 'Badge',
  argTypes: {
    src: { control: 'text' },
    text: { control: 'text' },
  },
};
export default Story;

export const Primary = {
  args: {
    src: '/icons/calendar.svg',
    text: 'November 9, 2023',
  },
};

export const NoIcon = {
  args: {
    text: 'November 9, 2023',
  },
};
