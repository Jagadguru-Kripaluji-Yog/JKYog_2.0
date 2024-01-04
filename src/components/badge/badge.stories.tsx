import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeProps } from './badge';
import { Calendar } from '../icons';

const Story: Meta<BadgeProps> = {
  component: Badge,
  title: 'Badge',
  argTypes: {
    src: { control: 'text' },
    text: { control: 'text' },
  },
};
export default Story;

export const Icon: StoryObj<BadgeProps> = {
  args: {
    iconStart: Calendar,
    text: 'November 9, 2023',
  },
};

export const NoIcon: StoryObj<BadgeProps> = {
  args: {
    text: 'November 9, 2023',
  },
};
