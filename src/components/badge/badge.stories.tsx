import type { Meta, StoryObj } from '@storybook/react';
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

export const Primary: StoryObj<BadgeProps> = {
  args: {
    src: '/icons/calendar.svg',
    text: 'November 9, 2023',
  },
};

export const NoIcon: StoryObj<BadgeProps> = {
  args: {
    text: 'November 9, 2023',
  },
};
