import { Meta, StoryObj } from '@storybook/react';
import { ComposedTabs } from './composed-tabs';

export default {
  title: 'Tabs',
  component: ComposedTabs,
} as Meta<typeof ComposedTabs>;

export const Composed: StoryObj<typeof ComposedTabs> = {
  args: {
    data: [
      { label: 'Tab 1', content: 'First Tab Content' },
      { label: 'Tab 2', content: 'Second Tab Content' },
      { label: 'Tab 3', content: 'Third Tab Content', disabled: true },
    ],
  },
};
