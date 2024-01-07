import { Meta, StoryObj } from '@storybook/react';
import { EventCard } from '.';

export default {
  title: 'EventCard',
  component: EventCard,
} as Meta<typeof EventCard>;

export const StackedImageCard: StoryObj<typeof EventCard> = {
  args: {
    orientation: 'stacked',
    heading: 'Navratri Festival',
    place: 'Dallas, TX',
    media: {
      type: 'image',
      src: 'https://jipl-strapi-aws-s3-images-bucket.s3.amazonaws.com/Rectangle_1819_22fe786406.png',
      alt: 'img',
    },
  },
  render: (args) => (
    <div className="w-96 h-[500px]">
      <EventCard {...args} />
    </div>
  ),
};

export const LandscapeImageCard: StoryObj<typeof EventCard> = {
  args: {
    orientation: 'landscape',
    heading: 'Navratri Festival',
    place: 'Dallas, TX',
    media: {
      type: 'image',
      src: 'https://jipl-strapi-aws-s3-images-bucket.s3.amazonaws.com/Rectangle_1819_22fe786406.png',
      alt: 'img',
    },
  },
  render: (args) => (
    <div className="w-180 h-96">
      <EventCard {...args} />
    </div>
  ),
};
