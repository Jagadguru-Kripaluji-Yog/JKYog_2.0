import { Meta, StoryObj } from '@storybook/react';
import { EventList } from '.';

export default {
  title: 'EventList',
  component: EventList,
  args: {
    data: [
      {
        heading: 'A Great Event Celebration',
        time: '2023-07-04',
        place: 'Dallas, TX',
        tags: ['Private event', 'Live interaction'],
      },
      {
        heading: 'A Private Event',
        time: '2023-07-04',
        place: 'Austin, TX',
        tags: ['Private event'],
      },
      {
        heading: 'A New Celebration',
        time: '2023-07-04',
        place: 'Dallas, TX',
      },
    ],
  },
} as Meta<typeof EventList>;

export const EventInfoList: StoryObj<typeof EventList> = {};
