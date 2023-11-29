import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

const Story: Meta<ButtonProps> = {
  component: Button,
  title: 'Button',
};
export default Story;

export const Primary = {
  args: {
    text: 'Click me!',
    variant: 'contained',
    color: 'primary',
  },
};
