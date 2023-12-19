import type { Meta } from '@storybook/react';
import { Input, InputProps } from './input';

const Story: Meta<InputProps> = {
  component: Input,
  title: 'Input',
};
export default Story;

export const Primary = {
  args: {
    placeholder: 'Enter your E-mail address...',
  },
};
