import { Meta, StoryObj } from '@storybook/react';
import { EventList } from '.';
import { Badge } from '../badge/badge';
import { CalendarIcon } from '../icons';

export default {
  title: 'EventList',
  component: EventList,
  args: {
    data: [
      {
        heading: 'A Great Event Celebration',
        time: '2023-07-04',
        place: 'Dallas, TX',
        tags: [
          <Badge text="Private event" key="private-event" iconStart={CalendarIcon} />,
          <Badge text="Public event" key="public-event" iconStart={CalendarIcon} />,
        ],
      },
      {
        heading: 'A Private Event',
        time: '2023-07-04',
        place: 'Austin, TX',
        tags: ['Some plain text tags', 'Another plain text tag'],
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
