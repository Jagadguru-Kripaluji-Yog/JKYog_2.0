import { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

export default {
  component: Heading,
  title: 'Heading',
} as Meta<typeof Heading>;

export const Default: StoryObj<typeof Heading> = {
  args: {
    title: 'I am a <h2 /> tag',
  },
};
