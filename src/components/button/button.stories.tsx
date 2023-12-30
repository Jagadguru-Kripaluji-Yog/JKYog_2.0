import type { Meta } from '@storybook/react';
import { Button } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  args: {
    href: '',
  },
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

export const ButtonType = {
  args: {
    type: 'button',
    text: 'I am a button!',
    variant: 'outlined',
    color: 'primary',
  },
};
