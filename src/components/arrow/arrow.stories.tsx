import type { Meta } from '@storybook/react';
import { Arrow, ArrowProps } from './arrow';

const Story: Meta<ArrowProps> = {
  component: Arrow,
  title: 'Arrow',
};
export default Story;

export const Left = {
  args: {
    direction: 'left',
  },
};

export const Right = {
  args: {
    direction: 'right',
  },
};

export const TopLeft = {
  args: {
    direction: 'topLeft',
  },
};
