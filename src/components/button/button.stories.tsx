import type { Meta } from '@storybook/react';
import { Button, ButtonProps, ButtonType } from './button';

const Story: Meta<ButtonProps<ButtonType>> = {
  component: Button,
  title: 'Button',
};
export default Story;

export const Primary = {
  args: {
    type: 'link',
    text: 'Click me!',
    variant: 'contained',
    color: 'primary',
  },
};

export const Outlined = {
  args: {
    type: 'link',
    text: 'Click me!',
    variant: 'outlined',
    color: 'primary',
  },
};
