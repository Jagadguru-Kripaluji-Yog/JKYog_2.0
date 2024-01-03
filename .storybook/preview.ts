import '../src/styles/globals.scss';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'grey',
          value: '#808080',
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
